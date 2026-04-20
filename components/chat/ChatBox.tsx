"use client";

import { useEffect, useRef, useState } from "react";
import { getChatReply } from "@/lib/chat/chatService";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

type Step = "service" | "choose_service" | "timeline" | "email" | "done";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<Step>("service");

  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const isSendingRef = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef("");
  const lastSendRef = useRef(0);

  const [lead, setLead] = useState({
    // id: crypto.randomUUID(),
    id: `LD-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    service: "",
    timeline: "",
    email: "",
  });

  // =========================
  // SCROLL
  // =========================
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // =========================
  // GREETING
  // =========================
  useEffect(() => {
    const loadGreeting = async () => {
      try {
        const res = await fetch("/api/greeting");
        const data = await res.json();

        addMessage("assistant", data.reply);
      } catch {
        addMessage("assistant", "Hi 👋 How can we help you today?");
      }
    };

    loadGreeting();
  }, []);

  // =========================
  // HELPERS
  // =========================
  const addMessage = (role: "assistant" | "user", content: string) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  // const postLead = async (data: any) => {
  //   await fetch("/api/lead", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  // };

  // =========================
  // FLOW HANDLERS
  // =========================

  const handleTimeline = async (value: string) => {
    // addMessage("user", value);

    const updated = {
      ...lead,
      timeline: value,
      createdAt: new Date().toISOString(),
    };
    setLead(updated);

    // await postLead(updated);
    await new Promise((r) => setTimeout(r, 400));

    addMessage(
      "assistant",
      "Got it 👍\n\nTo suggest the right setup, could you share your email?",
    );

    setStep("email");
  };

  // const handleEmail = async (value: string) => {
  //   const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  //   if (!isValidEmail) {
  //     addMessage("assistant", "Please enter a valid email 👍");
  //     return;
  //   }

  //   const updated = { ...lead, email: value };
  //   setLead(updated);

  //   await postLead(updated);

  //   addMessage("assistant", "Perfect 👍 Our team will reach out shortly.");

  //   setStep("done");
  // };

  const handleAI = async (userMessage: string) => {
    setIsTyping(false);
    setTimeout(() => setIsTyping(true), 50);

    const reply = await getChatReply(messages, userMessage);

    setIsTyping(false);

    addMessage("assistant", reply);
  };

  // =========================
  // MAIN SEND
  // =========================
  const sendMessage = async () => {
    // console.log("STEP:", step);
    // console.log("LOCK:", isSendingRef.current);
    // console.log("REF:", inputRef.current);

    const now = Date.now();
    if (now - lastSendRef.current < 300) return; // anti double
    lastSendRef.current = now;

    const message = inputRef.current.trim(); // snapshot sync
    // chặn spam / double
    if (!message || isSendingRef.current) return;

    isSendingRef.current = true;
    setIsSubmitting(true);

    // clear ngay (cả ref + UI)
    inputRef.current = "";
    setInput("");

    addMessage("user", message);

    try {
      // ========================
      // TIMELINE
      // ========================
      // if (step === "timeline") {
      //   const updated = { ...lead, timeline: message };
      //   setLead(updated);

      //   addMessage(
      //     "assistant",
      //     "Got it 👍\n\nTo suggest the right setup, could you share your email?",
      //   );

      //   setStep("email");
      //   return;
      // }

      // ========================
      // EMAIL
      // ========================
      if (step === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message);

        if (!isValidEmail) {
          addMessage("assistant", "Please enter a valid email 👍");
          return;
        }

        const updated = {
          ...lead,
          email: message,
          status: "new",
          createdAt: new Date().toISOString(),
        };
        setLead(updated);

        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updated),
        });

        await new Promise((r) => setTimeout(r, 400));

        setIsTyping(true);
        await new Promise((r) => setTimeout(r, 600));

        addMessage(
          "assistant",
          "Perfect, Thanks for sharing that. Our team will reach out shortly. Feel free to close this chat — we’ve got everything we need 🙌",
        );

        setIsTyping(false);
        setStep("done");
        return;
      }

      // ========================
      // AI (n8n)
      // ========================
      if (step === "service") {
        setIsTyping(true);

        const updatedMessages: ChatMessage[] = [
          ...messages,
          { role: "user", content: message },
        ];

        const reply = await getChatReply(updatedMessages, message);

        setIsTyping(false);

        addMessage("assistant", reply);
        return;
      }

      // ========================
      // FALLBACK
      // ========================
      addMessage("assistant", "Please choose an option below 👇");
    } catch (err) {
      addMessage("assistant", "Something went wrong 😅");
    } finally {
      isSendingRef.current = false;
      setIsSubmitting(false);
    }
  };

  // =========================
  // QUICK ACTIONS
  // =========================
  const handleClient = () => {
    addMessage("user", "Get support for my business");
    addMessage("assistant", "Great 👍 What do you need help with?");
    setStep("choose_service");
  };

  const handleCandidate = () => {
    addMessage("user", "Join your team");
    addMessage(
      "assistant",
      "Nice 🙌\n\n👉 Apply here:\nhttps://www.staffunitedgroup.com/join",
    );
    setStep("done");
  };

  // const selectService = async (value: string) => {
  //   if (isTyping) return;

  //   setIsTyping(true);

  //   addMessage("user", value);

  //   const updated = { ...lead, service: value, createdAt: Date.now() };
  //   setLead(updated);

  //   await postLead(updated);

  //   await new Promise((r) => setTimeout(r, 500));

  //   addMessage("assistant", "Nice 👍 When do you need this?");
  //   setStep("timeline");

  //   setIsTyping(false);
  // };

  const selectService = async (value: string) => {
    // addMessage("user", value);

    // setIsTyping(false);
    // setTimeout(() => setIsTyping(true), 50);

    // const updated = {
    //   ...lead,
    //   service: value,
    //   createdAt: new Date().toISOString(),
    // };
    // setLead(updated);

    // // await postLead(updated);

    // await new Promise((r) => setTimeout(r, 500));

    // addMessage("assistant", "Nice 👍 When do you need this?");
    // setStep("timeline");

    // setIsTyping(false);

    addMessage("user", value);

    setIsTyping(true);

    const updated = {
      ...lead,
      service: value,
      createdAt: new Date().toISOString(),
    };
    setLead(updated);

    await new Promise((r) => setTimeout(r, 500));

    addMessage("assistant", "Nice 👍 When do you need this?");
    setStep("timeline");

    setIsTyping(false);
  };

  // const selectTimeline = (value: string) => {
  //   addMessage("user", value);
  //   handleTimeline(value);
  // };

  const selectTimeline = async (value: string) => {
    // addMessage("user", value);

    // setIsTyping(false);
    // setTimeout(() => setIsTyping(true), 50);

    // await handleTimeline(value);

    // setIsTyping(false);

    addMessage("user", value);

    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 400));

    await handleTimeline(value);

    setIsTyping(false);
  };

  const renderMessage = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // =========================
  // UI
  // =========================
  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-[#0a1b33] text-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed bottom-0 right-0 w-full sm:w-80 sm:bottom-4 sm:right-4 
  bg-white shadow-2xl rounded-2xl p-4 border border-gray-100
  transform transition-all duration-300 ease-out
  ${
    isOpen
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0 pointer-events-none"
  }`}
        >
          {/* <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Staff United Support</span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black transition text-lg"
            >
              ✕
            </button>
          </div> */}

          <div className="flex items-center justify-between mb-3 pb-2 border-b">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">
                  Staff United Support
                </span>
                <span className="text-xs text-gray-400">
                  Typically replies in a few minutes
                </span>
              </div>
            </div>

            {/* <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-black transition text-lg"
            >
              ✕
            </button> */}

            <button
              onClick={() => {
                setIsOpen(false);

                // 🔥 reset toàn bộ
                setMessages([]);
                setStep("service");
                setInput("");
                inputRef.current = "";
                setIsTyping(false);

                setLead({
                  // id: crypto.randomUUID(),
                  id: `LD-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
                  service: "",
                  timeline: "",
                  email: "",
                });
              }}
              className="text-gray-400 hover:text-black transition text-lg"
            >
              ✕
            </button>
          </div>

          {/* CHAT */}
          <div className="h-[60vh] sm:h-64 overflow-y-auto space-y-3 text-sm px-1 scroll-smooth">
            <div className="flex flex-col gap-3">
              {messages.map((m, i) => (
                // <div
                //   key={i}
                //   className={`p-3 rounded-2xl text-[14px] leading-relaxed ${
                //     m.role === "assistant"
                //       ? "bg-[#f4f7fb]"
                //       : "bg-black text-white text-right"
                //   }`}
                // >
                //   {renderMessage(m.content)}
                // </div>

                <div
                  key={i}
                  className={`max-w-[80%] p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    m.role === "assistant"
                      ? "bg-[#f4f7fb] text-black self-start"
                      : "bg-[#0a1b33] text-white self-end ml-auto"
                  }`}
                >
                  {renderMessage(m.content)}
                </div>
              ))}
            </div>

            {isTyping && (
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* FLOW BUTTONS */}
          {step === "service" && (
            <div className="mt-2 space-y-2">
              <button
                onClick={handleClient}
                className="w-full p-3 rounded-xl bg-[#0a1b33] text-white hover:opacity-90 transition"
              >
                Get support for my business
              </button>
              <button
                onClick={handleCandidate}
                className="w-full border p-2 rounded-lg hover:opacity-90 transition"
              >
                Join our team
              </button>
            </div>
          )}

          {step === "choose_service" && (
            <div className="mt-2 space-y-2">
              <button
                onClick={() => selectService("Customer support")}
                disabled={false}
                className="w-full border p-2 rounded-lg disabled:opacity-50"
              >
                Customer support
              </button>
              <button
                onClick={() => selectService("Content")}
                disabled={false}
                className="w-full border p-2 rounded-lg disabled:opacity-50"
              >
                Content
              </button>
              <button
                onClick={() => selectService("Web development")}
                disabled={false}
                className="w-full border p-2 rounded-lg disabled:opacity-50"
              >
                Web development
              </button>
            </div>
          )}

          {step === "timeline" && (
            <div className="mt-2 space-y-2">
              <button
                onClick={() => selectTimeline("ASAP")}
                className="w-full border p-2 rounded-lg"
              >
                ASAP
              </button>
              <button
                onClick={() => selectTimeline("1 week")}
                className="w-full border p-2 rounded-lg"
              >
                1 week
              </button>
              <button
                onClick={() => selectTimeline("2-4 weeks")}
                className="w-full border p-2 rounded-lg"
              >
                2–4 weeks
              </button>
              <button
                onClick={() => selectTimeline("1-3 months")}
                className="w-full border p-2 rounded-lg"
              >
                1-3 months
              </button>
              <button
                onClick={() => selectTimeline("not sure yet")}
                className="w-full border p-2 rounded-lg"
              >
                Not sure yet
              </button>
            </div>
          )}

          {/* INPUT */}
          {step === "email" && (
            <div className="mt-2 flex gap-2">
              <input
                type="email"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  inputRef.current = e.target.value; // nhớ giữ dòng này
                }}
                disabled={isSubmitting}
                placeholder="Enter your email..."
                className="flex-1 border rounded-lg px-3 py-3 text-base"
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    sendMessage();
                  }
                }}
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={isSubmitting}
                className="bg-black p-3 text-white px-3 rounded-lg disabled:opacity-50"
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

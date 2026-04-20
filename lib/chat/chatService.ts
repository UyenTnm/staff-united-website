// import { Message } from "postcss";
import { CHAT_FLOW } from "./chatFlow";
import { detectIntent } from "./detectIntent";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

export async function getChatReply(
  messages: ChatMessage[],
  input: string,
): Promise<string> {
  const intent = detectIntent(input);

  // candidate → trả luôn
  if (intent === "candidate") {
    return CHAT_FLOW.candidate.message;
  }

  const fallbackReply = `Got it 👍

We can support you with a flexible or dedicated team depending on your needs.

Would you like to:
- talk to our team
- or get a proposal?`;

  // 🔥 gọi n8n
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();
    return data.reply;
  } catch (err) {
    console.error("n8n failed:", err);
    return fallbackReply;
  }
}

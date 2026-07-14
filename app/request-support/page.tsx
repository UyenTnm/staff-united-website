"use client";

import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import TimezoneSelect from "react-timezone-select";
import "react-phone-input-2/lib/style.css";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/lib/supabase";
import VoiceRecorder from "@/components/forms/VoiceRecorder";
import Link from "next/link";

export default function RequestSupportPage() {
  const [success, setSuccess] = useState(false);

  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [description, setDescription] = useState("");

  const [recordingTime, setRecordingTime] = useState(0);

  const [phone, setPhone] = useState("");
  const [timezone, setTimezone] = useState<string | undefined>(undefined);

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [supportType, setSupportType] = useState("");
  const [website, setWebsite] = useState("");
  const [suggestedTools, setSuggestedTools] = useState<string[]>([]);

  const [hoursOption, setHoursOption] = useState("");
  const [customHours, setCustomHours] = useState("");

  // const [highlightServices, setHighlightServices] = useState(false);

  // const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const uploadVoice = async (blob: Blob) => {
    const fileName = `voice-${Date.now()}.webm`;

    const { error } = await supabase.storage
      .from("candidate-files")
      .upload(`client-voice/${fileName}`, blob);

    if (error) {
      console.error("SUPABASE VOICE ERROR:", error);
      throw error;
    }

    const { data } = supabase.storage
      .from("candidate-files")
      .getPublicUrl(`client-voice/${fileName}`);

    return data.publicUrl;
  };

  const validate = (data: any) => {
    const newErrors: any = {};

    const firstName = (data.first_name || "").toString().trim();
    const lastName = (data.last_name || "").toString().trim();
    const email = (data.work_email || "").toString().trim();
    const company_name = (data.company_name || "").toString().trim();

    const description = (data.description || "").toString().trim();
    const startDate = data.start_timeline;

    if (!firstName) newErrors.first_name = "First name is required.";
    if (!lastName) newErrors.last_name = "Last name is required.";
    if (!company_name) newErrors.company_name = "Company name is required.";

    if (!email) {
      newErrors.work_email = "Work email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.work_email = "Enter a valid email address.";
    }

    if (!phone || phone.length < 8) {
      newErrors.phone = "Enter a valid phone number.";
    }

    // if (!hoursOption) {
    //   newErrors.hours_per_week_option = "Please select weekly capacity.";
    // }

    // if (!startDate) {
    //   newErrors.start_timeline = "Please select a start date.";
    // }
    // if (!data.support_type) {
    //   newErrors.support_type = "Please select a support type.";
    // }

    if (!description && !audioBlob) {
      newErrors.description =
        "Please provide a written description or record a voice note.";
    }

    return newErrors;
  };

  const inputStyle = (field: string) =>
    `w-full border rounded px-3 py-2 ${
      errors[field] ? "border-red-500" : "border-[#d1d5db]"
    }`;

  return (
    <>
      <main className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                  Request Support
                </p>

                <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight leading-tight mb-12">
                  Request Support Your Way
                </h1>

                {/* 2 CTA */}
                {/* Decision Cards */}
                <div className="grid md:grid-cols-2 gap-5 mt-8 max-w-5xl mx-auto">
                  {/* LEFT */}
                  <div className="bg-[#06172D] border border-slate-200 rounded-3xl p-8 text-left flex flex-col">
                    <p className="text-[#7FB4F0] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                      Not Sure Yet
                    </p>

                    <h2
                      className="
    text-xl md:text-3xl
    font-bold
    text-white
    leading-tight

    min-h-[65px]
    mb-4

    flex items-start
  "
                    >
                      Client Fast Track
                    </h2>

                    <p className="text-white/70 text-base leading-relaxed flex-1 mb-8">
                      Need a quicker way to get started? Submit basic details
                      with a short description or voice note in under 5 minutes,
                      and we’ll take it from there.
                    </p>

                    <Link
                      href="/client-fast-track"
                      target="_blank"
                      className="
inline-flex
items-center
justify-center
h-12
px-6
rounded-xl
bg-[#4F8DC9]
text-white
text-base
font-medium
hover:bg-[#6EA8DE]
transition-all
duration-300
"
                    >
                      Client Fast Track →
                    </Link>
                  </div>

                  {/* RIGHT */}
                  <div className="bg-[#4f8dc9] border border-slate-200 rounded-3xl p-8 text-left flex flex-col">
                    <p className="text-[#06172D] font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                      I Know What I Need
                    </p>

                    <h2
                      className="
    text-xl md:text-3xl
    font-bold
    text-[#ffffff]
    leading-tight

    min-h-[65px]
    mb-4

    flex items-start
  "
                    >
                      Client Quotation Intake
                    </h2>

                    <p className="text-white/70 text-base leading-relaxed flex-1 mb-8">
                      Already know what you need? Share your scope and key
                      details so we can prepare an accurate quote and support
                      plan.
                    </p>

                    <Link
                      href="/choose-your-service"
                      target="_blank"
                      className="
inline-flex
items-center
justify-center
h-12
px-6
rounded-xl
bg-[#06172D]
text-white
text-base
font-medium
hover:bg-[#0A2547]
transition-all
duration-300
"
                    >
                      Choose a Service →
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SERVICE SELECTOR */}
        {/* {showServices && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500">
            <section id="service-selector" className="pb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
                  <a
                    href="/services/strategic-operations#service-form"
                    className={`
    group
    bg-white
    border
    rounded-3xl
    p-6
    text-center
    hover:-translate-y-2
    hover:shadow-xl
    transition-all
    duration-500

    ${
      highlightServices
        ? "border-[#4f8fcb] ring-4 ring-[#4f8fcb]/20 scale-105"
        : ""
    }
  `}
                  >
                    <div className="text-4xl mb-4">⚙️</div>
                    <h3 className="font-bold text-secondary">
                      Strategic Operations
                    </h3>
                  </a>

                  <a
                    href="/services/accounting-legal#service-form"
                    className={`
    group
    bg-white
    border
    rounded-3xl
    p-6
    text-center
    hover:-translate-y-2
    hover:shadow-xl
    transition-all
    duration-500

    ${
      highlightServices
        ? "border-[#4f8fcb] ring-4 ring-[#4f8fcb]/20 scale-105"
        : ""
    }
  `}
                  >
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="font-bold text-secondary">
                      Accounting & Legal
                    </h3>
                  </a>

                  <a
                    href="/services/targeted-sales#service-form"
                    className={`
    group
    bg-white
    border
    rounded-3xl
    p-6
    text-center
    hover:-translate-y-2
    hover:shadow-xl
    transition-all
    duration-500

    ${
      highlightServices
        ? "border-[#4f8fcb] ring-4 ring-[#4f8fcb]/20 scale-105"
        : ""
    }
  `}
                  >
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="font-bold text-secondary">Targeted Sales</h3>
                  </a>

                  <a
                    href="/services/focused-marketing#service-form"
                    className={`
    group
    bg-white
    border
    rounded-3xl
    p-6
    text-center
    hover:-translate-y-2
    hover:shadow-xl
    transition-all
    duration-500

    ${
      highlightServices
        ? "border-[#4f8fcb] ring-4 ring-[#4f8fcb]/20 scale-105"
        : ""
    }
  `}
                  >
                    <div className="text-4xl mb-4">📣</div>
                    <h3 className="font-bold text-secondary">
                      Focused Marketing
                    </h3>
                  </a>

                  <a
                    href="/services/future-expansion#service-form"
                    className={`
    group
    bg-white
    border
    rounded-3xl
    p-6
    text-center
    hover:-translate-y-2
    hover:shadow-xl
    transition-all
    duration-500

    ${
      highlightServices
        ? "border-[#4f8fcb] ring-4 ring-[#4f8fcb]/20 scale-105"
        : ""
    }
  `}
                  >
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="font-bold text-secondary">
                      Future Expansion
                    </h3>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )} */}

        {/* ================= SUCCESS MODAL ================= */}
        {/* {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary">✓</span>
              </div>

              <h2 className="text-xl font-semibold text-secondary mb-3">
                Request Submitted Successfully
              </h2>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                Thank you for reaching out. Our team will review your request
                and follow up shortly.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2.5 bg-secondary text-white rounded-lg font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )} */}
      </main>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import TimezoneSelect from "react-timezone-select";
import "react-phone-input-2/lib/style.css";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/lib/supabase";
import VoiceRecorder from "@/components/forms/VoiceRecorder";

export default function ClientFastTrackForm() {
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

  const [highlightServices, setHighlightServices] = useState(false);

  const [showServices, setShowServices] = useState(false);

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
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero */}
        <section className="pt-28 md:pt-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                  Request Support
                </p>

                <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight leading-tight mb-4">
                  Client Fast Track
                </h1>
                <p className="text-foreground/70 leading-relaxed">
                  Complete the form below and our team will prepare a tailored
                  recommendation based on your needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SERVICE SELECTOR */}
        {showServices && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500">
            <section id="service-selector" className="pb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <div id="service-selector" className="h-1"></div> */}
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
        )}

        {/* ================= MAIN CONTENT ================= */}
        <section className="pb-20">
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          <div className="flex justify-center">
            {/* == FORM CARD == */}
            <div className="w-full max-w-4xl">
              <div
                id="client-fast-track-form"
                className="bg-white border border-muted rounded-2xl p-6 md:p-8 shadow-sm"
              >
                {/* Form Header */}
                {/* <div className="mb-8">
                    <p className="text-foreground/70 leading-relaxed">
                      Complete the form below and our team will prepare a
                      tailored recommendation based on your needs.
                    </p>
                  </div> */}

                {/* SUCCESS ALERT (optional inline alert before modal) */}
                {success && (
                  <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200">
                    <p className="text-green-800 font-semibold">
                      Thank you for your submission!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      Our team will review your request and contact you shortly.
                    </p>
                  </div>
                )}

                {/* ====== FORM ===== */}

                <form
                  noValidate
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (isSubmitting) return;

                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);

                    const data = Object.fromEntries(formData.entries());
                    const validationErrors = validate(data);

                    if (Object.keys(validationErrors).length > 0) {
                      setErrors(validationErrors);
                      return;
                    }

                    setErrors({});
                    setIsSubmitting(true);

                    try {
                      let voiceUrl = "";

                      if (audioBlob) {
                        voiceUrl = await uploadVoice(audioBlob);
                      }

                      formData.set("phone", phone || "");
                      formData.set("voice_url", voiceUrl);
                      console.log(
                        "VOICE URL IN FORM:",
                        formData.get("voice_url"),
                      );

                      formData.set("time_zone", timezone || "");

                      console.log("FORM DATA");
                      for (const [key, value] of formData.entries()) {
                        console.log(key, value);
                      }

                      const body = new URLSearchParams();

                      formData.forEach((value, key) => {
                        if (key !== "tools_used") {
                          body.append(key, String(value));
                        }
                      });

                      formData.getAll("tools_used").forEach((tool) => {
                        body.append("tools_used", tool as string);
                      });

                      const res = await fetch(
                        "https://script.google.com/macros/s/AKfycbyd5_GxRni9GZ9eE9zsWadiyircFP1T9bQeenQjW_U5srABhWg-2we3Kb5xtHe_w4cO/exec",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                          },
                          body,
                        },
                      );

                      const text = await res.text();

                      let json;
                      try {
                        json = JSON.parse(text);
                      } catch {
                        throw new Error("Invalid response from server");
                      }

                      if (json.success) {
                        // Track lead conversion in Google Analytics
                        (window as any).gtag?.("event", "generate_lead", {
                          form_name: "request_support_full",
                        });

                        setSuccess(true);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });

                        form.reset();
                        setAudioBlob(null);
                        setAudioUrl("");
                        setDescription("");
                        setRecordingTime(0);
                        setPhone("");
                        setHoursOption("");
                        setCustomHours("");
                      } else {
                        alert("Submit failed: " + json.error);
                      }
                    } catch (error) {
                      console.error("Submit error:", error);
                      alert("Something went wrong!");
                    }

                    setIsSubmitting(false);
                  }}
                  className="space-y-8"
                >
                  {/* CONTACT INFO */}
                  <section className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0b1b33]">
                        Contact Information
                      </h3>
                      <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="first_name"
                          placeholder="First Name *"
                          className={inputStyle("first_name")}
                        />
                        {errors.first_name && (
                          <p className="text-red-500 text-sm">
                            {errors.first_name}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          name="last_name"
                          placeholder="Last Name *"
                          className={inputStyle("last_name")}
                        />
                        {errors.last_name && (
                          <p className="text-red-500 text-sm">
                            {errors.last_name}
                          </p>
                        )}
                      </div>
                    </div>

                    <input
                      name="company_name"
                      placeholder="Company Name *"
                      required
                      className={`
    w-full
    border
    rounded
    px-3
    py-2
    ${errors.company_name ? "border-red-500 bg-red-50" : "border-[#d1d5db]"}
  `}
                    />

                    {errors.company_name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.company_name}
                      </p>
                    )}

                    <input
                      name="work_email"
                      required
                      type="email"
                      placeholder="Work Email *"
                      className="w-full border border-[#d1d5db] rounded px-3 py-2"
                    />
                    {errors.work_email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.work_email}
                      </p>
                    )}

                    {/* PHONE */}
                    <div>
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={setPhone}
                        enableSearch
                        inputClass="!w-full !border !border-[#d1d5db] !rounded !py-2"
                        containerClass="w-full"
                      />
                      <input type="hidden" name="phone" value={phone} />
                    </div>

                    {/* WEBSITE + AUTO DETECT */}
                    <input
                      name="website"
                      value={website}
                      onChange={(e) => {
                        const value = e.target.value;
                        setWebsite(value);

                        if (value.includes("shopify")) {
                          setSuggestedTools(["Shopify"]);
                        } else if (value.includes("wordpress")) {
                          setSuggestedTools(["WordPress"]);
                        } else if (value.includes("webflow")) {
                          setSuggestedTools(["Webflow"]);
                        } else {
                          setSuggestedTools([]);
                        }
                      }}
                      placeholder="Company Website (e.g. https://staffunitedgroup.com)"
                      className="w-full border border-[#d1d5db] rounded px-3 py-2"
                    />

                    {suggestedTools.length > 0 && (
                      <div className="text-sm text-[#4f8fcb]">
                        Detected possible platform: {suggestedTools.join(", ")}
                      </div>
                    )}
                  </section>

                  {/* CONSENT */}
                  {/* SUPPORT DETAILS */}
                  <section className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#0b1b33]">
                      Support Details
                    </h3>

                    <div className="relative">
                      <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                        placeholder="Tell us what support your business needs *"
                        className={`
    w-full
    border
    rounded-xl
    px-4
    py-3
    pr-16
    resize-none
    ${errors.description ? "border-red-500" : "border-[#d1d5db]"}
  `}
                      />

                      <VoiceRecorder
                        onRecordingReady={(blob, previewUrl) => {
                          setAudioBlob(blob);
                          setAudioUrl(previewUrl);
                        }}
                      />
                    </div>
                    {errors.description && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.description}
                      </p>
                    )}

                    {/* Select Weekly capacity */}
                    <div className="space-y-4 pt-4">
                      <h3 className="text-lg font-semibold text-[#0b1b33]">
                        Additional Details
                      </h3>
                      <div className="w-10 h-[2px] bg-[#4f8fcb] rounded-full"></div>
                    </div>

                    {/* TIMEZONE */}
                    <div className="relative z-50">
                      {timezone && (
                        <TimezoneSelect
                          value={timezone}
                          onChange={(tz) => setTimezone(tz.value)}
                          displayValue="GMT"
                          menuPortalTarget={
                            typeof window !== "undefined"
                              ? document.body
                              : undefined
                          }
                          styles={{
                            menuPortal: (base) => ({
                              ...base,
                              zIndex: 9999,
                            }),
                          }}
                        />
                      )}

                      <input
                        type="hidden"
                        name="time_zone"
                        value={timezone ?? ""}
                      />
                    </div>

                    {/* TOOLS DYNAMIC */}
                    {supportType && (
                      <div className="space-y-3">
                        <p className="font-semibold text-[#0b1b33]">
                          Tools your team currently uses
                        </p>

                        <div className="grid md:grid-cols-2 gap-2 text-sm text-[#0b1b33]/80">
                          {(supportType === "Creative" ||
                            supportType === "Both") && (
                            <>
                              {[
                                "Canva",
                                "Adobe Photoshop",
                                "Adobe Illustrator",
                                "Adobe Premiere Pro",
                                "After Effects",
                                "CapCut",
                                "Final Cut Pro",
                                "Figma",
                                "WordPress",
                                "Webflow",
                                "Shopify",
                              ].map((tool) => (
                                <label
                                  key={tool}
                                  className="flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    name="tools_used"
                                    value={tool}
                                  />
                                  {tool}
                                </label>
                              ))}
                            </>
                          )}

                          {(supportType === "Administration" ||
                            supportType === "Both") && (
                            <>
                              {[
                                "Notion",
                                "ClickUp",
                                "Asana",
                                "HubSpot",
                                "Salesforce",
                                "Google Workspace",
                                "Slack",
                              ].map((tool) => (
                                <label
                                  key={tool}
                                  className="flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    name="tools_used"
                                    value={tool}
                                  />
                                  {tool}
                                </label>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CREATIVE EXTRA */}
                    {supportType === "Creative" && (
                      <select
                        name="content_frequency"
                        className="w-full border border-[#d1d5db] rounded px-3 py-2"
                      >
                        <option value="">Content Publishing Frequency</option>
                        <option>Daily</option>
                        <option>3–5 times per week</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Not sure</option>
                      </select>
                    )}

                    {/* ADMIN EXTRA */}
                    {supportType === "Administration" && (
                      <select
                        name="workflow_complexity"
                        className="w-full border border-[#d1d5db] rounded px-3 py-2"
                      >
                        <option value="">Workflow Complexity</option>
                        <option>Simple</option>
                        <option>Moderate</option>
                        <option>Complex</option>
                        <option>Not sure</option>
                      </select>
                    )}

                    <input
                      name="portfolio_link"
                      placeholder="Optional: Link to reference files / drive"
                      className="w-full border border-[#d1d5db] rounded px-3 py-2"
                    />
                  </section>

                  {/* CONSENT */}
                  <section>
                    <label className="flex items-start gap-3 text-sm leading-relaxed text-[#0b1b33]/90 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        name="consent"
                        className="mt-[2px] w-4 h-4 accent-[#4f8fcb] shrink-0"
                      />

                      <span>
                        I consent to having my information reviewed for support
                        purposes.
                      </span>
                    </label>
                  </section>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
    relative
    overflow-hidden
    w-full
    py-3.5
    rounded-xl
    bg-primary
    text-white
    font-semibold
    transition-all
    duration-300

    hover:bg-[#0b1b33]
    hover:text-white
    hover:shadow-[0_12px_30px_rgba(11,27,51,0.25)]
    hover:-translate-y-0.5

    active:scale-[0.98]

    focus:outline-none
    focus:ring-2
    focus:ring-primary/40
    focus:ring-offset-2

    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:translate-y-0
  "
                  >
                    {/* Shine Effect */}
                    <span
                      className="
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/25
      to-transparent
      hover:translate-x-full
      transition-transform
      duration-1000
      ease-in-out
    "
                    />

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </span>
                  </button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Your information will only be used to review your request
                    and contact you regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>

        {/* ================= SUCCESS MODAL ================= */}
        {success && (
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
        )}
      </main>
    </>
  );
}

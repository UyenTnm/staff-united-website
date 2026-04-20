"use client";

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import TimezoneSelect from "react-timezone-select";
import "react-phone-input-2/lib/style.css";
import AnimatedSection from "@/components/AnimatedSection";

export default function RequestSupportPage() {
  const [success, setSuccess] = useState(false);

  const [phone, setPhone] = useState("");
  const [timezone, setTimezone] = useState<string | undefined>(undefined);

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [supportType, setSupportType] = useState("");
  const [website, setWebsite] = useState("");
  const [suggestedTools, setSuggestedTools] = useState<string[]>([]);

  const [hoursOption, setHoursOption] = useState("");
  const [customHours, setCustomHours] = useState("");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);
  }, []);

  const validate = (data: any) => {
    const newErrors: any = {};

    const firstName = (data.first_name || "").toString().trim();
    const lastName = (data.last_name || "").toString().trim();
    const email = (data.work_email || "").toString().trim();
    const description = (data.description || "").toString().trim();
    const startDate = data.start_timeline;

    if (!firstName) newErrors.first_name = "First name is required.";
    if (!lastName) newErrors.last_name = "Last name is required.";

    if (!email) {
      newErrors.work_email = "Work email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.work_email = "Enter a valid email address.";
    }

    if (!phone || phone.length < 8) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!startDate) {
      newErrors.start_timeline = "Please select a start date.";
    }

    if (!description) {
      newErrors.description = "Please describe your needs.";
    }

    return newErrors;
  };

  const inputStyle = (field: string) =>
    `w-full border rounded px-3 py-2 ${
      errors[field] ? "border-red-500" : "border-[#d1d5db]"
    }`;

  return (
    <main className="min-h-screen bg-[#f2f4f7]">
      <div className="max-w-4xl mx-auto px-6 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-16 space-y-16">
        {/* Intro */}
        <AnimatedSection direction="up" delay={0}>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl text-[#4f8dc9] font-light">
              Request Support
            </h1>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>

            <p className="text-lg md:text-xl text-[#0b1b33]/70 leading-relaxed">
              Tell us what you need and we’ll recommend the right setup.
              Dedicated team members or flexible support — under one shared
              standard.
            </p>
          </div>
        </AnimatedSection>

        <form
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
              formData.set("phone", phone || "");
              formData.set("support_type", supportType);
              formData.set("hours_per_week_option", hoursOption);
              formData.set("custom_hours", customHours || "");
              formData.set("time_zone", timezone || "");

              const body = new URLSearchParams();

              // field thường
              formData.forEach((value, key) => {
                if (key !== "tools_used") {
                  body.append(key, String(value));
                }
              });

              // checkbox multiple
              formData.getAll("tools_used").forEach((tool) => {
                body.append("tools_used", tool as string);
              });

              // CALL API
              const res = await fetch(
                "https://script.google.com/macros/s/AKfycbwI8nKDpaqTb3-VYAS0bebFPe1NIGpsMBDFp5dlExxITxrGkNfn2h_lBDHIZFJfoRhd/exec",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body,
                },
              );

              // DEBUG
              const text = await res.text();
              console.log("RESPONSE:", text);

              let json;
              try {
                json = JSON.parse(text);
              } catch {
                throw new Error("Invalid response from server");
              }

              // SUCCESS
              if (json.success) {
                setSuccess(true);

                window.scrollTo({ top: 0, behavior: "smooth" });

                form.reset();
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
          className="bg-white border border-[#d1d5db] rounded-lg p-6 space-y-8"
        >
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/request-support?success=true"
          />

          {/* CONTACT INFO */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#0b1b33]">
                Contact Information
              </h3>
              <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="first_name"
                placeholder="First Name"
                className={inputStyle("first_name")}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm">{errors.first_name}</p>
              )}
              <input
                name="last_name"
                placeholder="Last Name"
                className={inputStyle("last_name")}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm">{errors.last_name}</p>
              )}
            </div>

            <input
              name="company_name"
              required
              placeholder="Company Name"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <input
              name="work_email"
              required
              type="email"
              placeholder="Work Email"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

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
              placeholder="Company Website (e.g. https://yourcompany.com)"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            {suggestedTools.length > 0 && (
              <div className="text-sm text-[#4f8fcb]">
                Detected possible platform: {suggestedTools.join(", ")}
              </div>
            )}
          </section>

          {/* SUPPORT DETAILS */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0b1b33]">
              Support Details
            </h3>
            <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
            <select
              name="support_type"
              value={supportType}
              onChange={(e) => setSupportType(e.target.value)}
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
              required
            >
              <option value="">Support Type</option>
              <option value="Creative">Creative</option>
              <option value="Administration">Administration</option>
              <option value="Both">Both</option>
            </select>

            <select
              name="engagement_model"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            >
              <option value="">Engagement Model</option>
              <option>Dedicated</option>
              <option>Flexible</option>
              <option>Not sure</option>
            </select>

            <textarea
              name="description"
              rows={4}
              placeholder="Briefly describe the type of support you need..."
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-semibold text-[#0b1b33]">
                Preferred Start Date
              </h3>
              <div className="w-10 h-[2px] bg-[#4f8fcb] rounded-full"></div>

              <input
                type="date"
                name="start_timeline"
                min={new Date().toISOString().split("T")[0]}
                className="w-full border border-[#d1d5db] rounded px-3 py-2 text-[#0b1b33]"
              />
            </div>

            {/* <input
                name="hours_per_week"
                placeholder="Estimated hours per week (e.g. 20–40 hours)"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              /> */}

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold text-[#0b1b33]">
                Estimated Weekly Capacity
              </h3>
              <div className="w-10 h-[2px] bg-[#4f8fcb] rounded-full"></div>

              <select
                name="hours_per_week_option"
                value={hoursOption}
                onChange={(e) => setHoursOption(e.target.value)}
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">Select weekly capacity</option>
                <option value="10-15">10–15 hrs / week</option>
                <option value="20-30">20–30 hrs / week</option>
                <option value="30-40">30–40 hrs / week</option>
                <option value="40">40 hrs (Full-time)</option>
                <option value="custom">Custom</option>
              </select>

              {hoursOption === "custom" && (
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="80"
                    value={customHours}
                    onChange={(e) => setCustomHours(e.target.value)}
                    placeholder="Enter custom hours"
                    className="w-full border border-[#d1d5db] rounded px-3 py-2 pr-12"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#0b1b33]/60">
                    hrs
                  </span>
                </div>
              )}
            </div>

            {/* TIMEZONE */}
            <div>
              {timezone && (
                <TimezoneSelect
                  value={timezone}
                  onChange={(tz) => setTimezone(tz.value)}
                />
              )}

              <input type="hidden" name="time_zone" value={timezone ?? ""} />
            </div>

            {/* TOOLS DYNAMIC */}
            {supportType && (
              <div className="space-y-3">
                <p className="font-semibold text-[#0b1b33]">
                  Tools your team currently uses
                </p>

                <div className="grid md:grid-cols-2 gap-2 text-sm text-[#0b1b33]/80">
                  {(supportType === "Creative" || supportType === "Both") && (
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
                        <label key={tool} className="flex items-center gap-2">
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
                        <label key={tool} className="flex items-center gap-2">
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="
    w-full
    bg-[#0b1b33]
    text-white
    py-3
    rounded-md
    font-medium

    transition-all duration-300 ease-out

    hover:bg-[#0b1b33]/90
    hover:shadow-[0_8px_20px_rgba(11,27,51,0.2)]
    hover:-translate-y-[1px]
    hover:bg-gradient-to-r hover:from-[#0b1b33] hover:to-[#163a6b]

    active:scale-[0.98]
    active:shadow-[0_4px_10px_rgba(11,27,51,0.2)]

    focus:outline-none
    focus:ring-2
    focus:ring-[#4f8fcb]/50
    focus:ring-offset-2

    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:shadow-none
    disabled:hover:translate-y-0
  "
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : (
              "Submit Request"
            )}
          </button>

          {/* <button
            onClick={() => setSuccess(true)}
            className="fixed bottom-6 right-6 px-4 py-2 bg-black text-white rounded"
          >
            Test Success
          </button> */}
        </form>
      </div>

      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* modal */}
          <div
            className="
      relative
      bg-white
      rounded-2xl
      p-8
      max-w-md
      w-full
      text-center
      shadow-[0_20px_60px_rgba(0,0,0,0.2)]
    "
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-[#4f8fcb]/10 flex items-center justify-center mb-4">
              <span className="text-2xl text-[#4f8fcb]">✓</span>
            </div>

            <h2 className="text-xl font-semibold text-[#0b1b33] mb-3">
              Request Submitted Successfully
            </h2>

            <p className="text-[#0b1b33]/70 mb-6">
              Thank you for reaching out. Our team will review your request and
              follow up shortly.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="
          px-6 py-2
          bg-[#0b1b33]
          text-white
          rounded
        "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

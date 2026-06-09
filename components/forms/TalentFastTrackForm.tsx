"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TalentFastTrackForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const [audioUrl, setAudioUrl] = useState("");

  const [isRecording, setIsRecording] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");

  const [availability, setAvailability] = useState<Date | null>(null);

  const [aiConsent, setAiConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [cvFile, setCvFile] = useState<File | null>(null);

  const [cvUrl, setCvUrl] = useState("");

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const formatSalary = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    streamRef.current = stream;

    const mediaRecorder = new MediaRecorder(
      stream,
      MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? {
            mimeType: "audio/webm;codecs=opus",
          }
        : undefined,
    );
    const chunks: Blob[] = [];

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, {
        type: mediaRecorder.mimeType,
      });

      console.log("Recorder Type:", mediaRecorder.mimeType);
      console.log("Blob Size:", blob.size);

      setAudioBlob(blob);

      const previewUrl = URL.createObjectURL(blob);

      setAudioUrl(previewUrl);
    };

    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.start();

    setRecordingTime(0);

    timerRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);

    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();

    streamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setIsRecording(false);
  };

  const deleteRecording = () => {
    setAudioBlob(null);
    setAudioUrl("");
    setRecordingTime(0);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setIsRecording(false);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!cvFile) {
      newErrors.cvFile = "CV is required";
    }

    if (!audioBlob) {
      newErrors.voice = "Voice introduction is required";
    }

    const minSalary = Number(salaryMin);
    const maxSalary = Number(salaryMax);

    if (!salaryMin.trim()) {
      newErrors.salaryMin = "Minimum salary is required";
    }

    if (!salaryMax.trim()) {
      newErrors.salaryMax = "Maximum salary is required";
    }

    if (salaryMin && salaryMax && minSalary > maxSalary) {
      newErrors.salaryMax =
        "Maximum salary must be greater than minimum salary";
    }

    if (!availability) {
      newErrors.availability = "Availability is required";
    }

    if (!aiConsent) {
      newErrors.aiConsent = "Consent is required";
    }
    if (!cvFile) {
      newErrors.cvFile = "CV is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const uploadCV = async (file: File) => {
    // const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    // const safeFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const safeFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

    const { error } = await supabase.storage
      .from("candidate-files")
      .upload(`cv/${safeFileName}`, file);

    if (error) {
      console.error("SUPABASE CV ERROR:", error);
      throw error;
    }

    const { data } = supabase.storage
      .from("candidate-files")
      .getPublicUrl(`cv/${safeFileName}`);

    return data.publicUrl;
  };

  const uploadVoice = async (blob: Blob) => {
    const fileName = `${Date.now()}.webm`;

    const { error } = await supabase.storage
      .from("candidate-files")
      .upload(`voice/${fileName}`, blob);

    if (error) {
      console.error("SUPABASE VOICE ERROR:", error);

      throw error;
    }

    const { data } = supabase.storage
      .from("candidate-files")
      .getPublicUrl(`voice/${fileName}`);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SUBMIT CLICKED");
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      let uploadedCvUrl = "";
      let uploadedVoiceUrl = "";

      if (cvFile) {
        uploadedCvUrl = await uploadCV(cvFile);
      }

      if (audioBlob) {
        uploadedVoiceUrl = await uploadVoice(audioBlob);
      }

      const crmPayload = {
        serviceType: "Talent Fast Track",

        firstName,
        lastName,
        email,

        cvUrl: uploadedCvUrl,
        voiceUrl: uploadedVoiceUrl,

        salaryMin,
        salaryMax,
        availability: availability
          ? availability.toLocaleDateString("en-GB")
          : "",

        aiConsent,

        submittedAt: new Date().toISOString(),
      };

      console.log("CRM PAYLOAD", crmPayload);

      // TODO:
      // Thay link Apps Script
      await fetch(
        "https://script.google.com/macros/s/AKfycbyUqrCMqASA8juvw-YKXN0--K_9xXIdckaeGRDKgQJLbZAZtdTAkVvKRg3s8rr1-MRO1A/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(crmPayload),
        },
      );
      console.log("TALENT PAYLOAD", crmPayload);

      setIsSubmitted(true);
    } catch (error: any) {
      console.error(error);

      alert(error?.message || "CV upload failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  //   if (isSubmitted) {
  //     return (
  //       <section className="py-24">
  //
  //         <div className="max-w-3xl mx-auto px-6 text-center">
  //           {" "}
  //           <h2 className="text-4xl font-bold mb-6">Application Submitted </h2>
  //           <p className="text-slate-600">
  //             Thank you for applying through Talent Fast Track.
  //           </p>
  //           <p className="text-slate-600 mt-3">
  //             Our team and AI-assisted review process will review your application
  //             shortly.
  //           </p>
  //         </div>
  //       </section>
  //     );
  //   }

  if (isSubmitted) {
    return (
      <section
        className="
        min-h-[70vh]
        md:min-h-[80vh]
        flex
        items-center
        justify-center
        px-6
        py-12
      "
      >
        <div
          className="
          w-full
          max-w-2xl
          mx-auto
          text-center
          bg-white
          rounded-3xl
          border
          border-slate-200
          shadow-sm
          p-8
          md:p-12
        "
        >
          <div className="text-6xl md:text-7xl mb-6">🎉</div>

          <h2
            className="
            text-3xl
            md:text-5xl
            font-bold
            text-[#06172D]
            mb-6
          "
          >
            Application Submitted
          </h2>

          <p
            className="
            text-base
            md:text-lg
            text-slate-600
            leading-relaxed
          "
          >
            Thank you for applying through Talent Fast Track.
          </p>

          <p
            className="
            mt-4
            text-base
            md:text-lg
            text-slate-600
            leading-relaxed
          "
          >
            Our recruitment team and AI-assisted review process have
            successfully received your application.
          </p>

          <div
            className="
            mt-8
            p-5
            rounded-2xl
            bg-slate-50
            border
            border-slate-200
          "
          >
            <p
              className="
              text-[#06172D]
              font-semibold
            "
            >
              You can expect an update within 48 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      {" "}
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Talent Fast Track</h1>

          <p className="text-xl text-slate-600">Apply in under 2 minutes.</p>
        </div>

        {/* Progress Indicator */}
        <div
          className="
    grid
    md:grid-cols-3
    gap-4
    mb-16
  "
        >
          <div
            className="
      p-5
      rounded-2xl
      border
      bg-white
      text-center
    "
          >
            <div className="text-3xl mb-2">📄</div>

            <h3 className="font-semibold">Upload CV</h3>
          </div>

          <div
            className="
      p-5
      rounded-2xl
      border
      bg-white
      text-center
    "
          >
            <div className="text-3xl mb-2">🎤</div>

            <h3 className="font-semibold">Record Voice</h3>
          </div>

          <div
            className="
      p-5
      rounded-2xl
      border
      bg-white
      text-center
    "
          >
            <div className="text-3xl mb-2">🚀</div>

            <h3 className="font-semibold">Submit Application</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div
            className="
    bg-white
    border
    border-slate-200
    rounded-3xl
    p-8
    shadow-sm
  "
          >
            <h2
              className="
      text-2xl
      font-bold
      mb-2
      text-[#06172D]
    "
            >
              Candidate Information
            </h2>

            <p
              className="
      text-slate-500
      mb-8
    "
            >
              Tell us a little about yourself.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);

                    if (errors.firstName) {
                      setErrors((prev) => ({
                        ...prev,
                        firstName: "",
                      }));
                    }
                  }}
                  className={`
w-full
rounded-2xl
px-5
py-4
outline-none
transition
${errors.firstName ? "border border-red-500" : "border border-slate-300"}
`}
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);

                    if (errors.lastName) {
                      setErrors((prev) => ({
                        ...prev,
                        lastName: "",
                      }));
                    }
                  }}
                  className="
  w-full
  rounded-2xl
  border
  border-slate-300
  bg-white
  px-5
  py-4
  outline-none
  transition
  focus:border-[#06172D]
  focus:ring-4
  focus:ring-slate-100
"
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

                if (errors.email) {
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }
              }}
              className="border rounded-xl p-4 w-full mt-6"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div
            className="
    bg-white
    border
    border-slate-200
    rounded-3xl
    p-8
    shadow-sm
  "
          >
            <h2
              className="
      text-2xl
      font-bold
      mb-2
      text-[#06172D]
    "
            >
              Application Essentials
            </h2>

            <p
              className="
      text-slate-500
      mb-8
    "
            >
              Upload your CV and introduce yourself.
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              // onChange={(e) => {
              //   if (e.target.files && e.target.files[0]) {
              //     setCvFile(e.target.files[0]);
              //   }
              // }}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];

                  console.log("FILE NAME:", file.name);
                  console.log("FILE SIZE MB:", file.size / 1024 / 1024);
                  console.log("FILE TYPE:", file.type);

                  if (file.size > 10 * 1024 * 1024) {
                    alert("CV must be smaller than 10MB");
                    return;
                  }

                  setCvFile(file);
                }
              }}
              className="
    border
    rounded-xl
    p-4
    w-full
  "
            />
            {errors.cvFile && (
              <p className="mt-2 text-sm text-red-600">{errors.cvFile}</p>
            )}

            <div className="mt-6 space-y-3">
              <label
                className="
    block
    text-lg
    font-semibold
    text-[#06172D]
  "
              >
                English Voice Introduction
              </label>

              <p
                className="
    text-sm
    text-slate-500
    mb-4
  "
              >
                Record a short 2-3 minutes introduction in English.
              </p>
              {/* <>
                {!isRecording ? (
                  <button
                    type="button"
                    onClick={startRecording}
                    className="
        px-4
        py-2
        bg-blue-600
        text-white
        rounded-lg
      "
                  >
                    🎤 Start Recording
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={stopRecording}
                    className="
        px-4
        py-2
        bg-red-600
        text-white
        rounded-lg
      "
                  >
                    ⏹ Stop Recording
                  </button>
                )}
              </> */}

              <>
                {!isRecording ? (
                  <button
                    type="button"
                    onClick={startRecording}
                    className="
        px-6
        py-3
        rounded-2xl
        bg-[#06172D]
        hover:bg-[#0B2240]
        text-white
        font-medium
        transition
        shadow-sm
      "
                  >
                    🎤 Start Recording
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={stopRecording}
                    className="
        px-6
        py-3
        rounded-2xl
        bg-[#D72638]
        hover:bg-[#BE2030]
        text-white
        font-medium
        transition
        shadow-sm
      "
                  >
                    ⏹ Stop Recording
                  </button>
                )}

                {isRecording && (
                  <div
                    className="
        mt-4 ml-4
        inline-flex
        items-center
        gap-3
        px-4
        py-2
        rounded-full
        bg-red-50
        text-red-600
        font-semibold
      "
                  >
                    <span className="animate-pulse">🔴</span>
                    Recording
                    {Math.floor(recordingTime / 60)
                      .toString()
                      .padStart(2, "0")}
                    :{(recordingTime % 60).toString().padStart(2, "0")}
                  </div>
                )}
              </>
              {audioUrl && <audio controls src={audioUrl} className="w-full" />}
              {/* {audioUrl && (
                <audio controls preload="metadata" className="w-full">
                  <source src={audioUrl} type={audioBlob?.type} />
                  Your browser does not support audio playback.
                </audio>
              )} */}

              {audioUrl && !isRecording && (
                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    type="button"
                    onClick={deleteRecording}
                    className="
        px-4
        py-2
        rounded-xl
        border
        border-red-300
        text-red-600
        hover:bg-red-50
      "
                  >
                    🗑 Delete Recording
                  </button>

                  <button
                    type="button"
                    onClick={startRecording}
                    className="
        px-4
        py-2
        rounded-xl
        bg-[#06172D]
        text-white
        hover:bg-[#0B2240]
      "
                  >
                    🎤 Record Again
                  </button>
                </div>
              )}
            </div>

            {/* <div className="grid grid-cols-2 gap-6 mt-8 w-full"> */}
            <div className="mt-8 w-full">
              <div className="mt-8">
                {/* Salary */}
                <div>
                  <label
                    className="
        block
        text-lg
        font-semibold
        text-[#06172D]
        mb-3
      "
                  >
                    Salary Expectation Range
                  </label>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={formatSalary(salaryMin)}
                        onChange={(e) => {
                          const rawValue = e.target.value.replace(/\D/g, "");
                          setSalaryMin(rawValue);
                        }}
                        placeholder="Min Salary"
                        className="
            w-full
            rounded-2xl
            border
            border-slate-300
            px-5
            py-4
            outline-none
            transition
            focus:border-[#06172D]
            focus:ring-4
            focus:ring-slate-100
          "
                      />

                      {errors.salaryMin && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.salaryMin}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={formatSalary(salaryMax)}
                        onChange={(e) => {
                          const rawValue = e.target.value.replace(/\D/g, "");
                          setSalaryMax(rawValue);
                        }}
                        placeholder="Max Salary"
                        className="
            w-full
            rounded-2xl
            border
            border-slate-300
            px-5
            py-4
            outline-none
            transition
            focus:border-[#06172D]
            focus:ring-4
            focus:ring-slate-100
          "
                      />

                      {errors.salaryMax && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.salaryMax}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Example: 15,000,000 - 25,000,000 VND/month
                  </p>
                </div>

                {/* Available Date */}
                <div className="mt-8">
                  <label
                    className="
        block
        text-lg
        font-semibold
        text-[#06172D]
        mb-3
      "
                  >
                    Available Start Date
                  </label>

                  <DatePicker
                    selected={availability}
                    onChange={(date: Date | null) => setAvailability(date)}
                    placeholderText="Select your availability"
                    dateFormat="dd MMMM yyyy"
                    minDate={new Date()}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    wrapperClassName="w-full"
                    className="
        w-full
        rounded-2xl
        border
        border-slate-300
        px-5
        py-4
        outline-none
        transition
        focus:border-[#06172D]
        focus:ring-4
        focus:ring-slate-100
      "
                  />

                  {errors.availability && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.availability}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="
    bg-slate-50
    border
    border-slate-200
    rounded-3xl
    p-6
  "
          >
            <label
              className="
      flex
      items-center
      gap-4
      cursor-pointer
    "
            >
              <input
                type="checkbox"
                checked={aiConsent}
                onChange={(e) => setAiConsent(e.target.checked)}
                className="
        h-5
        w-5
        shrink-0
      "
              />

              <span
                className="
        text-base
        leading-relaxed
        text-slate-700
      "
              >
                I consent to STAFF United using AI-assisted tools to review,
                analyse and summarise my application materials.
              </span>
            </label>
            {errors.aiConsent && (
              <p className="mt-3 text-sm text-red-600">{errors.aiConsent}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
          px-8
          py-4
          rounded-xl
          bg-[#06172d]
          text-white
          font-semibold
        "
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}

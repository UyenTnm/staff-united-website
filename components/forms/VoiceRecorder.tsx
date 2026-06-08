"use client";

import { useRef, useState } from "react";

interface VoiceRecorderProps {
  onRecordingReady: (blob: Blob, previewUrl: string) => void;
}

export default function VoiceRecorder({
  onRecordingReady,
}: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    const mediaRecorder = new MediaRecorder(stream);

    const chunks: Blob[] = [];

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      stream.getTracks().forEach((track) => track.stop());

      const blob = new Blob(chunks, {
        type: "audio/webm",
      });

      const previewUrl = URL.createObjectURL(blob);

      setAudioUrl(previewUrl);

      onRecordingReady(blob, previewUrl);
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

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setIsRecording(false);
  };

  const deleteRecording = () => {
    setAudioUrl("");
    setRecordingTime(0);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setIsRecording(false);
  };

  return (
    <div className="mt-3 space-y-3">
      <button
        type="button"
        onClick={isRecording ? stopRecording : startRecording}
        className={`
          px-3
          py-2
          rounded-full
          flex
          items-center
          gap-2
          text-sm
          font-medium
          transition-all
          duration-300
          ${isRecording ? "bg-red-500 text-white" : "bg-[#06172D] text-white"}
        `}
      >
        {isRecording ? "⏹ Stop" : "🎤 Record"}
      </button>

      {isRecording && (
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-3
            py-2
            rounded-full
            bg-red-50
            text-red-600
            text-sm
            font-medium
          "
        >
          <span className="animate-pulse">🔴</span>
          Recording •
          {Math.floor(recordingTime / 60)
            .toString()
            .padStart(2, "0")}
          :{(recordingTime % 60).toString().padStart(2, "0")}
        </div>
      )}

      {audioUrl && (
        <>
          <audio controls src={audioUrl} className="w-full" />

          <button
            type="button"
            onClick={deleteRecording}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-red-50
              border
              border-red-200
              text-red-600
              text-sm
              font-semibold
            "
          >
            🗑 Delete Recording
          </button>
        </>
      )}
    </div>
  );
}

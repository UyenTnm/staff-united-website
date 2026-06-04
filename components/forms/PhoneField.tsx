"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function PhoneField({
  value,
  onChange,
  error,
}: PhoneFieldProps) {
  return (
    <div className="space-y-2">
      <PhoneInput
        country="us"
        enableSearch
        value={value}
        onChange={onChange}
        inputStyle={{
          width: "100%",
          height: "56px",
          borderRadius: "16px",
        }}
        buttonStyle={{
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
        }}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

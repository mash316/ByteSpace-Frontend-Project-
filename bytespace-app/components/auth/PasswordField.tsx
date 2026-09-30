"use client";

import { useState, type ChangeEvent, type FocusEvent, type InputHTMLAttributes, type Ref } from "react";
import { TextField } from "@/components/auth/TextField";

export function PasswordField({
  id,
  label,
  name,
  placeholder = "********",
  value,
  onChange,
  onBlur,
  error,
  autoComplete,
  enterKeyHint,
  disabled = false,
  inputRef,
}: {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
  enterKeyHint?: InputHTMLAttributes<HTMLInputElement>["enterKeyHint"];
  disabled?: boolean;
  inputRef?: Ref<HTMLInputElement>;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      id={id}
      name={name}
      label={label}
      type={visible ? "text" : "password"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      autoComplete={autoComplete}
      enterKeyHint={enterKeyHint}
      disabled={disabled}
      inputRef={inputRef}
      rightAdornment={(
        <button
          type="button"
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          disabled={disabled}
          onClick={() => setVisible((current) => !current)}
          className="absolute inset-y-0 right-[12px] flex w-[32px] items-center justify-center text-[#82868E] hover:text-[#242528] focus-visible:outline-2 focus-visible:outline-[#003BE2] disabled:cursor-not-allowed"
        >
          {visible ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
              <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5.5 0 9 7 9 7a16 16 0 0 1-3.1 3.8M6.2 6.2C3.9 7.7 3 12 3 12s3.5 7 9 7a9 9 0 0 0 3-.5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
          )}
        </button>
      )}
    />
  );
}

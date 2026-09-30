import type { ChangeEvent, FocusEvent, InputHTMLAttributes, ReactNode, Ref } from "react";

export function TextField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  autoComplete,
  autoCapitalize,
  inputMode,
  enterKeyHint,
  disabled = false,
  rightAdornment,
  inputRef,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
  autoCapitalize?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  enterKeyHint?: InputHTMLAttributes<HTMLInputElement>["enterKeyHint"];
  disabled?: boolean;
  rightAdornment?: ReactNode;
  inputRef?: Ref<HTMLInputElement>;
}) {
  const errorId = `${id}-error`;

  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-[8px] block text-[14px] font-medium text-[#242528]">{label}</label>
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={type}
          required
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          inputMode={inputMode}
          enterKeyHint={enterKeyHint}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={[
            "h-[52px] w-full rounded-[12px] border bg-[#F5F5F6] px-[16px] text-[16px] text-[#242528] outline-none placeholder:text-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/20 sm:px-[24px]",
            rightAdornment ? "pr-[52px]" : "",
            error ? "border-[#D92D20] focus:border-[#D92D20] focus:ring-[#D92D20]/20" : "border-[#CED0D3]",
            disabled ? "cursor-not-allowed opacity-60" : "",
          ].join(" ")}
        />
        {rightAdornment}
      </div>
      {error && <p id={errorId} className="mt-[4px] text-[13px] text-[#D92D20]">{error}</p>}
    </div>
  );
}

export type SocialProvider = "google" | "facebook";

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] animate-spin" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function SocialButton({
  provider,
  loading,
  disabled,
  onClick,
}: {
  provider: SocialProvider;
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  const name = provider === "google" ? "Google" : "Facebook";
  const buttonLabel = loading ? `Connecting to ${name}…` : `Continue with ${name}`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-busy={loading}
      className="flex min-h-[56px] w-full items-center justify-center gap-[12px] rounded-[16px] border border-[#CED0D3] bg-white px-[16px] text-[16px] font-medium text-[#242528] transition-colors hover:border-[#82868E] hover:bg-[#F5F5F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? <Spinner /> : provider === "google" ? (
        <svg viewBox="0 0 24 24" className="h-[26px] w-[26px] shrink-0" aria-hidden="true">
          <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.4a4.7 4.7 0 0 1-2 3.1v2.6h3.3c1.9-1.8 2.9-4.4 2.9-7.6Z" />
          <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.5l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4H3v2.7A10 10 0 0 0 12 22Z" />
          <path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.4H3a10 10 0 0 0 0 9.2l3.4-2.7Z" />
          <path fill="#EA4335" d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.7 9.7 0 0 0 12 2a10 10 0 0 0-9 5.4l3.4 2.7c.8-2.3 3-4 5.6-4Z" />
        </svg>
      ) : (
        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-[21px] font-bold leading-none text-white" aria-hidden="true">f</span>
      )}
      <span>{buttonLabel}</span>
    </button>
  );
}

export function SocialAuthSection({
  className = "",
  loadingProvider,
  disabled,
  onProviderClick,
}: {
  className?: string;
  loadingProvider: SocialProvider | null;
  disabled: boolean;
  onProviderClick: (provider: SocialProvider) => void;
}) {
  const socialDisabled = disabled || loadingProvider !== null;

  return (
    <div className={`mt-[28px] ${className}`}>
      <div className="flex items-center gap-[11px] text-[16px] text-[#82868E]">
        <span className="h-px flex-1 bg-[#CED0D3]" />
        <span>or</span>
        <span className="h-px flex-1 bg-[#CED0D3]" />
      </div>
      <div className="mt-[24px] flex flex-col gap-[12px]">
        <SocialButton
          provider="google"
          loading={loadingProvider === "google"}
          disabled={socialDisabled}
          onClick={() => onProviderClick("google")}
        />
        <SocialButton
          provider="facebook"
          loading={loadingProvider === "facebook"}
          disabled={socialDisabled}
          onClick={() => onProviderClick("facebook")}
        />
      </div>
    </div>
  );
}
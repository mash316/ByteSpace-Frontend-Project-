import Link from "next/link";

export function PrimaryButton({
  children,
  href,
  className = "",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}) {
  const classes = [
    "inline-flex items-center justify-center gap-[8px] rounded-full bg-[#D4FB20] px-6 py-3 text-[18px] font-medium text-[#242528] shadow-none transition-colors hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2] disabled:cursor-not-allowed disabled:opacity-60",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} aria-disabled={disabled || loading} className={classes}>
        {loading && <Spinner />}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled || loading} onClick={onClick} className={classes}>
      {loading && <Spinner />}
      {children}
    </button>
  );
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] animate-spin" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

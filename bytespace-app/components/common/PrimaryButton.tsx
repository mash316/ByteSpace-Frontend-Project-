import Link from "next/link";

export function PrimaryButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const classes = [
    "inline-flex items-center justify-center rounded-[24px] bg-[#D4FB20] px-6 py-3 text-[18px] font-medium text-[#242528] shadow-none transition-colors hover:brightness-95",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}

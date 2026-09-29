export function BlueGridBackground({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden bg-[#003BE2] text-[#F5F5F6]",
        "before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.12)_2px,transparent_2px)] before:bg-[length:120px_120px] before:content-[''] before:pointer-events-none",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

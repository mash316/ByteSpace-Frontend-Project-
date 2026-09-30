export function BlueGridBackground({
  className = "",
  children,
  style,
  showGrid = true,
  overflowVisible = false,
}: {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  showGrid?: boolean;
  overflowVisible?: boolean;
}) {
  return (
    <div
      className={[
        "relative bg-[#003BE2] text-[#F5F5F6]",
        !overflowVisible && "overflow-hidden",
        showGrid && "before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.12)_2px,transparent_2px)] before:bg-[length:120px_120px] before:content-[''] before:pointer-events-none",
        className,
      ].join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

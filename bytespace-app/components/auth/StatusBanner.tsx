import { AlertCircle, CheckCircle2, Info, LoaderCircle } from "lucide-react";
import type { StatusMessage } from "@/types/auth";

const bannerStyles = {
  success: "border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]",
  error: "border-[#FECDCA] bg-[#FEF3F2] text-[#D92D20]",
  loading: "border-[#E5E6E8] bg-[#F5F5F6] text-[#4B4C53]",
  info: "border-[#D6E0FB] bg-[#F1F4FE] text-[#003BE2]",
  idle: "hidden",
} as const;

export function StatusBanner({ status }: { status: StatusMessage }) {
  if (status.type === "idle" || !status.message) return null;

  const Icon = status.type === "success"
    ? CheckCircle2
    : status.type === "error"
      ? AlertCircle
      : status.type === "loading"
        ? LoaderCircle
        : Info;

  return (
    <div
      role={status.type === "error" ? "alert" : "status"}
      aria-live={status.type === "error" ? "assertive" : "polite"}
      className={`flex items-start gap-[10px] rounded-[12px] border px-[16px] py-[12px] text-[14px] leading-[150%] ${bannerStyles[status.type]}`}
    >
      <Icon className={`mt-[1px] h-[18px] w-[18px] shrink-0 ${status.type === "loading" ? "animate-spin" : ""}`} aria-hidden="true" />
      <span>{status.message}</span>
    </div>
  );
}
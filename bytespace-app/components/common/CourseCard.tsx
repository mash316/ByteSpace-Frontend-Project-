import Link from "next/link";
import type { Course } from "@/data/courses";

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 0 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
    </svg>
  );
}

function LevelGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#4B4C53]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 15h16M5 12V8m5 4V5m5 7v-5" />
    </svg>
  );
}

function Avatars({ muted = false, whiteText = false }: { muted?: boolean; whiteText?: boolean }) {
  const colors = [
    "bg-[#CED0D3]",
    "bg-[#A3B1C7]",
    "bg-[#D1E7D9]",
    "bg-[#E7D6C1]",
  ];

  return (
    <div className="flex items-center">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={[
            "flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full border border-white text-[10px] font-medium",
            colors[i % colors.length],
            i > 0 ? "-ml-[8px]" : "",
          ].join(" ")}
        >
          <span className={whiteText ? "text-white" : "text-[#242528]"}>{i === 3 ? "26+" : ""}</span>
        </div>
      ))}
      <div
        className={[
          "ml-[-8px] flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white text-[12px] font-medium",
          muted ? "bg-[#D4FB20] text-[#242528]" : "bg-[#242528] text-white",
        ].join(" ")}
      >
        {whiteText ? "26+" : "26+"}
      </div>
    </div>
  );
}

export function CourseCard({
  course,
  variant = "default",
}: {
  course: Course;
  variant?: "default" | "home-hero" | "search" | "auth";
}) {
  const isSearch = variant === "search";
  const isAuth = variant === "auth";
  const ratingColor = isSearch ? "text-[#CED0D3]" : isAuth ? "text-[#D4FB20]" : "text-[#CED0D3]";
  const badgeBg = isSearch ? "bg-[#D4FB20] text-[#242528]" : isAuth ? "bg-[#242528] text-white" : "bg-[#242528] text-white";

  return (
    <Link href={`/courses/${course.slug}`} className="block w-[373px] rounded-[24px] border border-[#CED0D3] bg-white p-[16px] shadow-sm">
      <div className="relative overflow-hidden rounded-[12px]">
        <img src={course.image} alt={course.title} className="h-[195.14px] w-[341px] object-cover" />
        <div className="absolute inset-x-[12px] top-[12px] flex gap-[12px]">
          <span className="rounded-[24px] border border-white/60 bg-[rgba(246,246,246,0.6)] px-[12px] py-[6px] text-[12px] font-medium text-[#4F4F4F] backdrop-blur-sm">
            {course.lessons}
          </span>
          <span className="rounded-[24px] border border-white/60 bg-[rgba(246,246,246,0.6)] px-[12px] py-[6px] text-[12px] font-medium text-[#4F4F4F] backdrop-blur-sm">
            {course.duration}
          </span>
          <span className="rounded-[24px] border border-white/60 bg-[rgba(246,246,246,0.6)] px-[12px] py-[6px] text-[12px] font-medium text-[#4F4F4F] backdrop-blur-sm">
            {course.comments}
          </span>
        </div>
      </div>

      <div className="relative pt-[16px]">
        <div className="flex items-start justify-between gap-[8px]">
          <div className="min-w-0 flex-1">
            <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
              {course.cardTitle}
            </h3>
            <p className="mt-[4px] text-[12px] font-medium text-[#003BE2]">by {course.creator}</p>
          </div>

          <div className="flex items-center gap-[8px] text-[18px] font-medium text-[#4F4F4F]">
            <span>{course.rating}</span>
            <StarIcon className={['h-[18px] w-[18px]', ratingColor].join(' ')} />
          </div>
        </div>

        <div className="mt-[16px] flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <div className="inline-flex items-center gap-[6px] rounded-[24px] bg-[#F5F5F6] px-[12px] py-[6px] text-[12px] font-medium text-[#4B4C53]">
              <LevelGlyph />
              {course.level}
            </div>
            <div className="flex items-center">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#D0C9C9] text-[10px] font-bold text-[#242528] ring-2 ring-white">A</div>
              <div className="-ml-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#9BB2D9] text-[10px] font-bold text-[#242528] ring-2 ring-white">B</div>
              <div className="-ml-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#E4E4C8] text-[10px] font-bold text-[#242528] ring-2 ring-white">C</div>
              <div className="-ml-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#F1C5C5] text-[10px] font-bold text-[#242528] ring-2 ring-white">D</div>
              <div className={['-ml-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full text-[12px] font-medium ring-2 ring-white', badgeBg].join(' ')}>
                26+
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[20px] font-semibold text-[#003BE2]">{course.price}</div>
            <div className="text-[12px] text-[#4F4F53]">/lifetime</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

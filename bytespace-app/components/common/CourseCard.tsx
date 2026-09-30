import Link from "next/link";
import type { Course } from "@/data/courses";
import { AvatarStack } from "@/components/common/CourseDetailSectionComponents";

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

const learnerPortraits = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=96&h=96&q=80",
];

export function CourseCard({
  course,
  variant = "default",
}: {
  course: Course;
  variant?: "default" | "home-hero" | "search" | "auth";
}) {
  const isSearch = variant === "search";
  const isAuth = variant === "auth";
  const showImageMetadata = isAuth;
  const ratingColor = isSearch ? "text-[#CED0D3]" : isAuth ? "text-[#D4FB20]" : "text-[#CED0D3]";

  return (
    <Link href={`/courses/${course.slug}`} className="block w-full min-w-0 rounded-[24px] border border-[#CED0D3] bg-white p-[16px] shadow-sm xl:w-[373px]">
      <div className="relative overflow-hidden rounded-[12px]">
        <img src={course.image} alt={course.title} className="aspect-[341/195] h-auto w-full object-cover xl:h-[195.14px] xl:w-[341px]" />
        {showImageMetadata && (
          <div className="absolute inset-x-[12px] bottom-[12px] flex gap-[8px]">
            {[course.lessons, course.duration, course.comments].map((label) => (
              <span key={label} className="rounded-[24px] border border-white/60 bg-[rgba(246,246,246,0.6)] px-[8px] py-[6px] text-[10px] font-medium text-[#4F4F4F] backdrop-blur-sm">
                {label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="relative pt-[16px]">
        <div className="flex items-start justify-between gap-[8px]">
          <div className="min-w-0 flex-1">
            <h3 className="break-words text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-black xl:overflow-hidden xl:text-ellipsis xl:whitespace-nowrap">
              {course.cardTitle}
            </h3>
            <p className="mt-[4px] text-[12px] font-medium text-[#003BE2]">by {course.creator}</p>
          </div>

          <div className="flex items-center gap-[8px] text-[18px] font-medium text-[#4F4F4F]">
            <span>{course.rating}</span>
            <StarIcon className={['h-[18px] w-[18px]', ratingColor].join(' ')} />
          </div>
        </div>

        <div className="mt-[16px] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-[12px]">
            <div className="inline-flex items-center gap-[6px] rounded-[24px] bg-[#F5F5F6] px-[12px] py-[6px] text-[12px] font-medium text-[#4B4C53]">
              <LevelGlyph />
              {course.level}
            </div>
              <AvatarStack items={learnerPortraits} badgeVariant={isSearch ? "lime" : "dark"} />
          </div>

          <div className="shrink-0 text-right">
            <div className="text-[20px] font-semibold text-[#003BE2]">{course.price}</div>
            <div className="text-[12px] text-[#4F4F53]">/lifetime</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

import { CourseCard } from "@/components/common/CourseCard";
import { courses } from "@/data/courses";

const buildCourse = courses.find((course) => course.slug === "build-digital-asset")!;
const dataCourse = courses.find((course) => course.slug === "the-power-of-big-data")!;
const portraits = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&h=120&q=80",
];

export function AuthShowcase() {
  return (
    <div aria-hidden="true" className="auth-showcase relative mx-auto mt-[54px] hidden aspect-[485/560] w-full max-w-[485px] xl:mx-0 xl:block">
      <div className="absolute left-0 top-[16%] z-10 h-[384px] w-[373px]">
        <CourseCard course={buildCourse} variant="auth" />
      </div>
      <div className="absolute left-[23%] top-0 z-20 h-[384px] w-[373px]">
        <CourseCard course={dataCourse} variant="auth" />
      </div>
      <div className="absolute left-[46.6%] top-[77.7%] z-30 h-[123px] w-[258px] rounded-[16px] bg-[#D4FB20] p-[16px] shadow-xl">
        <div className="mb-[6px] text-[16px] font-medium text-[#242528]">Happy Students</div>
        <div className="mb-[7px] flex items-center gap-[6px] text-[10px] font-bold text-[#242528]">
          <span>4.5 (240)</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#003BE2]" fill="currentColor">
            <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 2.75 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
          </svg>
        </div>
        <div className="flex items-center">
          {portraits.map((portrait, index) => (
            <img
              key={portrait}
              src={portrait}
              alt=""
              className="h-[43px] w-[43px] rounded-full border-2 border-[#D4FB20] object-cover"
              style={{ marginLeft: index === 0 ? 0 : -16 }}
            />
          ))}
          <div className="ml-[-16px] flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#040819] text-[12px] font-bold text-[#F5F5F6]">
            2K+
          </div>
        </div>
      </div>

      <div className="absolute left-[12%] top-[-7%] z-30 h-[105px] w-[105px] rotate-[-24deg] rounded-full border-[24px] border-[#D4FB20] shadow-[inset_0_4px_6px_rgba(0,0,0,0.12),0_8px_12px_rgba(0,0,0,0.16)]" />
      <svg viewBox="0 0 140 180" className="absolute left-[84%] top-[42%] z-30 h-[150px] w-[120px] rotate-[-12deg] drop-shadow-xl">
        <path d="M35 14c54-7-34 46 24 42 63-5-39 43 20 46 60 4-44 44 17 54" fill="none" stroke="white" strokeWidth="28" strokeLinecap="round" />
      </svg>
      <div className="absolute left-[-7%] top-[82%] z-30 h-[98px] w-[100px] rotate-[-12deg] bg-[#D4FB20] shadow-xl [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
    </div>
  );
}
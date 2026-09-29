import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { CourseCard } from "@/components/common/CourseCard";
import { courses } from "@/data/courses";

const tabs = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[24px] w-[24px] text-[#82868E]" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function FilterButton({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-[8px] rounded-[24px] border border-[#CED0D3] bg-white px-[16px] py-[12px] text-[16px] font-medium text-[#4B4C53]">
      {label}
    </button>
  );
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#242528]">
      <BlueGridBackground className="relative h-[360px]">
        <Header />
        <div className="relative z-10 flex h-full flex-col items-center justify-center pt-[80px]">
          <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[36px] font-semibold leading-[43px] tracking-[-0.01em] text-[#F5F5F6]">
            Find Your Next Course
          </h1>
          <div className="mt-[32px] flex w-[624px] items-center gap-[16px] rounded-[24px] bg-white p-[8px] shadow-md">
            <div className="flex flex-1 items-center gap-[12px] rounded-[24px] bg-white px-[20px] py-[14px]">
              <SearchIcon />
              <input className="w-full border-0 bg-transparent text-[18px] text-[#82868E] outline-none placeholder:text-[#82868E]" placeholder="Search" />
            </div>
            <button className="flex h-[48px] items-center justify-center gap-[8px] rounded-[24px] bg-[#D4FB20] px-[20px] text-[18px] font-medium text-[#242528]">
              Courses
              <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </BlueGridBackground>

      <div className="mx-auto w-[1200px] pt-[28px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[16px]">
            <FilterButton label="Filter" />
            <FilterButton label="Level" />
            <FilterButton label="Category" />
          </div>
          <button className="flex items-center gap-[8px] rounded-[24px] border border-[#CED0D3] bg-white px-[16px] py-[12px] text-[16px] font-medium text-[#4B4C53]">
            Sort By
          </button>
        </div>

        <div className="mt-[28px] flex gap-[16px] overflow-x-auto pb-[8px]">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={[
                "whitespace-nowrap rounded-[24px] px-[16px] py-[12px] text-[16px] font-medium",
                index === 0 ? "bg-[#D4FB20] text-[#242528]" : "bg-[#F5F5F6] text-[#4B4C53]",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-[48px] grid grid-cols-3 gap-[40px] pb-[60px]">
          {[...courses, ...courses, ...courses].map((course, index) => (
            <CourseCard key={`${course.slug}-${index}`} course={course} variant="search" />
          ))}
        </div>

        <div className="mb-[60px] flex items-center justify-center gap-[18px] text-[20px] font-medium text-[#242528]">
          <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#CED0D3] bg-white">‹</button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={[
                "flex h-[40px] w-[40px] items-center justify-center rounded-full",
                page === 1 ? "bg-[#D4FB20] text-[#242528]" : "bg-transparent text-[#242528]",
              ].join(" ")}
            >
              {page}
            </button>
          ))}
          <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#CED0D3] bg-white">›</button>
        </div>
      </div>

      <Footer />
    </main>
  );
}

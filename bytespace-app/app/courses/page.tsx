"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { CourseCard } from "@/components/common/CourseCard";
import { courses } from "@/data/courses";

const tabs = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];
const supportedCategories = ["Drawing & Painting", "Marketing", "Social Media", "UI/UX Design", "Creative Marketing"];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[24px] w-[24px] text-[#82868E]" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function FilterButton({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex items-center gap-[8px] rounded-[24px] border px-[16px] py-[12px] text-[16px] font-medium",
        active ? "border-transparent bg-[#D4FB20] text-[#242528]" : "border-[#CED0D3] bg-white text-[#4B4C53]",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function CoursesPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All levels");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most relevant");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(new URLSearchParams(window.location.search).get("q") ?? "");
  }, []);

  const filteredCourses = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const normalizedLevel = selectedLevel === "All levels" ? "" : selectedLevel;
    const normalizedCategory = selectedCategory === "All" ? "" : selectedCategory;

    return [...courses]
      .filter((course) => {
        const matchesSearch =
          !keyword ||
          course.title.toLowerCase().includes(keyword) ||
          course.creator.toLowerCase().includes(keyword) ||
          course.category?.toLowerCase().includes(keyword);

        const matchesLevel = !normalizedLevel || course.level === normalizedLevel;
        const matchesCategory = !normalizedCategory || course.category === normalizedCategory;
        const matchesTab = selectedTab === "Featured" || course.category === selectedTab;

        return matchesSearch && matchesLevel && matchesCategory && matchesTab;
      })
      .sort((a, b) => {
        if (sortBy === "Price: low to high") {
          return Number(a.price.replace("$", "")) - Number(b.price.replace("$", ""));
        }
        if (sortBy === "Top rated") {
          return b.rating - a.rating;
        }
        if (sortBy === "Newest") {
          return b.title.localeCompare(a.title);
        }
        return b.rating - a.rating;
      });
  }, [search, selectedCategory, selectedLevel, selectedTab, sortBy]);

  const levels = ["All levels", "Beginner", "Intermediate"];
  const categories = ["All", ...supportedCategories];
  const sortOptions = ["Most relevant", "Top rated", "Price: low to high", "Newest"];

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
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full border-0 bg-transparent text-[18px] text-[#82868E] outline-none placeholder:text-[#82868E]"
                placeholder="Search"
              />
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
            <FilterButton label="Filter" active={selectedCategory !== "All" || selectedLevel !== "All levels"} onClick={() => {
              setSelectedCategory("All");
              setSelectedLevel("All levels");
            }} />
            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(event) => setSelectedLevel(event.target.value)}
                className="appearance-none rounded-[24px] border border-[#CED0D3] bg-white px-[16px] py-[12px] pr-[34px] text-[16px] font-medium text-[#4B4C53] outline-none"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-[12px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#4B4C53]" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="appearance-none rounded-[24px] border border-[#CED0D3] bg-white px-[16px] py-[12px] pr-[34px] text-[16px] font-medium text-[#4B4C53] outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-[12px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#4B4C53]" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="appearance-none rounded-[24px] border border-[#CED0D3] bg-white px-[16px] py-[12px] pr-[34px] text-[16px] font-medium text-[#4B4C53] outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-[12px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#4B4C53]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 6h12M8 12h8M8 18h4" />
            </svg>
          </div>
        </div>

        <div className="mt-[28px] flex gap-[16px] overflow-x-auto pb-[8px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                if (tab === "Featured" || supportedCategories.includes(tab)) {
                  setSelectedTab(tab);
                } else {
                  router.push(`/courses/category/${encodeURIComponent(tab.toLowerCase().replace(/\s+/g, "-"))}`);
                }
              }}
              className={[
                "whitespace-nowrap rounded-[24px] px-[16px] py-[12px] text-[16px] font-medium",
                selectedTab === tab ? "bg-[#D4FB20] text-[#242528]" : "bg-[#F5F5F6] text-[#4B4C53]",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-[48px] grid grid-cols-3 gap-[40px] pb-[60px]">
          {Array.from({ length: 3 }, (_, repeat) =>
            filteredCourses.map((course) => (
              <CourseCard key={`${repeat}-${course.slug}`} course={course} variant="search" />
            )),
          )}
        </div>

        {filteredCourses.length === 0 && (
          <div className="mb-[60px] rounded-[24px] border border-dashed border-[#CED0D3] bg-white p-[32px] text-center text-[18px] text-[#4B4C53]">
            No courses match the selected filters.
          </div>
        )}

        <div className="mb-[60px] flex items-center justify-center gap-[18px] text-[20px] font-medium text-[#242528]">
          <Link href="/courses" aria-label="Previous page" className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#CED0D3] bg-white">‹</Link>
          {[1, 2, 3, 4, 5].map((page) => (
            <Link
              key={page}
              href={page === 1 ? "/courses" : `/courses/page/${page}`}
              className={[
                "flex h-[40px] w-[40px] items-center justify-center rounded-full",
                page === 1 ? "bg-[#D4FB20] text-[#242528]" : "bg-transparent text-[#242528]",
              ].join(" ")}
            >
              {page}
            </Link>
          ))}
          <Link href="/courses/page/2" aria-label="Next page" className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#CED0D3] bg-white">›</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

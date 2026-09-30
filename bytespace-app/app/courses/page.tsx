"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
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
  const [searchType, setSearchType] = useState<"courses" | "creators">("courses");
  const [typeMenuOpen, setTypeMenuOpen] = useState(false);
  const searchRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      setSearch(params.get("q") ?? "");
      setSearchType(params.get("type") === "creators" ? "creators" : "courses");
    };
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  useEffect(() => {
    if (!typeMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) setTypeMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setTypeMenuOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [typeMenuOpen]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = search.trim();
    setSearch(query);
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (searchType === "creators") params.set("type", searchType);
    const queryString = params.toString();
    router.replace(queryString ? `/courses?${queryString}` : "/courses", { scroll: false });
  }

  const filteredCourses = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const normalizedLevel = selectedLevel === "All levels" ? "" : selectedLevel;
    const normalizedCategory = selectedCategory === "All" ? "" : selectedCategory;

    return [...courses]
      .filter((course) => {
        const matchesSearch = !keyword || (searchType === "creators"
          ? course.creator.toLowerCase().includes(keyword)
          : course.title.toLowerCase().includes(keyword) ||
            course.creator.toLowerCase().includes(keyword) ||
            course.category?.toLowerCase().includes(keyword));

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
  }, [search, searchType, selectedCategory, selectedLevel, selectedTab, sortBy]);

  const levels = ["All levels", "Beginner", "Intermediate"];
  const categories = ["All", ...supportedCategories];
  const sortOptions = ["Most relevant", "Top rated", "Price: low to high", "Newest"];

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#242528]">
      <BlueGridBackground className="relative h-[360px]" overflowVisible>
        <Header />
        <div className="relative z-10 flex h-full flex-col items-center justify-center pt-[80px]">
          <h1 className="break-words px-4 text-center font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(28px,7vw,36px)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F5F5F6] lg:px-0 lg:text-[36px] lg:leading-[43px]">
            Find Your Next Course
          </h1>
          <form ref={searchRef} onSubmit={submitSearch} role="search" className="relative z-20 mx-4 mt-[32px] flex w-[calc(100%-2rem)] max-w-[624px] min-w-0 items-center gap-[8px] overflow-visible rounded-[24px] bg-white p-[8px] shadow-md sm:gap-[16px]">
            <div className="flex flex-1 items-center gap-[12px] rounded-[24px] bg-white px-[20px] py-[14px]">
              <SearchIcon />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                type="search"
                name="q"
                enterKeyHint="search"
                autoComplete="off"
                className="min-w-0 w-full border-0 bg-transparent text-[16px] text-[#82868E] outline-none placeholder:text-[#82868E] sm:text-[18px]"
                placeholder="Search"
              />
            </div>
            <button type="button" aria-haspopup="listbox" aria-expanded={typeMenuOpen} onClick={() => setTypeMenuOpen((open) => !open)} className="flex h-[48px] shrink-0 items-center justify-center gap-[8px] rounded-[24px] bg-[#D4FB20] px-[12px] text-[16px] font-medium text-[#242528] sm:px-[20px] sm:text-[18px]">
              {searchType === "courses" ? "Courses" : "Creators"}
              <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {typeMenuOpen && <div role="listbox" aria-label="Search type" className="absolute right-0 top-full z-[60] mt-2 min-w-36 rounded-xl border border-[#CED0D3] bg-white p-1 text-left shadow-xl">
              {(["courses", "creators"] as const).map((type) => <button key={type} type="button" role="option" aria-selected={searchType === type} onClick={() => { setSearchType(type); setTypeMenuOpen(false); }} className="min-h-11 w-full rounded-lg px-4 py-2 text-left text-[16px] text-[#242528] hover:bg-[#F5F5F6]">
                {type === "courses" ? "Courses" : "Creators"}
              </button>)}
            </div>}
          </form>
        </div>
      </BlueGridBackground>

      <div className="mx-auto w-full max-w-[1200px] px-4 pt-[28px] xl:w-[1200px] xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-[8px] sm:gap-[16px]">
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

        <div className="mt-[32px] grid grid-cols-1 justify-items-center gap-5 pb-[60px] sm:grid-cols-2 lg:mt-[48px] lg:grid-cols-3 lg:gap-[40px]">
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

//done

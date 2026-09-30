"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { CourseCard } from "@/components/common/CourseCard";
import { CreatorHero, FilterButton } from "@/components/common/CourseDetailSectionComponents";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { creatorCourseList, creatorProfiles } from "@/data/courses";

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  );
}

function BarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 15h16M5 12V8m5 4V5m5 7v-5" />
    </svg>
  );
}

function CategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path d="M8 9h8M8 13h8" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 6h12M8 12h8M8 18h4" />
      <path d="M4 6h.01M4 12h.01M4 18h.01" />
    </svg>
  );
}

export default function CreatorPage() {
  const params = useParams();
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most relevant");

  const profile = useMemo(
    () => creatorProfiles.find((item) => item.id === String(params.id)) ?? creatorProfiles[0],
    [params.id],
  );

  const filteredCourses = useMemo(() => {
    return [...creatorCourseList]
      .filter(
        (course) =>
          (selectedLevel === "All" || course.level === selectedLevel) &&
          (selectedCategory === "All" || course.category === selectedCategory),
      )
      .sort((a, b) => {
        if (sortBy === "Most relevant") return b.rating - a.rating;
        return Number(b.price.replace("$", "")) - Number(a.price.replace("$", ""));
      });
  }, [selectedCategory, selectedLevel, sortBy]);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#242528]">
      <BlueGridBackground className="relative min-h-[560px] py-8 lg:h-[592px] lg:py-0">
        <Header />
        <CreatorHero profile={profile} />
      </BlueGridBackground>

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-[80px] pt-[40px] xl:w-[1200px] xl:px-0">
        <div className="mb-[40px] flex flex-wrap items-center justify-between gap-[16px]">
          <div className="flex flex-wrap items-center gap-[8px] sm:gap-[16px]">
            <FilterButton
              label="Filter"
              icon={<FilterIcon />}
              onClick={() => {
                setSelectedLevel("All");
                setSelectedCategory("All");
              }}
            />
            <FilterButton
              label="Level"
              icon={<BarIcon />}
              active={selectedLevel !== "All"}
              onClick={() =>
                setSelectedLevel((current) =>
                  current === "All" ? "Beginner" : current === "Beginner" ? "Intermediate" : "All",
                )
              }
            />
            <FilterButton
              label="Category"
              icon={<CategoryIcon />}
              active={selectedCategory !== "All"}
              onClick={() =>
                setSelectedCategory((current) =>
                  current === "All" ? "Design" : current === "Design" ? "Business" : "All",
                )
              }
            />
          </div>
          <FilterButton
            label={sortBy}
            icon={<SortIcon />}
            onClick={() => setSortBy((current) => (current === "Most relevant" ? "Price high to low" : "Most relevant"))}
          />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[40px]">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} variant="default" />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

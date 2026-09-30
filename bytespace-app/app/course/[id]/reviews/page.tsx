"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  CourseDetailPage,
  FilterPills,
  RatingSummaryCard,
  ReviewCard,
  TabBar,
} from "@/components/common/CourseDetailSectionComponents";
import { courseRatingSummary, courseReviews, courses, detailedCourse } from "@/data/courses";

const reviewFilters = [
  { label: "All rating", value: "all" },
  { label: "5", value: "5", icon: "star" as const },
  { label: "4", value: "4", icon: "star" as const },
  { label: "3", value: "3", icon: "star" as const },
  { label: "2", value: "2", icon: "star" as const },
  { label: "1", value: "1", icon: "star" as const },
];

export default function CourseReviewPage() {
  const params = useParams();
  const course = useMemo(
    () => courses.find((item) => item.slug === String(params.id)) ?? detailedCourse,
    [params.id],
  );

  if (!course) {
    return <main className="min-h-screen bg-[#FAFAFA] text-[#242528]">Course not found.</main>;
  }

  return <CourseReviewClient course={course} />;
}

function CourseReviewClient({ course }: { course: (typeof courses)[number] }) {
  const [selectedRating, setSelectedRating] = useState("all");
  const filteredReviews =
    selectedRating === "all"
      ? courseReviews
      : courseReviews.filter((review) => review.rating === Number(selectedRating));
  const courseSpecificReviews = course.slug === detailedCourse?.slug
    ? filteredReviews
    : filteredReviews.map((review, index) => {
        const topic = course.keyPoints?.[index % Math.max(course.keyPoints.length, 1)] ?? course.category ?? course.title;
        const description = course.description?.[index % Math.max(course.description.length, 1)] ?? `The course covers ${topic.toLowerCase()} in a clear, practical way.`;
        return { ...review, text: `${description} The lessons on ${topic.toLowerCase()} made ${course.title} especially useful and easy to apply.` };
      });

  return (
    <CourseDetailPage course={course} activeTab="Reviews">
        <div className="max-w-[760px] space-y-[24px]">
          <div>
            <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
              What Learners Are Saying
            </h2>
            <p className="mt-[12px] text-[16px] leading-[160%] text-[#4B4C53]">
              Discover what learners say about {course.title}. Read their ratings and experiences with this {course.category} course.
            </p>
          </div>

          <RatingSummaryCard ratings={courseRatingSummary} />

          <div>
            <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
              Individual Reviews:
            </h3>
            <div className="mt-[16px]">
              <FilterPills options={reviewFilters} active={selectedRating} onChange={setSelectedRating} />
            </div>
          </div>

          <div className="space-y-[24px]">
            {courseSpecificReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
    </CourseDetailPage>
  );
}

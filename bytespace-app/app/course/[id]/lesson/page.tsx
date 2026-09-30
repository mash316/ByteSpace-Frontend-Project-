import { notFound } from "next/navigation";
import {
  CourseDetailPage,
  LearningProgressCard,
  ModuleItem,
} from "@/components/common/CourseDetailSectionComponents";
import { courseModules, courses, detailedCourse } from "@/data/courses";

export default async function CourseLessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((item) => item.slug === id) ?? detailedCourse;

  if (!course) {
    notFound();
  }

  const modules = course.slug === detailedCourse?.slug
    ? courseModules
    : (course.keyPoints ?? []).map((point, index) => ({
        title: `Module ${index + 1}: ${point}`,
        description: course.description?.[index % Math.max(course.description?.length ?? 0, 1)] ?? `Practice ${point.toLowerCase()} through guided lessons for ${course.title}.`,
      }));

  return (
    <CourseDetailPage course={course} activeTab="Lessons">
        <div className="max-w-[760px] space-y-[24px]">
          <div>
            <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
              Explore the Modules
            </h2>
            <p className="mt-[12px] text-[16px] leading-[160%] text-[#4B4C53]">
              Explore the essential ideas behind {course.category} in {course.title}, with practical lessons and guided exercises.
            </p>
          </div>

          <div>
            <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
              Lesson List
            </h3>
            <div className="mt-[16px] space-y-[16px]">
              {modules.map((module) => (
                <ModuleItem key={module.title} title={module.title} description={module.description} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
              Lesson Content
            </h3>
            <p className="mt-[12px] text-[16px] leading-[160%] text-[#4B4C53]">
              Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
            </p>
          </div>

          <div>
            <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
              Lesson Progress Tracking
            </h3>
            <p className="mt-[12px] text-[16px] leading-[160%] text-[#4B4C53]">
              Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
            </p>
            <div className="mt-[20px]">
              <LearningProgressCard percent={55} />
            </div>
          </div>
        </div>
    </CourseDetailPage>
  );
}

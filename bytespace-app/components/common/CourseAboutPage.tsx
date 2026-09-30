import type { Course } from "@/data/courses";
import { CourseDetailPage } from "@/components/common/CourseDetailSectionComponents";

export function CourseAboutPage({ course }: { course: Course }) {
  const previewImages = course.sneakPeek?.length ? course.sneakPeek : Array(4).fill(course.image);
  const keyPoints = course.keyPoints ?? [];

  return (
    <CourseDetailPage course={course} activeTab="About">
      <div className="max-w-[760px]">
        <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
          About this course
        </h2>
        <div className="mt-[22px] space-y-[18px] text-[16px] leading-[26px] text-[#4B4C53]">
          {course.description?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <div className="mt-[40px]">
          <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
            Course preview
          </h3>
          <div className="mt-[20px] grid grid-cols-2 gap-[16px] md:grid-cols-4">
            {previewImages.slice(0, 4).map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`${course.category} course preview ${index + 1}`}
                className="h-[160px] w-full rounded-[16px] object-cover"
              />
            ))}
          </div>
        </div>

        <div className="mt-[40px]">
          <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">
            What you will learn
          </h3>
          <div className="mt-[20px] space-y-[12px]">
            {keyPoints.map((point) => (
              <div key={point} className="flex items-center gap-[8px] text-[16px] leading-[26px] text-[#4B4C53]">
                <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#003BE2] text-[12px] text-white">✓</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </CourseDetailPage>
  );
}
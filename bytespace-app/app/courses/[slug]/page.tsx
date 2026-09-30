import { notFound } from "next/navigation";
import { CourseAboutPage } from "@/components/common/CourseAboutPage";
import { courses } from "@/data/courses";

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) notFound();

  return <CourseAboutPage course={course} />;
}
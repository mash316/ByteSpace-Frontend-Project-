import { notFound } from "next/navigation";
import { CourseAboutPage } from "@/components/common/CourseAboutPage";
import { detailedCourse } from "@/data/courses";

export default function BuildDigitalAssetPage() {
  if (!detailedCourse) notFound();

  return <CourseAboutPage course={detailedCourse} />;
}
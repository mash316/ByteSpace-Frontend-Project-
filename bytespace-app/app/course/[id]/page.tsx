import { redirect } from "next/navigation";

export default async function CourseRootPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  redirect(`/course/${id}/lesson`);
}

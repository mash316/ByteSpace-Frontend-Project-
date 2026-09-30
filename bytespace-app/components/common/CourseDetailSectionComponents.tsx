import Link from "next/link";
import type { Course } from "@/data/courses";
import { Award, BookOpen, MessageCircle, Video } from "lucide-react";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function StarRating({
  value = 5,
  size = 24,
  className = "",
  filledColor = "#4B4C53",
  emptyColor = "#CED0D3",
}: {
  value?: number;
  size?: number;
  className?: string;
  filledColor?: string;
  emptyColor?: string;
}) {
  return (
    <div className={['flex items-center gap-[4px]', className].join(' ')} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const active = index < value;
        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            width={size}
            height={size}
            className="shrink-0"
            fill={active ? filledColor : emptyColor}
            aria-hidden="true"
          >
            <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 0 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
          </svg>
        );
      })}
    </div>
  );
}

export function ProgressBar({
  value,
  className = "",
  trackClassName = "bg-[#E5E6E8]",
  fillClassName = "bg-[#D4FB20]",
  height = 8,
}: {
  value: number;
  className?: string;
  trackClassName?: string;
  fillClassName?: string;
  height?: number;
}) {
  return (
    <div className={['relative overflow-hidden rounded-full', trackClassName, className].join(' ')} style={{ height }}>
      <div
        className={['absolute left-0 top-0 h-full rounded-full', fillClassName].join(' ')}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export function Avatar({
  src,
  alt,
  size = 52,
  className = "",
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={['overflow-hidden rounded-full bg-cover bg-center', className].join(' ')}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${src})`,
      }}
      aria-label={alt}
    />
  );
}

export function AvatarStack({
  items,
  extraLabel = '26+',
  size = 32,
  overlap = -8,
  badgeVariant = "lime",
}: {
  items: string[];
  extraLabel?: string;
  size?: number;
  overlap?: number;
  badgeVariant?: "dark" | "lime";
}) {
  return (
    <div className="flex items-center">
      {items.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="overflow-hidden rounded-full border border-white bg-cover bg-center"
          style={{
            width: size,
            height: size,
            marginLeft: index === 0 ? 0 : overlap,
            backgroundImage: `url(${src})`,
          }}
        />
      ))}
      <div
        className={[
          "flex items-center justify-center rounded-full border border-white text-[12px] font-medium",
          badgeVariant === "dark" ? "bg-[#040819] text-white" : "bg-[#D4FB20] text-[#242528]",
        ].join(" ")}
        style={{ width: size, height: size, marginLeft: overlap }}
      >
        {extraLabel}
      </div>
    </div>
  );
}

export function CourseHero({ course, className = "" }: { course: Course; className?: string }) {
  return (
    <div className={['w-[760px] text-[#F5F5F6]', className].join(' ')}>
      <div className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[36px] font-semibold leading-[43px] tracking-[-0.01em] text-[#F5F5F6]">
        {course.title}
      </div>
      <div className="mt-[12px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#F5F5F6]">
        {course.subtitle}
      </div>
      <div className="mt-[12px] text-[18px] leading-[160%] text-[#F1F4FE]">
        by <span className="text-[#D4FB20]">{course.creator}</span>
      </div>

      <div className="mt-[28px] flex flex-wrap items-center gap-[16px]">
        <div className="flex items-center gap-[8px] rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#003BE2]" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 15v4M9 11v8M14 7v12M19 3v16" />
          </svg>
          Intermediate
        </div>
        <div className="flex items-center gap-[8px] rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#003BE2]" fill="currentColor">
            <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 2.75 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
          </svg>
          4.8 (172 reviews)
        </div>
        <div className="flex items-center gap-[8px] rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#003BE2]" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 18c0-2.5 3.2-4 7-4s7 1.5 7 4v1H3v-1Zm15 0c.8-1.1 2.1-1.7 3.8-2.1.9-.2 1.2 1.1.2 1.9l-2.5 1.7h-1.5Z" />
          </svg>
          199 Students
        </div>
        <div className="ml-auto flex items-center gap-[8px] rounded-[24px] bg-[#D4FB20] px-[16px] py-[10px] text-[16px] font-medium text-[#242528]">
          <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#242528]" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 8l-6 4 6 4" />
            <path d="M19 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
          Share
        </div>
      </div>
    </div>
  );
}

export function CourseSidebarCard({ course }: { course: Course }) {
  const keyPoints = course.keyPoints ?? [];
  const ctaText = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";
  const sidebar = course.sidebar ?? {
    totalLessons: `${course.lessons} (${course.duration})`,
    previewLessons: keyPoints.slice(0, 3).map((title, index) => ({
      id: String(index + 1).padStart(2, "0"),
      title,
      duration: `${12 + index * 5} mins`,
    })),
    moreVideosText: `${Math.max(keyPoints.length - 3, 0)} more videos`,
    ctaText,
    price: course.price,
    billingPeriod: "/lifetime",
    includes: ["Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation"],
    instructor: {
      name: course.creator === "purepearl studio" ? "PurePearl Studio" : course.creator,
      title: "Professional Creator",
      avatarUrl: "/creator.png",
      bioText: ctaText,
    },
  };
  const includeIcons = [BookOpen, Video, Award, MessageCircle];

  return (
    <aside className="w-full rounded-[24px] border border-[#CED0D3] bg-white p-[24px] shadow-xl">
      <div className="mb-[20px] text-[20px] font-semibold text-[#242528]">{sidebar.totalLessons}</div>
      <div className="space-y-[12px]">
        {sidebar.previewLessons.map((lesson) => (
          <div key={lesson.id} className="grid grid-cols-[24px_minmax(0,1fr)_auto] items-start gap-[8px] text-[14px] leading-[150%] text-[#242528]">
            <span className="font-medium">{lesson.id}</span>
            <span className="font-medium">{lesson.title}</span>
            <span className="text-[13px] text-[#003BE2]">{lesson.duration}</span>
          </div>
        ))}
      </div>
      <p className="mt-[12px] text-[14px] font-medium text-[#003BE2]">{sidebar.moreVideosText}</p>

      <div className="mt-[24px] border-t border-[#CED0D3] pt-[24px]">
        <p className="text-[14px] leading-[160%] text-[#4B4C53]">{sidebar.ctaText}</p>
        <div className="mt-[12px] inline-flex items-baseline gap-[4px]">
          <span className="text-[36px] font-semibold text-[#003BE2]">{sidebar.price}</span>
          <span className="text-[14px] font-normal text-[#4B4C53]">{sidebar.billingPeriod}</span>
        </div>
        <div className="mt-[16px]">
          <PrimaryButton href="/this-page-does-not-exist" className="h-[46px] w-full rounded-[24px] bg-[#D4FB20] px-[24px] text-[18px] text-[#242528]">
            Enroll Now
          </PrimaryButton>
        </div>
      </div>

      <div className="mt-[24px] border-t border-[#CED0D3] pt-[24px]">
        <div className="mb-[16px] text-[20px] font-semibold text-[#242528]">This course include</div>
        <div className="space-y-[12px] text-[16px] text-[#4B4C53]">
          {sidebar.includes.map((item, index) => {
            const Icon = includeIcons[index % includeIcons.length];
            return (
            <div key={item} className="flex items-center gap-[8px]">
              <Icon className="h-[20px] w-[20px] shrink-0 text-[#003BE2]" strokeWidth={1.8} aria-hidden="true" />
              {item}
            </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[24px] border-t border-[#CED0D3] pt-[24px]">
        <div className="flex items-center gap-[12px]">
          <img src={sidebar.instructor.avatarUrl} alt={sidebar.instructor.name} className="h-[56px] w-[56px] shrink-0 rounded-full object-cover" />
          <div>
            <div className="text-[18px] font-medium text-[#242528]">{sidebar.instructor.name}</div>
            <div className="text-[16px] text-[#4B4C53]">{sidebar.instructor.title}</div>
          </div>
        </div>
        <div className="mt-[18px] text-[14px] leading-[160%] text-[#4B4C53]">{sidebar.instructor.bioText}</div>
        <Link href={`/creator/${course.creator.toLowerCase().replace(/\s+/g, "-")}`} className="mt-[18px] inline-flex h-[44px] items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white px-[18px] text-[16px] font-medium text-[#4B4C53]">
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}

export function CourseDetailHero({ course }: { course: Course }) {
  const heroImage = course.heroImage ?? course.image;

  return (
    <BlueGridBackground className="relative min-h-[957px]" overflowVisible>
      <Header />
      <div className="relative z-10 mx-auto w-[1200px] pt-[172px]">
        <div className="w-[760px] text-[#F5F5F6]">
          <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[36px] font-semibold leading-[43px] text-[#F5F5F6]">
            {course.title}
          </h1>
          <p className="mt-[12px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#F5F5F6]">
            {course.subtitle}
          </p>
          <p className="mt-[12px] text-[18px] leading-[160%] text-[#F1F4FE]">
            by <span className="text-[#D4FB20]">{course.creator}</span>
          </p>
          <div className="mt-[28px] flex flex-wrap items-center gap-[16px]">
            <span className="rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
              {course.level}
            </span>
            <span className="rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
              {course.rating} rating
            </span>
            <span className="rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
              199 Students
            </span>
          </div>
        </div>

        <div className="relative mt-[46px] flex items-start gap-[32px]">
          <div className="relative h-[486px] w-[760px] overflow-hidden rounded-[24px] bg-white/10 shadow-2xl">
            <img src={heroImage} alt={`${course.title} course`} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-white/60 bg-white/20 backdrop-blur-md">
                <svg viewBox="0 0 24 24" className="ml-[4px] h-[38px] w-[38px] text-white" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlueGridBackground>
  );
}

export function CourseDetailPage({
  course,
  activeTab,
  children,
}: {
  course: Course;
  activeTab: "About" | "Lessons" | "Reviews";
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#242528]">
      <CourseDetailHero course={course} />
      <section className="mx-auto grid w-[1200px] grid-cols-[760px_332px] items-start gap-[32px] pb-[80px]">
        <div className="pt-[78px]">
          <TabBar
            tabs={[
              { label: "About", href: `/courses/${course.slug}`, active: activeTab === "About" },
              { label: "Lessons", href: `/course/${course.slug}/lesson`, active: activeTab === "Lessons" },
              { label: "Reviews", href: `/course/${course.slug}/reviews`, active: activeTab === "Reviews" },
            ]}
          />
          <div className="mt-[40px]">{children}</div>
        </div>
        <div className="sticky top-[24px] z-30 -mt-[600px]">
          <CourseSidebarCard course={course} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function TabBar({ tabs }: { tabs: { label: string; href: string; active?: boolean }[] }) {
  return (
    <nav aria-label="Course sections" className="flex flex-wrap items-center gap-[28px] border-b border-[#CED0D3]">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          aria-current={tab.active ? "page" : undefined}
          className={[
            "inline-flex h-[48px] items-center justify-center border-b-2 bg-transparent px-[4px] text-[16px] transition-colors",
            tab.active ? "border-[#242528] font-semibold text-[#242528]" : "border-transparent font-medium text-[#4B4C53] hover:text-[#242528]",
          ].join(" ")}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}

export function ModuleItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex w-[723px] items-center gap-[13px] rounded-[24px] border border-[#CED0D3] bg-white p-[12px]">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] bg-[#D4FB20] text-[#242528]">
        <svg viewBox="0 0 24 24" className="h-[40px] w-[40px]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="M16 10.5v3M8 10.5v3M12 11v2" />
        </svg>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[16px] font-medium text-[#242528]">{title}</div>
        <div className="mt-[4px] text-[16px] leading-[160%] text-[#4B4C53]">{description}</div>
      </div>
    </div>
  );
}

export function LearningProgressCard({ percent = 55 }: { percent?: number }) {
  return (
    <div className="w-[723px] rounded-[16px] border border-[#CED0D3] bg-white p-[16px] shadow-sm">
      <div className="mb-[8px] text-[14px] font-medium text-[#242528]">Learning Progress</div>
      <div className="mb-[12px] text-[36px] font-semibold tracking-[-0.02em] text-[#242528]">{percent}%</div>
      <ProgressBar value={percent} className="h-[8px] w-[691px] max-w-full bg-[#E5E6E8]" fillClassName="bg-[#D4FB20]" />
    </div>
  );
}

export function RatingBarRow({ stars, count, fill }: { stars: number; count: number; fill: number }) {
  return (
    <div className="flex items-center gap-[16px]">
      <div className="flex w-[40px] justify-end text-[16px] font-medium text-[#4B4C53]">{count}</div>
      <div className="relative h-[8px] w-[282px] overflow-hidden rounded-full bg-[#E5E6E8]">
        <div className="absolute inset-y-0 left-0 rounded-full bg-[#D4FB20]" style={{ width: `${fill}px` }} />
      </div>
      <div className="flex w-[136px] items-center justify-start gap-[4px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg key={index} viewBox="0 0 24 24" className="h-[24px] w-[24px]" fill={index < stars ? "#4B4C53" : "#CED0D3"} aria-hidden="true">
            <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 0 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export function RatingSummaryCard({ ratings }: { ratings: { stars: number; count: number; fill: number }[] }) {
  return (
    <div className="flex w-[723px] items-center gap-[24px] rounded-[16px] border border-[#CED0D3] bg-white p-[40px]">
      <div className="flex h-[129px] w-[129px] flex-col items-center justify-center rounded-[8px] bg-[#D4FB20] text-[#242528]">
        <div className="text-[14px] font-medium">Ratings</div>
        <div className="mt-[8px] text-[36px] font-semibold">4.7</div>
      </div>
      <div className="flex-1 space-y-[8px]">
        {ratings.map(( rating) => (
          <RatingBarRow key={rating.stars} stars={rating.stars} count={rating.count} fill={rating.fill} />
        ))}
      </div>
    </div>
  );
}

export function FilterPills({
  options,
  active,
  onChange,
}: {
  options: { label: string; value: string; icon?: "star" | "filter" | "sort" | "bar" | "category" }[];
  active: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-[16px]">
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            className={[
              "inline-flex items-center gap-[8px] rounded-[24px] border px-[16px] py-[12px] text-[16px] font-medium",
              isActive ? "border-transparent bg-[#D4FB20] text-[#242528]" : "border-[#CED0D3] bg-[#F5F5F6] text-[#4B4C53]",
            ].join(" ")}
            type="button"
            onClick={() => onChange?.(option.value)}
          >
            {option.icon === "star" && (
              <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" fill="currentColor" aria-hidden="true">
                <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 0 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
              </svg>
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function ReviewCard({ review }: { review: {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
} }) {
  return (
    <article className="w-[723px] rounded-[24px] border border-[#CED0D3] bg-white p-[40px]">
      <div className="flex items-start justify-between gap-[24px]">
        <div className="flex items-center gap-[12px]">
          <Avatar src={review.avatar} alt={review.name} size={52} />
          <div>
            <div className="text-[18px] font-medium text-[#242528]">{review.name}</div>
            <div className="text-[16px] text-[#4B4C53]">{review.role}</div>
          </div>
        </div>
        <div className="text-[16px] text-[#4B4C53]">{review.date}</div>
      </div>

      <div className="mt-[24px]">
        <StarRating value={review.rating} size={24} />
      </div>

      <p className="mt-[24px] text-[16px] leading-[160%] text-[#4B4C53]">“{review.text}”</p>
    </article>
  );
}

export function CreatorHero({ profile }: { profile: { id: string; name: string; role: string; title: string; tagline: string; bio: string[]; avatar: string } }) {
  return (
    <div className="mx-auto w-[1200px] pt-[172px]">
      <div className="flex items-center gap-[24px]">
        <Avatar src={profile.avatar} alt={profile.name} size={96} className="rounded-[24px]" />
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[16px]">
            <div className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
              {profile.name}
            </div>
            <span className="inline-flex items-center justify-center rounded-[24px] bg-[#D4FB20] px-[16px] py-[8px] text-[16px] font-medium text-[#242528]">
              {profile.role}
            </span>
          </div>
          <div className="text-[18px] leading-[160%] text-[#F5F5F6]">{profile.tagline}</div>
        </div>
      </div>

      <div className="mt-[24px] space-y-[16px] text-[18px] leading-[160%] text-[#F5F5F6]">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-[32px] flex items-center justify-between gap-[16px]">
        <div className="flex items-center gap-[16px]">
          <StatPill number="3" label="Products" />
          <StatPill number="12" label="Followers" />
        </div>
        <button className="flex h-[46px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-[24px] text-[18px] font-medium text-[#040819]">
          Follow
        </button>
      </div>
    </div>
  );
}

export function StatPill({ number, label }: { number: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-[8px] rounded-[24px] bg-white px-[24px] py-[12px] text-[#242528]">
      <span className="text-[18px] font-medium text-[#003BE2]">{number}</span>
      <span className="text-[18px] font-medium text-[#242528]">{label}</span>
    </div>
  );
}

export function FilterButton({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-[8px] rounded-[24px] border px-[16px] py-[12px] text-[16px] font-medium",
        active ? "border-transparent bg-[#D4FB20] text-[#242528]" : "border-[#CED0D3] bg-white text-[#4B4C53]",
      ].join(" ")}
    >
      {icon}
      {label}
    </button>
  );
}

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#242528]">
      <div className="relative overflow-hidden bg-[#003BE2] text-[#F5F5F6]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.12)_2px,transparent_2px)] bg-[length:120px_120px]" />
        <header className="relative z-20 h-[120px]">
          <div className="mx-auto flex w-[1200px] items-center justify-between pt-[33px]">
            <Link href="/" className="flex items-center gap-[16px] text-[#F5F5F6]">
              <img src="/logo2.png" alt="" aria-hidden="true" className="h-[31.5px] w-[28.88px] object-contain" />
              <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[24px] font-bold leading-[30px] tracking-[-0.02em]">
                ByteSpace
              </span>
            </Link>
            <nav className="hidden items-center gap-[24px] text-[16px] font-medium text-[#F5F5F6] md:flex">
              <Link href="/">Home</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/creator/purepearl-studio">Creators</Link>
            </nav>
            <div className="flex items-center gap-[24px] text-[16px] font-medium text-[#F5F5F6]">
              <Link href="/sign-in">Sign In</Link>
              <Link href="/sign-up" className="rounded-[24px] border border-white/20 px-[20px] py-[10px]">Join Us</Link>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto h-[957px] w-[1200px] pb-[120px]">
          <div className="absolute left-1/2 top-[160px] -translate-x-1/2 text-center font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[480px] font-semibold leading-[100%] tracking-[-0.01em]" style={{ background: "linear-gradient(180deg, #D4FB20 0%, rgba(212,251,32,0.96) 25%, rgba(212,251,32,0.81) 50.5%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)", WebkitBackgroundClip: "text", color: "transparent" }}>
            404
          </div>

          <div className="relative z-10 mx-auto flex max-w-[935px] -translate-y-[-10px] flex-col items-center gap-[32px] pt-[505px] text-center">
            <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[72px] font-semibold leading-[120%] tracking-[-0.01em] text-[#FFFFFF]">
              The page you are looking for doesn&apos;t exist
            </h1>
            <p className="max-w-[820px] text-[18px] leading-[160%] text-[#E5E6E8]">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link href="/" className="inline-flex h-[46px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-[24px] text-[18px] font-medium text-[#242528]">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-white" />
    </main>
  );
}

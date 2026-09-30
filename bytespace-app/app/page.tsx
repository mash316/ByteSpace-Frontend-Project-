import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { CourseCard } from "@/components/common/CourseCard";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { courses } from "@/data/courses";
import { Building2, Camera, Code2, DraftingCompass, Laptop, Megaphone } from "lucide-react";

const logos = [
  { kind: "wave", label: "Logoipsum" },
  { kind: "sun", label: "Logoipsum" },
  { kind: "slash", label: "Logoipsum" },
  { kind: "clover", label: "Logoipsum" },
  { kind: "coil", label: "Logoipsum" },
];
const categoryRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

const learningCategories = [
  { label: "Design", Icon: DraftingCompass },
  { label: "Development", Icon: Code2 },
  { label: "IT & Software", Icon: Laptop },
  { label: "Business", Icon: Building2 },
  { label: "Marketing", Icon: Megaphone },
  { label: "Photography", Icon: Camera },
];

function BrandLogoMark({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 32 32" className="h-[32px] w-[32px] shrink-0 text-[#82868E]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "wave" && (
        <>
          <circle cx="16" cy="16" r="12" />
          <path d="M7 17c2.4-5 5-5 7.4 0s5 5 8.6 0M10 11c1.7-2.8 3.5-2.8 5.2 0s3.5 2.8 5.2 0" />
        </>
      )}
      {kind === "sun" && (
        <>
          <circle cx="16" cy="16" r="5" />
          <path d="M16 2.5v4M16 25.5v4M2.5 16h4M25.5 16h4M6.45 6.45l2.83 2.83m13.44 13.44 2.83 2.83m0-19.1-2.83 2.83M9.28 22.72l-2.83 2.83" />
        </>
      )}
      {kind === "slash" && (
        <>
          <circle cx="16" cy="16" r="12" />
          <path d="M10 22V10l12 12V10" />
        </>
      )}
      {kind === "clover" && (
        <>
          <circle cx="16" cy="8" r="5" />
          <circle cx="24" cy="16" r="5" />
          <circle cx="16" cy="24" r="5" />
          <circle cx="8" cy="16" r="5" />
        </>
      )}
      {kind === "coil" && (
        <path d="M16 16c0-2.2 3.5-2.2 3.5 0s-7 2.2-7-1.2 10.5-3.4 10.5 1.2-3.5 5.5-7 5.5-7-2.1-7-6.2 3.5-7.5 8-7.5 9 3.3 9 8.5" />
      )}
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[24px] w-[24px] text-[#82868E]" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function LearnPathStat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[36px] font-medium leading-[44px] text-[#003BE2]">{number}</div>
      <div className="mt-[4px] text-[18px] text-[#4B4C53]">{label}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#242528]">
      <BlueGridBackground
        className="relative min-h-[760px] bg-top bg-no-repeat pb-[clamp(64px,8vw,120px)]"
        style={{
          backgroundImage: "url('/home-hero.jpeg')",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
          minHeight: "max(760px, 64.7vw)",
        }}
        showGrid={false}
        overflowVisible
      >
        <Header />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pt-[112px] sm:px-6">
          <div className="mx-auto max-w-[780px] text-center">
            <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(32px,4vw,56px)] font-semibold leading-[1.12] text-[#F5F5F6]">
              Get Access to Hundreds<br />Courses Available
            </h1>
            <p className="mx-auto mt-[24px] max-w-[845px] text-[16px] font-normal leading-[160%] text-[#E5E6E8]">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>

          <div className="mt-[32px] flex justify-center">
            <form action="/courses" method="get" className="flex w-full max-w-[480px] items-center gap-[12px] rounded-[24px] bg-white p-[6px] shadow-md">
              <div className="flex flex-1 items-center gap-[12px] rounded-[24px] bg-white px-[20px] py-[14px]">
                <SearchIcon />
                <input
                  name="q"
                  className="w-full border-0 bg-transparent text-[18px] text-[#82868E] outline-none placeholder:text-[#82868E]"
                  placeholder="Course, topic, creator"
                  aria-label="Search courses, topics, or creators"
                />
              </div>
              <button type="submit" className="h-[44px] w-[92px] shrink-0 rounded-[24px] bg-[#D4FB20] text-[16px] font-medium text-[#242528]">
                Search
              </button>
            </form>
          </div>

        </div>
      </BlueGridBackground>

      <section className="bg-[#F5F5F6] py-[80px]">
        <div className="mx-auto grid w-[1132px] grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div key={`${logo.kind}-${index}`} className="flex items-center justify-center gap-[10px] text-[#82868E]">
              <BrandLogoMark kind={logo.kind} />
              <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[21px] font-semibold">{logo.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[1200px] pb-[50px] pt-[96px] text-center">
        <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819]">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="mx-auto mt-[16px] max-w-[917px] text-[18px] leading-[160%] text-[#82868E]">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        <div className="mt-[28px] flex flex-wrap items-center justify-center gap-[16px]">
          {categoryRows.flat().map((tab, index) => (
            <button
              key={index}
              className={[
                "rounded-[24px] px-[16px] py-[12px] text-[16px] font-medium",
                tab === "Featured" || tab === "+ More" ? "bg-[#D4FB20] text-[#242528]" : "bg-[#F5F5F6] text-[#4B4C53]",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-[48px] grid grid-cols-3 gap-[40px]">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} variant="default" />
          ))}
        </div>
      </section>

      <section className="mx-auto w-[1200px] pb-[100px] pt-[40px] text-center">
        <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-[16px] max-w-[960px] text-[18px] leading-[160%] text-[#82868E]">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        <div className="mt-[48px] grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {learningCategories.map(({ label, Icon }) => (
            <div key={label} className="flex min-w-0 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-6 text-center">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#c6f600] text-[#242528]">
                <Icon className="h-6 w-6 stroke-[1.8]" aria-hidden="true" />
              </div>
              <div className="mt-[12px] text-[16px] font-medium leading-[120%] text-[#242528]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FAFAFA] py-[100px]">
        <div className="absolute left-[-180px] top-[-80px] h-[1137px] w-[1137px] rounded-full bg-[#D4FB20] opacity-[0.12] blur-[50px]" />
        <div className="absolute bottom-[-80px] left-[-80px] h-[672px] w-[672px] rounded-full bg-[#D4FB20] opacity-[0.14] blur-[60px]" />
        <div className="absolute right-[-80px] top-[120px] h-[360px] w-[360px] rounded-full bg-[#003BE2] opacity-[0.08] blur-[60px]" />

        <div className="relative mx-auto w-[1258px] space-y-[72px]">
          <div className="flex items-center justify-between gap-[63px]">
            <div className="w-[574px]">
              <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="mt-[16px] w-[477px] text-[18px] leading-[160%] text-[#4B4C53]">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              <div className="mt-[56px] flex gap-[56px]">
                <LearnPathStat number="12K" label="Students" />
                <LearnPathStat number="70+" label="Courses" />
                <LearnPathStat number="16" label="Creators" />
              </div>
            </div>

            <div className="relative h-[552px] w-[621px]">
              <div className="absolute left-[0px] top-[60px] h-[440px] w-[360px] rounded-[24px] bg-white p-[12px] shadow-2xl">
                <img className="h-full w-full rounded-[18px] object-contain" src="/home-down1.png" alt="Students and learning progress" />
              </div>
              <div className="absolute left-[345px] top-[213px] flex h-[138px] w-[232px] items-center rounded-[16px] bg-white p-[16px] shadow-xl">
                <div className="w-full">
                  <div className="text-[14px] font-medium text-[#4B4C53]">Learning Progress</div>
                  <div className="mt-[8px] text-[48px] font-semibold text-[#242528]">55%</div>
                  <div className="mt-[8px] h-[8px] w-[200px] overflow-hidden rounded-full bg-[#F6F6F6]">
                    <div className="h-full w-[112px] rounded-full bg-[#D4FB20]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-[79px]">
            <div className="relative h-[596px] w-[541px]">
              <img className="h-full w-full object-contain" src="/girl.png" alt="Creator working with a tablet" />
            </div>

            <div className="w-[580px]">
              <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                Create &amp; Manage Courses Easily.
              </h2>
              <p className="mt-[16px] text-[18px] leading-[160%] text-[#242528]">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              <div className="mt-[28px] space-y-[16px]">
                {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item) => (
                  <div key={item} className="flex items-center gap-[8px] text-[18px] font-medium text-[#242528]">
                    <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#003BE2] text-[12px] text-white">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlueGridBackground className="relative h-[488px]">
        <div className="relative z-10 mx-auto flex h-full w-[964px] flex-col items-center justify-center text-center">
          <h2 className="max-w-[710px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mt-[20px] max-w-[900px] text-[18px] leading-[160%] text-[#F5F5F6]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <div className="mt-[40px]">
            <PrimaryButton href="/sign-up">Join as Creator</PrimaryButton>
          </div>
        </div>
      </BlueGridBackground>

      <section className="bg-[#FAFAFA] py-[90px]">
        <div className="mx-auto flex w-[1204px] items-start gap-[43px]">
          <div className="w-[577px]">
            <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#000000]">
              Discover What Our Community Is Saying
            </h2>
            <p className="mt-[24px] text-[18px] leading-[160%] text-[#4F4F4F]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-[72px] flex w-[1204px] gap-[41px]">
          {[
            { name: 'Sarah M.', role: 'Enthusiastic Learner', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', quote: 'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.' },
            { name: 'James L.', role: 'Lifelong Learner', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', quote: 'I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.' },
            { name: 'Alex B.', role: 'Inspired Creator', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', quote: 'As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally.' },
          ].map((person) => (
            <div key={person.name} className="w-[374px] rounded-[24px] border border-[#CED0D3] bg-white p-[24px] shadow-sm">
              <div className="flex items-center gap-[16px]">
                <img src={person.avatar} alt={person.name} className="h-[80px] w-[80px] rounded-full object-cover" />
                <div>
                  <div className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#000000]">{person.name}</div>
                  <div className="mt-[4px] text-[18px] text-[#003BE2]">{person.role}</div>
                </div>
              </div>
              <p className="mt-[24px] text-[18px] leading-[160%] text-[#4F4F4F]">{person.quote}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

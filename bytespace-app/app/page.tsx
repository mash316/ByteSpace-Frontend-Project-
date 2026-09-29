import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { CourseCard } from "@/components/common/CourseCard";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { courses } from "@/data/courses";

const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];
const categoryRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

const learningCategories = [
  { label: "Design", icon: "✏️" },
  { label: "Development", icon: "💻" },
  { label: "IT & Software", icon: "🖥️" },
  { label: "Business", icon: "🏢" },
  { label: "Marketing", icon: "📣" },
  { label: "Photography", icon: "📷" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[24px] w-[24px] text-[#82868E]" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-[#D4FB20]" fill="currentColor">
      <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 2.75 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
    </svg>
  );
}

function FloatingLearningProgress() {
  return (
    <div className="absolute left-[842px] top-[651px] h-[131px] w-[232px] rounded-[16px] bg-white p-[16px] shadow-lg">
      <div className="mb-[8px] text-[14px] font-medium text-[#4B4C53]">Learning Progress</div>
      <div className="mb-[12px] text-[48px] font-semibold leading-none tracking-[-0.02em] text-[#242528]">55%</div>
      <div className="h-[8px] w-[200px] overflow-hidden rounded-full bg-[#F6F6F6]">
        <div className="h-full w-[112px] rounded-full bg-[#D4FB20]" />
      </div>
    </div>
  );
}

function FloatingUIUX() {
  return (
    <div className="absolute left-[404px] top-[639px] h-[70px] w-[208px] rounded-[16px] bg-white p-[12px] shadow-lg">
      <div className="text-[16px] font-medium text-[#242528]">UI/UX Design</div>
      <div className="mt-[4px] flex items-center gap-[8px] text-[12px] text-[#82868E]">
        <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#D4FB20]" />
        <span>200 Courses • 1000+ Students</span>
      </div>
    </div>
  );
}

function FloatingHappyStudents() {
  return (
    <div className="absolute left-[328px] top-[837px] h-[121px] w-[258px] rounded-[16px] bg-[#D4FB20] p-[16px] shadow-lg">
      <div className="mb-[8px] text-[14px] font-medium text-[#242528]">Happy Students</div>
      <div className="mb-[12px] flex items-center gap-[10px]">
        <div className="flex items-center gap-[4px] text-[18px] font-medium text-[#242528]">4.5</div>
        <div className="flex gap-[4px] text-[#242528]">{Array.from({ length: 5 }).map((_, idx) => <StarIcon key={idx} />)}</div>
        <div className="text-[12px] font-bold text-[#242528]">(240)</div>
      </div>
      <div className="flex items-center">
        {Array.from({ length: 7 }).map((_, idx) => (
          <div
            key={idx}
            className={['h-[43px] w-[43px] rounded-full border-2 border-[#D4FB20]', idx > 0 ? '-ml-[16px]' : ''].join(' ')}
            style={{
              background: idx === 6 ? '#242528' : "url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80) center / cover no-repeat",
            }}
          />
        ))}
        <div className="ml-[-16px] flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#242528] text-[12px] font-bold text-white">2K+</div>
      </div>
    </div>
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
      <BlueGridBackground className="relative h-[1024px]">
        <Header />

        <div className="absolute left-1/2 top-[582px] h-[1149px] w-[1149px] -translate-x-1/2 rounded-full border-[320px] border-[#CBFC01] opacity-95" />

        <div className="relative z-10 mx-auto w-[1200px] pt-[169px]">
          <div className="mx-auto max-w-[935px] text-center">
            <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[72px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="mx-auto mt-[20px] max-w-[845px] text-[18px] font-normal leading-[160%] text-[#E5E6E8]">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>

          <div className="mt-[32px] flex justify-center">
            <div className="flex w-[581px] items-center gap-[16px] rounded-[24px] bg-white p-[8px] shadow-md">
              <div className="flex flex-1 items-center gap-[12px] rounded-[24px] bg-white px-[20px] py-[14px]">
                <SearchIcon />
                <input
                  className="w-full border-0 bg-transparent text-[18px] text-[#82868E] outline-none placeholder:text-[#82868E]"
                  placeholder="Course, topic, creator"
                />
              </div>
              <button className="h-[46px] w-[104px] rounded-[24px] bg-[#D4FB20] text-[16px] font-medium text-[#242528]">
                Search
              </button>
            </div>
          </div>

          <div className="relative mt-[40px] flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Student with laptop"
              className="h-[541px] w-[578px] rounded-[30px] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            />
          </div>

          <FloatingUIUX />
          <FloatingLearningProgress />
          <FloatingHappyStudents />
        </div>
      </BlueGridBackground>

      <section className="bg-[#F5F5F6] py-[80px]">
        <div className="mx-auto flex w-[1132px] justify-between gap-[72px]">
          {logos.map((logo, index) => (
            <div key={index} className="text-[26px] font-semibold text-[#82868E] opacity-90">
              {logo}
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

        <div className="mt-[48px] grid grid-cols-3 gap-[40px]">
          {learningCategories.map(({ label, icon }) => (
            <div key={label} className="flex h-[167px] w-[167px] flex-col items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white p-[20px] text-center">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#D4FB20] text-[28px] text-[#242528]">
                {icon}
              </div>
              <div className="mt-[12px] text-[20px] font-medium leading-[120%] text-[#242528]">{label}</div>
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
                <img className="h-full w-full rounded-[18px] object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80" alt="Course preview" />
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
              <img className="absolute left-[0px] top-[0px] h-[596px] w-[435px] rounded-[24px] object-cover shadow-2xl" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80" alt="Woman using tablet" />
              <div className="absolute left-[0px] top-[44px] h-[119px] w-[232px] rounded-[16px] bg-[#003BE2] p-[16px] text-white shadow-xl">
                <div className="text-[16px] font-medium text-[#F5F5F6]">Total Revenue</div>
                <div className="mt-[4px] text-[10px] text-[#F5F5F6]">July 1-28</div>
                <div className="mt-[8px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[24px] font-semibold leading-[32px] text-[#F5F5F6]">$120.29</div>
                <div className="mt-[8px] inline-flex rounded-full bg-[#CBFC01] px-[10px] py-[4px] text-[10px] font-medium text-[#242528]">+12$</div>
              </div>
              <div className="absolute left-[0px] top-[194px] h-[135px] w-[134px] rounded-[16px] bg-[#003BE2] p-[16px] text-white shadow-xl">
                <div className="text-[16px] text-[#F5F5F6]">Year to Date</div>
                <div className="mt-[6px] text-[12px] text-[#F5F5F6]">2023</div>
                <div className="mt-[10px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[24px] font-semibold">$1,200.38</div>
                <div className="mt-[8px] inline-flex rounded-full bg-[#CBFC01] px-[10px] py-[4px] text-[10px] font-medium text-[#242528]">+12$</div>
              </div>
              <div className="absolute left-[283px] top-[413px] flex h-[123px] w-[258px] items-center rounded-[16px] bg-[#D4FB20] p-[16px] shadow-xl">
                <div className="w-full">
                  <div className="mb-[6px] text-[14px] font-medium text-[#242528]">Happy Students</div>
                  <div className="mb-[8px] flex items-center gap-[8px]">
                    <span className="text-[18px] font-medium text-[#242528]">4.5</span>
                    <StarIcon />
                    <span className="text-[12px] font-bold text-[#242528]">(240)</span>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: 7 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={['h-[43px] w-[43px] rounded-full border-2 border-[#D4FB20]', idx > 0 ? '-ml-[16px]' : ''].join(' ')}
                        style={{
                          background: "url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80) center / cover no-repeat",
                        }}
                      />
                    ))}
                    <div className="ml-[-16px] flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#242528] text-[12px] font-bold text-white">2K+</div>
                  </div>
                </div>
              </div>
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
            { name: 'Sarah M.', role: 'Enthusiastic Learner', quote: 'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.' },
            { name: 'James L.', role: 'Lifelong Learner', quote: 'I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.' },
            { name: 'Alex B.', role: 'Inspired Creator', quote: 'As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally.' },
          ].map((person) => (
            <div key={person.name} className="w-[374px] rounded-[24px] border border-[#CED0D3] bg-white p-[24px] shadow-sm">
              <div className="flex items-center gap-[16px]">
                <div className="h-[80px] w-[80px] rounded-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80')] bg-cover bg-center" />
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

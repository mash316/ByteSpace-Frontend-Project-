import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { detailedCourse } from "@/data/courses";

const course = detailedCourse;

function IconPeople() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#003BE2]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 18c0-2.5 3.2-4 7-4s7 1.5 7 4v1H3v-1Zm15 0c.8-1.1 2.1-1.7 3.8-2.1.9-.2 1.2 1.1.2 1.9l-2.5 1.7h-1.5Z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#003BE2]" fill="currentColor">
      <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 2.75 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
    </svg>
  );
}

function IconSignal() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#003BE2]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 15v4M9 11v8M14 7v12M19 3v16" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#242528]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 8l-6 4 6 4" />
      <path d="M19 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

export default function CourseDetailPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#242528]">
      <BlueGridBackground className="relative h-[957px]">
        <Header />

        <div className="relative z-10 mx-auto w-[1200px] pt-[172px]">
          <div className="w-[760px] text-[#F5F5F6]">
            <div className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[36px] font-semibold leading-[43px] tracking-[-0.01em] text-[#F5F5F6]">
              Build Digital Asset: A Comprehensive Guide
            </div>
            <div className="mt-[12px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#F5F5F6]">
              Unlock the Power of Digital Creation with Expert Guidance
            </div>
            <div className="mt-[12px] text-[18px] leading-[160%] text-[#F1F4FE]">
              by <span className="text-[#D4FB20]">purepearl studio</span>
            </div>

            <div className="mt-[28px] flex items-center gap-[16px]">
              <div className="flex items-center gap-[8px] rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
                <IconSignal />
                Intermediate
              </div>
              <div className="flex items-center gap-[8px] rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
                <IconStar />
                4.8 172 reviews
              </div>
              <div className="flex items-center gap-[8px] rounded-[24px] border border-white/30 bg-white/10 px-[16px] py-[8px] text-[16px] font-medium text-[#242528] backdrop-blur-sm">
                <IconPeople />
                199 Students
              </div>
              <div className="ml-auto flex items-center gap-[8px] rounded-[24px] bg-[#D4FB20] px-[16px] py-[10px] text-[16px] font-medium text-[#242528]">
                <IconShare />
                Share
              </div>
            </div>
          </div>

          <div className="relative mt-[46px] flex items-start gap-[32px]">
            <div className="w-[760px] overflow-hidden rounded-[24px] bg-white/10 shadow-2xl">
              <div className="relative h-[486px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-white/60 bg-[#F5F2FF]/20 backdrop-blur-md">
                    <svg viewBox="0 0 24 24" className="ml-[4px] h-[38px] w-[38px] text-[#F5F2FF]" fill="currentColor">
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <aside className="w-[318px] rounded-[24px] border border-[#CED0D3] bg-white p-[24px] shadow-xl">
              <div className="mb-[24px] text-[20px] font-semibold text-[#242528]">112 Lessons (24 hours)</div>
              <div className="space-y-[12px]">
                {[
                  ["01 Introduction to Digital Assets", "12 mins"],
                  ["02 Design Principles for Impacts", "21 mins"],
                  ["03 Advanced Techniques in Digital Creation", "16 mins"],
                ].map(([title, time]) => (
                  <div key={title} className="flex items-center justify-between gap-[12px] text-[16px] text-[#242528]">
                    <span className="font-medium">{title}</span>
                    <span className="text-[14px] text-[#003BE2]">{time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-[24px] border-t border-[#CED0D3] pt-[24px]">
                <p className="text-[16px] leading-[26px] text-[#4B4C53]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>
                <div className="mt-[16px] text-[36px] font-semibold text-[#003BE2]">$25</div>
                <div className="mt-[16px]">
                  <PrimaryButton href="#" className="h-[46px] w-full rounded-[24px] px-[24px] text-[18px]">Enroll Now</PrimaryButton>
                </div>
              </div>

              <div className="mt-[24px] border-t border-[#CED0D3] pt-[24px]">
                <div className="mb-[16px] text-[20px] font-semibold text-[#242528]">This course include</div>
                <div className="space-y-[12px] text-[16px] text-[#4B4C53]">
                  {[
                    "Learning Resources",
                    "Quality Lesson Videos",
                    "Certificate of Completion",
                    "Private Consultation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-[8px]">
                      <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#003BE2] text-[12px] text-white">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-[24px] border-t border-[#CED0D3] pt-[24px]">
                <div className="flex items-center gap-[12px]">
                  <div className="h-[56px] w-[56px] rounded-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80')] bg-cover bg-center" />
                  <div>
                    <div className="text-[18px] font-medium text-[#242528]">purepearl studio</div>
                    <div className="text-[16px] text-[#4B4C53]">Course Creator</div>
                  </div>
                </div>
                <div className="mt-[18px] text-[16px] leading-[26px] text-[#4B4C53]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </div>
                <button className="mt-[18px] rounded-[24px] border border-[#CED0D3] bg-white px-[18px] py-[10px] text-[16px] font-medium text-[#4B4C53]">
                  See Full Profile
                </button>
              </div>
            </aside>
          </div>
        </div>
      </BlueGridBackground>

      <div className="mx-auto w-[1200px] pt-[36px] pb-[80px]">
        <div className="flex gap-[28px] border-b border-[#CED0D3] pb-[0px]">
          {['About', 'Lessons', 'Reviews'].map((tab, index) => (
            <button
              key={tab}
              className={[
                "rounded-t-[24px] px-[18px] py-[14px] text-[16px] font-medium",
                index === 0 ? "bg-[#242528] text-white" : "bg-transparent text-[#4B4C53]",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-[40px] max-w-[760px]">
          <h2 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">Description</h2>
          <div className="mt-[22px] space-y-[18px] text-[16px] leading-[26px] text-[#4B4C53]">
            {course?.description?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-[40px]">
            <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">Sneak Peak</h3>
            <div className="mt-[20px] grid grid-cols-4 gap-[20px]">
              {course?.sneakPeek?.map((image, index) => (
                <img key={index} src={image} alt="Sneak peek preview" className="h-[200px] w-full rounded-[24px] object-cover" />
              ))}
            </div>
          </div>

          <div className="mt-[40px]">
            <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold text-[#242528]">Key Points</h3>
            <div className="mt-[20px] space-y-[12px]">
              {course?.keyPoints?.map((point) => (
                <div key={point} className="flex items-center gap-[8px] text-[16px] leading-[26px] text-[#4B4C53]">
                  <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#003BE2] text-[12px] text-white">✓</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

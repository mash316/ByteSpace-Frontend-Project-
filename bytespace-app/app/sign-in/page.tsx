import Link from "next/link";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { CourseCard } from "@/components/common/CourseCard";
import { courses } from "@/data/courses";

const buildCourse = courses.find((course) => course.slug === "build-digital-asset")!;
const powerCourse = courses.find((course) => course.slug === "the-power-of-big-data")!;

function LogoMark() {
  return (
    <div className="relative h-[31.5px] w-[28.88px]">
      <div className="absolute left-0 top-0 h-[31.5px] w-[13.5px] rounded-[7px] bg-[#D4FB20]" />
      <div className="absolute right-0 top-[10.5px] h-[21px] w-[13.5px] rounded-[7px] bg-[#D4FB20]" />
      <div className="absolute bottom-0 left-[7px] h-[15.75px] w-[14.88px] rounded-[5px] bg-[#D4FB20] opacity-90" />
    </div>
  );
}

function AuthIllustration() {
  return (
    <div className="relative h-[780px] w-[520px]">
      <div className="absolute left-[0px] top-[260px]">
        <CourseCard course={buildCourse} variant="auth" />
      </div>
      <div className="absolute left-[110px] top-[190px]">
        <CourseCard course={powerCourse} variant="auth" />
      </div>
      <div className="absolute left-[220px] top-[540px] h-[123px] w-[258px] rounded-[16px] bg-[#D4FB20] p-[16px] shadow-xl">
        <div className="mb-[8px] text-[14px] font-medium text-[#242528]">Happy Students</div>
        <div className="mb-[8px] flex items-center gap-[8px]">
          <span className="text-[18px] font-medium text-[#242528]">4.5</span>
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-[#242528]" fill="currentColor">
            <path d="m12 2.75 2.77 5.61 6.18.9-4.47 4.35 1.06 6.15L12 2.75 6.46 19.76l1.06-6.15-4.47-4.35 6.18-.9L12 2.75Z" />
          </svg>
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
  );
}

export default function SignInPage() {
  return (
    <main className="h-screen bg-[#003BE2]">
      <BlueGridBackground className="relative h-full overflow-hidden">
        <div className="absolute left-[122px] top-[28px] z-20">
          <LogoMark />
        </div>

        <div className="relative z-10 mx-auto flex w-[1200px] pt-[120px]">
          <div className="w-[480px] pt-[20px] text-[#F5F5F6]">
            <div className="mb-[16px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold leading-[120%] tracking-[-0.01em]">
              Sign in with ease
            </div>
            <p className="max-w-[475px] text-[18px] leading-[160%] text-[#F5F5F6]">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          <div className="ml-[80px]">
            <AuthIllustration />
          </div>

          <div className="ml-[28px] flex h-[784px] w-[579px] items-center justify-center rounded-[24px] bg-white p-[0px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            <div className="w-[453px]">
              <div className="text-[18px] font-medium text-[#003BE2]">Sign In</div>
              <h1 className="mt-[8px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[44px] font-semibold leading-[53px] tracking-[-0.01em] text-[#242528]">
                Welcome Back
              </h1>

              <div className="mt-[40px] space-y-[24px]">
                <div>
                  <label className="mb-[8px] block text-[14px] font-medium text-[#242528]">Email</label>
                  <input className="h-[52px] w-full rounded-[12px] border border-[#E5E6E8] bg-white px-[24px] text-[18px] text-[#82868E] outline-none" placeholder="designer@example.com" />
                </div>
                <div>
                  <label className="mb-[8px] block text-[14px] font-medium text-[#242528]">Password</label>
                  <input type="password" className="h-[52px] w-full rounded-[12px] border border-[#E5E6E8] bg-white px-[24px] text-[18px] text-[#82868E] outline-none" placeholder="********" />
                </div>
              </div>

              <div className="mt-[28px] flex justify-end">
                <button className="h-[46px] w-[104px] rounded-[24px] bg-[#D4FB20] text-[18px] font-medium text-[#242528]">Sign In</button>
              </div>

              <div className="mt-[42px] flex items-center justify-center gap-[11px] text-[18px] text-[#888888]">
                <span className="h-[1px] w-[200px] bg-[#D1D1D1]" />
                <span>or</span>
                <span className="h-[1px] w-[200px] bg-[#D1D1D1]" />
              </div>

              <div className="mt-[24px] flex justify-center gap-[16px]">
                <button className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] bg-white text-black">
                  <svg viewBox="0 0 24 24" className="h-[40px] w-[40px]" fill="currentColor">
                    <path d="M13.7 12.7v7.2h-3.7v-7.2H6.5v-3h3.5V6.7c0-3.5 2.1-5.4 5.3-5.4 1.5 0 2.8.1 3.2.2v3.1h-2.2c-1.7 0-2.1.8-2.1 2v2.1h4.3l-.6 3h-3.7Z" />
                  </svg>
                </button>
                <button className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] bg-white text-black">
                  <svg viewBox="0 0 24 24" className="h-[40px] w-[40px]" fill="currentColor">
                    <path d="M21.5 12.2c0-.7-.1-1.5-.3-2.2H12v4.2h5.3a4.5 4.5 0 0 1-1.9 3v2.5h3.1c1.8-1.7 2.9-4.1 2.9-7.5Zm-9.5 7.4c-2.6 0-4.8-1.7-5.6-4L2.8 15c.9 3.7 3.9 6.2 7.2 6.2 2.3 0 4.2-.7 5.6-2l-2.8-2.1c-.8.5-1.8.8-2.8.8Zm0-13.1c1.3 0 2.5.5 3.4 1.4l2.5-2.5C15.3 2.7 13.5 2 12 2 8.8 2 5.7 4.4 4.8 8.1l3.1 2.4A5.4 5.4 0 0 1 12 6.5Z" />
                  </svg>
                </button>
              </div>

              <div className="mt-[28px] flex items-center justify-center gap-[4px] text-[16px] text-[#888888]">
                <span>New user?</span>
                <Link href="/sign-up" className="text-[#003BE2]">Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      </BlueGridBackground>
    </main>
  );
}

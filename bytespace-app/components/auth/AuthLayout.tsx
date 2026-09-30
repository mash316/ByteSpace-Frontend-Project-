import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlueGridBackground } from "@/components/common/BlueGridBackground";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { Header } from "@/components/layout/Header";

export function AuthLayout({
  mode,
  children,
}: {
  mode: "signin" | "signup";
  children: React.ReactNode;
}) {
  const isSignup = mode === "signup";

  return (
    <main className="min-h-dvh bg-[#003BE2]">
      <BlueGridBackground
        className="min-h-dvh bg-[#003BE2]"
        style={{ backgroundColor: "#003BE2" }}
        overflowVisible
      >
        <div className="md:hidden"><Header /></div>
        <div className="mx-auto grid min-h-dvh w-full max-w-[1200px] grid-cols-1 items-start gap-y-8 px-4 pb-8 pt-[84px] sm:px-6 md:pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,579px)] lg:gap-x-[clamp(32px,5.55vw,80px)] lg:px-4 xl:px-0">
          <div className="min-w-0">
            <header className="flex h-[40px] items-center gap-[16px]">
              <Link href="/" aria-label="ByteSpace home" className="hidden h-[33px] w-[31px] shrink-0 md:block">
                <img src="/logo2.png" alt="" className="h-full w-full object-contain" />
              </Link>
              <Link
                href="/"
                aria-label="Back to home"
                title="Back"
                className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-white/50 text-[#F5F5F6] transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </header>

            <section className="mt-8 text-[#F5F5F6] lg:mt-[56px]">
              <h2 className="mb-[16px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[20px] font-semibold leading-[120%] tracking-[-0.01em]">
                {isSignup ? "Sign up and come in" : "Sign in with ease"}
              </h2>
              <p className="max-w-[480px] text-[18px] leading-[160%]">
                {isSignup
                  ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
                  : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
              </p>
            </section>

            <AuthShowcase />
          </div>

          <div className="flex min-w-0 justify-center lg:justify-end lg:pt-[63px]">
            {children}
          </div>
        </div>
      </BlueGridBackground>
    </main>
  );
}

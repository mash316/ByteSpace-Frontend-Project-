import Link from "next/link";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 pt-[24px] sm:px-6 lg:px-0 lg:pt-[33px]">
        <Link href="/" className="flex shrink-0 items-center gap-[8px] text-[#F5F5F6] sm:gap-[16px]">
          <img src="/logo2.png" alt="" aria-hidden="true" className="h-[31.5px] w-[28.88px] object-contain" />
          <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[18px] font-bold leading-[30px] tracking-[-0.02em] sm:text-[24px]">
            ByteSpace
          </span>
        </Link>

        <nav className="hidden items-center gap-[24px] text-[16px] font-medium text-[#F5F5F6] md:flex">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/creator/purepearl-studio">Creators</Link>
        </nav>

        <div className="flex shrink-0 items-center gap-[8px] text-[14px] font-medium text-[#F5F5F6] sm:gap-[24px] sm:text-[16px]">
          <Link href="/signin" className="hidden sm:block">Sign In</Link>
          <Link href="/signup" className="rounded-[24px] border border-white/20 px-[10px] py-[8px] sm:px-[20px] sm:py-[10px]">
            Join Us
          </Link>
          <Link href="/this-page-does-not-exist" aria-label="Shopping bag" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
              <path d="M6 8h12l-1 11H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

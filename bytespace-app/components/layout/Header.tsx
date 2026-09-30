import Link from "next/link";

export function Header() {
  return (
    <header className="safe-top relative z-[100] min-h-[88px] md:absolute md:inset-x-0 md:top-0 md:z-20 lg:h-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between px-4 pt-[16px] md:flex-nowrap md:px-6 md:pt-[24px] lg:px-0 lg:pt-[33px]">
        <Link href="/" className="order-1 flex shrink-0 items-center gap-[8px] text-[#F5F5F6] md:gap-[16px]">
          <picture className="block h-[31.5px] w-[28.88px] shrink-0">
            <img src="/logo2.png" alt="" aria-hidden="true" className="h-full w-full object-contain" />
          </picture>
          <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[16px] font-bold leading-[30px] tracking-[-0.02em] md:text-[24px]">
            ByteSpace
          </span>
        </Link>

        <nav aria-label="Main navigation" className="order-3 mt-3 flex w-full basis-full items-center justify-center gap-6 text-[15px] font-semibold text-[#F5F5F6] md:order-2 md:mt-0 md:w-auto md:basis-auto md:gap-[24px] md:text-[16px] md:font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/creator/purepearl-studio">Creators</Link>
        </nav>

        <div className="order-2 flex shrink-0 items-center gap-2 text-[14px] font-medium text-[#F5F5F6] md:order-3 md:gap-[24px] md:text-[16px]">
          <Link href="/signin" className="inline-flex min-h-11 items-center whitespace-nowrap md:min-h-0">Sign In</Link>
          <Link href="/signup" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-[24px] border border-white/20 px-[8px] py-[6px] md:min-h-0 md:px-[20px] md:py-[10px]">
            Join Us
          </Link>
          <Link href="/this-page-does-not-exist" aria-label="Shopping bag" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 md:h-10 md:w-10">
            <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current md:h-5 md:w-5" fill="none" strokeWidth="1.8">
              <path d="M6 8h12l-1 11H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

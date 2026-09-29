import Link from "next/link";

function LogoMark() {
  return (
    <div className="relative h-[31.5px] w-[28.88px]">
      <div className="absolute left-0 top-0 h-[31.5px] w-[13.5px] rounded-[7px] bg-[#D4FB20]" />
      <div className="absolute right-0 top-[10.5px] h-[21px] w-[13.5px] rounded-[7px] bg-[#D4FB20]" />
      <div className="absolute bottom-0 left-[7px] h-[15.75px] w-[14.88px] rounded-[5px] bg-[#D4FB20] opacity-90" />
    </div>
  );
}

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[120px]">
      <div className="mx-auto flex w-[1200px] items-center justify-between pt-[33px]">
        <Link href="/" className="flex items-center gap-[16px] text-[#F5F5F6]">
          <LogoMark />
          <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[24px] font-bold leading-[30px] tracking-[-0.02em]">
            ByteSpace
          </span>
        </Link>

        <nav className="hidden items-center gap-[24px] text-[16px] font-medium text-[#F5F5F6] md:flex">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="#">Creators</Link>
        </nav>

        <div className="flex items-center gap-[24px] text-[16px] font-medium text-[#F5F5F6]">
          <Link href="/sign-in">Sign In</Link>
          <Link href="/sign-up" className="rounded-[24px] border border-white/20 px-[20px] py-[10px]">
            Join Us
          </Link>
          <button aria-label="Shopping bag" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
              <path d="M6 8h12l-1 11H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

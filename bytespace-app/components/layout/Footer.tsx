import Link from "next/link";

export function Footer() {
  return (
    <footer className="safe-bottom w-full bg-white text-[#242528]">
      <div className="mx-auto w-full border-t border-[#CED0D3] px-4 pt-10 sm:px-6 lg:max-w-[1200px] lg:pt-[71px] xl:w-[1200px] xl:px-0">
        <div className="flex flex-col items-start justify-between gap-10 pb-[48px] xl:flex-row xl:gap-[80px]">
          <div className="w-full xl:w-[528px]">
            <div className="mb-[18px] flex items-center gap-[12px] text-[#242528]">
              <img src="/logo.png" alt="" aria-hidden="true" className="h-[24px] w-[22px] object-contain" />
              <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[24px] font-bold leading-[30px] tracking-[-0.02em]">
                ByteSpace
              </span>
            </div>
            <p className="mb-[32px] max-w-[420px] text-[14px] font-normal leading-[160%] text-[#242528]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-[12px] lg:gap-[24px]">
              <div className="flex h-[52px] w-full min-w-0 items-center rounded-[100px] border border-[#CED0D3] bg-white px-[24px] xl:w-[376px]">
                <input
                  className="w-full border-0 bg-transparent text-[16px] text-[#242528] outline-none placeholder:text-[#82868E]"
                  placeholder="Enter your email"
                />
              </div>
              <button className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-[#D4FB20] text-[16px] font-medium text-[#242528]">
                Search
              </button>
            </div>
            <p className="mt-[16px] w-full text-[12px] leading-[160%] text-[#242528] xl:w-[504px]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:w-auto xl:grid-cols-3 xl:flex xl:gap-[40px]">
            <div className="flex flex-col gap-2 text-[14px] text-[#242528] xl:gap-0 xl:space-y-[16px]">
              <div className="text-[14px] font-medium text-[#242528] opacity-0">Browse</div>
              <Link href="#">Featured Courses</Link>
              <Link href="#">Featured Categories</Link>
              <Link href="#">Business</Link>
              <Link href="#">IT</Link>
              <Link href="#">Design</Link>
            </div>
            <div className="flex flex-col gap-2 text-[14px] text-[#242528] xl:gap-0 xl:space-y-[16px]">
              <div className="text-[14px] font-medium text-[#242528] opacity-0">Platform</div>
              <Link href="#">Development</Link>
              <Link href="#">Marketing</Link>
              <Link href="#">Photography</Link>
              <Link href="#">Finance</Link>
              <Link href="#">Sport</Link>
            </div>
            <div className="flex flex-col gap-2 text-[14px] text-[#242528] xl:gap-0 xl:space-y-[16px]">
              <div className="text-[14px] font-medium text-[#242528] opacity-0">More</div>
              <Link href="#">Become a Creator</Link>
              <Link href="#">Affiliate Program</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Help</Link>
              <Link href="#">About</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#CED0D3] py-[24px] text-[12px] text-[#242528]">
          <span>@ 2023 ByteSpace. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 xl:gap-[24px]">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

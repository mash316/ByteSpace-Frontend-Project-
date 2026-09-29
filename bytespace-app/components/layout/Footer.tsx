import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white text-[#242528]">
      <div className="mx-auto w-[1200px] border-t border-[#CED0D3] pt-[71px]">
        <div className="flex items-start justify-between gap-[80px] pb-[48px]">
          <div className="w-[528px]">
            <div className="mb-[18px] flex items-center gap-[12px] text-[#242528]">
              <div className="relative h-[24px] w-[22px]">
                <div className="absolute left-0 top-0 h-[24px] w-[10px] rounded-[6px] bg-[#D4FB20]" />
                <div className="absolute right-0 top-[8px] h-[16px] w-[10px] rounded-[5px] bg-[#D4FB20]" />
                <div className="absolute bottom-0 left-[5px] h-[12px] w-[11px] rounded-[4px] bg-[#D4FB20] opacity-90" />
              </div>
              <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[24px] font-bold leading-[30px] tracking-[-0.02em]">
                ByteSpace
              </span>
            </div>
            <p className="mb-[32px] max-w-[420px] text-[14px] font-normal leading-[160%] text-[#242528]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="flex items-center gap-[24px]">
              <div className="flex h-[52px] w-[376px] items-center rounded-[100px] border border-[#CED0D3] bg-white px-[24px]">
                <input
                  className="w-full border-0 bg-transparent text-[16px] text-[#242528] outline-none placeholder:text-[#82868E]"
                  placeholder="Enter your email"
                />
              </div>
              <button className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-[#D4FB20] text-[16px] font-medium text-[#242528]">
                Search
              </button>
            </div>
            <p className="mt-[16px] w-[504px] text-[12px] leading-[160%] text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="flex gap-[40px]">
            <div className="space-y-[16px] text-[14px] text-[#242528]">
              <div className="text-[14px] font-medium text-[#242528] opacity-0">Browse</div>
              <Link href="#">Featured Courses</Link>
              <Link href="#">Featured Categories</Link>
              <Link href="#">Business</Link>
              <Link href="#">IT</Link>
              <Link href="#">Design</Link>
            </div>
            <div className="space-y-[16px] text-[14px] text-[#242528]">
              <div className="text-[14px] font-medium text-[#242528] opacity-0">Platform</div>
              <Link href="#">Development</Link>
              <Link href="#">Marketing</Link>
              <Link href="#">Photography</Link>
              <Link href="#">Finance</Link>
              <Link href="#">Sport</Link>
            </div>
            <div className="space-y-[16px] text-[14px] text-[#242528]">
              <div className="text-[14px] font-medium text-[#242528] opacity-0">More</div>
              <Link href="#">Become a Creator</Link>
              <Link href="#">Affiliate Program</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Help</Link>
              <Link href="#">About</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#CED0D3] py-[24px] text-[12px] text-[#242528]">
          <span>@ 2023 ByteSpace. All rights reserved.</span>
          <div className="flex items-center gap-[24px]">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

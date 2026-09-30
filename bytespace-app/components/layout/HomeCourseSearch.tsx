function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[24px] w-[24px] shrink-0 text-[#82868E]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

export function HomeCourseSearch() {
  return (
    <form action="/courses" method="get" role="search" className="flex w-full max-w-[480px] min-w-0 items-center gap-[12px] rounded-[24px] bg-white p-[6px] shadow-md">
      <div className="flex min-w-0 flex-1 items-center gap-[12px] rounded-[24px] bg-white px-[20px] py-[14px]">
        <SearchIcon />
        <input
          type="search"
          name="q"
          enterKeyHint="search"
          autoComplete="off"
          className="min-w-0 w-full border-0 bg-transparent text-[16px] text-[#82868E] outline-none placeholder:text-[#82868E] sm:text-[18px]"
          placeholder="Course, topic, creator"
          aria-label="Search courses, topics, or creators"
        />
      </div>
      <button type="submit" className="h-[44px] shrink-0 rounded-[24px] bg-[#D4FB20] px-4 text-[16px] font-medium text-[#242528] sm:w-[92px] sm:px-0">
        Search
      </button>
    </form>
  );
}

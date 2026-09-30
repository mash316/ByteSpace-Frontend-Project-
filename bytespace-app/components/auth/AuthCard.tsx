export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="auth-card flex min-h-0 w-full max-w-[579px] flex-col rounded-[32px] bg-white p-6 sm:p-12 lg:min-h-[784px] lg:px-[clamp(48px,4.375vw,63px)] lg:py-[61px]">
      {children}
    </section>
  );
}
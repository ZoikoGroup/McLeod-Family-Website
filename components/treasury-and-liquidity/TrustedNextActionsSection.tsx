import Image from "next/image";
import Link from "next/link";

export function TrustedNextActionsSection() {
  return (
    <section
      id="trusted-next-actions"
      aria-label="Trusted next actions"
      className="relative w-full overflow-hidden bg-[#F4F0E8] px-6 py-16 sm:px-12 sm:py-20"
    >
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/treasury-and-liquidity/trusted-next-actions-bg.png"
          alt=""
          fill
          className="object-cover object-right"
        />
        {/* Figma Linear Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(244, 240, 232, 1) 0%, rgba(244, 240, 232, 0.92) 45%, rgba(244, 240, 232, 0.4) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="w-full max-w-[1200px]">
          <h2 className="font-serif text-[36px] leading-[42px] sm:text-[46px] sm:leading-[50.6px] text-[#172130]">
            Trusted next actions.
          </h2>

          <p className="pt-4 font-serif text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] text-[#172130] max-w-none">
            Confirm official McLeod domains, correspondence channels and the independent callback protocol before acting on sensitive instructions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <Link
              href="/verification"
              className="inline-flex items-center justify-center gap-3 rounded-[2px] border border-[#C6A15B] bg-[#C6A15B] px-7 py-3.5 font-sans text-[14px] font-semibold leading-[22.4px] text-[#172130] transition-opacity hover:opacity-90"
            >
              <span>Verify a Communication</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-[2px] border border-[#172130] bg-transparent px-7 py-3.5 font-sans text-[14px] font-semibold leading-[22.4px] text-[#172130] transition-colors hover:bg-[#172130]/5"
            >
              <span>Contact the Office</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

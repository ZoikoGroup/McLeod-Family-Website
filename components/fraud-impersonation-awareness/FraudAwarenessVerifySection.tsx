import Image from "next/image";
import Link from "next/link";
import React from "react";

export function FraudAwarenessVerifySection() {
  return (
    <section
      aria-label="Verification and Contact CTA"
      className="relative w-full overflow-hidden px-6 py-20 lg:px-16 lg:py-24"
    >
      {/* Background Graphic Image with Linear Gradient Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/fraud-impersonation-awareness/verify-communication-bg-21f71d.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(244, 240, 232, 1) 40%, rgba(244, 240, 232, 0.4) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        {/* Heading 2 */}
        <h2 className="font-serif text-[36px] leading-[42px] sm:text-[46px] sm:leading-[50.6px] text-[#172130]">
          Verify before you act.
        </h2>

        {/* Paragraph */}
        <p className="pt-4 font-serif text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] text-[#172130]/90">
          <span className="block">
            Check approved McLeod digital properties and independently verify sensitive or changed financial instructions.
          </span>
          <span className="block whitespace-normal md:whitespace-nowrap">
            For legitimate legal, banking, corporate, governance and professional enquiries, contact the Office through an official channel.
          </span>
          <span className="block">
            Do not send private documents until a secure process is established.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-[2px] border border-[#C6A15B] bg-[#C6A15B] px-7 py-3.5 font-archivo text-sm font-semibold leading-[22.4px] text-[#172130] transition-opacity hover:opacity-90"
          >
            <span>Contact the Office</span>
            <span>→</span>
          </Link>
          <Link
            href="/verification"
            className="inline-flex items-center gap-3 rounded-[2px] border border-[#172130] bg-transparent px-7 py-3.5 font-archivo text-sm font-semibold leading-[22.4px] text-[#172130] transition-colors hover:bg-[#172130] hover:text-[#F4F1EA]"
          >
            <span>Open the Verification Centre</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


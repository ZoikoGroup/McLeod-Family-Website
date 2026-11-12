"use client";

import Image from "next/image";
import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available; leave the label unchanged.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${value}`}
      className="flex min-h-[32px] items-center gap-[8px] py-[8.2px] text-[13px] leading-[15.6px] text-kumera"
    >
      <Image
        src="/images/home/entity-icon-copy.svg"
        alt=""
        width={14}
        height={14}
        aria-hidden="true"
      />
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

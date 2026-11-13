import type { Metadata } from "next";
import {
  RealAssetsHeroSection,
  WhatTheLabelMeansSection,
} from "@/components/real-assets-private-holding";

export const metadata: Metadata = {
  title: "Real Assets & Private Holdings | McLeod Family Office",
  description:
    "Real-asset and private-holding responsibilities considered within long-term institutional stewardship.",
};

export default function RealAssetsPrivateHoldingPage() {
  return (
    <>
      <RealAssetsHeroSection />
      <WhatTheLabelMeansSection />
    </>
  );
}

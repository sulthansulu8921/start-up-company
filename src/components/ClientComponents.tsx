"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(() => import("@/components/sections/WhatsAppButton"), { ssr: false });
const AIChatbot = dynamic(() => import("@/components/AIChatbot"), { ssr: false });
const OfferPopup = dynamic(() => import("@/components/OfferPopup"), { ssr: false });

export default function ClientComponents() {
  return (
    <>
      <AIChatbot />
      <WhatsAppButton />
      <OfferPopup />
    </>
  );
}


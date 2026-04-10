"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { services } from "../lib/site-content";

const ServicesModal = dynamic(() => import("./ServicesModal"), {
  ssr: false,
});

export default function ServicesModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-6 inline-flex h-[38px] items-center rounded-full border border-[var(--services-button-border)] bg-[var(--services-button-bg)] px-4 text-[13px] font-medium text-[var(--services-button-fg)] transition hover:bg-[var(--services-button-hover-bg)]"
      >
        РЎРјРѕС‚СЂРµС‚СЊ РІСЃРµ
        <span className="ml-2">в†’</span>
      </button>

      {isOpen ? (
        <ServicesModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          services={services}
        />
      ) : null}
    </>
  );
}

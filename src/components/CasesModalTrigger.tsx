"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { cases } from "../lib/site-content";

const CasesModal = dynamic(() => import("./CasesModal"), {
  ssr: false,
});

export default function CasesModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-7 inline-flex h-[44px] w-fit items-center rounded-full border border-[var(--cases-button-border)] bg-[var(--cases-button-bg)] px-5 text-[14px] font-medium text-[var(--cases-button-fg)] transition hover:bg-[var(--cases-button-hover-bg)]"
      >
        РЎРјРѕС‚СЂРµС‚СЊ РІСЃРµ РєРµР№СЃС‹
        <span className="ml-2">в†’</span>
      </button>

      {isOpen ? (
        <CasesModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          cases={cases}
        />
      ) : null}
    </>
  );
}

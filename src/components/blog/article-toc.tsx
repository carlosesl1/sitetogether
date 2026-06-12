"use client";

import { useRef, type WheelEvent } from "react";

type ArticleTocHeading = {
  id: string;
  text: string;
  level: string;
};

type ArticleTocProps = {
  headings: ArticleTocHeading[];
};

export function ArticleToc({ headings }: ArticleTocProps) {
  const listRef = useRef<HTMLUListElement>(null);

  function handleWheel(event: WheelEvent<HTMLElement>) {
    const list = listRef.current;
    if (!list || list.scrollHeight <= list.clientHeight || event.deltaY === 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const maxScrollTop = list.scrollHeight - list.clientHeight;
    list.scrollTop = Math.min(
      maxScrollTop,
      Math.max(0, list.scrollTop + event.deltaY),
    );
  }

  return (
    <nav
      aria-label="Neste artigo"
      className="mb-8 overflow-hidden rounded-[32px] border border-neutral-100 bg-neutral-50 p-8"
      onWheelCapture={handleWheel}
    >
      <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-neutral-900">
        Neste artigo
      </h4>
      <ul
        ref={listRef}
        className="max-h-[40vh] space-y-4 overflow-y-auto overflow-x-hidden overscroll-contain pr-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300"
      >
        {headings.map((item) => (
          <li key={item.id} className={item.level === "h3" ? "pl-4" : ""}>
            <a
              href={`#${item.id}`}
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-brand-600"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

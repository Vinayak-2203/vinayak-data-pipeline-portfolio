"use client";

import { useEffect, useState } from "react";
import { stages } from "@/lib/data";

export default function PipelineRail() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sections = stages
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeIndex = stages.findIndex((s) => s.id === activeId);

  return (
    <nav
      aria-label="Pipeline progress"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-start"
    >
      <div className="relative flex flex-col gap-8 pl-1">
        <svg
          aria-hidden="true"
          className="absolute left-[3px] top-1 h-[calc(100%-8px)] w-px"
          width="1"
        >
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100%"
            stroke="#24314F"
            strokeWidth="1.5"
          />
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100%"
            stroke="#35D0C5"
            strokeWidth="1.5"
            strokeDasharray="3 5"
            className="animate-flow"
            style={{ opacity: 0.6 }}
          />
        </svg>

        {stages.map((stage, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          return (
            <a
              key={stage.id}
              href={`#${stage.id}`}
              className="group relative flex items-center gap-3 py-0.5"
            >
              <span
                className={`relative z-10 h-2 w-2 shrink-0 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "scale-150 border-signal-amber bg-signal-amber shadow-[0_0_12px_2px_rgba(242,169,59,0.6)]"
                    : isPast
                    ? "border-signal-teal bg-signal-teal"
                    : "border-ink-line bg-ink"
                }`}
              />
              <span
                className={`chip whitespace-nowrap uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-ivory opacity-100"
                    : "text-ivory-faint opacity-0 group-hover:opacity-70 group-focus-visible:opacity-100"
                }`}
              >
                <span className="text-ivory-muted">{stage.code}</span> {stage.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

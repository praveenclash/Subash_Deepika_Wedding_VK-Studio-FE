"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, [direction, speed]);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "normal",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-12/12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4  bg-transparent",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-56 md:w-96 h-56 md:h-72 max-w-full shrink-0 rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900 to-zinc-950 px-6 py-6 sm:px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            key={item.name}
          >
            <blockquote className="h-full flex flex-col">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.1 -left-0.1 -z-1 h-[calc(100%_+_1px)] w-[calc(100%_+_1px)]"
              ></div>

              {/* Quote text */}
              <span className="relative z-20 text-sm sm:text-base leading-relaxed font-medium text-zinc-100/90 line-clamp-4 sm:line-clamp-5 mb-4">
                {item.description}
              </span>

              {/* Author info */}
              <div className="relative z-20 mt-auto flex flex-row items-center gap-3 border-t border-zinc-800/50 pt-4">
                {/* Avatar placeholder with initials */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-zinc-700/50">
                  <span className="text-sm font-semibold text-purple-400">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-wide">
                    {item.name}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Calendar, LocateIcon } from "lucide-react";
import React from "react";

export function AnimatedPinDemo() {
  return (
    <div className="w-full  flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10">
      {/* Left Side Content: Fixed alignment for Desktop */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 max-w-xl">
        <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-600 leading-tight">
          Join us <br /> for the Wedding Reception
        </div>

        {/* Passing a prop to handle button alignment */}
        <HoverBorderGradientDemo desktopLeft />
      </div>

      {/* Right Side Map Card: Occupies the other half */}
      <div className="relative flex justify-center items-center w-full lg:w-1/2 min-h-[30rem]">
        <PinContainer
          title="Open in Google Maps"
          href="https://maps.app.goo.gl/iaAZn41pVwH18cKV8"
          className="w-[85vw] sm:w-[24rem] h-auto"
        >
          <div
            className="flex flex-col p-4 w-full"
            href="https://maps.app.goo.gl/iaAZn41pVwH18cKV8"
          >
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Hindu Nadar Mahal
            </h3>

            <p className="text-xs sm:text-sm text-white/70 mb-3">
              Sivagalai, Thoothukkudi - 628753
            </p>

            <div className="w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden mt-2 border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=8.639761,77.980015&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg opacity-90"
              ></iframe>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

export function HoverBorderGradientDemo({ desktopLeft }) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row mt-8 items-center flex-wrap gap-4",
        desktopLeft ? "justify-center lg:justify-start" : "justify-center",
      )}
    >
      <HoverBorderGradient
        onClick={() =>
          window.open(
            "https://www.google.com/maps/search/?api=1&query=Hindu+Nadar+Mahal+Sivagalai",
            "_blank",
          )
        }
        containerClassName="rounded-full"
        as="button"
        className=" cursor-pointer    text-xs md:text-sm  flex items-center space-x-2 px-6 py-2"
      >
        <LocateIcon size={16} />
        <span>Map</span>
      </HoverBorderGradient>

      <HoverBorderGradient
        onClick={() => {
          const baseUrl =
            "https://calendar.google.com/calendar/render?action=TEMPLATE";

          const text = encodeURIComponent(
            "Subash & Deepika Wedding Reception: Hindu Nadar Mahal",
          );
          const details = encodeURIComponent(
            "Join us for the special occasion!",
          );
          const location = encodeURIComponent(
            "Hindu Nadar Mahal, Sivagalai, Thoothukkudi - 628753",
          );

          const dates = "20260316T023000Z/20260316T033000Z";

          const finalUrl = `${baseUrl}&text=${text}&details=${details}&location=${location}&dates=${dates}`;

          window.open(finalUrl, "_blank");
        }}
        containerClassName="rounded-full"
        as="button"
        className=" cursor-pointer  text-xs md:text-sm  flex items-center space-x-2 px-6 py-2"
      >
        <Calendar size={16} />
        <span>Add To Calendar</span>
      </HoverBorderGradient>
    </div>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

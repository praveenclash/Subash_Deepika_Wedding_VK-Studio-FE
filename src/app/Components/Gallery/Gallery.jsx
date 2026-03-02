import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2017 - First Meeting",
      content: (
        <div>
          <p className="mb-3 text-xs md:text-sm font-normal text-black italic">
            "When eyes meet, hearts speak..."
          </p>
          <p className="mb-4 text-xs md:text-sm font-normal text-black">
            Kings College of Engineering library. A rainy day. Two strangers
            reached for the same book. That moment changed everything.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <Image
              src="/Images/images2.jpeg"
              alt="First meeting"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-64 md:h-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2018 - Falling in Love",
      content: (
        <div>
          <p className="mb-3 text-xs md:text-sm font-normal text-black">
            Late night calls, coffee dates, and endless conversations.
            Friendship blossomed into something beautiful.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/Images/images6.jpeg"
              alt="Coffee dates"
              width={400}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-48 md:h-64"
            />
            <Image
              src="/Images/images7.jpeg"
              alt="College love"
              width={400}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-48 md:h-64"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - Together",
      content: (
        <div>
          <p className="mb-3 text-xs md:text-sm font-normal text-black">
            Through exams, tears, and laughter - they were each other's
            strength. Distance tried, but love won.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <Image
              src="/Images/images4.jpeg"
              alt="Together"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-64 md:h-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Engaged",
      content: (
        <div>
          <p className="mb-3 text-xs md:text-sm font-normal text-black">
            Rings exchanged. Families united. Hearts full. The countdown to
            forever began.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/Images/images14.jpeg"
              alt="Engagement"
              width={400}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-48 md:h-64"
            />
            <Image
              src="/Images/image11.jpeg"
              alt="Family"
              width={400}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-48 md:h-64"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2026 - Forever Begins",
      content: (
        <div>
          <p className="mb-3 text-xs md:text-sm font-normal text-black">
            From library strangers to life partners. Seven years of love leads
            to this moment.
          </p>
          <p className="mb-4 text-xs md:text-sm font-medium text-[#c5a073]">
            16 March 2026 - The day they become one ❤️
          </p>
          <div className="grid  gap-3">
            <Image
              src="/Images/images12.jpeg"
              alt="Together"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-64 md:h-80"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip ">
      <Timeline data={data} />
    </div>
  );
}

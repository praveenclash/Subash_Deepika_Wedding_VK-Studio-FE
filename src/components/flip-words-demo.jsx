import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsDemo() {
  // const words = ["Love", "Journey", "Forever", "Together", "Soulmates"];
  const words = ["Met", "Connected", "Committed", "Promised", "Married"];

  return (
    <div className="mt-10 flex justify-center items-center px-4">
      <div className="text-2xl md:text-5xl font-medium text-neutral-600 text-center">
        Our
        <FlipWords words={words} /> <br />A Journey Written In Love
      </div>
    </div>
  );
}

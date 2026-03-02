"use client";

import Image from "next/image";
import React from "react";
import { AnimatedPinDemo } from "../Location/Location";

function MahalSection() {
  return (
    <>
      <div className="w-full h-96 overflow-hidden relative">
        <Image
          src="/Images/images16.jpeg"
          alt="Wedding venue"
          width={1920}
          height={1080}
          className="w-full h-96 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Reception Details */}
    </>
  );
}

export default MahalSection;

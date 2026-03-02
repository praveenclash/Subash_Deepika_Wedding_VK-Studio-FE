"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full overflow-x-hidden ",
        className,
      )}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 md:gap-8 lg:gap-10 py-40 ">
        <div className="grid gap-6 md:gap-8 lg:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <Image
                src={el}
                className="h-96 w-full object-cover rounded-lg shadow-lg"
                height={600}
                width={500}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-96 w-full object-cover rounded-lg shadow-lg"
                height={600}
                width={500}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-96 w-full object-cover rounded-lg shadow-lg"
                height={600}
                width={500}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

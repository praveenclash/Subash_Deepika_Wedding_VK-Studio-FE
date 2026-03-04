"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const introText = ["Subash ♥ Deepika", { title: "VK", sub: "Fotos" }];

  const images = [
    "/Images/images12.jpeg",
    "/Images/images6.jpeg",
    "/Images/images2.jpeg",
    "/Images/images13.jpeg",
  ];

  const [index, setIndex] = useState(-1);
  const [showImage, setShowImage] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!showImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showImage]);

  useEffect(() => {
    const targetDate = new Date(2026, 2, 16);
    const calculateDaysLeft = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      targetDate.setHours(0, 0, 0, 0);
      const diffTime = targetDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(Math.abs(diffDays));
    };
    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 86400000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showImage) return;
    const startTimer = setTimeout(() => {
      setIndex(0);
    }, 200);
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === -1) return prev;
        if (prev < introText.length - 1) {
          return prev + 1;
        } else if (prev === introText.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setShowImage(true);
          }, 500);
          return prev;
        }
        return prev;
      });
    }, 1000);
    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [introText.length, showImage]);

  useEffect(() => {
    if (!showImage) return;
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setImageError(false);
    }, 4000);
    return () => clearInterval(imageInterval);
  }, [showImage, images.length]);

  const handleImageError = () => {
    setImageError(true);
  };

  if (index === -1) {
    return <section className="w-full h-screen bg-black" />;
  }

  return (
    <section className="w-full h-screen flex justify-center items-center bg-black overflow-hidden relative">
      <AnimatePresence mode="wait">
        {!showImage ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-white text-center z-10 px-4"
          >
            {typeof introText[index] === "string" ? (
              <p className="text-sm sm:text-sm md:text-xl font-medium tracking-wide">
                {introText[index]}
              </p>
            ) : (
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium space-x-0.5 tracking-widest">
                  {introText[index].title}
                </p>
                <p className="text-sm sm:text-md md:text-lg font-light tracking-[0.3em]">
                  {introText[index].sub}
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-10 lg:p-20"
          >
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  {!imageError ? (
                    <Image
                      src={images[currentImageIndex]}
                      alt="Sliding Background"
                      fill
                      sizes="100vw"
                      className="object-cover opacity-80"
                      priority
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="w-full h-full bg-black" />
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* TOP SECTION */}
            <div className="relative z-10 flex items-start justify-start gap-2 sm:gap-3 md:gap-4 text-[#c5a073]">
              <div className="text-right flex flex-col items-end">
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base tracking-[0.2em] font-light">
                  MONDAY
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-widest font-medium">
                  16 MARCH
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.2em] font-medium">
                  2026
                </p>
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base tracking-widest font-light mt-0.5">
                  10:00 Am
                </p>
              </div>
              <div className="w-[1px] h-12 sm:h-16 md:h-20 bg-[#c5a073] opacity-60 self-center" />
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 font-light">
                  {daysLeft}
                </span>
                <div className="flex flex-col text-[8px] xs:text-[10px] sm:text-xs tracking-[0.1em] uppercase font-medium">
                  <span>Days</span>
                  <span>Ago</span>
                </div>
              </div>
            </div>

            {/* MIDDLE SECTION */}
            <div className="relative z-10 flex justify-end items-center mt-50 sm:mt-0 w-full h-full pr-2 sm:pr-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[#c5a073] text-center space-y-1"
              >
                <h1 className="text-5xl lucyFont sm:text-6xl lg:text-8xl italic">
                  Subash
                </h1>
                <span className="text-3xl lucyFont sm:text-5xl italic block">
                  &
                </span>
                <h1 className="text-5xl lucyFont sm:text-6xl lg:text-8xl italic">
                  Deepika
                </h1>
                <p className="text-white text-[8px] sm:text-[13px] font-light tracking-widest opacity-90 pt-4">
                  Invite you to join us, <br />
                  <span>as we celebrate the beginning of</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

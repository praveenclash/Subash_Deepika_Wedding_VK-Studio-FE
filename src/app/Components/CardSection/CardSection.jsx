"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Heart, X, MapPin } from "lucide-react";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Link from "next/link";

export function InfiniteMovingCardsDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    wish: "",
  });

  const fetchData = async () => {
    setFetchLoading(true);
    try {
      const response = await axios.get("/api/wedding");
      console.log("data", response.data);
      setData(response?.data);
    } catch (error) {
      console.log("Error:", error);
      setShowError(true);
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceId = "service_v2b2w2e";
      const templateId = "template_yi80h1p";
      const publicKey = "OLTtit1NUFJYHfNSt";

      const postData = {
        name: formData.name,
        description: formData.wish,
        email: formData.email,
      };

      const response = await axios.post("/api/wedding", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const smsResponse = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to_number: +918072067574,
          message: `✨ New Wedding Wish ✨\n\nFrom: ${formData.name}\n\nMessage: "${formData.wish}"\n\nEmail: ${formData.email || "Not provided"}\n\n💝 Thank you for your wishes!`,
        }),
      });

      const smsData = await smsResponse.json();
      console.log("SMS sent successfully:", smsData);
      const templateParams = {
        name: formData.name,
        email: formData.email,
        wish: formData.wish,
        to_email: formData.email,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      await fetchData();
      setFormData({ name: "", email: "", wish: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
      } else if (error.request) {
      } else {
        setIsModalOpen(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const openInMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Hindu+Nadar+Mahal+Sivagalai",
      "_blank",
    );
  };

  return (
    <>
      <div className="h-auto py-10 rounded-md flex flex-col antialiased bg-gradient-to-b from-white to-pink-50/30 items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center text-center w-full max-w-4xl px-4 ">
          {/* Wedding Rings Icon or Decoration */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-pink-300 rounded-full"></div>
            <div className="flex gap-2">
              <span className="text-3xl">💍</span>
            </div>
            <div className="w-12 h-0.5 bg-pink-300 rounded-full"></div>
          </div>

          {/* Main Title */}
          <div className="text-4xl sm:text-5xl md:text-6xl text-gray-800 leading-tight mb-3">
            Wedding Wishes
          </div>
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl">
            The beautiful wishes from those we cherish
          </p>
        </div>
        <div className="flex justify-end  items-end w-full m-4">
          {" "}
          <Link
            href="/wishes-all"
            className="text-xs cursor-pointer sm:text-base mr-9  text-gray-500 max-w-2xl"
          >
            View All
          </Link>
        </div>
        {fetchLoading ? (
          <div className="w-full gap-x-2 flex justify-center mt-10  items-center">
            <div className="w-4 h-4 bg-[#d991c2] rounded-full animate-bounce [animation-delay:-.3s] hover:scale-110 transition-transform" />
            <div className="w-4 h-4 bg-[#9869b8] rounded-full animate-bounce [animation-delay:-.5s] hover:scale-110 transition-transform" />
            <div className="w-4 h-4 bg-[#6756cc] rounded-full animate-bounce hover:scale-110 transition-transform" />
          </div>
        ) : showError ? null : (
          <>
            {" "}
            <InfiniteMovingCards
              items={data}
              direction="right"
              speed="show"
              pauseOnHover={true}
            />
            <HoverBorderGradient
              onClick={() => setIsModalOpen(true)}
              containerClassName="rounded-full mt-10"
              as="button"
              className="cursor-pointer text-xs md:text-sm flex items-center space-x-2 px-6 py-2"
            >
              <span>Send Your Wishes</span>
              <Heart size={15} />
            </HoverBorderGradient>
          </>
        )}

        {/* Optional: Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-black shadow-2xl p-5 md:p-8 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-white/60 hover:text-white/90 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Header with Names */}
            <div className="text-center mb-5">
              <div className="flex justify-center gap-2 mb-3"></div>
              <h3 className="text-xl md:text-2xl text-white mb-1">
                Send Your Wish
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 md:py-3 rounded-md font-normal bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none transition-all text-sm md:text-base"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 md:py-3 rounded-md font-normal bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none transition-all text-sm md:text-base"
                  disabled={isLoading}
                />
                <p className="text-xs text-white/40 mt-1">
                  We'll send you venue details & thank you message
                </p>
              </div>

              {/* Wish Input */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Your Wedding Wish
                </label>
                <textarea
                  name="wish"
                  value={formData.wish}
                  onChange={handleInputChange}
                  placeholder="Write your wedding wish for Subash & Deepika..."
                  rows="3"
                  className="w-full px-4 py-2.5 md:py-3 rounded-md font-normal bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none transition-all text-sm md:text-base resize-none"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Your Wish...
                  </>
                ) : (
                  <>
                    <Heart size={18} className="fill-white" />
                    Send Wish
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

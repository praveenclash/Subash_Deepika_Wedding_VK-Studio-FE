"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function WishesAllPage() {
  const [fetchLoading, setFetchLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState([]);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    setFetchLoading(true);
    try {
      const response = await axios.get("/api/wedding");
      console.log("data", response.data);
      setData(response?.data || []);
      setShowError(false);
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

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="w-full h-64 md:h-72 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 animate-pulse"
        >
          <div className="p-6 space-y-4">
            <div className="h-4 bg-zinc-700/50 rounded w-3/4"></div>
            <div className="h-4 bg-zinc-700/50 rounded w-full"></div>
            <div className="h-4 bg-zinc-700/50 rounded w-2/3"></div>
            <div className="pt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-700/50"></div>
              <div className="h-4 bg-zinc-700/50 rounded w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Error Component
  if (showError) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="text-6xl mb-4">😢</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Unable to load wedding wishes. Please try again.
        </p>
        <button
          onClick={() => {
            setShowError(false);
            setFetchLoading(true);
            fetchData();
          }}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-purple-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        {/* Header Content */}
        <div className="relative flex flex-col items-center text-center pt-12 pb-8 md:pt-20 md:pb-12 px-4">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 leading-tight mb-3">
            Wedding{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Wishes
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl px-4">
            The beautiful wishes from those we cherish
          </p>

          {/* Stats */}
          {!fetchLoading && data?.length > 0 && (
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {data.length} {data.length === 1 ? "Wish" : "Wishes"} received
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-5 px-4 pb-16 md:pb-24">
        {fetchLoading ? (
          <LoadingSkeleton />
        ) : data?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="text-6xl mb-4 opacity-30">💭</div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No wishes yet
            </h3>
            <p className="text-gray-400 text-center">
              Be the first one to send your wishes!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {data?.map((item, idx) => (
              <div
                className="group relative w-full h-auto rounded-2xl border border-zinc-700 bg-black px-5 py-6 sm:px-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                key={idx}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                }}
              >
                <blockquote className="h-full flex flex-col">
                  {/* Quote text */}
                  <div className="relative z-10">
                    <span className="text-sm sm:text-base leading-relaxed text-white line-clamp-4 sm:line-clamp-5 mb-4">
                      {item.description || item.message || item.wish}
                    </span>
                  </div>

                  {/* Author info */}
                  <div className="relative z-20 mt-auto">
                    <div className="absolute -left-5 top-0 w-1 h-0 group-hover:h-12 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full transition-all duration-500"></div>

                    <div className="flex flex-row items-center gap-3 pt-4">
                      {/* Avatar */}
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-md">
                        <span className="text-sm sm:text-base font-semibold text-white">
                          {item.name
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase() || "👤"}
                        </span>
                      </div>

                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm sm:text-base font-semibold text-white truncate">
                          {item.name || "Anonymous"}
                        </span>

                        {/* Date if available */}
                        {item.createdAt && (
                          <span className="text-xs text-gray-400">
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";

export default function SimpleMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();

    audio.src = "/music/Audio-cut.mp3"; 
    audio.load();

    audio.addEventListener("canplaythrough", () => {
      console.log(`✅ Successfully loaded: ${audio.src}`);
      audioRef.current = audio;
      audio.loop = true;

      // Auto-play when page loads
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log("🎵 Audio playing automatically");
          })
          .catch((err) => {
            console.log("Auto-play prevented:", err);
            setIsPlaying(false);
          });
      }
    });

    audio.addEventListener("error", (e) => {
      console.log(`❌ Failed to load: ${audio.src}`);
      console.log("Error code:", audio.error?.code);
      console.log("Error message:", audio.error?.message);
      setError(true);
    });

    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        console.log("⏸ Audio paused");
      } else {
        audioRef.current
          .play()
          .then(() => console.log("▶ Audio played"))
          .catch((err) => console.log("Play error:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-10 left-6 z-[9999] bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-all hover:scale-105"
    >
      {isPlaying ? "⏸ Pause" : "▶ Play"}
    </button>
  );
}

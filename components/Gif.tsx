"use client";
import React, { useRef } from "react";
import Glass from "./Glass";

const Gif = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      <div className=" top-0 min-h-screen flex justify-center overflow-hidden will-change-transform">
        <video
          ref={videoRef}
          preload="auto"
          playsInline
          muted
          loop
          autoPlay
          className="w-full h-screen object-cover"
          src="/videos/fixed.mp4"
        />
      </div>
      <section className="w-full h-[100vh] relative bg-gradient-to-b from-transparent to-black z-[1]"></section>
      <div className="sticky bg-black top-0 h-auto w-full">
        <Glass />
      </div>
    </div>
  );
};

export default Gif;

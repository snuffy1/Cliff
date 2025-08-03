"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Glass from "./Glass";

const Gif = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Detect scroll
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // stop blur shortly after scroll ends
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
  };
  return (
    <div className="relative">
      <div
        className="sticky top-0 min-h-screen flex justify-center overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className={`absolute inset-0 z-0 object-cover w-full h-full transition-all duration-700 ease-in-out
          ${isHovered ? "opacity-100" : "opacity-90"}
          ${isScrolling ? "blur-md" : "blur-0"}
        `}
          src="/videos/fixed.mp4"
          loop
          muted
          playsInline
        />
      </div>
      {/* <svg
        id="visual"
        viewBox="0 0 900 600"
        // height="600"
        className="translate-y-1 w-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          className=" shadow-[#ffffff] shadow-2xl"
          style={{
            filter: "drop-shadow(4px 4px 100px 100px white)",
          }}
          d="M0 287L50 275.7C100 264.3 200 241.7 300 258C400 274.3 500 329.7 600 329.5C700 329.3 800 273.7 850 245.8L900 218L900 601L850 601C800 601 700 601 600 601C500 601 400 601 300 601C200 601 100 601 50 601L0 601Z"
          fill="#000000"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg> */}
      <Image
        src="/foggy.webp"
        alt="Visual"
        height={400}
        width={500}
        className="relative  w-full"
      />

      {/* </div> */}
      <div className="sticky bg-[#000000]  top-0 h-auto w-full">
        {/* <div className="relative h-screen ">
          <div className="absolute   w-full   -translate-y-[100dvh] bg-gradient-to-t from-purple-500 to-purple-800"></div>
        </div> */}
        <Glass />
      </div>
    </div>
  );
};

export default Gif;

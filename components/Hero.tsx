"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate text lines with stagger
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 3,
      ease: "power2.out",
    });

    // Animate image
    gsap.from(imageRef.current, {
      opacity: 0,
      y: -200,
      scale: 0.9,
      duration: 3,
      delay: 0.5,
      ease: "bounce.out",
    });
  }, []);

  return (
    <section className="bg-black text-white h-[80vh] flex flex-col justify-center px-8 py-16 md:px-24">
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row md:justify-around md:items-start">
        <div ref={imageRef} className="mt-10  md:mt-0 md:max-w-md opacity-70">
          <Image src="/lense.svg" alt="Eyewear lens" width={520} height={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

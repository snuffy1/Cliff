"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function MagicReveal() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const t = gsap.timeline({
        scrollTrigger: {
          trigger: ".main",
          start: "top top",
          end: "+=700%",
          scrub: true,
          pin: true,
          //   markers: true,
        },
      });
      t.fromTo(
        ".reveal-layer",
        {
          clipPath: "inset(100% 0% 0% 0%)",
          height: "50vh",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          height: "100vh",
        }
      );
      t.fromTo(
        ".reveal-layer-second",
        {
          clipPath: "inset(100% 100% 100% 100%)",
          borderRadius: "100px",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          borderRadius: "0px",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative main min-h-screen  overflow-hidden">
      {/* Background blurred image */}
      <div className="h-full w-full relative">
        <Image
          src="/ai0.jpg"
          alt="Blurred Image"
          fill
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Revealed clear image layer */}
      <div className="absolute bottom-0 left-0 right-0 reveal-layer">
        <div className="relative w-full h-full">
          <Image
            src="/ai2.jpg"
            alt="Revealed Image"
            fill
            objectFit="cover"
            quality={100}
          />
          <div className="text-5xl font-serif shadow-md text-white absolute inset-0 bg-black/10 flex justify-center items-center px-10 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              vero.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 reveal-layer-second overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/ai1.jpg"
            alt="Revealed Image"
            fill
            objectFit="cover"
            quality={100}
          />
          <div className="text-5xl font-serif shadow-md text-white absolute inset-0 bg-black/10 flex justify-center items-center px-10 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

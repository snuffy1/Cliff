"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "+=200%",
        scrub: true,
        markers: true,
        pin: true,
      },
    });

    tl.to(".trigger", {
      duration: 2,
      transform: "translateX(-300%)",
      ease: "none",
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="main h-full overflow-x-hidden">
      <section className="relative h-screen flex trigger bg-white">
        {/* <div className=" h-screen w-screen  z-10">
          <div className="relative h-full w-full">
            <Image fill src="/one.webp" alt="blue layer" className="" />
          </div>
        </div>
        <div className=" h-screen w-full blue z-10">
          <div className="relative h-full w-full">
            <Image fill src="/one.webp" alt="blue layer" className="" />
          </div>
        </div> */}
        <div className="w-screen h-screen shrink-0  blue z-20">
          <div className="relative h-full w-full">
            <Image fill src="/one.webp" alt="blue layer" className="" />
          </div>
        </div>

        <div className="w-screen h-screen  shrink-0 pink z-30">
          <div className="relative h-full w-full">
            <Image fill src="/seven.jpg" alt="pink layer" className="" />
          </div>
        </div>
        <div className="w-screen h-screen  shrink-0 pink z-30">
          <div className="relative h-full w-full">
            <Image fill src="/zero.avif" alt="pink layer" className="" />
          </div>
        </div>
        <div className="w-screen h-screen shrink-0 pink z-30">
          <div className="relative h-full w-full">
            <Image fill src="/six.jpg" alt="pink layer" className="" />
          </div>
        </div>
      </section>
    </div>
  );
}

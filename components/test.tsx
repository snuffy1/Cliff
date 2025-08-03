"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Test() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".test", {
        opacity: 0,
        y: 70,
      });

      // Animation for the section
      gsap.to(".test", {
        opacity: 1,
        y: 0,
        duration: 5,
        stagger: 5,
        scrollTrigger: {
          trigger: ".test",
          start: "top 80%",
          end: "top 10%",
          scrub: true,
          markers: true, // Set to true for debugging
        },
      });
      // gsap.to(".test2", {
      //   opacity: 1,
      //   y: 0,
      //   duration: 5,
      //   scrollTrigger: {
      //     trigger: ".test2",
      //     start: "top 80%",
      //     end: "top 10%",
      //     scrub: true,
      //     markers: true, // Set to true for debugging
      //   },
      // });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative z-20 flex flex-col max-w-7xl mx-auto bg-black h-screen">
      <h1 className="text-white text-center inset-0  text-4xl font-bold test">
        Test Component
      </h1>
      <p className="text-gray-400 text-4xl text-justify test">
        This is a test component to demonstrate layout and styling. additional
        content can be placed here. and more content can be added to fill the
        space. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="text-gray-400 text-4xl text-justify test">
        This is a test component to demonstrate layout and styling. additional
        content can be placed here. and more content can be added to fill the
        space. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

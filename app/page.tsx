// import HeroSection from "@/components/HeroSection";
// import Glass from "@/components/Glass";
import Gif from "@/components/Gif";
import React from "react";
import Focus from "@/components/Focus";
import BasicExample from "@/components/Swiper";
import Test from "@/components/test";
import MagicReveal from "@/components/MagicReveal";
import { TextScrollDemo } from "@/components/TextScroll";

const page = () => {
  return (
    <div>
      <Gif />
      <TextScrollDemo />
      <Focus />
      {/* <BasicExample /> */}
      {/* <Test /> */}
      <MagicReveal />
      {/* <HeroSection /> */}
      {/* Add more sections or components as needed */}
    </div>
  );
};

export default page;

import HeroSection from "@/components/HeroSection";
// import Glass from "@/components/Glass";
import Image from "next/image";
import Gif from "@/components/Gif";
import React from "react";
import { Lens } from "@/components/magicui/lens";
import Focus from "@/components/Focus";

const page = () => {
  return (
    <div>
      <Gif />
      <Focus />
      {/* <HeroSection /> */}
      {/* Add more sections or components as needed */}
    </div>
  );
};

export default page;

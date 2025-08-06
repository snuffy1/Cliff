import Gif from "@/components/Gif";
import React from "react";
import Focus from "@/components/Focus";
import MagicReveal from "@/components/MagicReveal";
import TextScrollDemo from "@/components/TextScroll";
import Opacity from "@/components/Opacity";
import Demo from "@/components/Demo";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <div>
      {/* <Display /> */}
      <Hero />
      <Gif />
      <TextScrollDemo />
      <Focus />
      <Demo />
      <MagicReveal />
      {/* <Opacity /> */}
    </div>
  );
};

export default page;

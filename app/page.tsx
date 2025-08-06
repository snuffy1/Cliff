import React from "react";
// import MagicReveal from "@/components/MagicReveal";
// import TextScrollDemo from "@/components/TextScroll";
// import Opacity from "@/components/Opacity";
// import Display from "@/components/Display";
import Demo from "@/components/Demo";
// import Hero from "@/components/Hero";
import BgAttached from "@/components/bg-attachment/BgAttached";
import Glass from "@/components/Glass";
import CliffFeatures from "@/components/features/CliffFeatures";
import MagicReveal from "@/components/MagicReveal";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="relative">
      {/* <Display /> */}
      <div className="sticky top-0 z-0">
        <Glass />
      </div>
      <Demo />
      <CliffFeatures />
      <BgAttached />
      <CliffFeatures />
      <MagicReveal />
      <div className="z-20">
        <Footer />
      </div>
    </div>
  );
};

export default page;

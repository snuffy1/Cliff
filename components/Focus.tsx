import React from "react";
import { Lens } from "@/components/magicui/lens";
import Image from "next/image";
const Focus = () => {
  return (
    <div>
      <Lens defaultPosition={{ x: 260, y: 150 }} lensSize={400}>
        <Image
          className="h-full w-full object-cover"
          src="/blurr.jpg"
          alt="image placeholder"
          width={500}
          height={500}
        />
      </Lens>
    </div>
  );
};

export default Focus;

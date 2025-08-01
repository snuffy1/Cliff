"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, MutableRefObject } from "react";
import { GLTF } from "three/examples/jsm/Addons.js";

gsap.registerPlugin(ScrollTrigger);

// ---- MODEL COMPONENT ----
type GlassesModelProps = {
  groupRef: MutableRefObject<THREE.Group | null>;
};

function GlassesModel({ groupRef }: GlassesModelProps) {
  const gltf = useGLTF("/models/eye_glasses.glb") as unknown as GLTF;
  const [chasmaSize, setChasmaSize] = React.useState(0.8);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setChasmaSize(0.5);
    }
  });

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.2, 0, 0]}>
      <primitive object={gltf.scene} scale={chasmaSize} />
    </group>
  );
}

const Glass: React.FC = () => {
  const glassesRef = useRef<THREE.Group | null>(null);
  const model = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className=" w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/images/backgroundd.avif')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section
        ref={sectionRef}
        className=" w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Decorative elements */}
        {/* <div className="absolute top-20 left-1/4 w-40 h-40 bg-[#e1aa12]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#e1aa12]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-32 h-32 border-2 border-[#e1aa12]/20 rounded-full" /> */}

        {/* Content */}
        <div className=" z-10 w-8/12 mx-auto px-4">
          {/* 3D Model */}
          <div className="flex items-center">
            <div
              ref={frameContainerRef}
              className="w-full  flex justify-center items-center will-change-transform h-[500px]"
            >
              <motion.div
                className=" origin-center w-full h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Canvas
                  ref={model}
                  className="absolute inset-0  h-screen w-screen -translate-x-[50px]  sm:-translate-x-[300px]"
                  camera={{ position: [-4, 0, 3], fov: 45 }}
                  style={{ height: "100vh", width: "100vw" }}
                >
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 3]} intensity={1} />
                  <Suspense fallback={null}>
                    <GlassesModel groupRef={glassesRef} />
                    <Environment preset="sunset" />
                  </Suspense>
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                  />
                </Canvas>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-screen">
          {/*  Text content */}
          <h1 className="text-5xl md:text-7xl font-serif text-center">
            Why Cliff Lens?
          </h1>
          <h2 className="text-4xl font-serif mt-4 text-center leading-loose ">
            Cliff is an esteemed eyewear company dedicated to transforming how
            people see the world, one pair of glasses at a time. Our journey
            began with a simple mission: to blend exceptional craftsmanship with
            innovative design, creating eyewear that not only enhances vision
            but also elevates style.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Glass;

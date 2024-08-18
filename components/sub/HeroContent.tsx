"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import myImage from "@/public/pr.jpg";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Empowering
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Future with{" "}
            </span>
            Decentralized Innovation
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I am a Blockchain Developer with expertise in building decentralized
          applications (dApps), smart contracts, and blockchain solutions.
          Explore my projects and skills to see how I am shaping the future of
          technology.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="mailto:rada203dorji@gmail.com"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Contact Me!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
        style={{ marginTop: "-60px" }} // Adjust the value to move the image higher
      >
        <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden">
          {/* Apply dark overlay and filter effects */}
          <div className="absolute inset-0 bg-black opacity-40 z-10 rounded-full"></div>
          <Image
            src={myImage}
            alt="work icons"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay filter brightness-200 contrast-110"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

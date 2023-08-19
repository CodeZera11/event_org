"use client";

import { opacity, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { Freehand, Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
});

const freehand = Freehand({
  subsets: ["latin"],
  weight: "400",
});

const AboutHero = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className={`relative w-full h-[100vh] overflow-y-scroll`}
      >
        <Image
          src="/bg-cover-3.jpeg"
          alt="cover-page"
          width={2000}
          height={2000}
          className={`absolute inset-0 w-full h-full object-cover`}
        />

        <div className={`absolute bg-black opacity-50 h-full w-full `} />

        <div
          className={`relative flex flex-col h-full w-full items-center justify-center`}
        >
          <div className={`border-4 border-secondary-white p-10`}>
            <h1 className={`text-6xl text-white ${roboto.className} font-bold`}>
              ABOUT US
            </h1>
            <motion.p
              variants={opacity(0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.25 }}
              className={`${freehand.className} text-white text-center text-md mt-2`}
            >
              This is where all your dreams come true.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;

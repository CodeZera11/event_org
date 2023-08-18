"use client";

import Button from "@/components/Button";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { buttonVariant, textContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <motion.div
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full h-[100vh] overflow-hidden relative"
      >
        <Image
          src="/cover-page-2.jpeg"
          alt="cover-page"
          className="absolute inset-0 h-full w-full object-cover"
          width={2000}
          height={2000}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="flex flex-col h-full items-center justify-center relative">
          <TypingText title={"WELCOME TO"} textStyles={"text-center"} />
          <TitleText title={"MAHAVEER EVENTS"} textStyles={"text-center"} />
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;

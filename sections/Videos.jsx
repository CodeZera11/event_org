"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { textContainer, textVariant } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import Button from "@/components/Button";

const Videos = () => {
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
          src="/bg-cover-3.jpeg"
          alt="cover-page"
          className="absolute inset-0 h-full w-full object-cover"
          width={2000}
          height={2000}
        />
        <div className="absolute inset-0 bg-black opacity-80" />
        <div className="flex flex-col h-full items-center justify-center relative">
          <TypingText title={"TAKE A LOOK AT"} textStyles={"text-center"} />
          <TitleText title={"OUR VIDEOS"} textStyles={"text-center"} />
          <Button label={"WATCH"} href={"/videos"} delay={2.8} />
        </div>
      </motion.div>
    </section>
  );
};

export default Videos;
Videos;

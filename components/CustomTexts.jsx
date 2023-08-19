"use client";

import { fadeIn, textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`space-x-1 font-normal text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={fadeIn("up", "tween", 2.2, 1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false }}
    className={`${textStyles} mt-[8px] font-extrabold md:text-[86px] text-white`}
  >
    {title}
  </motion.h2>
);

"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

import { Freehand, Patrick_Hand_SC } from "next/font/google";
import { TitleText, TypingText } from "./CustomTexts";
import Link from "next/link";

const freehand = Freehand({
  subsets: ["latin"],
  weight: "400",
});

const phs = Patrick_Hand_SC({
  subsets: ["latin"],
  weight: "400",
});

const PersonCard = ({ image, name, role, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 1)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className={`transition-transform duration-300 ease-linear ${freehand.className}`}
    >
      <div className={"relative border border-white"}>
        <Image
          src={image}
          alt={role}
          width={300}
          height={400}
          className={"inset-0 w-full h-[400px] object-cover"}
        />
        <div className={"w-full bg-black absolute inset-0 opacity-50"} />
        <div
          className={`relative flex flex-col items-start justify-start bg-secondary-white p-4 ${freehand.className}`}
        >
          <h1 className={`text-xl  ${phs.className}  uppercase`}>{name}</h1>
          <p className={`text-sm ${freehand.className}`}>{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonCard;

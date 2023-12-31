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

const ProjectCard = ({ title, type, slug, thumbnail, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      variants={fadeIn("right", "spring", index * 0.2, 1)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className={`cursor-pointer transition-transform duration-300 ease-linear ${freehand.className}`}
    >
      <Link href={`/projects/${slug}`}>
        <div className={"relative border border-white"}>
          <Image
            src={thumbnail}
            alt={slug}
            width={500}
            height={400}
            className={" inset-0 w-full h-[400px] object-cover"}
          />
          <div className={"w-full bg-black absolute inset-0 opacity-50"} />
          <div
            className={`relative flex flex-col items-start justify-start bg-secondary-white p-4 ${freehand.className}`}
          >
            <h1 className={`text-xl ${freehand.className}`}>{title}</h1>
            <p className={`text-sm ${phs.className}`}>{type}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

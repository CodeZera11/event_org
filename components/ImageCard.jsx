"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageCard = ({ src, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.3, 1)}
      initial="hidden"
      whileInView={"show"}
      whileHover={{ scale: 1.3 }}
      viewport={{ once: false, amount: 0.25 }}
      className={"border border-secondary-white cursor-pointer"}
    >
      <Image src={src} width={300} height={400} />
    </motion.div>
  );
};

export default ImageCard;

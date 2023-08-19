"use client";

import { buttonVariant, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Button = ({ label, href, delay }) => {
  const router = useRouter();

  return (
    <motion.button
      variants={buttonVariant("left", "tween", delay, 0.8)}
      className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-black hover:text-white transition-colors duration-500 "
      initial="hidden"
      whileInView="show"
      whileHover={{ scale: 1.5 }}
      whileTap={{
        scale: 1,
      }}
      viewport={{ once: false, amount: 0.25 }}
      onClick={() => router.push(href)}
    >
      {label}
    </motion.button>
  );
};

export default Button;

"use client";

import styles from "@/styles";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className={`${styles.footerPaddings}`}>
      <motion.footer className={"flex items-center justify-between"}>
        <div className={"text-sm text-zinc-900"}>
          © Copyright. Mahaveer Events Wedding 2023 | Design by CodeZera
        </div>
        <div>Instagram</div>
      </motion.footer>
    </section>
  );
};

export default Footer;

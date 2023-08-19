"use client";

import styles from "@/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={`${styles.footerPaddings}`}>
      <motion.footer className={"flex items-center justify-between"}>
        <div className={"text-sm text-zinc-900"}>
          © Copyright. Mahaveer Events Wedding 2023 | Design by CodeZera
        </div>
        <Link href={"/"}>
          <div className={`cool-link`}>Instagram</div>
        </Link>
      </motion.footer>
    </section>
  );
};

export default Footer;

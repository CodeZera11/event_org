"use client";

import { navLinks } from "@/constants";
import styles from "@/styles";
import { navVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 relative bg-white`}
    >
      <div
        className={`${styles.innerWidth} flex justify-between items-center `}
      >
        <motion.div variants={navVariants("right")}>LOGO HERE</motion.div>

        <motion.div variants={navVariants("left")}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${
                pathname === link.href ? "underline" : ""
              } leading-5 underline-offset-4 cool-link tracking-wider px-2`}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

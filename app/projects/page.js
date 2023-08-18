"use client";

import { TitleText, TypingText } from "@/components/CustomTexts";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className={`${styles.paddings} bg-black`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
      >
        <TypingText title={"TAKE A LOOK AT"} />
        <TitleText title={"OUR PROJECTS"} textStyles={"mb-10"} />

        <div className={"grid grid-cols-3 gap-10"}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

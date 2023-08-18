"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  fadeIn,
  opacity,
  projectInfoTitleBorder,
  staggerContainer,
} from "@/utils/motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { projectInfo } from "@/constants";
import { TitleText, TypingText } from "@/components/CustomTexts";

const ProjectPage = ({ params }) => {
  const slug = params.slug;

  const [data, setData] = useState({
    slug: "",
    title: "",
    location: "",
    date: "",
    inspiration: "",
    services: "",
    story: "",
    images: [""],
  });

  useEffect(() => {
    projectInfo.map((project) => {
      if (project.slug === slug) {
        setData(project);
      }
    });
  }, [slug]);

  const { images, title, location, date, inspiration, services } = data;

  if (!data) {
    return <div>No results found</div>;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={"w-full h-[100vh] bg-black relative overflow-hidden"}
    >
      <motion.div>
        <Image
          src={images[0]}
          alt={title}
          width={500}
          height={500}
          className={"w-full h-[500px] object-cover absolute"}
        />

        <div className="absolute inset-0 bg-black opacity-70 h-[500px]" />

        <div className="flex flex-col items-center justify-center relative p-[200px]">
          <motion.div
            variants={opacity(0.1)}
            initial="hidden"
            whileInView="show"
            className="border border-white p-4"
          >
            <motion.h1 className={"text-white text-5xl"}>{title}</motion.h1>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="grid grid-cols-4 mt-[100px]">
        <motion.div
          variants={fadeIn("right", "tween", 1, 1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className={"p-4"}
        >
          <h1 className={"text-white text-2xl text-center font-bold"}>
            Location
          </h1>
          <motion.p
            variants={opacity(3)}
            className="text-sm text-secondary-white text-center mt-2"
          >
            {location}
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 1.5, 1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className={"p-4"}
        >
          <h1 className={"text-white text-2xl text-center font-bold"}>Date</h1>
          <motion.p
            variants={opacity(3.5)}
            className="text-sm text-secondary-white text-center mt-2"
          >
            {date}
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 2, 1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className={"p-4"}
        >
          <h1 className={"text-white text-2xl text-center font-bold"}>
            Inspiration
          </h1>
          <motion.p
            variants={opacity(4)}
            className="text-sm text-secondary-white text-center mt-2"
          >
            {inspiration}
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 2.5, 1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className={"p-4"}
        >
          <h1 className={"text-white text-2xl text-center font-bold"}>
            Services
          </h1>
          <motion.p
            variants={opacity(4.5)}
            className="text-sm text-secondary-white text-center mt-2"
          >
            {services}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectPage;

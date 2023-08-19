"use client";

import { motion } from "framer-motion";
import { fadeIn, opacity, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { projectInfo } from "@/constants";
import { TypingText } from "@/components/CustomTexts";
import { Roboto } from "next/font/google";
import styles from "@/styles";
import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import Link from "next/link";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
});

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

  const { images, title, location, date, inspiration, services, story } = data;

  if (!data) {
    return <div>No results found</div>;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-full h-[100vh] bg-black relative overflow-y-auto`}
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
      // About the project
      <motion.div className="grid grid-cols-4 mt-[100px]">
        <motion.div
          variants={fadeIn("up", "tween", 1, 1)}
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
          variants={fadeIn("up", "tween", 1.5, 1)}
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
          variants={fadeIn("up", "tween", 2, 1)}
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
          variants={fadeIn("up", "tween", 2.5, 1)}
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
      // Story
      <motion.div className="grid grid-cols-2 mt-[150px] bg-[#222222] border-secondary-white border text-white mb-[100px]">
        <motion.div
          variants={opacity(0.3)}
          initial={"hidden"}
          whileInView="show"
          viewport={{ once: false }}
        >
          <Image
            src={data.images[1]}
            alt={slug}
            width={500}
            height={400}
            className={"w-full object-cover inset-0 h-[400px] bg-white "}
          />
        </motion.div>

        <div className="flex w-full h-full items-center justify-center flex-col gap-2">
          <div>
            <TypingText
              title={"The Story"}
              textStyles={`text-3xl tracking-widest ${roboto.className}`}
            />
          </div>
          <motion.div
            variants={opacity(0.7)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false }}
            className="w-[100px] bg-white h-1 rounded-full  -ml-[75px]"
          />

          <div className="mt-5 ml-[35px]">
            <motion.p
              variants={fadeIn("up", "tween", 1.5, 0.7)}
              initial={"hidden"}
              whileInView="show"
              viewport={{ once: false }}
              className={`text-sm text-secondary-white max-w-[550px] ${roboto.className}`}
            >
              {story}
            </motion.p>
          </div>
        </div>
      </motion.div>
      // Gallery TODO
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        initial={"hidden"}
        whileInView="show"
        viewport={{ once: false }}
        className={`flex flex-col gap-14 border border-white ${styles.paddings} mb-[100px] bg-[#222222] mt-[100px]`}
      >
        <div>
          <TypingText
            title={"GALLERY!"}
            textStyles={`${roboto.className} text-[16px]`}
          />
          <motion.div
            variants={opacity(1)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false }}
            className="bg-white w-[60px] h-1 rounded-full mt-2"
          />
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial={"hidden"}
          whileInView="show"
          viewport={{ once: false }}
          className="flex gap-14"
        >
          {images.map((image, index) => (
            <ImageCard index={index + 1} key={index} src={image} />
          ))}
        </motion.div>
      </motion.div>
      // Contact US
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        initial={"hidden"}
        whileInView="show"
        viewport={{ once: false }}
        className={`flex flex-col gap-14 border border-white ${styles.paddings} mb-[100px] bg-[#222222] mt-[50px]`}
      >
        <div>
          <TypingText title={"SAY HELLO!"} textStyles={roboto.className} />
          <motion.div
            variants={opacity(1)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false }}
            className="bg-white w-[60px] h-1 rounded-full mt-2"
          />
        </div>
        <div className={` flex items-center justify-between `}>
          <motion.h1
            variants={fadeIn("left", "tween", 1.2, 1)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false }}
            className={`tracking-wider font-bold ${roboto.className} text-white text-5xl`}
          >
            Let's Work Together
          </motion.h1>
          <Link href="/contact">
            <Button label={"CONTACT US"} delay={1} />
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectPage;

"use client";

import { fadeIn, opacity, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Freehand, Roboto } from "next/font/google";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "@/styles";
import { TypingText } from "@/components/CustomTexts";
import { team } from "@/constants";
import PersonCard from "@/components/PersonCard";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
});

const freehand = Freehand({
  subsets: ["latin"],
  weight: "400",
});

const AboutPage = () => {
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
          src={"/bg-cover-3.jpeg"}
          alt={"about-cover"}
          width={500}
          height={500}
          className={"w-full h-[400px] object-cover absolute"}
        />
        <div className="bg-black inset-0 absolute opacity-70 h-[400px]" />

        <div className="flex flex-col items-center justify-center relative p-[100px]">
          <div className="border-4 border-secondary-white p-10">
            <h1 className={`text-6xl text-white ${roboto.className} font-bold`}>
              ABOUT US
            </h1>
            <motion.p
              variants={opacity(0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.25 }}
              className={`${freehand.className} text-white text-center text-md mt-2`}
            >
              This is where all your dreams come true.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <div className={`text-white ${styles.xPaddings} mt-[110px]`}>
        <TypingText
          title={"WELCOME TO MAHAVEER EVENTS!"}
          textStyles={`${roboto.className} text-4xl mb-6`}
        />
        <motion.div
          variants={fadeIn("up", "tween", 3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p
            className={`text-md text-secondary-white ${roboto.className} mb-2`}
          >
            Baz Events is one of the leading and most famous designing companies
            in the world. We convey the understanding of classics and the latest
            trends in design, rich experience and deep-rooted business
            processes, originality and a great passion for our job.
          </p>
          <p className={`text-md text-secondary-white ${roboto.className} `}>
            One of the main distinctive features of Baz Events is the ability to
            intensely understand every client and to offer a fusion that suits
            him/her best. For us creating a concept is an art, and in art, as
            you know, there is no place for an accurate approach! Hence, our
            style does not just bring a festival atmosphere. It creates an
            original, exceptional history, evokes a whole range of feelings and
            gives unforgettable impressions.
          </p>
        </motion.div>
      </div>
      <div
        className={`border border-secondary-white grid grid-cols-2 text-white mt-[200px] ${styles.paddings} bg-[#222222]`}
      >
        <div>
          <Image
            src={"/about-1.jpeg"}
            width={500}
            height={500}
            alt={"about-1"}
            className={`w-[500px] h-[600px] object-contain`}
          />
        </div>

        <div className={`${styles.topPaddings}`}>
          <TypingText title={"THE STORY!"} textStyles={"text-4xl"} />
          <motion.div
            variants={opacity(1)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false }}
            className="bg-white w-[120px] h-1 rounded-full mt-2 ml-2"
          />
          <motion.p
            variants={opacity(1)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false }}
            className="text-md text-secondary-white mt-10"
          >
            Baz Events founder Walid Baz started this journey in 2009 and now
            stands as one of top wedding planners in Lebanon and the world. He
            is recognized as one of the primary experts in this field and often
            gives interviews on the pages of famous magazines and on TV. Today
            Baz Events is a Multinational Award Winning Event Design company
            whose main aim remains true to the initial purpose of creating
            quality customized event spaces.
          </motion.p>
        </div>
      </div>
      // Story
      <motion.div className="grid grid-cols-2 mt-[150px] bg-[#222222] border-secondary-white border text-white mb-[100px]">
        <motion.div
          variants={opacity(0.3)}
          initial={"hidden"}
          whileInView="show"
          viewport={{ once: false }}
        >
          <Image
            src={"/bg-cover-3.jpeg"}
            alt={"slug"}
            width={500}
            height={400}
            className={"w-full object-cover inset-0 h-[400px] bg-white "}
          />
        </motion.div>

        <div className="flex w-full h-full items-center justify-center flex-col gap-2">
          <div>
            <TypingText
              title={"ABOUT US"}
              textStyles={`text-3xl tracking-widest ${roboto.className}`}
            />
          </div>
          <motion.div
            variants={opacity(0.7)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false }}
            className="w-[100px] bg-white h-1 rounded-full  -ml-[100px]"
          />

          <div className="mt-5 ml-[35px]">
            <motion.p
              variants={fadeIn("up", "tween", 1.5, 0.7)}
              initial={"hidden"}
              whileInView="show"
              viewport={{ once: false }}
              className={`text-sm text-secondary-white max-w-[550px] ${roboto.className}`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              quasi rerum necessitatibus iste reprehenderit dicta quibusdam ipsa
              veniam a perspiciatis eos blanditiis deleniti modi expedita dolore
              eligendi ab, suscipit atque ullam architecto. Blanditiis ipsum,
              dolor veritatis molestias vel sunt architecto ex aperiam nemo ad
              debitis repellat quis voluptatum quisquam mollitia dicta totam
              eaque nam corporis animi molestiae alias exercitationem odit. Eum
              molestias pariatur architecto soluta nostrum porro praesentium
              consequuntur eligendi sit libero quas ab ratione totam magnam quae
              deleniti, ea distinctio recusandae sint sequi animi. Natus,
              eveniet? Vitae assumenda error modi voluptate ratione, repellendus
              reprehenderit necessitatibus laboriosam! Architecto, tempora
              voluptas!
            </motion.p>
          </div>
        </div>
      </motion.div>
      // Team
      <section className={`${styles.paddings} bg-[#222222]`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
        >
          <TypingText title={"OUR TEAM!"} textStyles={"text-4xl"} />
          <motion.div
            variants={opacity(0.7)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false }}
            className="w-[100px] bg-white h-1 rounded-full ml-1 mt-2"
          />
          <div className={"grid grid-cols-3 gap-10 mt-14"}>
            {team.map((person, index) => (
              <PersonCard key={index} {...person} index={index + 1} />
            ))}
          </div>
        </motion.div>
      </section>
      // Contact
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

export default AboutPage;

import React, { Fragment } from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { AnimationProps, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "why hello there...?",
      "i can build you a cool online experience",
      "hit me up... :)",
    ],

    loop: true,
    delaySpeed: 2000,
  });

  const getDate = () => {
    const date = new Date().getDate();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return `${weekday[day]}: ${date} - ${month} - ${year}`;
  };

  const heroContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        duration: 3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const renderHeroButtons = (linkName: string) => {
    return (
      <Link href={`#${linkName}`} passHref>
        <motion.button variants={item} className="heroButton">
          {linkName}
        </motion.button>
      </Link>
    );
  };
  return (
    <Fragment>
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="flex shadow-inner  flex-col items-center h-screen my-10 justify-center border max-w-4xl mx-auto h-full p-5"
      >
        <motion.div variants={item} className="text-center space-y-5">
          <h2 className="uppercase  text-2xl underline font-bold">
            Front End Engineer
          </h2>
          <h2 className="text-xl">Coded By</h2>
          <h2 className="text-xl uppercase">Obi</h2>
          <h2 className="text-xl uppercase">{getDate()}</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center my-12 space-y-6"
        >
          <h1>
            <span>{text}</span>
            <Cursor />
          </h1>
          <p className="tracking-[15px] uppercase font-bold">
            Software engineer
          </p>
        </motion.div>

        <motion.div variants={heroContainer} className="flex">
          <motion.div variants={item} className="mx-auto">
            <Image
              className="object-cover rounded-full self-center"
              src="/images/profile.jpeg"
              alt="profile pic"
              width="133"
              height="133"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={heroContainer}
          className="flex justify-around w-full p-5"
        >
          {renderHeroButtons("projects")}
          {renderHeroButtons("experience")}
          {renderHeroButtons("skills")}
          {renderHeroButtons("blog")}
          {renderHeroButtons("about")}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Hero;

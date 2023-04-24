import { Fragment } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../utils/typings";
import { urlFor } from "../lib/sanity";

type Props = {
  pageInfo?: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: pageInfo?.typeWriterText
      ? pageInfo?.typeWriterText?.split(",")
      : [""],
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

    return `${weekday[day]}: ${date} - ${month + 1} - ${year}`;
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
      <Link href={`#${linkName}`} passHref className="">
        <motion.button variants={item} className="heroButton  ">
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
        className="flex h-screen flex-col items-center  my-3 justify-center max-w-4xl mx-auto p-5"
      >
        <motion.div variants={item} className="text-center space-y-5">
          <h2 className="uppercase  text-2xl underline font-bold md:tracking-[3px]">
            {pageInfo?.role ?? ""}
          </h2>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center max-w-full justify-center my-10 space-y-6"
        >
          <h6 className="text-md">
            <span>{text}</span>
            <Cursor />
          </h6>
        </motion.div>

        <motion.div variants={heroContainer} className="flex">
          <motion.div variants={item} className="mx-auto">
            <Image
              className="object-cover rounded-full self-center"
              src={urlFor(pageInfo?.heroImage).url()}
              alt="profile pic"
              width="133"
              height="133"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={heroContainer}
          className=" md:flex-row flex flex-col justify-center md:w-full p-3 "
        >
          {renderHeroButtons("projects")}
          {renderHeroButtons("experience")}
          {renderHeroButtons("about")}
          {renderHeroButtons("contact")}
          {/* {renderHeroButtons("skills")} */}
          {/* {renderHeroButtons("blog")} */}
        </motion.div>
        <motion.div>
          <Link
            passHref
            className=""
            href="https://www.dropbox.com/s/067hzog1c3qci4t/Obinna_Anokwuru_-_Front_End_Development_NEW.pdf?dl=0"
          >
            <a target="_blank" rel="noreferrer">
              <p className="font-semibold  p-1 rounded-md text-lg underline-offset-2 underline tracking-wider cursor-pointer hover:text-blue-400 uppercase">
                CV
              </p>
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Hero;

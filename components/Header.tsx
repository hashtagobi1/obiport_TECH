import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// interface Props {}

const renderLink = (link: string) => {
  return (
    <div className="mr-5 hover:underline ease-in-out transition-all duration-1000">
      <Link passHref href={`/${link}`} className="">
        {link}
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <motion.header
      initial={{
        // opacity: 0,
        y: -100,
      }}
      animate={{
        // opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="sticky shadow-xl top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 "
    >
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
      >
        <div className="p-1">
          <Image
            src={"/images/obi_logo.png"}
            alt={"obi logo"}
            width={"50"}
            height={"30"}
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-row items-center  justify-between cursor-pointer "
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
        }}
      >
        <SocialIcon
          className=" border rounded-full animate-pulse md:mr-5"
          network="email"
          fgColor="gray"
          bgColor="#fff"
        />
        <p className="uppercase hidden md:inline-flex text-sm">lets talk</p>
      </motion.div>
    </motion.header>
  );
};

export default Header;

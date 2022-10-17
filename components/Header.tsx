import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";

// interface Props {}

const LeftNavInitial = {
  x: -500,
  opacity: 0,
  scale: 0.1,
};

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 ">
      <motion.div
        className="flex flex-row items-center"
        initial={LeftNavInitial}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
      >
        <div className="mr-5">
          <Image
            src={"/images/obi_logo.png"}
            alt={"obi logo"}
            width={"100"}
            height={"60"}
          />
        </div>
        <div className="mr-5"> projects</div>
        <div className="mr-5"> blog</div>
        <SocialIcon
          fgColor="#dee"
          bgColor="#000"
          className="mr-5"
          url="https://www.linkedin.com/in/obinna-anokwuru-647231149/"
        />
        <SocialIcon
          fgColor="#000"
          bgColor="#dee"
          className="mr-5"
          url="https://www.twitter.com/obiwritescode/"
        />
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
    </header>
  );
};

export default Header;

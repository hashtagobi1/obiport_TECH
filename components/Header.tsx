import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Social } from "../utils/typings";
import { FC } from "react";

interface Props {
  socials?: Social[];
}

const Header: FC<Props> = ({ socials }) => {
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
      className="sticky shadow-lg top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 "
    >
      <motion.div
        className="flex flex-row items-center space-x-3 p-1"
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
        <Link passHref href="#hero">
          <div>
            <Image
              src={"/images/obi_logo.png"}
              alt={"obi logo"}
              className="cursor-pointer"
              width={"50"}
              height={"30"}
            />
          </div>
        </Link>

        {socials
          ? socials.map((social, i) => {
              return (
                <div key={i} className="hidden md:block">
                  <Link passHref href={social?.url ?? ""}>
                    <SocialIcon
                      fgColor="#000"
                      bgColor="#fff"
                      className=" scale-75 border rounded-full  border-black/75"
                      url={social?.url}
                    />
                  </Link>
                </div>
              );
            })
          : null}
      </motion.div>

      <Link passHref href="#contact">
        <motion.div
          className="flex flex-row items-center   justify-between cursor-pointer "
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
          <div className="hidden md:inline-flex border rounded-full animate-pulse md:mr-5">
            <SocialIcon network="email" fgColor="gray" bgColor="#fff" />
          </div>
          <p className="uppercase hidden md:inline-flex text-sm">lets talk</p>
        </motion.div>
      </Link>
    </motion.header>
  );
};

export default Header;

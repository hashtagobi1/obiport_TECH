import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex  relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="/images/profile.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] "
        width="500"
        initial={{
          x: 150,
          opacity: 0.3,
        }}
        transition={{
          duration: 3.2,
          ease: "linear",
          stiffness: 20,
          damping: 300,
          default: { ease: "linear" },
        }}
        whileInView={{ opacity: 1, x: 0 }}
      />

      <div className="soace-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          some bits about{" "}
          <span className="underline decoration-[#F7AB0a] underline-offset-8">
            me
          </span>
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          officiis obcaecati esse enim, deserunt quo corrupti nulla voluptates
          vitae omnis ex eligendi quas tenetur possimus labore accusamus sed
          ipsum perspiciatis?
        </p>
      </div>
    </motion.div>
  );
};

export default About;

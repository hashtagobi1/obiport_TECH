import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h3 className="absolute top-24 uppercase tracking-[24px] font-bold text-center text-gray-500 text-4xl">
      {title}
    </h3>
  );
};

export const SectionContainer: FC<{ classes: string }> = ({
  children,
  classes,
}) => {
  return (
    <motion.div
      className={` ${classes}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export const ExperienceCard: FC<{
  jobTitle: string;
  company: string;
}> = ({ company, jobTitle }) => {
  return (
    <article
      className="flex snap-center bg-white flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] p-10 md:hover:opacity-100 md:opacity-40 
    transition-opacity cursor-pointer duration-500 overflow-hidden "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/images/netflix_logo.png"
        alt="logo"
      />

      <div className="px-0 md:px-10 h-96   overflow-y-auto customScrollBar">
        <h4 className="text-4xl font-light text-center">{jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 text-center">{company}</p>
        <div className="flex space-x-2 my-2 items-center justify-center">
          <img className="h-10 w-10 rounded-full" src="/images/ts.png" />
          <img className="h-10 w-10 rounded-full" src="/images/ts.png" />
          <img className="h-10 w-10 rounded-full" src="/images/ts.png" />
        </div>
        <p className="uppercase py-5 text-gray-800 text-center">
          Started worked
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary Points
          </li>
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary Points
          </li>
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary Points
          </li>
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary Points
          </li>
          <li>
            Summary PointsSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary Points
          </li>
        </ul>
      </div>
    </article>
  );
};

export const Skill: FC<{ directionLeft?: boolean }> = ({ directionLeft }) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/images/firebase.png"
        className="h-12 w-12 md:h-24 md:w-24 rounded-full border-gray-500 object-cover filter group-hover:grayscale duration-500 transition-all ease-in-out"
        alt="skilllogo"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-24 md:w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opactiy-100">100%</p>
        </div>
      </div>
    </div>
  );
};

import React from "react";

type Props = {};

export const ProjectCard: FC<{ projLength: number; projIndex: number }> = ({
  projLength,
  projIndex,
}) => {
  return (
    <div className="w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{
          y: -300,
          opacity: 0.4,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/images/ts.png"
        alt="the image"
        className="object-cover h-12 w-12"
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
        <h4 className="text-4xl  text-center">
          <span className="">
            Case Study {projIndex} of {projLength}:{" "}
          </span>
          <span className="underline font-semibold decoration-[#F7AB0a]/50 underline-offset-4">
            Thing Clone
          </span>
        </h4>

        <p className="text-justify text-lg text-center md:text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias
          fugiat facere tempora culpa, voluptate recusandae deleniti laboriosam
          itaque corrupti, consequuntur hic iusto qui labore quibusdam facilis,
          animi cupiditate odio!
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

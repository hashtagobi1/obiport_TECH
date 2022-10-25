import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h3 className="absolute top-24 uppercase tracking-[30px] font-bold text-center text-gray-500 text-4xl">
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

      <div className="px-0 md:px-10 h-96   overflow-y-auto ">
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

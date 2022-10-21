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

export const SectionContainer: FC<{ otherClasses?: string }> = ({
  children,
  otherClasses,
}) => {
  return (
    <motion.div
      className={`h-screen flex  relative flex-col text-center 
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ${otherClasses}`}
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

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="/images/ts.png" />
          <img className="h-10 w-10 rounded-full" src="/images/ts.png" />
          <img className="h-10 w-10 rounded-full" src="/images/ts.png" />
        </div>
        <p className="uppercase py-5 text-gray-800">Started worked</p>
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

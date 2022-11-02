import { FC } from "react";
import { motion } from "framer-motion";
import { Experience, Skill as SkillProps } from "../utils/typings";
import { urlFor } from "../lib/sanity";

export const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h3 className="absolute my-6 top-24 uppercase tracking-[24px] font-bold text-center text-gray-500 text-4xl">
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
  exp: Experience;
}> = ({ exp }) => {
  return (
    <article
      className="flex snap-center bg-white flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] p-10 md:hover:opacity-100 md:opacity-40 
    transition-opacity duration-500 overflow-hidden z-50 "
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
        src={urlFor(exp.companyImage).url()}
        alt="logo"
      />
      <h4 className="text-4xl font-light text-center">{exp.jobTitle}</h4>
      <p className="font-bold text-2xl mt-1 text-center">{exp.company}</p>
      <div className="flex space-x-2 my-5 items-center justify-center">
        <h6 className="tracking-widest">Tech Used:</h6>
        {exp.technologies &&
          exp.technologies.map((tech, i) => {
            return (
              <img
                key={i}
                alt={`logo for ${tech.title}`}
                className="h-10 w-10 rounded-full"
                src={urlFor(tech.image).url()}
              />
            );
          })}
      </div>
      <p className="uppercase py-5 text-gray-800 text-center tracking-tighter font-semibold">
        <span className="underline underline-offset-2">
          {exp.dateStarted ? new Date(exp.dateStarted).toDateString() : ""}
        </span>
        {` - `}
        <span className="underline underline-offset-2">
          {" "}
          {exp.isCurrentlyWorkingHere
            ? "Present"
            : exp.dateEnded
            ? new Date(exp.dateEnded).toDateString()
            : ""}
        </span>
      </p>

      <div className="px-0 border rounded-lg border-black/60 md:px-10 h-96 overflow-y-auto customScrollBar">
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {exp.points
            ? exp.points.map((point, i) => {
                return <li key={i}>{point}</li>;
              })
            : null}
        </ul>
      </div>
    </article>
  );
};

export const Skill: FC<{ skill: SkillProps; directionLeft: boolean }> = ({
  directionLeft,
  skill,
}) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="h-6 w-6 md:h-12 md:w-12 border border-black/60 rounded-full  object-cover filter group-hover:grayscale duration-500 transition-all ease-in-out"
        alt={`${skill?.title}-logo`}
      />
      <div className="absolute  opacity-0 group-hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-white h-6 w-6 md:h-12 md:w-12 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opactiy-100 animate-bounce">
            {skill?.yearsExperience}
          </p>
        </div>
      </div>
    </div>
  );
};

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

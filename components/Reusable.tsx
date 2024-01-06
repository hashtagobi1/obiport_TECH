import { FC } from "react";
import { motion } from "framer-motion";
import { Experience, Skill as SkillProps } from "../utils/typings";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const SectionTitle: FC<{ title: string; classes?: string }> = ({
  title,
  classes = "absolute my-6 top-24 uppercase tracking-[24px] font-bold text-center text-gray-500 text-4xl",
}) => {
  // if (title === "experience") {
  //   return (
  //     <div className={`${classes} flex flex-col`}>
  //       <h3 className={``}>{title}</h3>
  //       <div className="flex items-center justify-center mt-6 gap-5">
  //         <span className="text-sm  tracking-tight">Swipe to see more</span>
  //         <span>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth={1.5}
  //             stroke="currentColor"
  //             className="w-6 h-6"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  //             />
  //           </svg>
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }
  return <h3 className={`${classes}`}>{title}</h3>;
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
  position: number;

  //     w-[500px] md:w-[600px] xl:w-[900px]
  //     snap-center p-10 hover:opacity-100
  //     opacity-40 cursor-pointer transition-opacity duration-300 overflow-hidden
}> = ({ exp, position }) => {
  return (
    <article
      className="
      mt-20
      flex flex-col items-center justify-center shadow-xl
      snap-mandatory snap-center
      rounded-lg
      space-y-3
      md:p-20
      p-9
      opacity-40 hover:opacity-100
      flex-shrink-0
      cursor-pointer"
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
        className="w-12 h-12 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(exp.companyImage).url()}
        alt="logo"
      />
      <h4 className="md:text-4xl font-light text-center">{exp.jobTitle}</h4>
      <Link href={exp.link} passHref>
        <p className="font-bold md:text-2xl text-blue-600 underline text-center">
          {exp.company}
        </p>
      </Link>
      <div className="flex space-x-2 items-center justify-center">
        <h6 className="tracking-widest text-xs md:text-base">Tech Used:</h6>
      </div>
      <div className="flex justify-between ">
        {exp.technologies &&
          exp.technologies.map((tech, i) => {
            return (
              <div className="m-1" key={i}>
                <Image
                  width="20"
                  height="20"
                  alt={`logo for ${tech.title}`}
                  className="h-5 w-5 md:h-24 md:w-24 rounded-full"
                  src={urlFor(tech.image).url()}
                />
              </div>
            );
          })}
      </div>
      {/* <p className="uppercase p-0  text-xs flex text-gray-800 text-center tracking-tighter font-light">
        <span className="">
          {exp.dateStarted ? new Date(exp.dateStarted).toDateString() : " "}
        </span>
        {` - `}
        <span className="">
          {" "}
          {exp.isCurrentlyWorkingHere
            ? "Present"
            : exp.dateEnded
            ? new Date(exp.dateEnded).toDateString()
            : " "}
        </span>
      </p> */}

      <div className="items-center justify-center">
        <h6 className="text-center font-bold">Summary</h6>

        <ul className=" max-w-[250px] md:max-w-md border-black border overflow-y-scroll h-60 customScrollBar rounded list-none  ml-5 text-lg">
          {exp.points
            ? exp.points.map((point, i) => {
                return (
                  <li className="text-xs m-2" key={i}>
                    {point}
                  </li>
                );
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

export default Skill;

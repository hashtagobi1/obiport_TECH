import React from "react";
import ProjectCard, { SectionContainer, SectionTitle } from "./Reusable";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const proj = [1, 1, 1, 1, 1];
  return (
    <SectionContainer
      classes="h-screen flex relative flex-col text-center overflow-hidden text-left md:flex-row   
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <SectionTitle title="projects" />

      <div className="relative customScrollBar w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 ">
        {proj.map((project, i) => (
          <ProjectCard projIndex={i + 1} projLength={proj.length} key={i} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-gray-900/5 left-0 h-[500px] -skew-y-12 "></div>
    </SectionContainer>
  );
};

export default Projects;

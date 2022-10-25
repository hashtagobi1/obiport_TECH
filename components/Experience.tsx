import Image from "next/image";
import React, { FC } from "react";
import { ExperienceCard, SectionContainer, SectionTitle } from "./Reusable";
import { motion } from "framer-motion";

type Props = {};

const Experience: FC<{}> = ({ children }) => {
  return (
    <SectionContainer
      classes="overflow-hidden h-screen flex relative flex-col text-center 
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <SectionTitle title="experience" />
      <div className="w-full flex flex-row space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory customScrollBar">
        <ExperienceCard company="netflix" jobTitle="worker" />
        <ExperienceCard company="netflix" jobTitle="worker" />
        <ExperienceCard company="netflix" jobTitle="worker" />
      </div>
    </SectionContainer>
  );
};

export default Experience;

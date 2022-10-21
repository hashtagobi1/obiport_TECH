import Image from "next/image";
import React, { FC } from "react";
import { ExperienceCard, SectionContainer, SectionTitle } from "./Reusable";
import { motion } from "framer-motion";

type Props = {};

const Experience: FC<{}> = ({ children }) => {
  return (
    <SectionContainer otherClasses="overflow-hidden">
      <SectionTitle title="experience" />
      <div className="w-full flex flex-row space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard company="netflix" jobTitle="worker" />
        <ExperienceCard company="netflix" jobTitle="worker" />
        <ExperienceCard company="netflix" jobTitle="worker" />
      </div>
    </SectionContainer>
  );
};

export default Experience;

import React, { FC } from "react";
import { ExperienceCard, SectionContainer, SectionTitle } from "./Reusable";
import { Experience } from "../utils/typings";

type Props = {
  experiences: Experience[];
};

const Experience: FC<Props> = ({ experiences }) => {
  return (
    <SectionContainer
      classes="overflow-hidden h-screen flex relative flex-col text-center 
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <SectionTitle
        classes="absolute top-24 uppercase tracking-[12px] font-bold text-center text-gray-500 text-4xl"
        title="experience"
      />
      <div
        className="w-full flex flex-row space-x-5 overflow-x-scroll p-10 
      snap-x snap-mandatory customScrollBar"
      >
        {experiences
          ? experiences.reverse().map((exp, i) => {
              return <ExperienceCard key={exp._id} exp={exp} position={i} />;
            })
          : ""}
      </div>
    </SectionContainer>
  );
};

export default Experience;

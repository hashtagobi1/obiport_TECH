import { FC } from "react";
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
      <div className="flex absolute bottom-5 animate-pulse items-center justify-center mt-6 gap-5">
        <span className="text-sm md:text-xl  tracking-tight">
          swipe to see more
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </div>
    </SectionContainer>
  );
};

export default Experience;

import { FC } from "react";
import { Skill as SkillProps } from "../utils/typings";
import { SectionContainer, SectionTitle, Skill } from "./Reusable";

const Skills: FC<{ skills?: SkillProps[] }> = ({ skills }) => {
  return (
    <SectionContainer classes="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <SectionTitle title="skills" />

      <h3 className="absolute tracking-[3px] top-36 uppercase text-sm">
        hover for current profiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills
          ? skills.map((skill: SkillProps, i: number) => {
              return (
                <Skill
                  skill={skill}
                  directionLeft={i % 2 === 0 ? true : false}
                  key={i}
                />
              );
            })
          : ""}
      </div>
    </SectionContainer>
  );
};

export default Skills;

import { Project } from "../utils/typings";
import ProjectCard from "./ProjectCard";
import { SectionContainer, SectionTitle } from "./Reusable";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <SectionContainer
      classes="h-screen flex relative flex-col text-center overflow-hidden text-left md:flex-row   
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <SectionTitle title="projects" />

      <div className="relative customScrollBar w-full flex overflow-x-scroll overflow-y-hidden  z-20 ">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-gray-900/5 left-0 h-[500px] -skew-y-12 "></div>
    </SectionContainer>
  );
};

export default Projects;

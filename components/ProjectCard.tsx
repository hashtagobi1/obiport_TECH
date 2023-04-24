import { Project } from "../utils/typings";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import Link from "next/link";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="">
      <h1 className="text-black text-center font-bold mb-10 text-6xl">
        {project.title}
      </h1>
      <div className="flex mt-20 justify-between items-center">
        <Image
          className=""
          width={400}
          height={250}
          src={urlFor(project.image).url()}
          alt="photo of project"
        />
        <Link passHref href={project.linkToBuild}>
          <h3 className="underline text-lg cursor-pointer">View Project</h3>
        </Link>
      </div>
      <p className="mt-20">{project.summary}</p>
    </div>
  );
};

export default ProjectCard;

import { FC } from "react";
import { motion } from "framer-motion";
import { SectionContainer, SectionTitle } from "./Reusable";
import { PageInfo } from "../utils/typings";
import { urlFor } from "../lib/sanity";
type Props = {
  pageInfo: PageInfo;
};

const About: FC<Props> = ({ pageInfo }: Props) => {
  return (
    <SectionContainer
      classes="h-screen flex relative flex-col text-center 
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <SectionTitle title="about" />

      <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[500px] xl:h-[600px] "
        width="500"
        initial={{
          x: 150,
          opacity: 0.3,
        }}
        transition={{
          duration: 3.2,
          ease: "linear",
          stiffness: 20,
          damping: 300,
          default: { ease: "linear" },
        }}
        whileInView={{ opacity: 1, x: 0 }}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          some bits about{" "}
          <span className="underline decoration-[#F7AB0a] underline-offset-8">
            me
          </span>
        </h4>
        <p className="text-base text-justify">{pageInfo.about}</p>
      </div>
    </SectionContainer>
  );
};

export default About;

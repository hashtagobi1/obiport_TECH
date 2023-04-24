import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import { FC } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { sanityClient } from "../lib/sanity_server";

import {
  Experience as ExperienceProp,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../utils/typings";
import Projects from "../components/Projects";

type PageProps = {
  pageInfo?: PageInfo;
  experiences?: ExperienceProp[];
  skills?: Skill[];
  socials?: Social[];
  projects?: Project[];
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const exp_query = groq`*[_type == "experience"]{
  ...,technologies[]->
}`;

  const pageInfo_query = groq`*[_type == "pageInfo"][0]`;
  const skills_query = groq`*[_type == "skill"]`;
  const socials_query = groq`*[_type == "social"]`;
  const project_query = groq`*[_type == "project"]`;

  const experiences: ExperienceProp[] = await sanityClient.fetch(exp_query);
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfo_query);
  const skills: Skill[] = await sanityClient.fetch(skills_query);
  const socials: Social[] = await sanityClient.fetch(socials_query);
  const projects: Project[] = await sanityClient.fetch(project_query);

  // const pageInfo: PageInfo = await fetchPageInfo();
  // const experiences: ExperienceProp[] = await fetchExperience();
  // const skills: Skill[] = await fetchSkills();
  // const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
    revalidate: 10,
  };
};
const Home: FC<PageProps> = ({
  experiences,
  pageInfo,
  skills,
  socials,
  projects,
}) => {
  console.log({ projects });
  return (
    <div
      className="font-typewriter bg-[#F8F8F8] h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 customScrollBar"
    >
      <Head>
        <title>obi tech portfolio</title>
        <meta name="description" content="created by obi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {socials ? <Header socials={socials} /> : null}
      <main>
        {pageInfo ? (
          <section id="hero" className="snap-center">
            <Hero pageInfo={pageInfo} />
          </section>
        ) : null}
        {projects ? (
          <section id="projects" className="snap-center">
            <Projects projects={projects} />
          </section>
        ) : null}
        {experiences ? (
          <section id="experience" className="snap-center">
            <Experience experiences={experiences} />
          </section>
        ) : null}
        {pageInfo ? (
          <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section>
        ) : null}
        {/* {skills ? (
          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>
        ) : null} */}

        {pageInfo ? (
          <section id="contact" className="snap-start">
            <Contact pageInfo={pageInfo} />
          </section>
        ) : null}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

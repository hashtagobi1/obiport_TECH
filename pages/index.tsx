import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

import {
  Experience as ExperienceProp,
  PageInfo,
  Skill,
  Social,
} from "../utils/typings";

type PageProps = {
  pageInfo?: PageInfo;
  experiences?: ExperienceProp[];
  skills?: Skill[];
  socials?: Social[];
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: ExperienceProp[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
    },
    revalidate: 10,
  };
};
const Home: FC<PageProps> = ({ experiences, pageInfo, skills, socials }) => {
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
        {pageInfo ? (
          <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section>
        ) : null}
        {experiences ? (
          <section id="experience" className="snap-center">
            <Experience experiences={experiences} />
          </section>
        ) : null}
        {skills ? (
          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>
        ) : null}

        {pageInfo ? (
          <section id="contact" className="snap-start">
            <Contact pageInfo={pageInfo} />
          </section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default Home;

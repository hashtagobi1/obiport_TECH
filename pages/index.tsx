import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import {
  fetchExperience,
  fetchPageInfo,
  fetchSkills,
  fetchSocials,
} from "../lib/fetchData";
import {
  Experience as ExperienceProp,
  PageInfo,
  Skill,
  Social,
} from "../utils/typings";

type PageProps = {
  pageInfo: PageInfo;
  experiences: ExperienceProp[];
  skills: Skill[];
  socials: Social[];
};

const Home: FC<PageProps> = ({ experiences, pageInfo, skills, socials }) => {
  console.log({ pageInfo });
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

      <main>
        <Header socials={socials} />
        {/* Hero */}
        <section id="hero" className="snap-center">
          {/* <Hero pageInfo={pageInfo} /> */}
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <Experience experiences={experiences} />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        {/* Projects */}
        {/* <section id="projects" className="snap-center"> */}
        {/* <Projects /> */}
        {/* </section> */}
        {/* Contact */}
        <section id="contact" className="snap-start">
          <Contact pageInfo={pageInfo} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: ExperienceProp[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  console.log({ PI: pageInfo });
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

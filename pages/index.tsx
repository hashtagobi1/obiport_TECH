import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import { FC, useEffect, useRef } from "react";
import { sanityClient } from "../lib/sanity_server";
import Lenis from "@studio-freight/lenis";
import {
  Experience as ExperienceProp,
  PageInfo,
  Skill,
  Social,
} from "../utils/typings";
<<<<<<< HEAD
import { useScroll } from "framer-motion";
=======
>>>>>>> parent of e0289bf (added project section)

type PageProps = {
  pageInfo?: PageInfo;
  experiences?: ExperienceProp[];
  skills?: Skill[];
  socials?: Social[];
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const exp_query = groq`*[_type == "experience"]{
  ...,technologies[]->
}`;

  const pageInfo_query = groq`*[_type == "pageInfo"][0]`;
  const skills_query = groq`*[_type == "skill"]`;
  const socials_query = groq`*[_type == "social"]`;

  const experiences: ExperienceProp[] = await sanityClient.fetch(exp_query);
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfo_query);
  const skills: Skill[] = await sanityClient.fetch(skills_query);
  const socials: Social[] = await sanityClient.fetch(socials_query);

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
    },
    revalidate: 10,
  };
};
<<<<<<< HEAD
const Home: FC<PageProps> = ({
  experiences,
  pageInfo,
  skills,
  socials,
  projects,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
=======
const Home: FC<PageProps> = ({ experiences, pageInfo, skills, socials }) => {
>>>>>>> parent of e0289bf (added project section)
  return (
    <div
      className="font-typewriter bg-[#F8F8F8]    
     customScrollBar"
    >
      <Head>
        <title>obi tech portfolio</title>
        <meta name="description" content="created by obi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {socials ? <Header socials={socials} /> : null} */}
      <main className="mt=[50vh] mb-[100vh]">
        {/* {pageInfo ? (
          <section id="hero" className="">
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
        {/* {skills ? (
          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>
        ) : null} */}

        {/* {pageInfo ? (
          <section id="contact" className="">
            <Contact pageInfo={pageInfo} />
          </section>
        ) : null} */}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

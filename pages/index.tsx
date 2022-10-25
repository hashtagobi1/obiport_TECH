import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { ExperienceCard } from "../components/Reusable";
import Skills from "../components/Skills";
import Link from "next/link";
const Home: NextPage = () => {
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
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <Experience />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-center">
          <Projects />
        </section>
        {/* Contact */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>

        <Link passHref href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                height={36}
                width={36}
                src="/images/firebase.png"
                alt="contact"
              />
            </div>
          </footer>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

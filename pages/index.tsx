import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="font-typewriter bg-[#F8F8F8] h-screen snap-y snap-mandatory overflow-scroll">
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
        {/* Experience */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;

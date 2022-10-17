import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="font-typewriter">
      <Head>
        <title>obi tech portfolio</title>
        <meta name="description" content="created by obi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Hero */}
        {/* About */}
        {/* Experience */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact */}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

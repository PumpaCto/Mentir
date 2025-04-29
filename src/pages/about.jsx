import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | MiraVerse Token</title>
        <meta name="description" content="Learn more about the MiraVerse Token team and our vision." />
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-black text-center p-10">
        <h1 className="text-5xl font-bold mb-6">About MiraVerse</h1>
        <p className="max-w-2xl text-lg">
          MiraVerse Token is the ultimate blend of Crypto, Anime, and AI innovation. 
          We are a passionate team building an ecosystem where stories, games, and community merge into the future of decentralized entertainment.
        </p>
      </section>
    </>
  );
};

export default About;

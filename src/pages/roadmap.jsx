import Head from "next/head";
import Roadmap from "@/components/Roadmap";

const RoadmapPage = () => {
  return (
    <>
      <Head>
        <title>Roadmap | MiraVerse Token</title>
        <meta name="description" content="Discover the future milestones of MiraVerse Token." />
      </Head>
      <Roadmap />
    </>
  );
};

export default RoadmapPage;

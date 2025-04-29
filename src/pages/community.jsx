import Head from "next/head";
import CommunitySection from "@/components/CommunitySection";

const CommunityPage = () => {
  return (
    <>
      <Head>
        <title>Community | MiraVerse Token</title>
        <meta name="description" content="Join our growing MiraVerse Token community." />
      </Head>
      <CommunitySection />
    </>
  );
};

export default CommunityPage;

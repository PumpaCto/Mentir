import Head from "next/head";
import PartnerSection from "@/components/PartnerSection";

const PartnersPage = () => {
  return (
    <>
      <Head>
        <title>Partners | MiraVerse Token</title>
        <meta name="description" content="Our trusted partners working with MiraVerse Token." />
      </Head>
      <PartnerSection />
    </>
  );
};

export default PartnersPage;

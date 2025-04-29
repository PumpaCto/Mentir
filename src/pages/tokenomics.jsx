import Head from "next/head";
import Tokenomics from "@/components/Tokenomics";

const TokenomicsPage = () => {
  return (
    <>
      <Head>
        <title>Tokenomics | MiraVerse Token</title>
        <meta name="description" content="Detailed tokenomics of MiraVerse Token project." />
      </Head>
      <Tokenomics />
    </>
  );
};

export default TokenomicsPage;

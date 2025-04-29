import Head from "next/head";
import NFTGallery from "@/components/NFTGallery";

const NFTPage = () => {
  return (
    <>
      <Head>
        <title>NFT Gallery | MiraVerse Token</title>
        <meta name="description" content="Explore the official MiraVerse NFT collections." />
      </Head>
      <NFTGallery />
    </>
  );
};

export default NFTPage;

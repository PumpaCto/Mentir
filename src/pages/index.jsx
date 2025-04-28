import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import NFTGallery from "@/components/NFTGallery";
import CommunitySection from "@/components/CommunitySection";
import PartnerSection from "@/components/PartnerSection";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Head>
        <title>MiraVerse Token | The Future of Crypto & Anime</title>
        <meta name="description" content="Join MiraVerse, where Crypto meets Anime and AI. Pump.fun Launch soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollProgress />
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <Roadmap />
        <Tokenomics />
        <NFTGallery />
        <CommunitySection />
        <PartnerSection />
        <FAQSection />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

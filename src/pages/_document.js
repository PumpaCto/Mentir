import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="MiraVerse Token - The Future of Crypto and Anime" />
        <meta property="og:title" content="MiraVerse Token" />
        <meta property="og:description" content="Join the MiraVerse - where crypto meets anime and AI." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="bg-secondary text-white dark:bg-primary dark:text-black transition-colors duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

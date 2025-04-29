import Head from "next/head";
import BlogPreview from "@/components/BlogPreview";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | MiraVerse Token</title>
        <meta name="description" content="Latest news and announcements from MiraVerse Token." />
      </Head>
      <BlogPreview />
    </>
  );
};

export default BlogPage;

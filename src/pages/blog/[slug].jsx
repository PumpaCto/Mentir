import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-secondary text-white p-10">
      <h1 className="text-4xl font-bold">Blog Post: {slug}</h1>
      <p className="mt-4">Detailed blog post content will be available soon.</p>
    </section>
  );
};

export default BlogPost;

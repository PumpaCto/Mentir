import Link from "next/link";

const Custom404 = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-black text-center p-10">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-xl mb-6">Page not found!</p>
      <Link href="/">
        <button className="px-6 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition">
          Back to Home
        </button>
      </Link>
    </section>
  );
};

export default Custom404;

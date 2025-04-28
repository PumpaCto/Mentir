import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider attribute="class">
      {loading ? (
        <Loader />
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}

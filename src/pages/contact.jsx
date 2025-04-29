import Head from "next/head";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact | MiraVerse Token</title>
        <meta name="description" content="Get in touch with MiraVerse Token team." />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;

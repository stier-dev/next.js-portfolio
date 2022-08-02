import Head from "next/head";
import styles from "@/styles/components/Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Georgiy Stier | Portfolio",
  description: "Web-Development & Web-Design beispiele",
  keywords:
    "Web-Entwicklung, Web-Design, React, Next.js, Software Entwicklung, Georgiy Stier",
};

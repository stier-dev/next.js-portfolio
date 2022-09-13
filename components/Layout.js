import Head from "next/head";
import style from "@/styles/components/Layout.module.scss";
import Footer from "./Footer";
import Nav from "@/components/Nav";

// suspense
import dynamic from "next/dynamic";
import { Suspense } from "react";

// const DynamicNavbar = dynamic(() => import("../components/Navbar"), {
//   suspense: true,
// });

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {/* <Suspense fallback={<div>Loading....</div>}> */}
      {/* <DynamicNavbar /> */}
      {/* </Suspense> */}
      {/* <Navbar /> */}
      <Nav />
      <div className={style.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Georgi Stier | Portfolio",
  description: "Web-Development & Web-Design beispiele",
  keywords:
    "Web-Entwicklung, Web-Design, React, Next.js, Software Entwicklung, Georgi Stier",
};

// import Memory from "./memory";
// import React from "react";
import HeroSection from "./heroSection";
import style from "@/styles/Index.module.scss";
import MadeWith from "./madeWith";
// import LoadingIcons from "@/components/LoadingIcons";
import Contact from "./kontakt";
import Navbar from "@/components/Navbar";
// import Kaleidoskop from "./kaleidoskop";
// * dynamic loading / Deferred loading / lazy loading
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

export default function Home() {
  const LazyMemory = dynamic(() => import("./memory"));
  const [memoryIsVisible, setMemoryIsVisible] = useState(false);
  const LazyKaleidoskop = dynamic(() => import("./kaleidoskop"));
  const [kaleidoskopIsVisible, setKaleidoskopIsVisible] = useState(false);

  // use Effect to make sure, that the elements are loaded in the dom before they are targeted
  useEffect(() => {
    let memoryObserver = undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    memoryObserver = new IntersectionObserver(
      (entries) => {
        // if there is only one entry it will be entries[0]
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("memory intersecting");
            setMemoryIsVisible(true);
          } else {
            console.log("memory not intersecting");
          }
        });
      },
      {
        rootMargin: "200px",
      }
    );
    let kaleidoskopObserver = undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    kaleidoskopObserver = new IntersectionObserver(
      (entries) => {
        // if there is only one entry it will be entries[0]
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("kaleidoskop intersecting");
            setKaleidoskopIsVisible(true);
          } else {
            console.log("kaleidoskop not intersecting");
            // setMemoryIsVisible(false);
          }
        });
      },
      {
        rootMargin: "300px",
      }
    );
    let memorySection = undefined;
    let kaleidoskopSection = undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    memorySection = document.querySelector("#memory");
    kaleidoskopSection = document.querySelector("#kaleidoskop");
    memoryObserver.observe(memorySection);
    kaleidoskopObserver.observe(kaleidoskopSection);
  }, []);

  return (
    <>
      <div className={style.container}>
        <Navbar />
        <HeroSection />
        <MadeWith />
        {/* <Memory /> */}
        {/* <section name="memorySection"> */}
        <div id="memory" className={style.memorySection}>
          {memoryIsVisible && <LazyMemory />}
        </div>
        {/* </section> */}
        <div id="kaleidoskop" className={style.kaleidoskopSection}>
          {kaleidoskopIsVisible && <LazyKaleidoskop />}
        </div>
        {/* <Kaleidoskop /> */}
        <div id="kontakt" className={style.contactContainer}>
          <Contact />
        </div>
      </div>
    </>
  );
}

import HeroSection from "./heroSection";
import style from "@/styles/Index.module.scss";
import MadeWith from "./madeWith";
import Contact from "./kontakt";
import Navbar from "@/components/Navbar";
// * dynamic loading / Deferred loading / lazy loading
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

export default function Home() {
  const LazyMemory = dynamic(() => import("./memory"));
  const [memoryIsVisible, setMemoryIsVisible] = useState(false);
  const LazyKaleidoskop = dynamic(() => import("./kaleidoskop"));
  const [kaleidoskopIsVisible, setKaleidoskopIsVisible] = useState(false);
  // const LazyFourWins = dynamic(() => import("./fourWins"));
  // const [fourWinsIsVisible, setFourWinsIsVisible] = useState(true);

  // use Effect to make sure, that the elements are loaded in the dom before they are targeted
  useEffect(() => {
    // ! memory
    let memoryObserver = undefined;
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
    let memorySection = undefined;
    memorySection = document.querySelector("#memory");
    memoryObserver.observe(memorySection);

    // ! kaleidoskop
    let kaleidoskopObserver = undefined;
    kaleidoskopObserver = new IntersectionObserver(
      (entries) => {
        // if there is only one entry it will be entries[0]
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("kaleidoskop intersecting");
            setKaleidoskopIsVisible(true);
          } else {
            console.log("kaleidoskop not intersecting");
          }
        });
      },
      {
        rootMargin: "300px",
      }
    );

    let kaleidoskopSection = undefined;
    kaleidoskopSection = document.querySelector("#kaleidoskop");
    kaleidoskopObserver.observe(kaleidoskopSection);

    // ! fourWins
    let fourWinsObserver = undefined;
    fourWinsObserver = new IntersectionObserver(
      (entries) => {
        // if there is only one entry it will be entries[0]
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("fourWins is intersecting");
            setFourWinsIsVisible(true);
          } else {
            console.log("fourWins not intersecting");
          }
        });
      },
      {
        rootMargin: "300px",
      }
    );

    let fourWinsSection = undefined;
    fourWinsSection = document.querySelector("#fourWins");
    fourWinsObserver.observe(fourWinsSection);
  }, []);

  return (
    <>
      <div className={style.container}>
        <Navbar />
        <HeroSection />
        <MadeWith />
        <div id="memory" className={style.memorySection}>
          {memoryIsVisible && <LazyMemory />}
        </div>

        <div id="kaleidoskop" className={style.kaleidoskopSection}>
          {kaleidoskopIsVisible && <LazyKaleidoskop />}
        </div>

        {/* <div id="fourWins" className={style.fourWinsSection}> */}
        {/* {fourWinsIsVisible && <LazyFourWins />} */}
        {/* </div> */}

        <div id="kontakt" className={style.contactContainer}>
          <Contact />
        </div>
      </div>
    </>
  );
}

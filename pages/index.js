import Memory from "./memory";
import HeroSection from "./heroSection";
import style from "@/styles/Index.module.scss";
import MadeWith from "./madeWith";
// import LoadingIcons from "@/components/LoadingIcons";
import Contact from "./kontakt";
import Kaleidoskop from "./kaleidoskop";
// * dynamic loading / Deferred loading / lazy loading

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <HeroSection />
        <MadeWith />
        <Memory />
        <Kaleidoskop />
        <div id="kontakt" className={style.contactContainer}>
          <Contact />
        </div>
      </div>
    </>
  );
}

import Memory from "./memory";
import HeroSection from "./heroSection";
import styles from "@/styles/Index.module.scss";
import MadeWith from "./madeWith";
// import LoadingIcons from "@/components/LoadingIcons";
import Contact from "./contact";
// * dynamic loading / Deferred loading / lazy loading

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <MadeWith />
      <Memory />
      <Contact />
    </div>
  );
}

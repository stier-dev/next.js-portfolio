import Memory from "./memory";
import HeroSection from "./heroSection";
import styles from "@/styles/index.module.scss";
// import LoadingIcons from "@/components/LoadingIcons";
import Contact from "./contact";
// * dynamic loading / Deferred loading / lazy loading

// }

export default function Home() {
  return (
    <div className={styles.container}>
      <Contact />
      <Memory />
      <HeroSection />
    </div>
  );
}

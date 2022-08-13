import Memory from "./memory";
import HeroSection from "./heroSection";
import styles from "@/styles/Index.module.scss";
import LoadingIcons from "@/components/LoadingIcons";
// * dynamic loading / Deferred loading / lazy loading

// }

export default function Home() {
  return (
    <div className={styles.container}>
      <Memory />
      <HeroSection />
    </div>
  );
}

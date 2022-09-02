// ! make scroll only possible after the load!
// ! make sections load only if user scrolled to them
// ! make sure no functions or else from other sections run in the background
// ! throtting and debounce have to work

import Memory from "./memory";
import HeroSection from "./heroSection";
import styles from "@/styles/Index.module.scss";
// import LoadingIcons from "@/components/LoadingIcons";
import Contact from "./contact";
// * dynamic loading / Deferred loading / lazy loading

// }

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <HeroSection /> */}
      <HeroSection />
      <Memory />
      <Contact />
    </div>
  );
}

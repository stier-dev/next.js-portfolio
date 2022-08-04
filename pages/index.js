// import MemoryGame from "@/components/memory/MemoryGame";
import Memory from "./memory";
import HeroSection from "./heroSection";
// import Image from "next/image";
import styles from "@/styles/Index.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <Memory />
    </div>
  );
}

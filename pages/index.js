import MemoryGame from "@/components/memory/MemoryGame";
// import Image from "next/image";
import styles from "@/styles/Index.module.scss";
import Herosection from "@/components/herosection/index";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Herosection /> */}
      <MemoryGame />
    </div>
  );
}

// import MemoryGame from "@/components/memory/MemoryGame";
import Memory from "../components/memory/MemoryHtml";
// import Image from "next/image";
import styles from "@/styles/Index.module.scss";
import Herosection from "@/components/herosection/index";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Herosection /> */}
      <Memory />
    </div>
  );
}

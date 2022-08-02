// import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/404.module.scss";

export default function () {
  return (
    <div className={styles.error}>
      <h1>
        {/* <FaExclamationTriangle /> */}
        &nbsp;&nbsp;404
      </h1>
      <h4>sorry there is nothing here</h4>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}

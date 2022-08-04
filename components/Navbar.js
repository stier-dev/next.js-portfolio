import style from "@/styles/components/Navbar.module.scss";
import Link from "next/link";

export default function () {
  return (
    <div className={style.navbarContainer}>
      <h3>I am A header</h3>
      <Link href="#heroSection">
        <button>Startseite</button>
      </Link>
      <Link href="#memory">
        <button>Memory</button>
      </Link>
    </div>
  );
}

import style from "@/styles/components/Navbar.module.scss";
// import Link from "next/link";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <h3>I am A header</h3>
      <Link
        to="heroSection"
        spy={true}
        smooth={true}
        offset={-50}
        duration={700}
      >
        <button>Startseite</button>
      </Link>
      <Link to="memory" spy={true} smooth={true} offset={-50} duration={700}>
        <button>Memory</button>
      </Link>
    </div>
  );
}

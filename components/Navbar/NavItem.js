import { Link } from "react-scroll";
import style from "@/styles/components/Navbar.module.scss";

export default function NavItem({ text, sectionId, active }) {
  return (
    <Link
      className={style.link}
      to={sectionId}
      spy={true}
      smooth={true}
      offset={-50}
      duration={700}
    >
      <a className={`${style.item} ${active ? style.active : ""}`}>{text}</a>
    </Link>
  );
}

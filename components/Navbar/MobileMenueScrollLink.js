import style from "@/styles/components/navbar/navMobile.module.scss";
import { Link } from "react-scroll";

export default function MobileMenueLink({ reference, text }) {
  return (
    <div>
      <Link
        activeClass="active"
        to={reference}
        spy={true}
        smooth={false}
        offset={-50}
        duration={100}
      >
        <h3 className={`${style.menueText} ${style.subMenueText}`}>{text}</h3>
      </Link>
    </div>
  );
}

import style from "@/styles/components/navbar/navDesktop.module.scss";
// import Link from "next/link";
import { Link } from "react-scroll";

export default function DesktopMenueScrollLink({ reference, text }) {
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
        <div className={style.linkTextContainer}>
          <h3 className={`${style.menueText} ${style.subMenueText}`}>{text}</h3>
        </div>
      </Link>
    </div>
  );
}

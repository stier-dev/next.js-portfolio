import style from "@/styles/components/navbar/navDesktop.module.scss";
// import Link from "next/link";
import Link from "next/link";

export default function DesktopMenueScrollLink({ reference, text }) {
  return (
    <Link href={reference}>
      <div className={style.linkTextContainer}>
        <h3 className={`${style.menueText} ${style.subMenueText}`}>{text}</h3>
      </div>
    </Link>
  );
}

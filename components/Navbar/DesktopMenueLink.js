import style from "@/styles/components/navbar/navDesktop.module.scss";
import Link from "next/link";

export default function DesktopMenueLink({ reference, text }) {
	return (
        <div>
			<Link href={reference} scroll={false} legacyBehavior>
				<div className={style.linkTextContainer}>
					<h3 className={`${style.menueText} ${style.subMenueText}`}>{text}</h3>
				</div>
			</Link>
		</div>
    );
}

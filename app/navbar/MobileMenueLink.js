import style from "@/styles/components/navbar/navMobile.module.scss";
import Link from "next/link";

export default function MobileMenueLink({ reference, text }) {
	return (
        <div>
			<Link href={reference} scroll={false} legacyBehavior>
				<h3 className={`${style.menueText} ${style.subMenueText}`}>{text}</h3>
			</Link>
		</div>
    );
}

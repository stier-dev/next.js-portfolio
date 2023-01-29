import styles from "@/styles/components/Footer.module.scss";
import Link from "next/link";
import style from "@/styles/components/Footer.module.scss";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Footer() {
	return (
		<div className={styles.footerContainer}>
			<ParallaxProvider>
				<Parallax translateY={[-10, 10]}>
					<div className={style.textContent}>
						<div className={style.linksContainer}>
							<Link href="/impressum">
								<h5 className={style.link}>Impressum</h5>
							</Link>
							<Link href="/datenschutz">
								<h5 className={style.link}>Datenschutz</h5>
							</Link>
						</div>
					</div>
				</Parallax>
			</ParallaxProvider>
		</div>
	);
}

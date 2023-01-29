import style from "@/styles/impressum.module.scss";
export default function Impressum() {
	return (
		<div className={style.mainContainer}>
			<div className={style.textContainer}>
				<h1 id={style.impressumJumbo} className={`${style.all} ${style.jumbo}`}>
          Impressum
				</h1>
				<h2 className={`${style.all} ${style.headline}`}>Diensteanbieter</h2>
				<p className={style.all}>Georgiy Stasyuk</p>
				<p className={style.all}>Schulstraße 23</p>
				<p className={style.all}>Barsinghausen</p>
				<p className={style.all}>Germany</p>
				<h2 className={`${style.all} ${style.headline}`} id="m56">
          Kontaktmöglichkeiten
				</h2>
				<p className={style.all}>
          E-Mail-Adresse
					<a href="mailto:info@stier.dev">: info@stier.dev</a>
				</p>
				<p className={style.all}>
          Telefon: <a href="tel:+491743917416">+49 174/ 3917416</a>
				</p>
				<p className={style.all}>
          Kontaktformular:
					<a href="https://stier.dev/contact">www.stier.dev/contact</a>
				</p>
				<h2 className={`${style.all} ${style.headline}`} id="m58">
          Angaben zum Unternehmen
				</h2>
				<p className={style.all}>
          Umsatzsteuer Identifikationsnummer / USt-ID: 60 537 298 493
				</p>
				<p className={style.all}>
          Geschäftsbereich: Web Entwicklung, Grafik Design, Illustration
				</p>
				<h2 className={`${style.all} ${style.headline}`} id="m169">
          Bildnachweise
				</h2>
				<p className={style.all}>
          Bildquellen und Urheberrechtshinweise: ....Bilquellen....
				</p>
				<p className={`${style.all} ${style.smallGray}`}>
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
          Schwenke
				</p>
			</div>
		</div>
	);
}

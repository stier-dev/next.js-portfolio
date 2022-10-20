import style from "@/styles/impressum.module.scss";

export default function Impressum() {
  return (
    <div className={style.mainContainer}>
      <h1>Impressum</h1>
      <h2 id="m46">Diensteanbieter</h2>
      <p>Georgiy Stasyuk</p>
      <p>Rodenstraße</p>
      <p>Hannover</p>
      <p>Germany</p>
      <h2 id="m56">Kontaktmöglichkeiten</h2>E-Mail-Adresse:{" "}
      <p>
        <a href="mailto:info@stier.dev">info@stier.dev</a>
      </p>
      Telefon: <p>00491743917416</p>
      Kontaktformular: <p>www.stier.dev/contact</p>
      <h2 id="m58">Angaben zum Unternehmen</h2>Umsatzsteuer
      Identifikationsnummer (USt-ID): <p>60 537 298 493</p>
      Geschäftsbereich: <p>Web Entwicklung, Grafik Design, Illustration</p>
      <h2 id="m169">Bildnachweise</h2>Bildquellen und Urheberrechtshinweise:{" "}
      <p>....Bilquellen....</p>
      <p>
        <p>
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
          Schwenke
        </p>
      </p>
    </div>
  );
}

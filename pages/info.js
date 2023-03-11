import style from "@/styles/info.module.scss";
import Image from "next/image";
import Contact from "./kontakt";

export default function About() {
  return (
    <div id="start" className={style.mainContainer}>
      <div className={style.textContainer}>
        <h1 className={style.headline}>Über mich</h1>
        <p className={style.paragraph}>
          Hi, ich bin Georgi, leidenschaftlicher Programmier, ausgebildeter
          Illustrator und studierter Grafik-Designer. In meiner Freizeit mache
          ich Sport, Musik und gehe Reisen. Ich würde mich als ausgeglichen,
          unternehmungslustig, empatisch und neugierig bezeichnen.
        </p>
        <h1 className={style.headline}>meine Leistungen</h1>
        <h2 className={style.subHeadline}>Web Entwicklung</h2>
        <p className={style.paragraph}>
          mit dem Schwerpunkt auf dem Framework React / NextJs. Cleaner Code,
          Performance und ein gutes Miteinander sind mir dabei sehr wichtig.
          Ohne Probleme gäbe es keine Lösungen und ohne Fehler keine
          Erkentnisse. Ich freue mich schon auf neue Projekte und
          Herausforderungen.
        </p>
        <h2 className={style.subHeadline}>Bildung</h2>
        <p className={style.paragraph}>
          Workshops, Projekte und AGs zum Thema Informatik (MINT) für Kinder,
          Jugendliche und Erwachsene.
        </p>
        <h1 className={style.headline}>meine Stärken</h1>
        <h2 className={style.subHeadline}>Anpassungsfähigkeit</h2>
        <p className={style.paragraph}>
          Ihr arbeitet mit einem anderen Framework, oder anderen Tools? Kein
          Problem, was ich nicht kann, werde ich lernen! Ihr wünscht, dass ich
          mir Python aneigne um euere Daten zu analysieren… warum nicht? Wenn
          ich Französisch lerne, darf ich Workshops in Montpellier leiten? Gib
          mir ein paar Monate Zeit und die Reise kann los gehen.
        </p>
        <h2 className={style.subHeadline}>geschultes Auge</h2>
        <p className={style.paragraph}>
          Eine meiner größten Stärken ist, dass ich als studierter Designer
          Erfahrung im Screendesign und in Gestaltung im Allgemeinen habe. Somit
          fällt es mir leicht Entwürfe ästhetisch umzusetzen. Mit mir habt ihr
          einen Programmierer UND einen Designer.
        </p>

        <h2 className={style.subHeadline}>Sprachen</h2>
        <div className={style.flaggenContainer}>
          <div className={style.flagge}>
            <Image
              className={style.img}
              src="/img/ueber_mich/flaggen/deutsche flagge.svg"
              fill="object-fit"
              alt="deutsche flagge"
            />
          </div>
          <div className={style.flagge}>
            <Image
              className={style.img}
              src="/img/ueber_mich/flaggen/amerikanische flagge.svg"
              fill="object-fit"
              alt="amerikanische flagge"
            />
          </div>
          <div className={style.flagge}>
            <Image
              className={style.img}
              src="/img/ueber_mich/flaggen/russische flagge.svg"
              fill="object-fit"
              alt="russische flagge"
            />
          </div>
          <div className={style.flagge}>
            <Image
              className={style.img}
              src="/img/ueber_mich/flaggen/spanische flagge.svg"
              fill="object-fit"
              alt="spanische flagge"
            />
          </div>
        </div>
        <p className={style.paragraph}>
          Ich spreche fließend Deutsch, Englisch und Russisch. Auf Spanisch
          verstehe ich viel und Spreche die Sprache (fast) Akzentfrei auf
          Smalltalk Niveaus.
        </p>
        <h2 className={style.subHeadline}>Kommunikation</h2>
        <p className={style.paragraph}>
          In Kommunikationsworkshops und aus Büchern über die Modelle von Schulz
          Von Thun, Vera F. Birkenbihl oder Marshall B. Rosenberg habe ich viel
          über Kommunikation gelernt. Zu dem hatte ich in über 5 Jahren
          Selbstständigkeit ständig Kundenkontakt. Da ich in der Ukraine
          aufgewachsen bin, in Deutschland lebe und im Süden Urlaub mache kenne
          ich unterschiedliche Kulturen und fühle mich in ihnen gleichermaßen
          Zuhause.
        </p>

        <h1 className={style.headline}>Lehren und Workshops</h1>
        <h2 className={style.subHeadline}>Informatik für die Kleinen</h2>
        <p className={style.paragraph}>
          „Kinder wollen nicht wie Fässer gefüllt, sondern wie Fackeln entzündet
          werden.“ Francois Rabelais <br />
          <br />
          Spielerisch vermittele ich / wir den Kids, dass Geräte wie Smartphones
          und Drohnen oder Software und Webseiten kein Hexenwerk sind. Ziel ist,
          dass die Kids das Gefühl bekommen ihr Umfeld gestalten und neue
          Technologien entwickeln zu können. Wichtig ist, dass sie Spaß an der
          Sache haben und sich gegenseitig helfen und motivieren.
        </p>
        <h2 className={style.subHeadline}>Web Development für die Großen</h2>
        <p className={style.paragraph}>
          Ihr seid auf der Suche nach einem leidenschaftlichen Lehrer für euere
          Hochschule, Privatschule, Boot Camp oder ähnliches? Dann seit Ihr bei
          mir an der richtigen Adresse. Ich finde es gibt nichts schöneres, als
          sich gegenseitig etwas bei zu bringen und voneinander zu lernen. Nach
          jedem Workshop / Unterricht fühle ich mich lebendiger und lebensfroher
          als vorher. Als Jr. Entwickler weiß ich noch genau wie es ist die
          ersten Funktionen zu schreiben, kenne die Herausforderungen und
          Unklarheiten, die am Anfang des Lehrweges auftauchen. Dadurch kann ich
          mich gut in meine Schüler einfühlen und geduldig ihre Fragen
          beantworten.
        </p>
        <h1 className={style.headline}>meine Erfahrungen</h1>
        <h2 className={style.subHeadline}>Qualifikationen</h2>
        <p className={style.paragraph}>
          Ich bin ausgebildeter Illustrator und habe einen Bachelor in Grafik
          Design. Seit 2015 bin ich selbstständig tätig. Ich habe für
          verschiedene Einzelpersonen, Vereine, sowie Unternehmen gearbeitet.
          Unter anderem für re:edu (Münster), We-Build.City (Hamburg), die
          Leonore Goldschmidt Schule (Hannover) und viele mehr.
        </p>
        <div className={style.logosContainer}>
          <div className={style.aid}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/aid-berlin_logo.svg"
              fill="object-fit"
              alt="Logo der Akademie für Illustrationsdesign Berlin"
            />
          </div>
          <div className={style.diploma}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/DIPLOMA.png"
              fill="object-fit"
              alt="DIPLOMA Hochschule logo"
            />
          </div>
          <div className={style.reedu}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/reedu_logo.png"
              fill="object-fit"
              alt="Logo von re:edu"
            />
          </div>
          <div className={style.sensebox}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/sensebox_logo.svg"
              fill="object-fit"
              alt="Sensebox Logo"
            />
          </div>
          <div className={style.wbc}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/we_build_city_logo.png"
              fill="object-fit"
              alt="We Build City Logo"
            />
          </div>
          <div className={style.ppt}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/passepartout.jpg"
              fill="object-fit"
              alt="Logo der Band Passepartout"
            />
          </div>

          <div className={style.re}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/raeumungsexperten_logo.svg"
              fill="object-fit"
              alt="RÄUMUNGSEXPERTEN Hannover Logo"
            />
          </div>
          <div className={style.igs}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/igs.jpg"
              fill="object-fit"
              alt="Logo IGS Mühlenberg"
            />
          </div>
          <div className={style.ll}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/linden_legendz_logo.jpg"
              fill="object-fit"
              alt="Linden Legenz Logo"
            />
          </div>
          <div className={style.codeFor}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/code_for_germany_logo.svg"
              fill="object-fit"
              alt="Code for Germany Logo"
            />
          </div>
          <div className={style.vodafone}>
            <Image
              className={style.logoImg}
              src="/img/ueber_mich/logos/vodafone.svg"
              fill="object-fit"
              alt="Vodafone Logo"
            />
          </div>
        </div>
        <div className={style.contactContainer}>
          <Contact />
        </div>
        {/* closing textContainer */}
      </div>
      {/* background */}
      <div className={style.background}>
        <div className={style.backgroundImgContainer}>
          <Image
            className={style.img}
            src="/img/ueber_mich/ueber_mich.jpg"
            fill="object-fit"
            alt="Portrait Foto von Georgi Stier"
          />
        </div>
      </div>
    </div>
  );
}

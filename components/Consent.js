import { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";
import style from "@/styles/components/Consent.module.scss";
import Image from "next/image";

export default function Consent() {
  // return (
  //   <>
  //     <div className={style.mainContainer}>
  //       <h1>Hallo Welt!</h1>
  //     </div>
  //   </>
  // );

  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    // eslint-disable-next-line no-undef
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    console.log("accepting cookies");
  };
  const closeP = () => {
    setConsent(true);
    console.log("closing cookie consent");
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("denying cookie");
  };
  if (consent === true) {
    return null;
  }
  return (
    // ! style hidden kann weg?

    <div className={`${style.mainContainer} ${consent ? style.hidden : ""}`}>
      <div className={style.grandma}>
        <Image fill src="/img/consent/grandma.png" alt="oma mit cookies" />
      </div>
      <div className={style.shadow}>
        <Image fill src="/img/consent/shadow.png" alt="schwebender cookie" />
      </div>
      <div className={style.cookie}>
        <Image fill src="/img/consent/cookie.png" alt="schwebender cookie" />
      </div>
      <div className={style.text}>
        <div className={style.cookieText}>
          <h1 className={style.headline}>C</h1>
          <div className={`${style.cookieImText} ${style.firstCookie}`}>
            <Image fill src="/img/consent/text_cookie.svg" alt="cookie icon" />
          </div>
          <div className={`${style.cookieImText} ${style.secondCookie}`}>
            <Image fill src="/img/consent/text_cookie.svg" alt="cookie icon" />
          </div>
          <h1 className={style.headline}>kies</h1>
        </div>
        <p className={style.paragraph}>
          Diese Seite benutzt Cookies, damit sie zuverlässig und sicher bleibt.
          Auf dieser Webseite wird keine Werbung geschaltet. Wenn du mit allen
          Cookies einverstanden bist, werden Daten wie z.B der Ort und das Gerät
          auf dem du die Seite besuchst für statistische Zwecke gesammelt.
        </p>
        <div className={style.allBtns}>
          <button
            className={style.btn}
            onClick={() => {
              closeP();
            }}
          >
            Schließen
          </button>
          <button
            onClick={() => denyCookie()}
            className={`${style.btn} ${style.accept}`}
          >
            Nur Funktionale
          </button>
          <button
            onClick={() => {
              acceptCookie();
            }}
            className={`${style.btn} ${style.accept}`}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";
import style from "@/styles/components/Consent.module.scss";

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
    console.log("closing");
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
    <div className={`${style.mainContainer} ${consent ? style.hidden : ""}`}>
      Diese Seite benutzt Cookies, sind sie damit einverstanden?
      <div className="flex align-middle justify-between">
        <button
          onClick={() => {
            closeP();
          }}
        >
          Close
        </button>
        <button
          onClick={() => denyCookie()}
          className={`${style.btn} ${style.accept}`}
        >
          Deny All
        </button>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className={`${style.btn} ${style.accept}`}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}

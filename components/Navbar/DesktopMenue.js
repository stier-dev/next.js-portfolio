import style from "@/styles/components/navbar/navDesktop.module.scss";

import DesktopMenueLink from "./DesktopMenueLink";

export default function DesktopMenue() {
  return (
    <div className={`${style.pointerEvents}`}>
      <div className={style.menueContainer}>
        <div className={`${style.menueItemContainer} ${style.portfolio}`}>
          <div className={`${style.linkTextContainer}`}>
            <DesktopMenueLink reference="/#startseite" text="Portfolio" />

            {/* <h3 className={`${style.menueText}`}>Portfolio</h3> */}
          </div>
        </div>
        <div className={style.menueItemContainer}>
          <DesktopMenueLink reference="/info/#start" text="über Mich" />
        </div>
        <div className={style.menueItemContainer}>
          <DesktopMenueLink reference="/kontakt/#start" text="Kontakt" />
        </div>
        {/* MOBILE MENUE */}

        <div className={style.subMenueClippingMask}>
          <div className={style.subMenue}>
            <div className={style.twoItems}>
              <div className={`${style.menueItemContainer} ${style.one}`}>
                <DesktopMenueLink reference="/#startseite" text="Startseite" />
              </div>
              <div className={`${style.menueItemContainer} ${style.two}`}>
                <DesktopMenueLink reference="/#sprachen" text="Sprachen" />
              </div>
            </div>
            <div className={style.twoItems}>
              <div className={`${style.menueItemContainer} ${style.three}`}>
                <DesktopMenueLink reference="/#memory" text="Memory Spiel" />
              </div>
              <div className={`${style.menueItemContainer} ${style.four}`}>
                <DesktopMenueLink
                  reference="/#kaleidoskop"
                  text="Kaleidoskop"
                />
              </div>
              <div className={style.twoItems}>
                <div className={`${style.menueItemContainer} ${style.five}`}>
                  <DesktopMenueLink
                    reference="/#kontakt"
                    text="Kontakt Formular"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.divisionLine} />
        </div>
      </div>
    </div>
  );
}

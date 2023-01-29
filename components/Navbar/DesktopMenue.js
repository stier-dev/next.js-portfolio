import style from "@/styles/components/navbar/navDesktop.module.scss";

import DesktopMenueLink from "./DesktopMenueLink";

export default function DesktopMenue() {
  return (
    <div className={style.noPointerEvents}>
      <div className={style.menueContainer}>
        <div className={`${style.menueItemContainer} ${style.portfolio}`}>
          <div className={`${style.linkTextContainer}`}>
            <h3 className={`${style.menueText}`}>Portfolio</h3>
          </div>
        </div>
        <div className={style.menueItemContainer}>
          <DesktopMenueLink reference="/about" text="über Mich" />
        </div>
        <div className={style.menueItemContainer}>
          <DesktopMenueLink reference="/contact" text="Kontakt" />
        </div>
        {/* MOBILE MENUE */}

        <div className={style.subMenueClippingMask}>
          <div className={style.subMenue}>
            <div className={style.twoItems}>
              <div className={`${style.menueItemContainer} ${style.one}`}>
                <DesktopMenueLink reference="/#heroSection" text="Startseite" />
              </div>
              <div className={`${style.menueItemContainer} ${style.two}`}>
                <DesktopMenueLink reference="/#memory" text="Memory Spiel" />
              </div>
            </div>
            <div className={style.twoItems}>
              <div className={`${style.menueItemContainer} ${style.three}`}>
                <DesktopMenueLink
                  reference="/#contact"
                  text="Kontakt Formular"
                />
              </div>
              <div className={`${style.menueItemContainer} ${style.four}`}>
                <DesktopMenueLink reference="/#jokes" text="Witze API" />
              </div>
            </div>
            <div className={style.twoItems}>
              <div className={`${style.menueItemContainer} ${style.five}`}>
                <DesktopMenueLink reference="/#Svg" text="SVG Animation" />
              </div>
              <div className={`${style.menueItemContainer} ${style.six}`}>
                <DesktopMenueLink reference="/#3d" text="3D Animation" />
              </div>
            </div>
          </div>
          <div className={style.divisionLine} />
        </div>
      </div>
    </div>
  );
}

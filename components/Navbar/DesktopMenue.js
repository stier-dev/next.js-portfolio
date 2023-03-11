import style from "@/styles/components/navbar/navDesktop.module.scss";
import { useRouter } from "next/router";

import DesktopMenueLink from "./DesktopMenueLink";
import DesktopMenueScrollLink from "./DesktopMenueScrollLink";

export default function DesktopMenue() {
  const router = useRouter();
  return (
    <div className={`${style.pointerEvents}`}>
      <div className={style.menueContainer}>
        <div className={`${style.menueItemContainer} ${style.portfolio}`}>
          <div className={`${style.linkTextContainer}`}>
            {router.pathname === "/" ? (
              <DesktopMenueScrollLink
                reference="startseite"
                text="Startseite"
              />
            ) : (
              <DesktopMenueLink reference="/#startseite" text="Startseite" />
            )}

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
                {router.pathname === "/" ? (
                  <DesktopMenueScrollLink
                    reference="startseite"
                    text="Startseite"
                  />
                ) : (
                  <DesktopMenueLink
                    reference="/#startseite"
                    text="Startseite"
                  />
                )}
              </div>
              <div className={`${style.menueItemContainer} ${style.two}`}>
                {router.pathname === "/" ? (
                  <DesktopMenueScrollLink
                    reference="sprachen"
                    text="Sprachen"
                  />
                ) : (
                  <DesktopMenueLink reference="/#sprachen" text="Sprachen" />
                )}
              </div>
            </div>
            <div className={style.twoItems}>
              <div className={`${style.menueItemContainer} ${style.three}`}>
                {router.pathname === "/" ? (
                  <DesktopMenueScrollLink
                    reference="memory"
                    text="Memory Spiel"
                  />
                ) : (
                  <DesktopMenueLink reference="/#memory" text="Memory Spiel" />
                )}
              </div>
              <div className={`${style.menueItemContainer} ${style.four}`}>
                {router.pathname === "/" ? (
                  <DesktopMenueScrollLink
                    reference="kaleidoskop"
                    text="Kaleidoskop"
                  />
                ) : (
                  <DesktopMenueLink
                    reference="/#kaleidoskop"
                    text="Kaleidoskop"
                  />
                )}
              </div>
              <div className={style.twoItems}>
                <div className={`${style.menueItemContainer} ${style.five}`}>
                  {router.pathname === "/" ? (
                    <DesktopMenueScrollLink
                      reference="kontakt"
                      text="Kontakt Formular"
                    />
                  ) : (
                    <DesktopMenueLink
                      reference="/#kontakt"
                      text="Kontakt Formular"
                    />
                  )}
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

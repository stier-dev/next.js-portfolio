import style from "@/styles/components/navbar/navMobile.module.scss";
import MenueLink from "./MobileMenueLink";
import MenueScrollLink from "./MobileMenueScrollLink";
import { useRouter } from "next/router";

export default function MobileMainMenue(props) {
  let toggle = props.state;
  const router = useRouter();

  return (
    <div
      className={`${style.mobileMenue} ${
        toggle ? style.openMobileMenue : style.closedMobileMenue
      }`}
    >
      {/* PORTFOLIO has no href, it only toggles the sub menue on hover */}
      <div className={style.mobileMenueBackground} />
      <div className={`${style.menueItem} ${toggle ? style.portfolio : ""}`}>
        <h3 className={`${style.menueText}`}>Portfolio</h3>
      </div>

      <div className={`${style.menueItem} ${toggle ? style.about : ""}`}>
        <MenueLink reference="/info/#start" text="über Mich" />
      </div>

      <div className={`${style.menueItem} ${toggle ? style.contact : ""}`}>
        <MenueLink reference="/kontakt/#start" text="Kontakt" />
      </div>
      {/* Mobile Sub Menue */}
      {/* Mobile Sub Menue */}
      {/* Mobile Sub Menue */}
      {/* Mobile Sub Menue */}
      {/* Mobile Sub Menue */}
      <div className={style.mobileSubMenueClippingMask}>
        <div className={style.mobileSubMenue}>
          <div className={`${style.menueItem} ${style.one}`}>
            {router.pathname === "/" ? (
              <MenueScrollLink reference="startseite" text="Startseite" />
            ) : (
              <MenueLink reference="/#startseite" text="Startseite" />
            )}
          </div>
          <div className={`${style.menueItem} ${style.two}`}>
            {router.pathname === "/" ? (
              <MenueScrollLink reference="sprachen" text="Sprachen" />
            ) : (
              <MenueLink reference="/#sprachen" text="Sprachen" />
            )}
            {/* <MenueScrollLink reference="sprachen" text="Sprachen" /> */}
          </div>
          <div className={`${style.menueItem} ${style.three}`}>
            {router.pathname === "/" ? (
              <MenueScrollLink reference="memory" text="Memory Spiel" />
            ) : (
              <MenueLink reference="/#memory" text="Memory Spiel" />
            )}
          </div>
          <div className={`${style.menueItem} ${style.four}`}>
            {router.pathname === "/" ? (
              <MenueScrollLink reference="kaleidoskop" text="Kaleidoskop" />
            ) : (
              <MenueLink reference="/#kaleidoskop" text="Kaleidoskop" />
            )}
          </div>
          <div className={`${style.menueItem} ${style.five}`}>
            {router.pathname === "/" ? (
              <MenueScrollLink reference="kontakt" text="Kontakt Formular" />
            ) : (
              <MenueLink reference="/#kontakt" text="Kontakt Formular" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

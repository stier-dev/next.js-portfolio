import style from "@/styles/components/navbar/navMobile.module.scss";
import MenueLink from "./MobileMenueLink";

export default function MobileMainMenue(props) {
  let toggle = props.state;

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
            <MenueLink reference="/#startseite" text="Startseite" />
          </div>
          <div className={`${style.menueItem} ${style.two}`}>
            <MenueLink reference="/#sprachen" text="Sprachen" />
          </div>
          <div className={`${style.menueItem} ${style.three}`}>
            <MenueLink reference="/#memory" text="Memory Spiel" />
          </div>
          <div className={`${style.menueItem} ${style.four}`}>
            <MenueLink reference="/#kaleidoskop" text="Kaleidoskop" />
          </div>
          <div className={`${style.menueItem} ${style.five}`}>
            <MenueLink reference="/#kontakt" text="Kontakt Formular" />
          </div>
        </div>
      </div>
    </div>
  );
}

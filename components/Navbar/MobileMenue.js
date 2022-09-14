import style from "@/styles/components/navbar/navMobile.module.scss";
import { useState } from "react";
import MenueLink from "./MobileMenueLink";

export default function MobileMainMenue(props) {
  let toggle = props.state;
  const [toggleSub, setToggleSub] = useState(false);

  // let navActive = value.navActive;
  // console.log(navActive);

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
        <MenueLink reference="/about" text="über Mich" />
      </div>

      <div className={`${style.menueItem} ${toggle ? style.contact : ""}`}>
        <MenueLink reference="/contact" text="Kontakt" />
      </div>
      {/* Mobile Sub Menue */}
      {/* Mobile Sub Menue */}
      {/* Mobile Sub Menue */}
      {/* Mobile Sub Menue */}
      {/* Mobile Sub Menue */}
      <div className={style.mobileSubMenueClippingMask}>
        <div className={style.mobileSubMenue}>
          <div className={`${style.menueItem} ${style.one}`}>
            <MenueLink reference="/#heroSection" text="Startseite" />
          </div>
          <div className={`${style.menueItem} ${style.two}`}>
            <MenueLink reference="/#memory" text="Memory Spiel" />
          </div>
          <div className={`${style.menueItem} ${style.three}`}>
            <MenueLink reference="/#contact" text="Kontakt Formular" />
          </div>
          <div className={`${style.menueItem} ${style.four}`}>
            <MenueLink reference="/#jokes" text="Witze API" />
          </div>
          <div className={`${style.menueItem} ${style.five}`}>
            <MenueLink reference="/#Svg" text="SVG Animation" />
          </div>
          <div className={`${style.menueItem} ${style.six}`}>
            <MenueLink reference="/#3d" text="3D Animation" />
          </div>
        </div>
      </div>
    </div>
  );
}

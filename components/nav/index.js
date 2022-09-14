import Image from "next/image";
import React, { useState } from "react";
import style from "@/styles/components/navbar/navMobile.module.scss";
import HamburgerBtn from "./HamburgerBtn";
import MobileMenue from "./MobileMenue";
import DesktopMenue from "./DesktopMenue";
import { useRouter } from "next/router";

export default function Nav() {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const router = useRouter();

  return (
    // <div className={style.navbar}>
    //   <div className={style.menues}>
    //     <div className={style.mainBackground} />
    //     {/* Startseite Logo */}
    //     <div
    //       className={style.homeImgContainer}
    //       onMouseEnter={() => setHoverLogo(true)}
    //       onMouseLeave={() => setHoverLogo(false)}
    //       onClick={() => {
    //         router.push("/");
    //       }}
    //     >
    //       <Image
    //         layout="fill"
    //         src={
    //           !hoverLogo ? "/img/navbar/logo.svg" : "/img/navbar/logo_hover.svg"
    //         }
    //       />
    //     </div>
    //     <div
    //       onClick={() => {
    //         setNavActive(!navActive);
    //       }}
    //     >
    //       <HamburgerBtn state={navActive} />
    //     </div>
    //     <MobileMenue state={navActive} />
    //     <DesktopMenue />
    
        {/* Main Menue */}
        {/* <div
          className={`${style.mobileBackground}  ${
            navActive ? style.openMobileBackground : ""
          }`}
        /> */}
      </div>
    </div>
  );
}

import style from "@/styles/components/navbar/navHamburger.module.scss";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
// import { navActive, setNavActive } from "./index";

export default function HamburgerBtn(props) {
  let toggle = props;
  // console.log(toggle.state);

  return (
    <div className={style.hamburgerBtn}>
      <div
        className={`${style.line} ${style.firstLine} ${
          toggle.state ? style.firstLineX : ""
        }`}
      ></div>
      <div
        className={`${style.line} ${style.secondLine} ${
          toggle.state ? style.secondLineX : ""
        }`}
      ></div>
      <div
        className={`${style.line} ${style.thirdLine} ${
          toggle.state ? style.thirdLineX : ""
        }`}
      ></div>
    </div>
  );
}

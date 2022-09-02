import { Link } from "react-scroll";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "@/components/Navbar/NavItem";
import style from "@/styles/components/Navbar.module.scss";

// const menueObject = [
//   { text: "Portfolio", href: "/" },
//   { text: "Über mich", href: "/about" },
//   { text: "Kontakt", href: "/contact" },
// ];
// const portfolioMenueObject = [
//   { text: "Startseite", href: "/" },
//   { text: "Scroll Animation", href: "/about" },
//   { text: "Svg Animation", href: "/contact" },
//   { text: "Memory Spiel", href: "/contact" },
//   { text: "Partikel Party", href: "/contact" },
//   { text: "Witze API", href: "/contact" },
//   { text: "Künstliche Intelligenz", href: "/contact" },
// ];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  // const [submenueActive, setSubmenueActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [hoverLogo, setHoverLogo] = useState(false);

  return (
    <header className={style.navbarContainer}>
      <nav className={`${style.nav}`}>
        <Link
          to="heroSection"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <div
            className={style.homeImgContainer}
            onMouseEnter={() => setHoverLogo(true)}
            onMouseLeave={() => setHoverLogo(false)}
          >
            <Image
              layout="fill"
              src={
                !hoverLogo
                  ? "/img/navbar/logo.svg"
                  : "/img/navbar/logo_hover.svg"
              }
            />
          </div>
        </Link>
        <button
          onClick={() => setNavActive(!navActive)}
          className={`${style.button} ${navActive ? style.open : ""}`}
          aria-label="Toggle Navigation"
        >
          <svg viewBox="-50 -40 100 80" width="50" height="40">
            <defs>
              <path
                id="line"
                fill="none"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
                d="M -40 0 h 80"
              />
            </defs>
            <g>
              <g class={style.translate} transform="translate(0 -30)">
                <g class={style.rotate} transform="rotate(-45)">
                  <use transform="rotate(45)" href="#line" />
                </g>
              </g>

              <g class={style.rotate} transform="rotate(45)">
                <use transform="rotate(-45)" href="#line" />
              </g>

              <g class={style.translate} transform="translate(0 30)">
                <g class={style.rotate} transform="rotate(-45)">
                  <use transform="rotate(45)" href="#line" />
                </g>
              </g>
            </g>
          </svg>
        </button>

        <div className={`${navActive ? style.active : ""} ${style.menuList}`}>
          <div className={style.menueBackground}></div>

          <Link
            onClick={() => {
              // ! make second menue appear on hover or click
              console.log("hi");
            }}
            className={`${style.link}  ${style.portfolio}`}
            to="heroSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            <h5 className={`${style.item}`}>Portfolio</h5>
          </Link>
          <Link
            className={style.link}
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            <h5 className={`${style.item}`}>Über mich</h5>
          </Link>
          <Link
            className={style.link}
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            <h5 className={`${style.item}`}>Kontakt</h5>
          </Link>
          <div
            className={`${navActive ? style.active : ""} ${style.secondMenue}`}
          >
            <Link
              className={style.link}
              to="heroSection"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              <h5 className={`${style.item}`}>Startseite</h5>
            </Link>

            <Link
              className={style.link}
              to="memory"
              hashSpy={true}
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              <h5 className={`${style.item}`}>Memory Spiel</h5>
            </Link>
            <Link
              className={style.link}
              href="/"
              to="contact"
              hashSpy={true}
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              <h5 className={`${style.item}`}>Kontakt Formular</h5>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { Link } from "react-scroll";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "@/components/Navbar/NavItem";
import style from "@/styles/components/Navbar.module.scss";

const menueObject = [
  { text: "Portfolio", href: "/" },
  { text: "Über mich", href: "/about" },
  { text: "Kontakt", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
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
        <div onClick={() => setNavActive(!navActive)} className={style.menuBar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? style.active : ""} ${style.menuList}`}>
          {menueObject.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

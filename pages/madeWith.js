import style from "@/styles/heroSection/madeWith.module.scss";
import { useEffect, useState } from "react";

export default function MadeWith() {
  const [blink, setBlink] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let clonedArray = [];
  let logoIndex = 0;

  const blinkArray = () => {
    clonedArray = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    if (logoIndex == clonedArray.length - 1) {
      logoIndex = 0;
    } else {
      logoIndex++;
      // console.log(logoIndex);
    }
    clonedArray[logoIndex] = true;
    setBlink(clonedArray);
  };

  //* intersection observer

  let madeWithObserver = undefined;
  let madeWith = undefined;
  const [runAnimation, setRunAnimation] = useState(false);

  // use Effect to make sure, that the elements are loaded in the dom before they are targeted
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    madeWithObserver = new IntersectionObserver(
      (entries) => {
        // if there is only one entry it will be entries[0]
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRunAnimation(true);
          } else {
            setRunAnimation(false);
          }
        });
      },
      {
        rootMargin: "-30%",
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    madeWith = document.querySelector("#madeWith");
    madeWithObserver.observe(madeWith);
  }, []);

  // * blinking interval
  useEffect(() => {
    if (runAnimation) {
      const blinkInterval = setInterval(() => {
        blinkArray();
      }, 500);
      return () => clearInterval(blinkInterval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runAnimation]);

  return (
    <div id="madeWith" className={style.mainContainer}>
      <div className={style.arrowContainer}>
        <div className={style.stripe} />
        <div className={style.arrow} />
      </div>
      <div className={style.textAndIcons}>
        <div className={style.nextReact}>
          <h4 className={style.nextText}>Programmiert mit</h4>
          <div className={`${style.nextImg}  `}></div>
          <h4 className={style.nextText}>einem Framework für React</h4>
          <div className={`${style.reactImg}`}></div>
        </div>
        <div className={style.programsContainer}>
          <div className={style.programmingLanguages}>
            <div
              className={`${style.sassImg} ${style.languagesImg}  ${
                blink[2] ? style.colored : ""
              }`}
            ></div>
            <div
              className={`${style.htmlImg} ${style.languagesImg} ${
                blink[3] ? style.colored : ""
              }`}
            ></div>
            <div
              className={`${style.cssImg} ${style.languagesImg} ${
                blink[4] ? style.colored : ""
              }`}
            ></div>
            <div
              className={`${style.jsImg} ${style.languagesImg} ${
                blink[5] ? style.colored : ""
              }`}
            ></div>
          </div>
          <div className={style.programImgContainer}>
            <div className={style.programsRow}>
              <div
                className={`${style.vsImg} ${style.programsImg}  ${
                  blink[6] ? style.colored : ""
                }`}
              ></div>
              <div
                className={`${style.githubImg} ${style.programsImg} ${
                  blink[7] ? style.colored : ""
                }`}
              ></div>
              <div
                className={`${style.xdImg} ${style.programsImg} ${
                  blink[8] ? style.colored : ""
                }`}
              ></div>
              <div
                className={`${style.aiImg} ${style.programsImg} ${
                  blink[9] ? style.colored : ""
                }`}
              ></div>
            </div>
            <div className={style.programsRow}>
              <div
                className={`${style.psImg} ${style.programsImg} ${
                  blink[10] ? style.colored : ""
                }`}
              ></div>
              <div
                className={`${style.lrImg} ${style.programsImg} ${
                  blink[11] ? style.colored : ""
                }`}
              ></div>
              <div
                className={`${style.procreateImg} ${style.programsImg} ${
                  blink[12] ? style.colored : ""
                }`}
              ></div>
            </div>
          </div>
          <div className={style.programsNameContainer}>
            <p className={style.programsText}>
              <span className={style.yellowText}>in:</span> html, css, sass und
              JavaScript / JSX
            </p>
            <p className={style.programsText}>
              <span className={style.yellowText}>mit:</span> Visual Studio Code,
              Adobe XD, Photoshop, Illustrator, Lightroom und Procreate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

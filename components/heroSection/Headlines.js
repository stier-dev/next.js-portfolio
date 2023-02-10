import Image from "next/image";
import { useState, useEffect } from "react";
import style from "@/styles/heroSection/headlines.module.scss";
import { motion } from "framer-motion";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Headlines() {
  let jumboH1 = undefined;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    jumboH1 = document.querySelector("#heroJumbo");

    const jumboContent = "Web Entwickler";
    let index = 0;
    let currentText = "";
    let letter = "";

    // Headline Jumbo Typing Function
    let type = () => {
      let randomTimeout = Math.floor(Math.random() * 200 + 30);
      currentText = jumboContent;
      letter = currentText.slice(0, ++index);
      jumboH1.textContent = letter;
      if (letter.length !== currentText.length) {
        setTimeout(type, randomTimeout);
        setReady(false);
      } else {
        setReady(true);
        setTimeout(() => {
          jumboH1.innerHTML = `Web Entwickler
        <span aria-hidden="true">Web Entwickler</span><span  aria-hidden="true">Web Entwickler</span>`;
        }, 200);
      }
    };
    type();
  }, []);

  return (
    <div className={style.mainContainer}>
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        className={style.parallaxContainer}
        useWindowMouseEvents={true}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            },
          }}
        >
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.5}
            className={style.parallaxChildContainer}
          >
            <Image
              className={style.matrixGeorgiImg}
              fill
              src={"/img/heroSection/matrix_georgi.png"}
              alt="Georgi als Neo von Matrix"
              blurDataURL="/img/heroSection/matrix_georgi_blur.png"
              placeholder="blur"
            />
          </MouseParallaxChild>
        </motion.div>
        <MouseParallaxChild
          factorX={0.5}
          factorY={0.8}
          className={style.headlines}
        >
          <h1
            id="heroJumbo"
            className={`${style.heroJumbo} ${
              ready ? style.glitch : style.jumboTypingEffect
            }`}
          ></h1>
          <div
            className={`${style.georgiy} ${
              ready ? style.georgiyVisible : style.georgiyInVisible
            }`}
          >
            <Image
              fill
              src={"/img/heroSection/georgi.svg"}
              alt="Georgi Stier"
            />
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
}

import style from "@/styles/heroSection/madeWith.module.scss";

export default function MadeWith() {
  return (
    <div className={style.mainContainer}>
      <div className={style.arrowContainer}>
        <div className={style.stripe} />
        <div className={style.arrow} />
      </div>
      <div className={style.textAndIcons}>
        <div className={style.nextReact}>
          <h4 className={style.nextText}>Programmiert mit</h4>
          <div className={style.nextImg}></div>
          <h4 className={style.nextText}>einem Framework für</h4>
          <div className={style.reactImg}></div>
        </div>
        <div className={style.programsContainer}>
          <div className={style.programmingLanguages}>
            <div className={`${style.sassImg} ${style.languagesImg}`}></div>
            <div className={`${style.htmlImg} ${style.languagesImg}`}></div>
            <div className={`${style.cssImg} ${style.languagesImg}`}></div>
            <div className={`${style.jsImg} ${style.languagesImg}`}></div>
          </div>
          <div className={style.programImgContainer}>
            <div className={`${style.vsImg} ${style.programsImg}`}></div>
            <div className={`${style.githubImg} ${style.programsImg}`}></div>
            <div className={`${style.xdImg} ${style.programsImg}`}></div>
            <div className={`${style.aiImg} ${style.programsImg}`}></div>
            <div className={`${style.psImg} ${style.programsImg}`}></div>
            <div className={`${style.lrImg} ${style.programsImg}`}></div>
            <div className={`${style.procreateImg} ${style.programsImg}`}></div>
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

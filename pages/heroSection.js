import style from "@/styles/heroSection/heroSection.module.scss";
import Headlines from "@/components/heroSection/Headlines";

export default function HeroSection() {
  return (
    <div id="startseite" className={style.mainContainer}>
      <iframe
        id="matrix"
        src="/iframe/matrix.html"
        width="100%"
        className={style.iFrame}
      ></iframe>
      <div className={style.headlinesContainer}>
        <Headlines />
      </div>
    </div>
  );
}

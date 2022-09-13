import style from "@/styles/heroSection.module.scss";

export default function HeroSection() {
  return (
    <div id="heroSection" className={style.mainContainer}>
      <iframe
        src="/iframe/matrix.html"
        width="100%"
        className={style.iFrame}
      ></iframe>
    </div>
  );
}

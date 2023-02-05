import style from "@/styles/kaleidoskop.module.scss";

export default function HeroSection() {
  return (
    <div id="kaleidoskop" className={style.mainContainer}>
      <iframe
        src="/iframe/kaleidoskop/kaleidoskop.html"
        width="100%"
        className={style.iFrame}
      ></iframe>
    </div>
  );
}

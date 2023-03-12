import style from "@/styles/kaleidoskop.module.scss";

export default function HeroSection() {
  return (
    <div className={style.mainContainer}>
      <iframe
        src="/iframe/kaleidoskop/kaleidoskop.html"
        width="100%"
        className={style.iframe}
      ></iframe>
    </div>
  );
}

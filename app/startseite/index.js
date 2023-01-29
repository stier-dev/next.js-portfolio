import style from "@/styles/heroSection/heroSection.module.scss";
import Headlines from "./headlines";

export default function Startseite() {
  console.log("--->i am only visible in the Server Terminal :)");

  return (
    <div id="startseite" className={style.mainContainer}>
      <iframe
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

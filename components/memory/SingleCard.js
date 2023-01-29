import Image from "next/legacy/image";
import style from "@/styles/components/Memory.module.scss";

export default function SingleCard({
  selectCard,
  url,
  closed = false,
  id,
  className,
  guessed = false,
}) {
  return (
    <div
      className={className}
      onClick={() => {
        if (!guessed) {
          selectCard(id);
        }
      }}
    >
      <div className={`${style.oneCard} ${closed ? style.closed : style.open}`}>
        <div className={`${style.cardFrontside} ${style.card}`}>
          {/* FRONT SIDE -------------------------- */}
          <div className={style.frontsideBackground}>
            <Image
              layout="fill"
              src={"/img/memory/frontside/frontside_background.svg"}
            />
          </div>
          <div className={style.frontsideImg}>
            <Image layout="fill" src={url} />
          </div>
        </div>
        <div className={`${style.cardBackside} ${style.card}`}>
          {/* BACK SIDE -------------------------- */}
          <div className={style.backgroundShapes}>
            <Image
              layout="fill"
              src={"/img/memory/backside/background_border.svg"}
            />
          </div>
          <div className={style.backsideCircle}>
            <Image
              layout="fill"
              src={"/img/memory/backside/background_pattern.svg"}
            />
          </div>
          <div className={style.backsideHexagon}>
            <Image
              layout="fill"
              src={"/img/memory/backside/hover_hexagon.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

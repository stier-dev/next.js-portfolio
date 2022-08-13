import Image from "next/image";
import styles from "@/styles/components/Memory.module.scss";

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
      <div
        className={`${styles.oneCard} ${closed ? styles.closed : styles.open}`}
      >
        <div className={`${styles.cardFrontside} ${styles.card}`}>
          {/* FRONT SIDE -------------------------- */}
          <div className={styles.frontsideBackground}>
            <Image
              layout="fill"
              src={"/img/memory/frontside/frontside_background.svg"}
            />
          </div>
          <div className={styles.frontsideImg}>
            <Image layout="fill" src={url} />
          </div>
        </div>
        <div className={`${styles.cardBackside} ${styles.card}`}>
          {/* BACK SIDE -------------------------- */}
          <div className={styles.backgroundShapes}>
            <Image
              layout="fill"
              src={"/img/memory/backside/background_border.svg"}
            />
          </div>
          <div className={styles.backsideCircle}>
            <Image
              layout="fill"
              src={"/img/memory/backside/background_pattern.svg"}
            />
          </div>
          <div className={styles.backsideHexagon}>
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

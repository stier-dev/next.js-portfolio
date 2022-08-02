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
          <Image layout="fill" src={url} className={styles.cardImg} />
        </div>
        <div className={`${styles.cardBackside} ${styles.card}`}>
          {/* BACK SIDE -------------------------- */}
          <Image
            layout="fill"
            src={"/img/memory/backside.png"}
            className={styles.cardImg}
          />
        </div>
      </div>
    </div>
  );
}

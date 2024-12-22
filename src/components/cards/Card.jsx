
import React from "react";
import CardData from "./CardData";
import styles from "./card.module.css"

const Card = () => {
  return (
    <div className={styles.cardSection}>
      {CardData.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.cardContent}>
            <div>
              <div className={styles.cardBadge}>NEW</div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
            </div>
          </div>

          <div>
            <p className={styles.cardPrice}>Rs. {card.price || "N/A"}</p>
          </div>
          <div className={styles.cardImg}>
            <img src={card.src} alt={card.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

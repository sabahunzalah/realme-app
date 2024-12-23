import React from "react";
import styles from "./card.module.css";

const Card = ({ id, name, description, src, price }) => {
  return (
    <div key={id} className={styles.card}>
      <div className={styles.cardContent}>
        <div>
          <div className={styles.cardBadge}>NEW</div>
          <h3 className={styles.mobileName}>{name}</h3>
          <p className={styles.mobileDesc}>{description}</p>
        </div>
        <div>
        <p className={styles.cardPrice}>Rs. {price || "N/A"}</p>
      </div>
      </div>

    
      <div className={styles.cardImg}>
        <img src={src} alt={name} />
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import AssessoriesData from "./AssessoriesData";
import Card from "../cards/Card"
import styles  from "./Accessory.module.css"

const AccessoriesCard = () => {
  return (
       <>
        <h1 className={styles.heading}>Accessories</h1>
    <div className={styles.cardSection}>
      {AssessoriesData.map((item, index) => {
        return (
        <Card 
        key={index}
        name={item.name}
        description={item.description}
        src={item.src}
        />)
      })}
    </div>
    </>
  );
};

export default AccessoriesCard;

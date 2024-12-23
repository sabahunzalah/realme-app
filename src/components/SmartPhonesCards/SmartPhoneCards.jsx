import React from 'react'
import CardData from './CardData'
import Card from '../cards/Card'
import styles  from "./SmCards.module.css"

const SmartPhoneCards = () => {
  return (
    <>
    <h1 className={styles.heading}>Smart Phones</h1>
    <div className={styles.cardSection}>
     
      {
        CardData.map((mobiles,index)=>{
            return(
              
             <Card
             key={index}
             name= {mobiles.name}
             description={mobiles.description}
             price={mobiles.price}
             src={mobiles.src}
             />
            
            )
        })
      }
    </div>
    </>
  )
}

export default SmartPhoneCards

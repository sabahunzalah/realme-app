import React from 'react'
import  styles from "./navbar.module.css"

const NavBar = () => {
  const rightLinks = ["realme smartphone","narzo smartphone","Audio","Accessories"]
  const leftLinks = ["Brand","Support","Community"]
  return (
    <div className={styles.navParent}>
        <div className={styles.left}>
      <div className={styles.leftTitle}>
        <p>realme</p>
      </div>
      <div className={styles.leftLinks}>
      <ul>
  {rightLinks.map((element,index) => (
    <li key={index}>{element}</li>
  ))}
</ul>

      </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightLinks}>
            <ul>
               {leftLinks.map((element,index)=>{
                return <li key={index}>{element}</li>
               })}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;

import React from 'react'
import styles from './Card.module.css'

const Card = ({id , imgSrc , title , desc}) => {
  return (
    <div className={styles.divContainer}>
<img className={styles.divImage} src={imgSrc}  />
<h2>ID:{id}</h2>
<h3>{title} </h3>
    <p>{desc}</p>
    </div>
  )
}

export default Card
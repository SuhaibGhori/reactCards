import React from 'react'
import styles from './Card.module.css'

const Card = ({id , image , title , description , price  , rating , rating1}) => {
  return (
<div className={styles.mainDiv}>
  <div className={styles.divContainer}>
    <img 
      className={styles.divImage} 
      src={image || "https://via.placeholder.com/150"} // Default image if none provided
      alt={title || "Product Image"} 
    />
    <h2>ID: {id}</h2>
    <h4>{title}</h4>
    <p>{description}</p>
    <h5>Price: ${price}</h5>
    <p>Rating: {rating}</p>
    <p>Count : {rating1}</p>
    <div className={styles.buttonContainer}>
      <button className={styles.button}>View Details</button>
      <button className={styles.button}>Buy Now</button>
    </div>
  </div>
</div>

  )
}

export default Card
import React from 'react'
import styles from './productCard.module.css'
import Link from 'next/link'

const ProductCard = ({title, thumbnail, subtitle, href, summery}) => {

  console.log(summery)
  return (
    <div className={styles.post_card}>
    <div className={styles.post_card_top}>
        <img src={thumbnail} alt="" />
    </div>
    <div className={styles.post_card_bottom}>
        <span>{subtitle}</span>
        <h5>{title}</h5>
        <p>{summery}</p>
        <Link href={href}> Learn more</Link>
    </div>
  
</div>
  )
}

export default ProductCard;
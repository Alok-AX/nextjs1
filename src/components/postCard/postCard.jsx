import React from 'react'
import styles from './postCard.module.css'
import Link from 'next/link'
const PostCard = ({post}) => {
  return (
    <div className={styles.post_card}>
        <div className={styles.post_card_top}>
            <img src="/contact.png" alt="" />
        </div>
        <div className={styles.post_card_bottom}>
            <span>01.11.2023</span>
            <h5>{post.title}</h5>
            <p>{post.desc}</p>
            <Link href={`blog/${post.id}`}> Learn more</Link>
        </div>
      
    </div>
  )
}

export default PostCard

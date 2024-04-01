"use client"
import React from 'react'
import styles from '../../app/blog/[slug]/singlePost.module.css';
import { getUser } from '../../../lib/data';

//fetching data With AN API
// async function getData(userId) {
//     try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});
//         if (!res.ok) {
//             throw new Error(`Failed to fetch data for user ID: ${userId}. Status: ${res.status}`);
//         }
//         return res.json();
//     } catch (error) {
//         console.error(error);
//         throw new Error('Failed to fetch data. Please try again later.');
//     }
// }


    const PostUser = async ({userId}) => {

        //fetching data With AN API
        // const user = await getData(userId);

        //fetching data With -out AN API
        const user = await getUser(userId);
    
  return (
    
    <div className={styles.auth_col}>
        <img src="/tech_project02.jpg" alt="" />
        <div className={styles.auth_despo}>
            <span><b>Author</b></span>
            <span>{user.name}</span>
        </div>
    </div>
  )
}

export default PostUser
import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '../../../lib/data';

//fetching data With AN API
// const getData = async () =>{
//   // const res = await fetch ("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"}) // this cache for refresh blog post data.
//   const res = await fetch ("https://jsonplaceholder.typicode.com/posts", {next: {revalidate:4000}}); // this cache code for validate date after 3 sec it will show our date .
//    if(!res.ok){
//     throw new Error ('something went wrong')
//    }
//     return res.json()
// }

const Blog = async () => { //data fetching for async function

//fetching data With-out AN API
  const posts = await getPosts();


//fetching data With AN API
  // const posts =await getData();

  return (
    <div className={styles.blog_wrapper}>
      {posts .map (post=>(
          <PostCard post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Blog

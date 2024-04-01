import React, { Suspense } from 'react';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '../../../../lib/data';
import { metadata } from '@/app/layout';

//fetching data With AN API
// async function getData(slug) {
//   try {
//       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//       if (!res.ok) {
//           throw new Error(`Failed to fetch data for slug: ${slug}. Status: ${res.status}`);
//       }
//       return res.json();
//   } catch (error) {
//       console.error(error);
//       throw new Error('Failed to fetch data. Please try again later.');
//   }
// }

//  seo in dynamicaly fech in blog post
export const  generateMetadata = async ({params})=>{
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.body,
  }


}

const SinglePostPage = async ({params}) => {
  const {slug} = params;

//fetching data With AN API
  // const post = await getData(slug);


  //fetching data With-out AN API
  const post = await getPost(slug);

  return (
    <div className={styles.singlepost_wrapper}>
       <div className="row">
          <div className="col-lg-4">
            <div className={styles.single_post_img}>
              <img src="/tech_project02.jpg" alt="" width='100%' />
            </div>
          </div>
          <div className="col-lg-8">
            <div className={styles.single_post_description}>
              <h2>{post?.title}</h2>
              <div className={styles.auth_publish_row}>
                { post &&(
                    <Suspense fallback={<div>Loading....</div>}>
                      <PostUser key={post.userId} userId={post.userId}/>
                  </Suspense>
                  )}
                <div className={styles.publisher_col}>
                   <img src="/tech_project02.jpg" alt="" />
                    <div className={styles.publisher_despo}>
                      <span><b>Published</b></span>
                      <span>1.06.2023</span>
                    </div>
                </div>
              </div>
              <p>{post?.body}</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default SinglePostPage;

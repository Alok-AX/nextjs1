import styles from './blog.module.css'
const layout = ({children}) => {
  return (
    <>
     <div className={styles.blog_post_wrap}>
       <h1>Blogs</h1>
     </div>
    {children}
    </>
  )
}

export default layout
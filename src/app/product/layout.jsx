import styles from './product.module.css'
const layout = ({children}) => {
  return (
    <>
     <div className={styles.blog_post_wrap}>
       <h1>Products</h1>
     </div>
        {children}
    </>
  )
}

export default layout
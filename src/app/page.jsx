 import Link from 'next/link';
import styles from '../app/home.module.css'

export default function HomePage() {
  // throw new Error ('Error in Home')
  return (
    <div className={styles.home_wrapper}>
      <div className='row align-items-center'>
        <div className='col-lg-6'>
          <div className={styles.home_left_col}>
              <h1>Get a Smart Way For Your Business</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui esse quod corporis ipsum, nihil animi nulla quos fuga labore.</p>
              <div className={styles.home_button}>
                <Link href={'/'} className={styles.learn_more}>Learn More</Link>
                <Link href={'/contact'} className={styles.contact_btn}>contact</Link>
              </div>
          </div>
        </div>
        <div className='col-lg-6'> 
            <div className='home_right_col'>
              <img src="/tech_project02.jpg" alt="" width='100%' />
            </div>
        </div>
      </div>
    </div>
  );
}

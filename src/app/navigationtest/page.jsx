 "use client"
import Link from 'next/link'
import styles from './navigationtest.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const NavigationTestPage = () => {
//   client side navigation
    const router = useRouter(); //routes hook name use
    const pathname = usePathname(); //pathname hook name 
    const searchParams = useSearchParams(); // any query if we have to write in urls it will show whereever we want to show now i am shoing in consol.
    
    const q = searchParams.get("q")
        console.log(q);

        console.log(pathname); // in console it willl show our path name 
    const handleClick =()=>{
        console.log('clicked');
        // router.push('/'); //this router for push to home page redrect
        // router .back('/') //this router for push to back page redrect
        // router .forward('/') //this router for push to forward page redrect

    }
  return (
    <div className={styles.navigation_wrapper}>
        <Link href={"/"}>Click Here</Link>
        <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage

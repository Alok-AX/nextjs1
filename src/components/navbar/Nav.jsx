'use client'
import Links from './links/Links'
import Link from 'next/link'
const Nav = () => {

  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <Link className="logo" href={'/'}>
                  <img src="/logo.svg" alt="" />
                </Link>
                <div>
                    <Links/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav
'use client'
import React from 'react'
import Link from "next/link";
import styles from "./navLink.module.css"
import { usePathname } from 'next/navigation';

const NavLink = ({items}) => {
    const pathName = usePathname();
  return (
    <><Link className={`${styles.menucontainer} ${pathName === items.path && styles.active}`}  href={items.path} key={items.title}>{items.title}</Link></>
  )
}

export default NavLink

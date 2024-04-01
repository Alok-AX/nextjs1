'use client'
import React from 'react'
import styles from '../../app/contact/contact.module.css'

const INPUT = 'INPUT';
const TEXTAREA = 'TEXTAREA';


const fields = [
    {
        lable:'Name',
        component:INPUT,
        type:'text',
        name:'full_name',
        id:'full_name',
    },
    {
        lable:'Email',
        component:INPUT,
        type:'email',
        name:'email',
        id:'email',
    },
    {
        lable:'Subject',
        component:INPUT,
        type:'test',
        name:'subject',
        id:'subject',
    },
    {
        lable:'Message',
        component:TEXTAREA,
        type:'test',
        name:'message',
        id:'message',
    },

]

const Form = () => {
  return (
    <>
       <form action="" className={styles.contact_form}>
        {fileds}
           <Fieldset> 
            <input type="text" placeholder='Name and Surname' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Message' />
            <textarea name="" id="" cols="5" rows="5" placeholder='Message'></textarea>
            <button className={styles.contact_btn}>Submit</button>
            </Fieldset>
        </form>
    </>
  )
}

export default Form
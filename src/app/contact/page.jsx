import React from 'react'

import styles from './contact.module.css'
import Form from '@/components/form/Form';

export const metadata = {
  title: "Contact Page",
  description: "Contact page description",
};

const ContactPage = () => {
  return (
    <div className={styles.contact_wrapper}>
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className={styles.contact_left_col}>
                 <img src="/contact.png" alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className={styles.contact_right_col}>
                  <Form/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage
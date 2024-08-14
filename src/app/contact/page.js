"use client"
import styles from '@/app/contact/contact.module.css'
import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

export default function page() {
  return (
    <>  
    <div className={styles.container} >
      <h1>Contact Us</h1>
        <ContactCard/>
    <div className={styles.container} ></div>


    <section className={styles.contact_section} >
    <h2>We would love to here <span> from you </span></h2>
    <ContactForm/>

    </section>

    <div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.161388702836!2d77.14636257538727!3d31.077437474420055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905799a84ce8103%3A0xb141b9e30d3e8ae9!2sNeryal!5e0!3m2!1sen!2sin!4v1723570581739!5m2!1sen!2sin" className={styles.mapping}  width={600} height={450} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  )
}

import React from 'react'
import styles from '@/app/contact/contact.module.css'
import { MdMail  , MdVoiceChat  , MdForum  } from "react-icons/md";;
import Link from 'next/link';


function ContactCard() {
  return (
    <div className={styles.section} >
      <div className={styles.container} >
      <div className={styles.grid}>
         <div className={styles.grid_card}>
          <i><MdMail /></i>
          <h2>Email</h2>
          <p>Monday to Friday Expected</p>
          <p className={styles.last_para} >response time: 72 hours</p>
          <Link href="/">Send Email <span>-&gt</span></Link>
         </div>

         <div className={styles.grid_card}>
          <i><MdVoiceChat /></i>
          <h2>Live Chat</h2>
          <p>WeekDays 9.00AM to 6.00PM IST</p>
          <p className={styles.last_para} >WeekEnds 9.00AM to 6.00PM IST</p>
          <Link href="/">Chat Now <span>-&gt</span></Link>
         </div>

         <div className={styles.grid_card}>
          <i><MdForum /></i>
          <h2>Comunity Form</h2>
          <p>Monday to Friday Expected</p>
          <p className={styles.last_para} >response time: 72 hours</p>
          <Link href="/">Ask The Community <span>-&gt</span></Link>
         </div>
</div>
      </div>
    </div>
  )
}

export default ContactCard
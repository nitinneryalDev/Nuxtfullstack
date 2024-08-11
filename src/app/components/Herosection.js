import React from "react";
import herostyle from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mulish } from "next/font/google";

const mulish = Mulish({
 weight:[ "300" , "400" , "500" , "600" , "700" , "800" , "900" ],
 subsets:['latin'],
 display:'swap'
})


export default function Herosection({title}) {
  return (
    <main className={herostyle.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={herostyle.hero_content}>
          <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
           <Link href="/movie"> <button className={mulish.className} >Explore Movies</button></Link>
          </div>
          <div className={herostyle.hero_image}>
            <Image src="/about1.svg" alt="watching netflix" width={500} height={500}  />
          </div>
        </div>
      </div>
    <div className={herostyle["custom-shape-divider-bottom-1723397662"]}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles['shape-fill']}></path>
    </svg>
</div>
    </main>
  );
}

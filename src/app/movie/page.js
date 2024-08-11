

import React from 'react'
import MovieCards from '../components/MovieCards';
import styles from '@/app/styles/common.module.css'
import { resolve } from 'styled-jsx/css';


const Movie = async () => {


  await new Promise(resolve => setTimeout(resolve ,2000))

  const  url = process.env.RAPID_KEY;

const options = {
  method:'GET',
  headers: {
    'x-rapidapi-key': '7b328586ddmshff84a4119adac6dp18d3e6jsn8380dc059305',
    'x-rapidapi-host': 'netflix54.p.rapidapi.com'
  }
}

const res = await fetch(url , options);
const data = await res.json();
const main_data = data.titles;



  return (
    <>
    <section  className={`${styles.movieSection}`} >
       <div className={styles.container} >
        <h2>Series & Movie</h2>
   <div className={styles.card_section}>
        {
          main_data.map((curElem) => {
            return <MovieCards key={curElem.summary.id} {...curElem} />
          }  )
        }
        </div>
</div>
        </section>
    </>
  )
}

export default Movie
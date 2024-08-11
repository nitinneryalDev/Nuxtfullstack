import Link from 'next/link'
import styles from '@/app/styles/common.module.css' 

export default function NotFound() {
  return (
    <section className={styles.container}  >
    <div className='lex items-center justify-center h-64' >
  <h1>404</h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
      <button>
      Return Home
      </button></Link>
    </div>
    </section>
  )
}
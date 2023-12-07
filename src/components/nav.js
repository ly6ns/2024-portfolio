import styles from '@/styles/NavFooter.module.css'
import Link from 'next/link';

export default function Nav() {

  return (
    <>
      <div className={styles.nav}>
            <Link href="/" className={styles.logoLink}><div  className={styles.logo}>JL</div></Link>
                <div className={styles.navItems}>
                    <Link  className={styles.navLinks} href="about">About</Link>
                    {/*<Link  className={styles.navLinks} href="work">Work</Link>*/}
                    <Link  className={`${styles.navLinks} ${styles.contact}`} href="contact">Contact Me</Link>
                </div>
        </div>
    </>
  )
}

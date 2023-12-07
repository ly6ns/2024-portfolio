import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import {motion} from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    const marqueeVariants = {
        animate: {
          x: [0, -1035],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40.5,
              ease: "linear",
            },
          },
        },
      };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
            <Nav/>
            <div className={styles.mainContainer}>
                <div className={styles.marquee}>
                    <motion.div
                        className={styles.track}
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        <h1 className={styles.marqueeText}>
                            - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT
                        </h1>
                    </motion.div>
                </div>
                <div className={styles.marquee}>
                    <motion.div
                        className={styles.track}
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        <h1 className={styles.marqueeText2}>
                            - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT
                        </h1>
                    </motion.div>
                </div>
                <div className={styles.container}>
                    <div className={styles.containerSection}>
                        <div className={styles.leftSection}>
                        </div>
                        <div className={styles.rightSection}>
                            <p className={styles.aboutMe}>Hello there! Im a passionate full-stack software engineer based in the vibrant heart of New York City. With a deep appreciation for the intersection of technology and user experience, I specialize in front-end development and UX/UI design.<br/><br/>
                                My journey in the world of software engineering has equipped me with a versatile skill set, allowing me to seamlessly navigate through both the front-end and back-end realms. From crafting elegant and responsive user interfaces to architecting robust server-side solutions, I thrive on the challenges of creating seamless, user-centric digital experiences.<br/><br/>
                                Whether its designing a sleek user interface, optimizing database performance, or solving intricate coding challenges, I am driven by a passion for creating software that not only functions flawlessly but also delights users. In a field where the only constant is change, I am excited to continue honing my skills and contributing to the ever-evolving landscape of technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
      </main>
    </>
  )
}

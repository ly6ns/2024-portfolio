import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Landing.module.css'
import { gsap } from "gsap";
import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faHeart,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Router from 'next/router';
import Nav from './nav';

export default function Landing() {
  const clipTop = useRef();
  const clipBottom = useRef();
  const clipCenter = useRef();
  const marquee = useRef();
  const marquee2 = useRef();
  const marquee3 = useRef();
  const span = useRef();
  const span2 = useRef();
  const span3= useRef();
  const span4 = useRef();
  const span5 = useRef();
  const span6 = useRef();
  const span7 = useRef();
  const span8 = useRef();
  const span9 = useRef();
  const span10 = useRef();
  const span11 = useRef();
  const span12 = useRef();
  const span13 = useRef();
  const span14 = useRef();
  const content = useRef();
  const titleSpan = useRef();
  const cursor = useRef();
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
        window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
        x: mousePosition.x -16,
        y: mousePosition.y -16
    },
    text: {
        width:100,
        height:100,
        x: mousePosition.x -50,
        y: mousePosition.y -50,
        backgroundColor:'white',
        mixBlendMode: 'difference'
    },
    nav: {
        width: '100vw',
        height: '100vh',
        backgroundColor:'#0f0f0f',
        borderRadius: 0,
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  //const navLoader = () => setCursorVariant('nav');

  const navLoad = () => {
    gsap.to(clipTop.current, 2, {
        delay: 0,
        clipPath: "inset(0 0 0 0)",
        height: '1vh',
        ease: "power4.inOut", 
    });
    gsap.to(clipBottom.current, 2, {
        delay: 0,
        clipPath: "inset(0 0 0 0)",
        height: '1vh',
        ease: "power4.inOut", 
    });
    gsap.to(clipTop.current, 3, {
        delay: 1,
        height: '50vh',
        ease: "power4.inOut", 
    });
    gsap.to(clipBottom.current, 3, {
        delay: 1,
        height: '50vh',
        ease: "power4.inOut", 
    });
  }

  const navClick = (e, link) => {
        e.preventDefault();
        //navLoader();
        navLoad();
        setTimeout(() => {
            Router.push(`/${link}`);
        }, 4000);
    }

// use this instead of useEffect() or useLayoutEffect()
    useIsomorphicLayoutEffect(() => {
        gsap.to(clipTop.current, 2, {
            delay: 1,
            height: "33.3vh",
            ease: "power4.inOut", 
        });
        gsap.to(clipBottom.current, 2, {
            delay: 1,
            height: "33.3vh",
            ease: "power4.inOut", 
        });
        gsap.to(marquee.current, 3.5, {
            delay: 0.75,
            top:"36%",
            ease: "power4.inOut", 
        });
        gsap.to(marquee2.current, 3.5, {
            delay: 0.75,
            top:"36%",
            ease: "power4.inOut", 
        });
        gsap.to(marquee3.current, 3.5, {
            delay: 0.75,
            top:"36%",
            ease: "power4.inOut", 
        });
        gsap.to(marquee.current, 5, {
            delay: 1,
            left:"126%",
            ease: "power4.inOut", 
        });
        gsap.to(marquee2.current, 5, {
            delay: 1,
            left:"126%",
            ease: "power3.inOut", 
        });
        gsap.to(marquee3.current, 5, {
            delay: 0.5,
            left:"-25%",
            ease: "power3.inOut", 
        });
        gsap.to(clipTop.current, 2, {
            delay: 6,
            clipPath: "inset(0 0 100% 0)",
            ease: "power4.inOut", 
        });
        gsap.to(clipBottom.current, 2, {
            delay: 6,
            clipPath: "inset(100% 0 0 0)",
            ease: "power4.inOut", 
        });
        gsap.to(span.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span2.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span3.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span4.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span5.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span6.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span7.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span8.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span9.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span10.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span11.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span12.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span13.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(span14.current, 1, {
            delay: 6,
            opacity: 0,
            ease: "power2.inOut", 
        });
        gsap.to(content.current, 1, {
            delay: 7.5,
            opacity: 1,
            ease: "power2.inOut", 
        });
        gsap.to(cursor.current, 1, {
            delay: 7.5,
            opacity: 1,
            ease: "power2.inOut", 
        });
    }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.loader}>
          <div className={`${styles.loaderClip} ${styles.clipTop}`} ref={clipTop}>
            <div className={styles.marquee} ref={marquee}>
                <div className={styles.marqueeContainer}>
                    <span ref={span}>Joe Lyons</span>
                    <span ref={span2}>Joe Lyons</span>
                    <span ref={span14}>Joe Lyons</span>
                    <span ref={span3}>Joe Lyons</span>
                    <span ref={span4}>Joe Lyons</span>
                </div>
            </div>
          </div>
          <div className={`${styles.loaderClip} ${styles.clipBottom}`} ref={clipBottom}>
            <div className={styles.marquee} ref={marquee2}>
                <div className={styles.marqueeContainer}>
                    <span ref={span5}>Joe Lyons</span>
                    <span ref={span6}>Joe Lyons</span>
                    <span ref={span13}>Joe Lyons</span>
                    <span ref={span7}>Joe Lyons</span>
                    <span ref={span8}>Joe Lyons</span>
                </div>
            </div>
          </div>
          <div className={styles.clipCenter} ref={clipCenter}>
            <div className={styles.marquee} ref={marquee3}>
                <div className={styles.marqueeContainer}>
                    <span className={styles.centerSpan} ref={span9}>Joe Lyons</span>
                    <span className={styles.centerSpan} ref={span10}>Joe Lyons</span>
                    <span className={styles.centerSpan} ref={span11}>Joe Lyons</span>
                    <span onMouseEnter={textEnter} onMouseLeave={textLeave} ref={titleSpan} className={styles.title}>Joe Lyons</span>
                    <span className={styles.centerSpan} ref={span12}>Joe Lyons</span>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.logo}>JL</div>
                    <div className={styles.navItems}>
                        <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.navLinks} href="about" onClick={(e) => {navClick(e,'about')}}>About</Link>
                        {/*<Link onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.navLinks} href="work" onClick={(e) => {navClick(e,'work')}}>Work</Link>*/}
                        <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className={`${styles.navLinks} ${styles.contact}`} href="contact" onClick={(e) => {navClick(e,'contact')}}>Contact Me</Link>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerLinkSection}>
                        <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Find me here : </p>
                        <FontAwesomeIcon  onMouseEnter={textEnter} onMouseLeave={textLeave} icon={faLinkedin} className={styles.footerIcon2}></FontAwesomeIcon>
                        <FontAwesomeIcon onMouseEnter={textEnter} onMouseLeave={textLeave} icon={faGithub} className={styles.footerIcon2}></FontAwesomeIcon>
                        <FontAwesomeIcon onMouseEnter={textEnter} onMouseLeave={textLeave} icon={faEnvelope} className={styles.footerIcon2}></FontAwesomeIcon>
                    </div>
                    <p className={styles.footerTag} onMouseEnter={textEnter} onMouseLeave={textLeave} >Made with 
                        <FontAwesomeIcon
                                icon={faHeart}
                                className={styles.footerIcon}>
                            </FontAwesomeIcon> 
                        by Joe Lyons</p>
                </div>
            </div>
        </div>
        <motion.div 
                className={styles.cursor}
                variants={variants}
                animate={cursorVariant}
                ref={cursor}
            />
      </main>
      
    </>
  )
}

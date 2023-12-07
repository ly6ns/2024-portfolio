import styles from '@/styles/NavFooter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faHeart,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
    <>
      <div className={styles.footer}>
            <div className={styles.footerLinkSection}>
                <p  >Find me here : </p>
                <FontAwesomeIcon   icon={faLinkedin} className={styles.footerIcon2}></FontAwesomeIcon>
                <FontAwesomeIcon  icon={faGithub} className={styles.footerIcon2}></FontAwesomeIcon>
                <FontAwesomeIcon  icon={faEnvelope} className={styles.footerIcon2}></FontAwesomeIcon>
            </div>
            <p className={styles.footerTag}  >Made with 
                <FontAwesomeIcon
                    icon={faHeart}
                    className={styles.footerIcon}>
                </FontAwesomeIcon> 
                by Joe Lyons</p>
        </div>
    </>
  )
}
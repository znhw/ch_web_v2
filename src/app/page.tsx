'use client';
import { motion } from 'framer-motion';
import styles from ".././styles/page.module.css";
import ServicesSection from "./components/ServicesSection"
import ApproachSection from "./components/ApproachSection"

export default function Home() {
  return (
   <div>
      <div className={styles.logo}>
        city hypes
      </div>
      <div className={styles.intro}>
       <p>We help brands <motion.span
       initial={{  x: -50, opacity: 0}}
       animate={{  x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       style={{   backgroundColor: '#7871F1',
        padding: '0.1em 0.2em',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        color: '#ffffff'}}
       >connect
       </motion.span> with <motion.span 
         initial={{  x: -50, opacity: 0}}
         animate={{  x: 0, opacity: 1 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         style={{   backgroundColor: '#7871F1',
          padding: '0.1em 0.2em',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          color: '#ffffff'}}
      >people</motion.span> and <motion.span 
        initial={{  x: -50, opacity: 0}}
        animate={{  x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{   backgroundColor: '#7871F1',
         padding: '0.1em 0.2em',
         display: 'inline-block',
         whiteSpace: 'nowrap',
         color: '#ffffff'}}
      >culture
      </motion.span> through smart, creative marketing.</p>
      </div>
      <ServicesSection />
      <ApproachSection />
      <div className={styles.bga}></div>

      <div className={styles.contact}>
        <h2>Reach us at:</h2>
        <a href="mailto:business@cityhypes.com">business@cityhypes.com</a>
      </div>
      <footer>
        <p>City Hypes Sdn. Bhd. (1616015-P)</p>
        <p>© 2025.</p>
      </footer>
   </div>
  );
}

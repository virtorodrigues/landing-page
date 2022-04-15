import styles from './styles.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 2
    }
  }
};
const cardVariants1: Variants = {
  offscreen: {
    opacity: 0,
    x: 50,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 2
    }
  }
};

export const Header = () => {
  return (
    <motion.header
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className={styles.headerContainer}
    >
      <div className={styles.headerContent}>
        <motion.div variants={cardVariants} className={styles.logo}>
          <img src='/images/reactjs-icon.svg' alt='Logo' />
          <h1>Lets coding...</h1>
        </motion.div>

        <motion.nav variants={cardVariants1} className={styles.menu}>
          <Link
            activeClass="active"
            to='home'
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to='about'
            spy={true}
            smooth={true}
            duration={500}
          >
            Sobre mim
          </Link>
          <Link
            activeClass="active"
            to='purpose'
            spy={true}
            smooth={true}
            duration={500}
          >
            Propósito
          </Link>
          <Link
            activeClass="active"
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
          >
            Contatos
          </Link>
        </motion.nav>
      </div>
    </motion.header>
  )
}
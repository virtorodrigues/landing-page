import { SocialContact } from './SocialContact';
import styles from './styles.module.scss';
import { motion, Variants } from "framer-motion";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa';

const cardVariants: Variants = {
  offscreen: {
    y: 250,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 2
    }
  }
};

const titleVariants: Variants = {
  offscreen: {
    y: -50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
    }
  }
};

export const Contact = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      id='contact' className={styles.sectionContainer}>
        
      <motion.h1 variants={titleVariants}>Contatos</motion.h1>

      <motion.div variants={cardVariants} className={styles.sectionContent}>
        <SocialContact icon={FaFacebookSquare} desctiption="Vitor Rodrigues" url="https://www.facebook.com/santos.vitao" />
        <SocialContact icon={FaGithubSquare} desctiption="Vitor Rodrigues" url="https://github.com/virtorodrigues" />
        <SocialContact icon={FaLinkedin} desctiption="Vitor Rodrigues" url="https://www.linkedin.com/in/virtorodrigues/" />
        <SocialContact icon={FaInstagramSquare} desctiption="virtorodrigues" url="https://www.instagram.com/virtorodrigues/" />
        <SocialContact icon={FaInstagramSquare} desctiption="reactjs.codetyps" url="https://www.instagram.com/reactjs.codetips/" />
        <SocialContact icon={FaWhatsappSquare} desctiption="(18) 9 9718-3307" url="" />
      </motion.div>
    </motion.section>
  )
}

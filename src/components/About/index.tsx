import styles from './styles.module.scss';

import { motion, Variants } from "framer-motion";

const aboutVariants: Variants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 2
    }
  }
};

const imgVariants: Variants = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    // rotate: -10,
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

export const About = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      id='about' className={styles.sectionContainer}
    >
      <motion.h1 variants={titleVariants}>Sobre mim</motion.h1>
      
      <div className={styles.sectionContent}>
        <motion.div variants={aboutVariants} className={styles.paragraph}>
          <p>Me chamo Vitor Santos Rodrigues, tenho 25 anos, programo há 8 anos e me formei em ciência da computação há 3 anos.
            <br /><br />
            A história começa quando no meu primeiro trabalho após a facul, sem nunca nem ter ouvido falar do React, descobri que é dele que eu gosto e é nele que vou focar!
            <br /><br />
            Hoje decidi que quero ajudar as pessoas a encontrarem com clareza um caminho a se seguir e por isso estou começando dar várias dicas no instagram e pretendo criar e-books + video aulas falando sobre programação e possíveis caminhos a serem seguidos dentro da área da programação.
          </p>
        </motion.div>
        <motion.img variants={imgVariants} src='/images/vitor-rodrigues.jpg' alt='Sobre mim' />
      </div>
    </motion.section>
  )
}

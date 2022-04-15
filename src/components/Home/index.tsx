import styles from './styles.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
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

export const Home = () => {

  return (
    <>
      <section id='home' className={styles.sectionContainer}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className={styles.sectionContent}
        >
          <motion.div
            variants={cardVariants}
            className={styles.paragraph}
          >
            <span>Seja Bem-Vindo(a)</span>
            <h1>Meu nome é <span>Vitor</span>.</h1>
            <p>
              Quer saber mais sobre mim?
            </p>
            <button>
              <Link
                to='about'
                smooth={true}
                duration={500}
              >
                Saiba mais
              </Link>
            </button>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
            className={styles.reactLogo}>
            <Player
              autoplay
              loop={false}
              keepLastFrame
              //src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
              src='./lotties/react-logo.json'
            />
          </motion.div>
        </motion.div>
        <Link
          activeClass="active"
          to='about'
          smooth={true}
          duration={500}
        >
          <img src='/images/arrow-down.svg' alt='' />
        </Link>
      </section>
    </>
  )
}


/*
// index:        0      1      2     3      4     5
const fruits = ['🥭', '🍋', '🍌', '🍎', '🍓', '🍉'];

// slice(de, até); -> slice(0, 3) -> result: [0, 1, 2]
const fruitsSliced = fruits.slice(6, 10);

console.log(fruitsSliced);  // ['🥭', '🍋', '🍌']
console.log(fruits); // ['🥭', '🍋', '🍌', '🍎', '🍓', '🍉']
 

*/
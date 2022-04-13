import styles from './styles.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const Home = () => {

  return (
    <>
      <section id='home' className={styles.sectionContainer}>
        <div className={styles.sectionContent}>
          <div className={styles.paragraph}>
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
          </div>
          <div className={styles.reactLogo}>
            <Player
              autoplay
              loop={false}
              keepLastFrame
              //src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
              src='./lotties/react-logo.json'
            />
          </div>
        </div>
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

import styles from './styles.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src='/images/reactjs-icon.svg' alt='Logo' />
          <h1>Lets coding...</h1>
        </div>

        <nav className={styles.menu}>
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
        </nav>
      </div>
    </header>
  )
}
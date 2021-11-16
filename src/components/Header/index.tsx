import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="/images/reactjs-icon.svg" alt="Logo" />
          <h1>Lets coding...</h1>
        </div>

        <nav className={styles.menu}>
          <a href="">Home</a>
          <a href="">Sobre mim</a>
          <a href="">Propósitos</a>
          <a href="">Contatos</a>
        </nav>
      </div>
    </header>
  )
}
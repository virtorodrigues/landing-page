import styles from './styles.module.scss';

export const Home = () => {
  return (
    <>
      <section className={styles.sectionContainer}>
        <div className={styles.sectionContent}>
          <div className={styles.paragraph}>
            <span>Seja Bem-Vindo(a)</span>
            <h1>Meu nome é <span>Vitor</span>.</h1>
            <p>
              Quer saber mais sobre mim?
            </p>
            <button>Saiba mais</button>
          </div>
          <img src="/images/reactjs-icon-white.svg" alt="" />
        </div>
        <img src="/images/arrow-down.svg" alt="" />
      </section>
    </>
  )
}

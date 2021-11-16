import styles from './styles.module.scss';

export const About = () => {
  return (
    <section className={styles.sectionContainer}>
      <h1>Sobre mim</h1>
      <div className={styles.sectionContent}>
        <div className={styles.paragraph}>
          <p>Me chamo Vitor Santos Rodrigues, tenho 25 anos, programo há 8 anos e me formei em ciência da computação há 3 anos.
            <br /><br />
            A história começa quando no meu primeiro trabalho após a facul, sem nunca nem ter ouvido falar do React, descobri que é dele que eu gosto e é nele que vou focar!
            <br /><br />
            Hoje decidi que quero ajudar as pessoas a encontrarem com clareza um caminho a se seguir e por isso estou começando dar várias dicas no instagram e pretendo criar e-books + video aulas falando sobre programação e possíveis caminhos a serem seguidos dentro da área da programação.
          </p>
        </div>
        <img src='/images/vitor-rodrigues.jpg' alt='Sobre mim' />
      </div>
    </section>
  )
}

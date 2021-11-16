import { SocialContact } from './SocialContact';
import styles from './styles.module.scss';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa';

export const Contact = () => {
  return (
    <section className={styles.sectionContainer}>
      <h1>Contatos</h1>
      <div className={styles.sectionContent}>
        <SocialContact icon={FaFacebookSquare} desctiption="Vitor Rodrigues" url="https://www.facebook.com/santos.vitao" />
        <SocialContact icon={FaGithubSquare} desctiption="Vitor Rodrigues" url="https://github.com/virtorodrigues" />
        <SocialContact icon={FaLinkedin} desctiption="Vitor Rodrigues" url="https://www.linkedin.com/in/virtorodrigues/" />
        <SocialContact icon={FaInstagramSquare} desctiption="virtorodrigues" url="https://www.instagram.com/virtorodrigues/" />
        <SocialContact icon={FaInstagramSquare} desctiption="reactjs.codetyps" url="https://www.instagram.com/reactjs.codetips/" />
        <SocialContact icon={FaWhatsappSquare} desctiption="(18) 9 9718-3307" url="" />
      </div>
    </section>
  )
}

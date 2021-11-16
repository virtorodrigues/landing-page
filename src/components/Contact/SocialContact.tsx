import { IconBaseProps } from 'react-icons';
import styles from './styles.module.scss';

type SocialContactProps = {
  icon: React.ComponentType<IconBaseProps>;
  desctiption: string;
  url: string;
}

export const SocialContact = ({ icon: Icon, desctiption, url }: SocialContactProps) => {
  return (
    <div className={styles.socialContact}>
      <Icon size={40} color="#e1e1e6" />
      <a target="_blank" href={url} rel="noreferrer">{desctiption}</a>
    </div>
  )
}

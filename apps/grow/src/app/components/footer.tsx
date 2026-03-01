import { useTranslation } from 'react-i18next';
import styles from './footer.module.css';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
    </footer>
  );
}

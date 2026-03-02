import { useTranslation } from 'react-i18next';
import styles from './footer.module.css';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </p>
      <nav className={styles.links}>
        <a href="/terms" className={styles.link}>{t('footer.terms')}</a>
        <a href="/privacy" className={styles.link}>{t('footer.privacy')}</a>
      </nav>
      <span className={styles.brand}>
        <img src="/grow.svg" alt="" className={styles.brandIcon} />
        <span className={styles.brandText}><span className={styles.brandTextSecondary}>Grow</span><span className={styles.brandTextPrimary}>Group</span></span>
      </span>
    </footer>
  );
}

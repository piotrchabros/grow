import { useTranslation } from 'react-i18next';
import styles from './cta.module.css';

export function Cta() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('cta.title')}</h2>
      <p className={styles.subtitle}>{t('cta.subtitle')}</p>
      <a href={import.meta.env.VITE_CALCOM_URL} className={styles.button}>
        {t('cta.button')}
      </a>
    </section>
  );
}

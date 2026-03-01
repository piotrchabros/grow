import { useTranslation } from 'react-i18next';
import styles from './industries.module.css';

export function Industries() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('industries.title')}</h2>
        <p className={styles.subtitle}>{t('industries.subtitle')}</p>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{t('industries.ecommerce.title')}</h3>
          <p className={styles.cardDescription}>
            {t('industries.ecommerce.description')}
          </p>
          <a href={import.meta.env.VITE_URL_ECOMMERCE} className={styles.link}>
            {t('industries.ecommerce.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}

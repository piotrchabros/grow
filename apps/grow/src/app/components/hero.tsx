import { useTranslation } from 'react-i18next';
import styles from './hero.module.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{t('hero.title')}</h1>
      <p className={styles.subtitle}>{t('hero.subtitle')}</p>
      <a href={import.meta.env.VITE_CALCOM_URL} className={styles.cta}>
        {t('hero.cta')}
      </a>
    </section>
  );
}

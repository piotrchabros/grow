import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './cta.module.css';

export function Cta() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      {/* Decorative shapes */}
      <div className={styles.shapeOne} aria-hidden="true" />
      <div className={styles.shapeTwo} aria-hidden="true" />

      <FadeIn>
        <div className={styles.inner}>
          <h2 className={styles.title}>{t('cta.title')}</h2>
          <p className={styles.subtitle}>{t('cta.subtitle')}</p>
          <a href={import.meta.env.VITE_CALCOM_URL} className={styles.button}>
            <span>{t('cta.button')}</span>
            <span className={styles.buttonArrow}>&rarr;</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

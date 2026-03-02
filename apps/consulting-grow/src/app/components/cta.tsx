import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './cta.module.css';

export function Cta() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <FadeIn>
        <div className={styles.inner}>
          {/* Decorative floating shapes */}
          <div className={styles.shapeSquare} aria-hidden="true" />
          <div className={styles.shapeDot} aria-hidden="true" />

          <div className={styles.content}>
            <h2 className={styles.title}>{t('cta.title')}</h2>
            <p className={styles.subtitle}>{t('cta.subtitle')}</p>
          </div>
          <a href={import.meta.env.VITE_CALCOM_URL} className={styles.button}>
            <span style={{ position: 'relative', zIndex: 2 }}>{t('cta.button')}</span>
            <span className={styles.buttonArrow}>&rarr;</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

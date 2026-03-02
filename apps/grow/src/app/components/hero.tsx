import { useTranslation } from 'react-i18next';
import styles from './hero.module.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      {/* Decorative floating shapes */}
      <div className={styles.shapeSquare} aria-hidden="true" />
      <div className={styles.shapeDot} aria-hidden="true" />
      <div className={styles.shapeRing} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className="section-subtitle">{t('hero.eyebrow')}</span>
          <h1 className={styles.title}>
            {t('hero.title.line1')}{' '}
            <span className={styles.accent}>{t('hero.title.accent')}</span>{' '}
            {t('hero.title.line2')}
          </h1>
          <p className={styles.description}>
            {t('hero.subtitle')}
          </p>
          <div className={styles.actions}>
            <a href={import.meta.env.VITE_CALCOM_URL} className="ht_btn">
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

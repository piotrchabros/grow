import { useTranslation } from 'react-i18next';
import styles from './hero.module.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.shapeCircle} aria-hidden="true" />
      <div className={styles.shapeDot} aria-hidden="true" />
      <div className={styles.shapeRing} aria-hidden="true" />
      <div className={styles.inner}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          {t('hero.eyebrow')}
        </span>
        <h1 className={styles.title}>
          {t('hero.title.line1')}{' '}
          <span className={styles.titleAccent}>{t('hero.title.accent')}</span>{' '}
          {t('hero.title.line2')}
        </h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <a href={import.meta.env.VITE_CALCOM_URL} className={styles.cta}>
          <span style={{ position: 'relative', zIndex: 2 }}>{t('hero.cta')}</span>
          <span className={styles.ctaArrow}>&rarr;</span>
        </a>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

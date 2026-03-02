import { useTranslation } from 'react-i18next';
import styles from './hero.module.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      {/* Decorative floating shapes */}
      <div className={styles.shapeOne} aria-hidden="true" />
      <div className={styles.shapeTwo} aria-hidden="true" />
      <div className={styles.shapeThree} aria-hidden="true" />

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
        <div className={styles.metricsBar}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>{t('hero.metrics.conversion.value')}</span>
            <span className={styles.metricLabel}>{t('hero.metrics.conversion')}</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricValue}>{t('hero.metrics.revenue.value')}</span>
            <span className={styles.metricLabel}>{t('hero.metrics.revenue')}</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricValue}>{t('hero.metrics.support.value')}</span>
            <span className={styles.metricLabel}>{t('hero.metrics.support')}</span>
          </div>
        </div>
        <a href={import.meta.env.VITE_CALCOM_URL} className={styles.cta}>
          <span>{t('hero.cta')}</span>
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

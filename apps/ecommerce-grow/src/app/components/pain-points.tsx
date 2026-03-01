import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './pain-points.module.css';

const painPoints = [
  { key: 'cart', icon: '🛒' },
  { key: 'cac', icon: '📈' },
  { key: 'fulfillment', icon: '📦' },
];

export function PainPoints() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.header}>
            <span className={styles.sectionLabel}>{t('painPoints.label')}</span>
            <h2 className={styles.sectionTitle}>{t('painPoints.title')}</h2>
          </div>
        </FadeIn>
        <div className={styles.grid}>
          {painPoints.map((point, i) => (
            <FadeIn key={point.key} delay={i * 0.12}>
              <div className={styles.card}>
                <span className={styles.stat}>
                  {t(`painPoints.${point.key}.stat`)}
                </span>
                <h3 className={styles.cardTitle}>
                  {t(`painPoints.${point.key}.title`)}
                </h3>
                <p className={styles.cardDescription}>
                  {t(`painPoints.${point.key}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

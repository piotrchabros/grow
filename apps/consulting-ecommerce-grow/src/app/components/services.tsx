import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './services.module.css';

const services = [
  'strategy',
  'marketplace',
  'supply',
  'retention',
  'international',
  'revops',
  'exit',
] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.header}>
            <span className={styles.sectionLabel}>{t('services.label')}</span>
            <h2 className={styles.sectionTitle}>{t('services.title')}</h2>
          </div>
        </FadeIn>
        <div className={styles.list}>
          {services.map((key, i) => (
            <FadeIn key={key} delay={i * 0.08}>
              <div className={styles.card}>
                <div className={styles.cardLeft}>
                  <span className={styles.cardNumber}>
                    {t(`services.${key}.num`)}
                  </span>
                  <h3 className={styles.cardTitle}>
                    {t(`services.${key}.title`)}
                  </h3>
                  <p className={styles.cardDescription}>
                    {t(`services.${key}.description`)}
                  </p>
                </div>
                <div className={styles.cardRight}>
                  <ul className={styles.featureList}>
                    {t(`services.${key}.features`)
                      .split(', ')
                      .map((feature) => (
                        <li key={feature} className={styles.feature}>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

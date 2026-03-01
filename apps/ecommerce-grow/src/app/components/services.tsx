import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './services.module.css';

const services = [
  { num: '01', key: 'marketing', href: 'VITE_URL_MARKETING_ECOMMERCE' },
  { num: '02', key: 'consulting', href: 'VITE_URL_CONSULTING_ECOMMERCE' },
  { num: '03', key: 'technology', href: 'VITE_URL_TECH_ECOMMERCE' },
  { num: '04', key: 'ai', href: 'VITE_URL_AI_ECOMMERCE' },
];

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
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1}>
              <a
                href={import.meta.env[service.href]}
                className={styles.card}
              >
                <div className={styles.cardLeft}>
                  <span className={styles.cardNumber}>{service.num}</span>
                  <h3 className={styles.cardTitle}>
                    {t(`services.${service.key}.title`)}
                    <span className={styles.cardArrow}>&rarr;</span>
                  </h3>
                  <p className={styles.cardDescription}>
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
                <div className={styles.cardRight}>
                  <ul className={styles.featureList}>
                    {t(`services.${service.key}.features`)
                      .split(', ')
                      .map((feature) => (
                        <li key={feature} className={styles.feature}>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

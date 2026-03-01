import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './services-overview.module.css';

const services = [
  { num: '01', titleKey: 'services.marketing.title', descKey: 'services.marketing.description', href: 'VITE_URL_MARKETING' },
  { num: '02', titleKey: 'services.consulting.title', descKey: 'services.consulting.description', href: 'VITE_URL_CONSULTING' },
  { num: '03', titleKey: 'services.technology.title', descKey: 'services.technology.description', href: 'VITE_URL_TECHNOLOGY' },
  { num: '04', titleKey: 'services.ai.title', descKey: 'services.ai.description', href: 'VITE_URL_AI' },
];

export function ServicesOverview() {
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
        <div className={styles.grid}>
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1}>
              <a
                href={import.meta.env[service.href]}
                className={styles.card}
              >
                <span className={styles.cardNumber}>{service.num}</span>
                <h3 className={styles.cardTitle}>
                  {t(service.titleKey)}
                  <span className={styles.cardArrow}>&rarr;</span>
                </h3>
                <p className={styles.cardDescription}>{t(service.descKey)}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

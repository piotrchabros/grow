import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './services-overview.module.css';

const services = [
  { num: '01', titleKey: 'services.strategy.title', descKey: 'services.strategy.description' },
  { num: '02', titleKey: 'services.conversational.title', descKey: 'services.conversational.description' },
  { num: '03', titleKey: 'services.integration.title', descKey: 'services.integration.description' },
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
              <div className={styles.card}>
                <span className={styles.cardNumber}>{service.num}</span>
                <h3 className={styles.cardTitle}>{t(service.titleKey)}</h3>
                <p className={styles.cardDescription}>{t(service.descKey)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

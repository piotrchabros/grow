import { useTranslation } from 'react-i18next';
import styles from './services-overview.module.css';

const services = [
  { titleKey: 'services.marketing.title', descKey: 'services.marketing.description' },
  { titleKey: 'services.consulting.title', descKey: 'services.consulting.description' },
  { titleKey: 'services.technology.title', descKey: 'services.technology.description' },
  { titleKey: 'services.ai.title', descKey: 'services.ai.description' },
];

export function ServicesOverview() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('services.title')}</h2>
      <p className={styles.subtitle}>{t('services.subtitle')}</p>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.titleKey} className={styles.card}>
            <h3 className={styles.cardTitle}>{t(service.titleKey)}</h3>
            <p className={styles.cardDescription}>{t(service.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

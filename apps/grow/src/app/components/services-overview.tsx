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
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-subtitle">{t('services.label')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
        </div>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <span className={styles.cardNumber}>{service.num}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{t(service.titleKey)}</h3>
                </div>
                <p className={styles.cardDescription}>{t(service.descKey)}</p>
                <div className={styles.cardFooter}>
                  <a
                    href={import.meta.env[service.href]}
                    className="ht_btn"
                  >
                    <span>{t('common.learnMore')}</span>
                  </a>
                  <a href={import.meta.env[service.href]} className={styles.arrowLink}>
                    <img src="/assets/img/icon/arrow__01.png" alt="" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

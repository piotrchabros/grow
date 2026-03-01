import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './industries.module.css';

export function Industries() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.left}>
            <span className={styles.label}>{t('industries.label')}</span>
            <h2 className={styles.title}>{t('industries.ecommerce.title')}</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className={styles.right}>
            <p className={styles.description}>
              {t('industries.ecommerce.description')}
            </p>
            <a href={import.meta.env.VITE_URL_ECOMMERCE} className={styles.link}>
              {t('industries.ecommerce.cta')}
              <span>&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

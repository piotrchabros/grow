import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './cta.module.css';

export function Cta() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <FadeIn>
        <div className={styles.inner}>
          <h2 className={styles.title}>{t('cta.title')}</h2>
          <p className={styles.subtitle}>{t('cta.subtitle')}</p>
          <a href={import.meta.env.VITE_CALCOM_URL} className={styles.button}>
            {t('cta.button')}
            <span className={styles.buttonArrow}>&rarr;</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

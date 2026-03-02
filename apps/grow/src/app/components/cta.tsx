import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './cta.module.css';

export function Cta() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h2 className={styles.title}>{t('cta.title')}</h2>
              <p className={styles.description}>{t('cta.subtitle')}</p>
            </div>
            <a href={import.meta.env.VITE_CALCOM_URL} className="ht_btn">
              {t('cta.button')}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

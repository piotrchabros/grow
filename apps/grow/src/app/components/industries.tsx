import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './industries.module.css';

export function Industries() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <FadeIn>
              <div className={styles.left}>
                <span className="section-subtitle">{t('industries.label')}</span>
                <h2 className="section-title">{t('industries.ecommerce.title')}</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className={styles.right}>
                <p className={styles.description}>
                  {t('industries.ecommerce.description')}
                </p>
                <a href={import.meta.env.VITE_URL_ECOMMERCE} className="ht_btn">
                  {t('industries.ecommerce.cta')}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './contact-form.module.css';

export function ContactForm() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.header}>
            <span className={styles.label}>{t('contact.label')}</span>
            <h2 className={styles.title}>{t('contact.title')}</h2>
            <p className={styles.subtitle}>{t('contact.subtitle')}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className={styles.iframeWrapper}>
            <iframe
              className={styles.iframe}
              title="Contact Form"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

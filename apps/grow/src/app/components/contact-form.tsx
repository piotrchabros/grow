import { useTranslation } from 'react-i18next';
import styles from './contact-form.module.css';

export function ContactForm() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="contact">
      <h2 className={styles.title}>{t('contact.title')}</h2>
      <p className={styles.subtitle}>{t('contact.subtitle')}</p>
      <div className={styles.iframeWrapper}>
        <iframe
          src={import.meta.env.VITE_HIGHLEVEL_FORM_URL}
          className={styles.iframe}
          title="Contact Form"
          loading="lazy"
        />
      </div>
    </section>
  );
}

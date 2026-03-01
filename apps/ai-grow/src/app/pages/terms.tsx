import { useTranslation } from 'react-i18next';
import styles from './legal.module.css';

export function TermsPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('terms.title')}</h1>
        <p className={styles.updated}>{t('terms.updated')}</p>

        <div className={styles.body}>
          <h2>{t('terms.general.title')}</h2>
          <p>{t('terms.general.body')}</p>

          <h2>{t('terms.services.title')}</h2>
          <p>{t('terms.services.body')}</p>

          <h2>{t('terms.ip.title')}</h2>
          <p>{t('terms.ip.body')}</p>

          <h2>{t('terms.payment.title')}</h2>
          <p>{t('terms.payment.body')}</p>

          <h2>{t('terms.liability.title')}</h2>
          <p>{t('terms.liability.body')}</p>

          <h2>{t('terms.termination.title')}</h2>
          <p>{t('terms.termination.body')}</p>

          <h2>{t('terms.law.title')}</h2>
          <p>{t('terms.law.body')}</p>

          <h2>{t('terms.contact.title')}</h2>
          <p>{t('terms.contact.body')}</p>
        </div>

        <a href="/" className={styles.backLink}>
          ← {t('legal.back')}
        </a>
      </div>
    </div>
  );
}

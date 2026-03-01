import { useTranslation } from 'react-i18next';
import styles from './legal.module.css';

export function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('privacy.title')}</h1>
        <p className={styles.updated}>{t('privacy.updated')}</p>

        <div className={styles.body}>
          <h2>{t('privacy.intro.title')}</h2>
          <p>{t('privacy.intro.body')}</p>

          <h2>{t('privacy.collect.title')}</h2>
          <p>{t('privacy.collect.body')}</p>

          <h2>{t('privacy.use.title')}</h2>
          <p>{t('privacy.use.body')}</p>

          <h2>{t('privacy.sharing.title')}</h2>
          <p>{t('privacy.sharing.body')}</p>

          <h2>{t('privacy.cookies.title')}</h2>
          <p>{t('privacy.cookies.body')}</p>

          <h2>{t('privacy.rights.title')}</h2>
          <p>{t('privacy.rights.body')}</p>

          <h2>{t('privacy.retention.title')}</h2>
          <p>{t('privacy.retention.body')}</p>

          <h2>{t('privacy.changes.title')}</h2>
          <p>{t('privacy.changes.body')}</p>

          <h2>{t('privacy.contact.title')}</h2>
          <p>{t('privacy.contact.body')}</p>
        </div>

        <a href="/" className={styles.backLink}>
          &larr; {t('legal.back')}
        </a>
      </div>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import styles from './language-switcher.module.css';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.switcher} role="radiogroup" aria-label="Language">
      <button
        className={`${styles.option} ${i18n.language === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
        role="radio"
        aria-checked={i18n.language === 'en'}
      >
        {t('language.en')}
      </button>
      <button
        className={`${styles.option} ${i18n.language === 'pl' ? styles.active : ''}`}
        onClick={() => changeLanguage('pl')}
        role="radio"
        aria-checked={i18n.language === 'pl'}
      >
        {t('language.pl')}
      </button>
    </div>
  );
}

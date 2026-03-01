import { useTranslation } from 'react-i18next';
import type { MegamenuItem as MegamenuItemType } from './types';
import styles from './megamenu-item.module.css';

interface MegamenuItemProps {
  item: MegamenuItemType;
}

export function MegamenuItem({ item }: MegamenuItemProps) {
  const { t } = useTranslation();

  return (
    <a href={item.href} className={styles.item}>
      <span className={styles.label}>{t(item.labelKey)}</span>
      <span className={styles.description}>{t(item.descriptionKey)}</span>
    </a>
  );
}

import type { MegamenuItem as MegamenuItemType } from './types';
import { MegamenuItem } from './megamenu-item';
import styles from './megamenu-dropdown.module.css';

interface MegamenuDropdownProps {
  items: MegamenuItemType[];
  isOpen: boolean;
}

export function MegamenuDropdown({ items, isOpen }: MegamenuDropdownProps) {
  return (
    <div
      className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}
      role="menu"
    >
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.labelKey} role="menuitem">
            <MegamenuItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

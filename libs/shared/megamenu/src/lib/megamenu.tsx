import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { MegamenuConfig } from './types';
import { MegamenuDropdown } from './megamenu-dropdown';
import { LanguageSwitcher } from './language-switcher';
import styles from './megamenu.module.css';

interface MegamenuProps {
  config: MegamenuConfig;
}

export function Megamenu({ config }: MegamenuProps) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleMouseEnter = useCallback((index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 150);
  }, []);

  const handleClick = useCallback(
    (index: number) => {
      setOpenIndex((prev) => (prev === index ? null : index));
    },
    []
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={styles.nav} ref={navRef}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="/grow.svg" alt="" className={styles.logoIcon} />
          <span><span className={styles.logoTextSecondary}>Grow</span>Group</span>
        </a>

        <ul className={styles.categories}>
          {config.categories.map((category, index) => (
            <li
              key={category.labelKey}
              className={styles.categoryWrapper}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={styles.categoryButton}
                onClick={() => handleClick(index)}
                aria-expanded={openIndex === index}
                aria-haspopup="true"
              >
                {t(category.labelKey)}
              </button>
              <MegamenuDropdown
                items={category.items}
                isOpen={openIndex === index}
              />
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

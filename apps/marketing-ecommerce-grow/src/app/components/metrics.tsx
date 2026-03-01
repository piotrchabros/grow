import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './metrics.module.css';

const metricKeys = ['roas', 'aov', 'conversion', 'ltv', 'cac'] as const;

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(parseFloat((value * eased).toFixed(1)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}

export function Metrics() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.header}>
            <span className={styles.sectionLabel}>{t('metrics.label')}</span>
            <h2 className={styles.sectionTitle}>{t('metrics.title')}</h2>
          </div>
        </FadeIn>
        <div className={styles.grid}>
          {metricKeys.map((key, i) => (
            <FadeIn key={key} delay={i * 0.1}>
              <div className={styles.card}>
                <span className={styles.value}>
                  <AnimatedNumber value={parseFloat(t(`metrics.${key}.value`))} />
                  <span className={styles.suffix}>{t(`metrics.${key}.suffix`)}</span>
                </span>
                <span className={styles.label}>{t(`metrics.${key}.label`)}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

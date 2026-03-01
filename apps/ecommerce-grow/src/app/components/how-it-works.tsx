import { useTranslation } from 'react-i18next';
import { FadeIn } from './fade-in';
import styles from './how-it-works.module.css';

const steps = ['step1', 'step2', 'step3', 'step4'] as const;

export function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.header}>
            <span className={styles.sectionLabel}>{t('howItWorks.label')}</span>
            <h2 className={styles.sectionTitle}>{t('howItWorks.title')}</h2>
          </div>
        </FadeIn>
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <FadeIn key={step} delay={i * 0.15}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={styles.stepTitle}>
                  {t(`howItWorks.${step}.title`)}
                </h3>
                <p className={styles.stepDescription}>
                  {t(`howItWorks.${step}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

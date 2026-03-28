import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import styles from './CaseStudies.module.css';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=800"
];

const CaseStudies = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const elts = elementsRef.current;
    
    gsap.fromTo(elts,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [t]);

  return (
    <div className={styles.caseContainer} ref={containerRef}>
      
      {/* Case Studies Section */}
      <div className={styles.header} ref={el => elementsRef.current[0] = el}>
        <h2 className={styles.title}>
          {t.caseStudies.title} <span className="gradient-text">{t.caseStudies.highlight}</span>
        </h2>
        <p className={styles.subtitle}>
          {t.caseStudies.subtitle}
        </p>
      </div>

      <div className={styles.caseGrid}>
        {t.caseStudies.cases.map((item, idx) => (
          <div 
            key={idx} 
            className={`${styles.caseCard} glass-morphism`}
            ref={el => elementsRef.current[1 + idx] = el}
          >
            <div className={styles.caseImageWrapper}>
              <img src={IMAGES[idx]} alt={item.company} className={styles.caseImage} />
            </div>
            <div className={styles.caseContent}>
              <div className={styles.companyName}>{item.company}</div>
              <h3 className={styles.caseTitle}>{item.title}</h3>
              <div className={styles.caseMeta}>
                <div className={styles.author}>{item.author} <span className={styles.role}>— {item.role}</span></div>
              </div>
              <a href="#" className={styles.readMore}>
                {t.caseStudies.readMore} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Feedback Section */}
      <div className={styles.feedbackSection} ref={el => elementsRef.current[t.caseStudies.cases.length + 1] = el}>
        <div className={styles.feedbackHeader}>
          <MessageSquareQuote size={32} className={styles.feedbackIcon} />
          <h3>{t.caseStudies.feedbackTitle}</h3>
        </div>
        
        <div className={styles.feedbackMarquee}>
          <div className={styles.feedbackMarqueeContent}>
            {t.caseStudies.feedbacks.map((fb, idx) => (
              <div key={idx} className={styles.feedbackCard}>
                <p className={styles.quote}>"{fb.quote}"</p>
                <div className={styles.fbAuthor}>
                  <strong>{fb.author}</strong>
                  <span>{fb.company}</span>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite scroll loop */}
            {t.caseStudies.feedbacks.map((fb, idx) => (
              <div key={`dup-${idx}`} className={styles.feedbackCard}>
                <p className={styles.quote}>"{fb.quote}"</p>
                <div className={styles.fbAuthor}>
                  <strong>{fb.author}</strong>
                  <span>{fb.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CaseStudies;

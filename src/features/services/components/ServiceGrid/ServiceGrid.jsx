import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Globe, Megaphone, Smartphone, Settings } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import styles from './ServiceGrid.module.css';

gsap.registerPlugin(ScrollTrigger);

const ICONS = [
  <Palette size={32} />,
  <Code size={32} />,
  <Globe size={32} />,
  <Megaphone size={32} />,
  <Smartphone size={32} />,
  <Settings size={32} />,
];

const ServiceGrid = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    
    gsap.fromTo(cards, 
      { y: 50, opacity: 0, scale: 0.98 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1, 
        stagger: 0.15, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [t]);

  return (
    <div className={styles.services} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{t.services.title} <span className="gradient-text">{t.services.highlight}</span></h2>
        <p className={styles.sectionSubtext}>{t.services.subtitle}</p>
      </div>

      <div className={styles.servicesGrid}>
        {t.services.items.map((service, index) => (
          <div 
            key={index} 
            className={`${styles.serviceCard} glass-morphism`}
            ref={el => cardsRef.current[index] = el}
          >
            <div className={styles.serviceIcon}>{ICONS[index]}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;

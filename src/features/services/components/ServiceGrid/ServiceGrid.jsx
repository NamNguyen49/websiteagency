import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Globe, Megaphone, Smartphone, Settings } from 'lucide-react';
import styles from './ServiceGrid.module.css';

gsap.registerPlugin(ScrollTrigger);

const ServiceGrid = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      id: 1,
      title: 'Global Branding',
      description: 'Engineering visual identities that resonate across global markets and establish corporate authority.',
      icon: <Palette size={32} />
    },
    {
      id: 2,
      title: 'Enterprise Architecture',
      description: 'Building mission-critical web applications with distributed systems and real-time reliability.',
      icon: <Code size={32} />
    },
    {
      id: 3,
      title: 'SEO Ecosystems',
      description: 'Developing comprehensive organic growth frameworks that dominate search engine results.',
      icon: <Globe size={32} />
    },
    {
      id: 4,
      title: 'Performance Marketing',
      description: 'Data-driven demand generation for industrial and technology brands scaling globally.',
      icon: <Megaphone size={32} />
    },
    {
      id: 5,
      title: 'Mobile Ecosystems',
      description: 'Seamless cross-platform experiences synchronized with cloud-native backends.',
      icon: <Smartphone size={32} />
    },
    {
      id: 6,
      title: 'Tech Operations',
      description: 'Continuous maintenance and infrastructure scaling for SVS Corp partners.',
      icon: <Settings size={32} />
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
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
  }, []);

  return (
    <div className={styles.services} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Strategic Digital <span className="gradient-text">Capability</span></h2>
        <p className={styles.sectionSubtext}>We solve complex business challenges with world-class engineering and visionary design.</p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`${styles.serviceCard} glass-morphism`}
            ref={el => cardsRef.current[index] = el}
          >
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;

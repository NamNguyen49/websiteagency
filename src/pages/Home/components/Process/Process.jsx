import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import styles from './Process.module.css';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  const steps = [
    { num: '01', title: 'Discovery & Blueprint', text: 'Deep architectural analysis and strategic planning mapping every touchpoint of your digital ecosystem.' },
    { num: '02', title: 'UI/UX Engineering', text: 'Crafting high-conversion, award-winning interfaces designed for maximum user retention.' },
    { num: '03', title: 'Fullstack Development', text: 'Deploying robust, scalable codebases utilizing modern, future-proof technologies.' },
    { num: '04', title: 'Testing & Launch', text: 'Rigorous QA and seamless deployment protocols guaranteeing a flawless go-live.' }
  ];

  useEffect(() => {
    const elts = elementsRef.current;
    
    gsap.fromTo(elts,
      { y: 50, opacity: 0 },
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
  }, []);

  return (
    <div className={styles.processContainer} ref={containerRef}>
      <div className={styles.processHeader} ref={el => elementsRef.current[0] = el}>
        <h2 className={styles.title}>The Delivery <span className="gradient-text">Matrix</span></h2>
        <p className={styles.subtitle}>Our systematic approach to engineering world-class digital products.</p>
      </div>

      <div className={styles.stepsWrapper}>
        {steps.map((step, i) => (
          <div 
            key={i} 
            className={styles.step}
            ref={el => elementsRef.current[i + 1] = el}
          >
            <div className={styles.stepNumber}>{step.num}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
            {i !== steps.length - 1 && (
              <div className={styles.stepConnector}>
                <ArrowRight className={styles.connectorIcon} size={24} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;

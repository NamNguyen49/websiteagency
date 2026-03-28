import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Layout, Activity, Code2 } from 'lucide-react';
import styles from './TechShowcase.module.css';

gsap.registerPlugin(ScrollTrigger);

const TechShowcase = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

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
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className={styles.showcaseContainer} ref={containerRef}>
      <div className={styles.header} ref={el => elementsRef.current[0] = el}>
        <h2 className={styles.title}>
          Code when you need it, <span className="gradient-text">UI when you don't</span>
        </h2>
        <p className={styles.subtitle}>
          Other agencies limit you to templates or unmaintainable custom code. With SVS Corp, you get the best of both worlds.
        </p>
      </div>

      <div className={styles.bentoGrid}>
        <div 
          className={`${styles.bentoItem} ${styles.itemLarge} glass-morphism`}
          ref={el => elementsRef.current[1] = el}
        >
          <div className={styles.iconWrapper}><Terminal size={24} /></div>
          <h3>Native Engineering</h3>
          <p>Write robust TypeScript, Python, or Go exactly where complex business logic demands it.</p>
          <div className={styles.codeSnippet}>
            <pre>
              <code>
{`const accelerate = async () => {
  await scaleInfrastructure({
    autoScale: true,
    region: 'global'
  });
};`}
              </code>
            </pre>
          </div>
        </div>

        <div 
          className={`${styles.bentoItem} glass-morphism`}
          ref={el => elementsRef.current[2] = el}
        >
          <div className={styles.iconWrapper}><Layout size={24} /></div>
          <h3>Stunning Interfaces</h3>
          <p>See the inputs and outputs right next to your configurations. High-end visual fidelity on every screen.</p>
        </div>

        <div 
          className={`${styles.bentoItem} glass-morphism`}
          ref={el => elementsRef.current[3] = el}
        >
          <div className={styles.iconWrapper}><Activity size={24} /></div>
          <h3>Real-time Testing</h3>
          <p>Test complex workflows with live environments to improve accuracy before your customers experience it.</p>
        </div>

        <div 
          className={`${styles.bentoItem} ${styles.itemWide} glass-morphism`}
          ref={el => elementsRef.current[4] = el}
        >
          <div className={styles.iconWrapper}><Code2 size={24} /></div>
          <div className={styles.wideContent}>
            <div>
              <h3>Move fast. Break nothing.</h3>
              <ul className={styles.featureList}>
                <li>Re-run single modules, not your entire system</li>
                <li>Evaluate dynamically to optimize performance</li>
                <li>Avoid endless debugging with centralized logs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechShowcase;

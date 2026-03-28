import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Zap, ShieldCheck, RefreshCw, GitBranch, Layers } from 'lucide-react';
import styles from './TechShowcase.module.css';

gsap.registerPlugin(ScrollTrigger);

const TechShowcase = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const elts = elementsRef.current.filter(Boolean);
    gsap.fromTo(elts,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const tags = [
    { icon: <Zap size={20} />, label: 'Lightning performance' },
    { icon: <ShieldCheck size={20} />, label: 'Security by default' },
    { icon: <RefreshCw size={20} />, label: 'Zero-downtime deploys' },
    { icon: <GitBranch size={20} />, label: 'Git-based workflows' },
    { icon: <Layers size={20} />, label: 'Multi-stack support' },
  ];

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

      {/* Row 1: Code card (left) + Feature list (right) */}
      <div className={styles.bentoRow} ref={el => elementsRef.current[1] = el}>

        {/* Left — Code terminal card */}
        <div className={`${styles.codeCard} glass-morphism`}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}><Terminal size={20} /></div>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.dotRed}`}></span>
              <span className={`${styles.dot} ${styles.dotYellow}`}></span>
              <span className={`${styles.dot} ${styles.dotGreen}`}></span>
            </div>
          </div>
          <h3 className={styles.cardTitle}>Native Engineering</h3>
          <p className={styles.cardDesc}>Write robust TypeScript, Python, or Go exactly where complex business logic demands it.</p>
          <div className={styles.terminalBlock}>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmd}> svs deploy --region global --auto-scale</span>
            </div>
            <div className={styles.terminalOutput}>
              <span className={styles.ok}>✔</span> Building production bundle...
            </div>
            <div className={styles.terminalOutput}>
              <span className={styles.ok}>✔</span> Spinning up 12 edge nodes...
            </div>
            <div className={styles.terminalOutput}>
              <span className={styles.ok}>✔</span> Deploy complete in <span className={styles.highlight}>1.4s</span>
            </div>
            <div className={styles.codeBlock}>
              <pre><code>{`const deploy = async () => {
  await scaleInfra({
    autoScale: true,
    region: 'global',
    redundancy: 3,
  });
};`}</code></pre>
            </div>
          </div>
        </div>

        {/* Right — three feature cards stacked */}
        <div className={styles.featureStack}>
          <div className={`${styles.featureCard} glass-morphism`} ref={el => elementsRef.current[2] = el}>
            <div className={styles.featureTop}>
              <div className={styles.featureNumber}>01</div>
              <h4>Move fast. Break nothing.</h4>
            </div>
            <p>Re-run single modules, replay real data, evaluate AI accuracy — without touching your entire pipeline.</p>
          </div>

          <div className={`${styles.featureCard} glass-morphism`} ref={el => elementsRef.current[3] = el}>
            <div className={styles.featureTop}>
              <div className={styles.featureNumber}>02</div>
              <h4>Real-time Visibility</h4>
            </div>
            <p>See inputs, outputs, and execution steps side-by-side. No more black-box debugging or unnecessary context switches.</p>
          </div>

          <div className={`${styles.featureCard} glass-morphism`} ref={el => elementsRef.current[4] = el}>
            <div className={styles.featureTop}>
              <div className={styles.featureNumber}>03</div>
              <h4>Stunning Interfaces</h4>
            </div>
            <p>High-fidelity UI/UX engineered for maximum retention. Every component pixel-perfect, every interaction delightful.</p>
          </div>
        </div>
      </div>

      {/* Row 2: capability tags */}
      <div className={styles.tagsRow} ref={el => elementsRef.current[5] = el}>
        {tags.map((tag, i) => (
          <div key={i} className={`${styles.tagPill} glass-morphism`}>
            <span className={styles.tagIcon}>{tag.icon}</span>
            {tag.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechShowcase;


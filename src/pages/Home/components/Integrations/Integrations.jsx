import React from 'react';
import { Database, Cloud, Cpu, Server, Globe, Box, Shield, Zap, Layers, Activity } from 'lucide-react';
import styles from './Integrations.module.css';

const tags = [
  { icon: <Database />, name: "PostgreSQL" },
  { icon: <Cloud />, name: "AWS" },
  { icon: <Cpu />, name: "OpenAI" },
  { icon: <Server />, name: "Docker" },
  { icon: <Globe />, name: "Next.js" },
  { icon: <Box />, name: "Kubernetes" },
  { icon: <Shield />, name: "Cloudflare" },
  { icon: <Zap />, name: "Redis" },
  { icon: <Layers />, name: "Figma" },
  { icon: <Activity />, name: "Datadog" }
];

const Integrations = () => {
  return (
    <div className={styles.integrationsContainer}>
      <h2 className={styles.sectionTitle}>
        Plug into your own data & <span className="gradient-text">over 500 integrations</span>
      </h2>
      <p className={styles.subtitle}>
        Use pre-built modules for common enterprise apps. Custom API connections for everything else.
      </p>
      
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {tags.map((tag, idx) => (
            <div key={idx} className={`${styles.tag} glass-morphism`}>
              <span className={styles.icon}>{tag.icon}</span>
              {tag.name}
            </div>
          ))}
          {/* Duplicate for seamless infinite scroll */}
          {tags.map((tag, idx) => (
            <div key={`dup-${idx}`} className={`${styles.tag} glass-morphism`}>
              <span className={styles.icon}>{tag.icon}</span>
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;

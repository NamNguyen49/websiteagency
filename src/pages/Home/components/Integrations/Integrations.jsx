import React from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import styles from './Integrations.module.css';

const row1 = [
  { name: "PostgreSQL",  logo: "/logos/postgresql.svg" },
  { name: "AWS",         logo: "/logos/aws.svg" },
  { name: "OpenAI",      logo: "/logos/openai.svg" },
  { name: "Docker",      logo: "/logos/docker.svg" },
  { name: "Next.js",     logo: "/logos/nextjs.svg" },
  { name: "Kubernetes",  logo: "/logos/kubernetes.svg" },
  { name: "Cloudflare",  logo: "/logos/cloudflare.svg" },
  { name: "Redis",       logo: "/logos/redis.svg" },
  { name: "Figma",       logo: "/logos/figma.svg" },
  { name: "Vercel",      logo: "/logos/vercel.svg" },
];

const row2 = [
  { name: "MongoDB",     logo: "/logos/mongodb.svg" },
  { name: "Stripe",      logo: "/logos/stripe.svg" },
  { name: "GitHub",      logo: "/logos/github.svg" },
  { name: "TypeScript",  logo: "/logos/typescript.svg" },
  { name: "GraphQL",     logo: "/logos/graphql.svg" },
  { name: "Terraform",   logo: "/logos/terraform.svg" },
  { name: "Datadog",     logo: "/logos/datadog.svg" },
  { name: "Supabase",    logo: "/logos/supabase.svg" },
  { name: "Tailwind",    logo: "/logos/tailwind.svg" },
  { name: "React",       logo: "/logos/react.svg" },
];

const Tag = ({ item }) => (
  <div className={`${styles.tag} glass-morphism`}>
    <img src={item.logo} alt={item.name} className={styles.logo} />
    <span>{item.name}</span>
  </div>
);

const Integrations = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.integrationsContainer}>
      <h2 className={styles.sectionTitle}>
        {t.integrations.title} <span className="gradient-text">{t.integrations.highlight}</span>
      </h2>
      <p className={styles.subtitle}>{t.integrations.subtitle}</p>

      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {row1.map((item, i) => <Tag key={i} item={item} />)}
          {row1.map((item, i) => <Tag key={`d1-${i}`} item={item} />)}
        </div>
      </div>

      <div className={`${styles.marquee} ${styles.marqueeReverse}`}>
        <div className={`${styles.marqueeContent} ${styles.marqueeContentReverse}`}>
          {row2.map((item, i) => <Tag key={i} item={item} />)}
          {row2.map((item, i) => <Tag key={`d2-${i}`} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Integrations;

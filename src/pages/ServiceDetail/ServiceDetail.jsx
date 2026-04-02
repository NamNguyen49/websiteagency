import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Globe, Search, BarChart3, Zap, 
  ArrowRight, CheckCircle2, ChevronRight, 
  Rocket, SearchIcon, PenTool, Layout, 
  Cpu, MessageCircle, BarChart, Smartphone 
} from 'lucide-react';
import styles from './ServiceDetail.module.css';

// Key: slug from URL, mapping to its content and visual assets
const SERVICE_DATA = {
  'corporate-website': { icon: <Globe size={40} />, color: '#38bdf8' },
  'e-commerce-website': { icon: <Smartphone size={40} />, color: '#818cf8' },
  'landing-page': { icon: <Rocket size={40} />, color: '#fbbf24' },
  'uiux-design': { icon: <PenTool size={40} />, color: '#f472b6' },
  'overall-seo': { icon: <Search size={40} />, color: '#4ade80' },
  'keyword-seo': { icon: <SearchIcon size={40} />, color: '#2dd4bf' },
  'website-audit': { icon: <BarChart size={40} />, color: '#f97316' },
  'facebook-ads': { icon: <Globe size={40} />, color: '#3b82f6' },
  'google-ads': { icon: <Search size={40} />, color: '#4285f4' },
  'tiktok-ads': { icon: <BarChart3 size={40} />, color: '#ee1d52' },
  'automation-marketing': { icon: <Zap size={40} />, color: '#a855f7' },
  'ai-content': { icon: <Cpu size={40} />, color: '#6366f1' },
  'chatbot': { icon: <MessageCircle size={40} />, color: '#ec4899' },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { t, language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dynamic content logic based on language and serviceId
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
    
    // Check if the service exists in our data
    const meta = SERVICE_DATA[serviceId];
    if (!meta) {
      setLoading(false);
      return;
    }

    // In a real app, this might be a fetch or coming from LanguageContext
    // I will use a placeholder content structure that looks premium
    const serviceTitle = serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    setContent({
      title: serviceTitle,
      ...meta,
      subtitle: language === 'vi' ? 'Giải pháp dẫn đầu, đột phá hiệu quả kinh doanh' : 'Leading solutions for breakthrough business efficiency',
      description: language === 'vi' 
        ? `Chúng tôi cung cấp dịch vụ ${serviceTitle} chuyên nghiệp, giúp doanh nghiệp tối ưu hóa hiện diện trực tuyến và tăng trưởng vượt bậc.` 
        : `We provide professional ${serviceTitle} services, helping businesses optimize their online presence and grow exponentially.`,
      features: [
        { title: 'Modern Technology', desc: 'Cutting-edge tech stack for peak performance.' },
        { title: 'Expert Team', desc: 'Specialists with years of industry experience.' },
        { title: 'Data Driven', desc: 'Decisions based on real analytics and results.' },
        { title: '24/7 Support', desc: 'Always here to assist and optimize.' }
      ],
      process: [
        { step: '01', title: 'Research', desc: 'Deep dive into your market and competitors.' },
        { step: '02', title: 'Planning', desc: 'Strategic roadmap for success.' },
        { step: '03', title: 'Execution', desc: 'High-quality design and development.' },
        { step: '04', title: 'Optimization', desc: 'Continuous testing and improvement.' }
      ]
    });
    setLoading(false);
  }, [serviceId, language]);

  if (loading) return <div className={styles.loading}>Loading Service...</div>;
  if (!content) return (
    <div className={styles.notFound}>
      <h2>Service Not Found</h2>
      <Link to="/services">Back to Services</Link>
    </div>
  );

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.blob} style={{ background: content.color }}></div>
          <div className={styles.blob2}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>
            <span className={styles.badgeLine} style={{ background: content.color }}></span>
            {content.icon}
            <span>Agency Elite Service</span>
          </div>
          
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <p className={styles.subtitle}>{content.subtitle}</p>
          
          <div className={styles.ctaGroup}>
            <Link to="/contact" className={styles.primaryBtn} style={{ background: content.color }}>
              {language === 'vi' ? 'Nhận tư vấn ngay' : 'Get Free Consultation'}
              <ArrowRight size={18} />
            </Link>
            <a href="#process" className={styles.secondaryBtn}>
              {language === 'vi' ? 'Tìm hiểu quy trình' : 'Learn our process'}
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Benefits Section */}
      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statCard}>
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className={styles.statCard}>
            <h3>100+</h3>
            <p>Successful Projects</p>
          </div>
          <div className={styles.statCard}>
            <h3>24/7</h3>
            <p>Dedicated Support</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className={styles.descriptionSection}>
        <div className={`container ${styles.descGrid}`}>
          <div className={styles.descContent}>
            <h2>{language === 'vi' ? 'Về dịch vụ của chúng tôi' : 'About Our Service'}</h2>
            <p>{content.description}</p>
            
            <div className={styles.featureList}>
              {content.features.map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <CheckCircle2 className={styles.featureIcon} style={{ color: content.color }} />
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.descVisual}>
            <div className={styles.visualCard} style={{ borderColor: content.color }}>
              <div className={styles.visualIcon}>{content.icon}</div>
              <h3>Premium Strategy</h3>
              <p>Designed for HNT Solutions Partners</p>
              <div className={styles.visualProgress}>
                <div className={styles.progressInner} style={{ background: content.color, width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span>Workflow</span>
            <h2>{language === 'vi' ? 'Quy trình triển khai' : 'Our Working Process'}</h2>
          </div>
          
          <div className={styles.processGrid}>
            {content.process.map((p, i) => (
              <div key={i} className={styles.processCard}>
                <div className={styles.stepNum}>{p.step}</div>
                <div className={styles.processLine}></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className={styles.bottomCta}>
        <div className={`container ${styles.ctaBox}`}>
          <div className={styles.ctaBlur}></div>
          <h2>{language === 'vi' ? 'Sẵn sàng đột phá doanh số?' : 'Ready to Transform Your Business?'}</h2>
          <p>{language === 'vi' ? 'Hãy để đội ngũ chuyên gia của chúng tôi tư vấn chiến lược miễn phí cho bạn.' : 'Let our expert team provide a free strategic consultation for you.'}</p>
          <Link to="/contact" className={styles.ctaBtn}>
            {language === 'vi' ? 'Nhận tư vấn ngay' : 'Consult Now'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

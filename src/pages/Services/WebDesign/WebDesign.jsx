import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTheme } from "../../../contexts/ThemeContext";
import bgDark from "../../../assets/images/heroservice-dark.png";
import bgLight from "../../../assets/images/heroservice-light.png";
import {
  Globe,
  Layout,
  Smartphone,
  PenTool,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Check,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./WebDesign.module.css";

const VISUAL_META = {
  "corporate-website": { icon: <Globe size={48} />, color: "#38bdf8" },
  "e-commerce-website": { icon: <Smartphone size={48} />, color: "#818cf8" },
  "landing-page": { icon: <Layout size={48} />, color: "#fbbf24" },
  "uiux-design": { icon: <PenTool size={48} />, color: "#f472b6" },
};

const formatFeature = (text) => {
  const keywords = [
    ".com",
    "SEO",
    "SSL",
    "1",
    "2",
    "3",
    "5",
    "10",
    "3GB",
    "5GB",
    "7GB",
  ];

  // Sort keywords by length descending to match "10" before "1"
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);

  // Join keywords with | and escape dots for regex
  const regex = new RegExp(
    `(${sortedKeywords.map((kw) => kw.replace(".", "\\.")).join("|")})`,
    "gi",
  );
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isKeyword = keywords.some(
      (kw) => part.toLowerCase() === kw.toLowerCase(),
    );
    if (isKeyword) {
      return (
        <strong key={i} className={styles.pkgKeyword}>
          {part}
        </strong>
      );
    }
    return part;
  });
};

const WebDesign = () => {
  const { subId } = useParams();
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  // Initialize the ref to fix the ReferenceError
  const ref = useRef(null);
  const [openStep, setOpenStep] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (trackRef.current && carouselRef.current) {
      setCarouselWidth(
        trackRef.current.scrollWidth - carouselRef.current.offsetWidth,
      );
    }

    // Add resize listener
    const handleResize = () => {
      if (trackRef.current && carouselRef.current) {
        setCarouselWidth(
          trackRef.current.scrollWidth - carouselRef.current.offsetWidth,
        );
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [t.webDesignDetail.common.testimonials]);

  // Guard against missing key
  const effectiveSubId = VISUAL_META[subId] ? subId : "corporate-website";
  const currentSub = t.webDesignDetail[effectiveSubId];
  const meta = VISUAL_META[effectiveSubId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subId]);

  return (
    <div className={styles.container}>
      {/* Hero Section - Matching Screenshot 1 */}
      <section
        className={styles.heroAds}
        style={{
          backgroundImage: `url(${theme === "dark" ? bgDark : bgLight})`,
        }}
      >
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <h1>
              {t.webDesignDetail.common.labels.heroTitle} <br />
              <span className={styles.highlightRed}>
                {t.webDesignDetail.common.labels.heroTitleSub}
              </span>
            </h1>
            <p className={styles.descLine1}>
              {t.webDesignDetail.common.labels.heroDesc1}
            </p>
            <p className={styles.descLine2}>
              {t.webDesignDetail.common.labels.heroDesc2}
            </p>
            <button className={styles.heroBtnRed}>
              {t.webDesignDetail.common.labels.heroBtn}
            </button>
          </div>

          <div className={styles.heroVisual}>
            {/* Mockup layers temporarily removed per user request */}
          </div>
        </div>

        {/* Overlapping Stats Cards Wrapper - Positively positioned to overlap the section transition */}
        <div className={styles.statsWrapper}>
          <div className={`container ${styles.adsStatsGrid}`}>
            {t.webDesignDetail.common.stats?.map((stat, i) => (
              <div key={i} className={styles.adsStatCard}>
                <div className={styles.adsStatValue}>{stat.value}</div>
                <div className={styles.adsStatLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Circle Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.circleLayout}>
            {/* Center Hub with Nodes */}
            <div className={styles.centralCircleWrapper}>
              {/* 6 Connection Nodes */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`node-${i}`}
                  className={`${styles.nodeDot} ${styles[`node${i + 1}`]}`}
                ></div>
              ))}

              <div className={styles.centralCircle}>
                <h3>{t.webDesignDetail.common.labels.benefitsTitle}</h3>
              </div>
            </div>

            {/* Benefits Cards as Speech Bubbles */}
            {t.webDesignDetail.common.benefits?.map((benefit, i) => (
              <div
                key={i}
                className={`${styles.benefitBox} ${styles[`box${i + 1}`]}`}
              >
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merged Portfolio Showcase */}
      <section className={styles.portfolioShowcase}>
        <div className="container">
          <div className={styles.portfolioHeader}>
            <h2>
              {language === "vi" ? "Thiết Kế" : "Custom"}{" "}
              <span className={styles.highlightDark}>Website</span>{" "}
              {language === "vi" ? "Theo Yêu Cầu" : "Design"}
            </h2>
            <p>
              {language === "vi"
                ? "Các website được thiết kế chuyên nghiệp theo yêu cầu riêng của từng khách hàng"
                : "Websites professionally designed according to each customer's specific requirements"}
            </p>
          </div>

          <div className={styles.portfolioGridOuter}>
            {[
              {
                name:
                  language === "vi"
                    ? "Website SIMGo esim du lịch quốc tế"
                    : "SIMGo eSIM Travel Website",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name:
                  language === "vi"
                    ? "Website bán hàng của công ty DVS"
                    : "DVS Company E-commerce",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name:
                  language === "vi"
                    ? "Website Vinhomes Green City"
                    : "Vinhomes Green City Website",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name:
                  language === "vi"
                    ? "Website Điện tử điện lạnh"
                    : "Electronics & Refrigeration Store",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name: "Project Sample 5",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name: "Project Sample 6",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name: "Project Sample 7",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name: "Project Sample 8",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
            ].map((item, i) => (
              <div key={i} className={styles.sampleProjectCard}>
                <div
                  className={styles.sampleProjectThumb}
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className={styles.sampleProjectInfo}>
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.portfolioAction}>
            <button className={styles.finalQuoteBtn}>
              {t.webDesignDetail.common.labels.finalQuoteBtn}{" "}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={`container ${styles.processGrid}`}>
          {/* Left: Title + description + CTA */}
          <div className={styles.processLeft}>
            <p className={styles.processEyebrow}>
              {t.process.title} {t.process.highlight}
            </p>
            <h2 className={styles.processTitle}>
              {t.process.title}{" "}
              <span className={styles.processTitleHighlight}>
                {t.process.highlight}
              </span>
            </h2>
            <p className={styles.processDesc}>{t.process.subtitle}</p>
            <Link to="/contact" className={styles.processCta}>
              {t.nav.cta} <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Accordion steps */}
          <div className={styles.processRight}>
            {t.process.steps.map((step, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isOpen = openStep === i;
              return (
                <div
                  key={i}
                  className={`${styles.processItem} ${
                    isOpen ? styles.processItemOpen : ""
                  }`}
                  onClick={() => setOpenStep(isOpen ? null : i)}
                >
                  <div className={styles.processItemHeader}>
                    <span className={styles.processNum}>{num}</span>
                    <span className={styles.processPipe}>|</span>
                    <span className={styles.processStepTitle}>
                      {step.title}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`${styles.processChevron} ${
                        isOpen ? styles.processChevronOpen : ""
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className={styles.processItemBody}>{step.text}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Pricing Section - Updated to match User Design */}
      <section className={styles.packagesSection}>
        <div className={styles.pricingHeaderArea}>
          <div className="container">
            <h2 className={styles.pricingMainTitle}>
              {language === "vi" && "Bảng Giá Dịch Vụ"}
              {language === "en" && "Service Price List"}
              {language === "ja" && "サービス価格表"}
              {language === "zh" && "服务价格表"}
            </h2>
            <h3 className={styles.pricingSubTitle}>
              {language === "vi" && (
                <>
                  Thiết Kế{" "}
                  <span className={styles.highlightRed}>
                    Website tại HNT Solution
                  </span>
                </>
              )}
              {language === "en" && (
                <>
                  <span className={styles.highlightRed}>
                    HNT Solution Website
                  </span>{" "}
                  Design
                </>
              )}
              {language === "ja" && (
                <>
                  <span className={styles.highlightRed}>
                    HNT Solution ウェブサイト
                  </span>{" "}
                  設計
                </>
              )}
              {language === "zh" && (
                <>
                  <span className={styles.highlightRed}>HNT Solution 网页</span>{" "}
                  设计
                </>
              )}
            </h3>
          </div>
        </div>

        <div className={styles.pricingCardsArea}>
          <div className={`container ${styles.adsPackagesGrid}`}>
            {(t.webDesignDetail.common.packages || []).map((pkg, i) => (
              <div key={i} className={styles.pkgCard}>
                <div className={styles.pkgBadgeWrapper}>
                  <span className={styles.pkgBadge}>{pkg.name}</span>
                </div>
                <div className={styles.pkgPrice}>{pkg.price}</div>
                <p className={styles.pkgDesc}>{pkg.desc}</p>

                <ul className={styles.pkgFeatures}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <span className={styles.pkgDot}>•</span>
                      <span>{formatFeature(feat)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {t.webDesignDetail.common.labels.testimonialsTitle}
          </h2>

          <div
            className={styles.testimonialsCarouselContainer}
            ref={carouselRef}
          >
            <motion.div
              ref={trackRef}
              className={styles.testimonialsTrack}
              drag="x"
              dragConstraints={{ right: 0, left: -carouselWidth }}
              whileTap={{ cursor: "grabbing" }}
            >
              {(t.webDesignDetail.common.testimonials || []).map(
                (item, idx) => (
                  <div key={idx} className={styles.testimonialCard}>
                    <div className={styles.testimonialRating}>
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className={styles.star}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className={styles.testimonialContent}>
                      "{item.content}"
                    </p>
                    <div className={styles.testimonialAuthor}>
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className={styles.authorAvatar}
                      />
                      <div className={styles.authorInfo}>
                        <h4 className={styles.authorName}>{item.name}</h4>
                        <p className={styles.authorRole}>{item.role}</p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {t.webDesignDetail.common.labels.faqTitle}
          </h2>
          <div className={styles.faqList}>
            {(t.webDesignDetail.common.faq || []).map((item, idx) => (
              <details key={idx} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {item.question}
                  <span className={styles.faqIcon}>+</span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className={styles.serviceContactSection}>
        <div className="container">
          <div className={styles.contactFlex}>
            <div className={styles.contactTextSide}>
              <h2 className={styles.contactTitle}>
                {t.webDesignDetail.common.labels.contactTitle}
              </h2>
              <p className={styles.contactSubtitle}>
                {t.webDesignDetail.common.labels.contactSubtitle}
              </p>
            </div>

            <div className={styles.contactFormSide}>
              <form className={styles.serviceForm}>
                <div className={styles.formRow}>
                  <input
                    type="text"
                    placeholder={t.webDesignDetail.common.labels.formName}
                    className={styles.glassInput}
                  />
                  <input
                    type="text"
                    placeholder={t.webDesignDetail.common.labels.formPhone}
                    className={styles.glassInput}
                  />
                  <input
                    type="email"
                    placeholder={t.webDesignDetail.common.labels.formEmail}
                    className={styles.glassInput}
                  />
                </div>
                <textarea
                  placeholder={t.webDesignDetail.common.labels.formMessage}
                  className={styles.glassTextarea}
                ></textarea>

                <div className={styles.formBottom}>
                  <div className={styles.recaptchaContainer}>
                    <ReCAPTCHA
                      sitekey="6LddGqQsAAAAAFBmT6kpclbGVNjsr6ohDOUeYTzx"
                      theme={theme === "dark" ? "dark" : "light"}
                      onChange={(val) => console.log("Captcha value:", val)}
                    />
                  </div>
                  <button type="submit" className={styles.formSubmitBtn}>
                    {t.webDesignDetail.common.labels.formBtn}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;

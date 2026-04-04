import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTheme } from "../../../contexts/ThemeContext";
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Check,
  Zap,
  ShieldCheck,
  Layout,
  PenTool,
  ArrowUpRight,
  Clock,
  ThumbsUp,
  Tag,
  HeadphonesIcon,
  Award,
  Plus,
} from "lucide-react";
import styles from "./LandingPage.module.css";
import bgDark from "../../../assets/images/heroservice-dark.png";
import bgLight from "../../../assets/images/heroservice-light.png";
import partnerBadge from "../../../assets/images/partnerbadgeclickable.svg";

const LandingPage = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Vui lòng xác nhận Captcha");
      return;
    }
    setIsSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_laraj8c",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lto9tjp",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "WXnj6WhHjtm1mQRLF",
      );
      setStatus("success");
      formRef.current.reset();
      recaptchaRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current && carouselRef.current) {
        setCarouselWidth(
          trackRef.current.scrollWidth - carouselRef.current.offsetWidth,
        );
      }
    };
    setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url(${theme === "dark" ? bgDark : bgLight})`,
        }}
      >
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.landingPageDetail.heroTitleLine1} <br />
              <span className={styles.highlightText}>
                {t.landingPageDetail.heroTitleLine2}
              </span>
            </motion.h1>
            <motion.p
              className={styles.heroSubTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.landingPageDetail.heroSubtitle}
            </motion.p>
            <motion.p
              className={styles.heroDesc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.landingPageDetail.heroDesc}
            </motion.p>
            <motion.button
              className={styles.heroBtn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.landingPageDetail.heroBtn}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.partnerFlex}>
            <div className={styles.partnerText}>
              <h2>{t.landingPageDetail.statsTitle}</h2>
              <div className={styles.googleBadge}>
                <img src={partnerBadge} alt="Google Partner" />
              </div>
            </div>
            <div className={styles.statsGrid}>
              {(t.landingPageDetail.stats || []).map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <div className="container">
          <div className={styles.sectionHeader}>
            {language === "vi" ? (
              <h2>
                Landing Page của{" "}
                <span className={styles.highlightTextNormal}>HNT Solution</span>{" "}
                có gì nổi bật
              </h2>
            ) : (
              <h2>{t.landingPageDetail.highlightsTitle}</h2>
            )}
            <p className={styles.sectionSubDesc}>
              {t.landingPageDetail.highlightsSub}
            </p>
          </div>
          <div className={styles.highlightGrid}>
            {(t.landingPageDetail.highlights || []).map((item, i) => (
              <div key={i} className={styles.highlightCardAlt}>
                <div className={styles.highlightIconAlt}>
                  {i === 0 ? (
                    <Zap size={40} />
                  ) : i === 1 ? (
                    <PenTool size={40} />
                  ) : (
                    <Layout size={40} />
                  )}
                </div>
                <div className={styles.highlightInfoAlt}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Empathy Section */}
      <section className={styles.empathySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t.landingPageDetail.empathyTitle}</h2>
          </div>
          <div className={styles.empathyGrid}>
            {(t.landingPageDetail.empathyContent || []).map((item, idx) => (
              <div key={idx} className={styles.empathyCard}>
                <div className={styles.empathyTick}>
                  <CheckCircle2 size={30} />
                </div>
                <div className={styles.empathyText}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={styles.portfolio}>
        <div className="container">
          <div className={styles.sectionHeader}>
            {language === "vi" ? (
              <h2>
                Dự Án{" "}
                <span className={styles.highlightTextNormal}>Landing Page</span>{" "}
                Đã Triển Khai
              </h2>
            ) : (
              <h2>{t.landingPageDetail.portfolioTitle}</h2>
            )}
          </div>
          <div className={styles.portfolioGrid}>
            {[
              {
                name: "Landing Page SIMGo eSIM",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name: "Landing Page DVS Company",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name: "Landing Page Vinhomes Green",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh2.jpg",
              },
              {
                name: "Landing Page Điện Máy Xanh",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name: "Landing Page Vận Tải Quốc Tế",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh2.jpg",
              },
              {
                name: "Landing Page Spa Chăm Sóc Da",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
              {
                name: "Landing Page Nội Thất Minimal",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh2.jpg",
              },
              {
                name: "Landing Page Fitness Center",
                img: "https://adsdigi.com/wp-content/uploads/2025/09/kh1.jpg",
              },
            ].map((item, i) => (
              <div key={i} className={styles.portfolioCard}>
                <div
                  className={styles.portfolioThumb}
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className={styles.portfolioInfo}>
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.portfolioAction}>
            <button className={styles.viewMoreBtn}>
              {t.landingPageDetail.portfolioViewMore} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Us circles placeholder */}
      <section className={styles.whyUs}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t.landingPageDetail.whyUsTitle}</h2>
          </div>
          <div className={styles.whyGrid}>
            {(t.landingPageDetail.whyUsList || []).map((item, idx) => (
              <div key={idx} className={styles.whyItem}>
                <div className={styles.whyIconWrapper}>
                  {idx === 0 ? (
                    <Zap size={24} />
                  ) : idx === 1 || idx === 4 ? (
                    <ShieldCheck size={24} />
                  ) : idx === 2 ? (
                    <Layout size={24} />
                  ) : idx === 3 ? (
                    <Zap size={24} />
                  ) : (
                    <HeadphonesIcon size={24} />
                  )}
                </div>
                <div className={styles.whyTextInfo}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <div className="container">
          <div className={styles.sectionHeader}>
            {language === "vi" ? (
              <h2>
                Bảng Giá Dịch Vụ Thiết Kế{" "}
                <span className={styles.highlightTextNormal}>Landing Page</span>
              </h2>
            ) : (
              <h2>{t.landingPageDetail.pricingTitle}</h2>
            )}
          </div>
          <div className={styles.pricingGrid}>
            {(t.landingPageDetail.pricingPackages || []).map((pkg, i) => (
              <div
                key={i}
                className={`${styles.priceCard} ${pkg.isPopular ? styles.priceCardPopular : ""}`}
              >
                {pkg.isPopular && (
                  <div className={styles.popularBadge}>Phổ biến</div>
                )}
                <div className={styles.pkgBadge}>{pkg.name}</div>
                <div className={styles.pkgPrice}>{pkg.price}</div>
                <p className={styles.pkgDesc}>{pkg.desc}</p>
                <ul className={styles.pkgFeatures}>
                  {pkg.features.map((feat, idx) => {
                    const parts = feat.split(/(hosting|1)/i);
                    return (
                      <li key={idx}>
                        <CheckCircle2 size={18} className={styles.checkIcon} />
                        <span>
                          {parts.map((part, pIdx) =>
                            /^(hosting|1)$/i.test(part) ? (
                              <strong
                                key={pIdx}
                                className={styles.highlightTextNormal}
                              >
                                {part}
                              </strong>
                            ) : (
                              part
                            ),
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className={
                    pkg.isPopular ? styles.pkgBtnPopular : styles.pkgBtnNormal
                  }
                >
                  {t.landingPageDetail.heroBtn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>
              {t.process.title} {t.process.highlight}
            </h2>
          </div>
          <div className={styles.processList}>
            {(t.process.steps || []).map((step, i) => (
              <div key={i} className={styles.processItem}>
                <div className={styles.processNum}>
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div className={styles.processTimeline}>
                  <div className={styles.processDot}></div>
                </div>
                <div className={styles.processContent}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t.landingPageDetail.testimonialsTitle}</h2>
          </div>
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
              {(t.landingPageDetail.testimonials || []).map((item, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} style={{ color: "#FFD700" }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p>"{item.content}"</p>
                  <div className={styles.author}>
                    <div className={styles.avatarPlaceholder}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t.landingPageDetail.faqTitle}</h2>
          </div>
          <div className={styles.faqList}>
            {(t.landingPageDetail.faqs || []).map((item, i) => (
              <details key={i} className={styles.faqItem}>
                <summary>
                  {item.question}
                  <Plus size={24} className={styles.faqPlus} />
                </summary>
                <div className={styles.faqAnswer}>{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Form */}
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
              <form
                className={styles.serviceForm}
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className={styles.formRow}>
                  <input
                    type="text"
                    name="user_name"
                    placeholder={t.webDesignDetail.common.labels.formName}
                    className={styles.glassInput}
                    required
                  />
                  <input
                    type="text"
                    name="user_phone"
                    placeholder={t.webDesignDetail.common.labels.formPhone}
                    className={styles.glassInput}
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder={t.webDesignDetail.common.labels.formEmail}
                    className={styles.glassInput}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder={t.webDesignDetail.common.labels.formMessage}
                  className={styles.glassTextarea}
                  required
                ></textarea>

                <div className={styles.formBottom}>
                  <div className={styles.recaptchaContainer}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeCHKQsAAAAABBtITNVPh-xLl9NEs0YF2z-ZucS"
                      theme={theme === "dark" ? "dark" : "light"}
                      onChange={(val) => console.log("Captcha value:", val)}
                    />
                  </div>
                  {status === "success" && (
                    <p className={styles.successMsg}>
                      {t.webDesignDetail.common.labels.formSuccess}
                    </p>
                  )}
                  {status === "error" && (
                    <p className={styles.errorMsg}>
                      {t.webDesignDetail.common.labels.formError}
                    </p>
                  )}
                  <button
                    type="submit"
                    className={styles.formSubmitBtn}
                    disabled={isSending}
                  >
                    {isSending
                      ? t.webDesignDetail.common.labels.formSending
                      : t.webDesignDetail.common.labels.formBtn}
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

export default LandingPage;

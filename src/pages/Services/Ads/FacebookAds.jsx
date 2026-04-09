import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTheme } from "../../../contexts/ThemeContext";
import {
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Zap,
  MessageSquare,
  Search,
  Layout,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import styles from "./FacebookAds.module.css";
import fbHeroImg from "../../../assets/images/quang-cao-facebook-banner-631x599-1.webp";
import step1Img from "../../../assets/images/Seminar-pana.png";
import step2Img from "../../../assets/images/Generating new leads-amico.png";
import step3Img from "../../../assets/images/Building hashtag-amico.png";
import sol1Img from "../../../assets/images/screenshot-2025-11-27-155552.png";
import sol2Img from "../../../assets/images/screenshot-2025-11-27-155941.png";
import sol3Img from "../../../assets/images/screenshot-1.png";
import sol4Img from "../../../assets/images/screenshot2.png";
import sol5Img from "../../../assets/images/screenshot-2025-11-27-155823-1.png";
import sol6Img from "../../../assets/images/screenshot-2025-11-27-160110.png";
import diagramImg from "../../../assets/images/frame-281.png";

const FacebookAds = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const adsData = t.adsDetail["facebook-ads"];

  // Solutions Slides from Translation
  const solutionsSlides = (adsData.solutions?.items || []).map((item, idx) => ({
    ...item,
    img: [sol1Img, sol2Img, sol3Img, sol4Img, sol5Img, sol6Img][idx],
  }));

  // Setup infinite slides: [Last, ...Originals, First]
  const infiniteSlides =
    solutionsSlides.length > 0
      ? [
          solutionsSlides[solutionsSlides.length - 1],
          ...solutionsSlides,
          solutionsSlides[0],
        ]
      : [];

  const [solSlide, setSolSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const timerRef = useRef(null);
  const dragStartX = useRef(null);

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert(
        language === "vi"
          ? "Vui lòng hoàn thành Captcha"
          : "Please complete the reCAPTCHA",
      );
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

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSolSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }, 8000);
  };

  const handleDragStart = (e) => {
    dragStartX.current =
      e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const endX =
      e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - dragStartX.current;
    if (diff < -60) {
      setSolSlide((prev) => prev + 1);
      setIsTransitioning(true);
      startTimer();
    } else if (diff > 60) {
      setSolSlide((prev) => prev - 1);
      setIsTransitioning(true);
      startTimer();
    }
    dragStartX.current = null;
  };

  const handleTransitionEnd = () => {
    if (solSlide >= infiniteSlides.length - 1) {
      setIsTransitioning(false);
      setSolSlide(1);
    }
    if (solSlide <= 0) {
      setIsTransitioning(false);
      setSolSlide(infiniteSlides.length - 2);
    }
  };

  useEffect(() => {
    if (solutionsSlides.length > 0) {
      startTimer();
    }
    return () => clearInterval(timerRef.current);
  }, [solutionsSlides.length]);

  if (!adsData || !adsData.hero) return null;

  const zigzagData = adsData.zigzag || [];
  const zigzagImgs = [step1Img, step2Img, step3Img];

  return (
    <div className={styles.container}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.heroBadge}>{adsData.hero.badge}</span>
              <h1 dangerouslySetInnerHTML={{ __html: adsData.hero.title }}></h1>
              <p className={styles.heroDesc}>{adsData.hero.desc}</p>
              <div className={styles.heroFeatureList}>
                {adsData.hero.features?.map((feat, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.heroFeature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <CheckCircle2 className={styles.checkIcon} size={20} />
                    <span>{feat}</span>
                  </motion.div>
                ))}
              </div>
              <div className={styles.heroActions}>
                <button className="btn-primary">
                  {adsData.hero.btn} <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.glowBackground}></div>
              <img
                src={fbHeroImg}
                alt="Facebook Ads"
                className={styles.mainImage}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. USP Intro Section */}
      <section className={styles.section} style={{ padding: "60px 0" }}>
        <div className="container">
          <div className={styles.centered}>
            <h2
              className={styles.sectionTitle}
              style={{ fontSize: "2.4rem" }}
              dangerouslySetInnerHTML={{ __html: adsData.usp.title }}
            ></h2>
          </div>
        </div>
      </section>

      {/* 3. Numbered Steps - Zigzag Layout */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="container">
          {zigzagData.map((step, i) => (
            <motion.div
              key={i}
              className={`${styles.zigzagRow} ${i % 2 !== 0 ? styles.zigzagReversed : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.zigzagImage}>
                <div className={styles.zigzagImgWrapper}>
                  <img src={zigzagImgs[i]} alt={step.title} />
                </div>
              </div>
              <div className={styles.zigzagContent}>
                <div className={styles.zigzagNum}>{step.num}</div>
                <h3 className={styles.zigzagTitle}>{step.title}</h3>
                <p className={styles.zigzagDesc}>{step.desc}</p>
                {step.bullets && (
                  <ul className={styles.zigzagBullets}>
                    {step.bullets.map((b, j) => (
                      <li key={j}>
                        <CheckCircle2 size={16} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Mid-page CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <motion.div
            className={styles.ctaBannerInner}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.ctaBannerText}>
              <p className={styles.ctaBannerLabel}>{adsData.ctaBanner.label}</p>
              <h2>{adsData.ctaBanner.title}</h2>
            </div>
            <div className={styles.ctaBannerActions}>
              <Link to="/contact" className={styles.ctaButton}>
                {adsData.ctaBanner.btn}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Facebook Solutions Showcase */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.solHeaderRow}>
            <div className={styles.solHeaderLeft}>
              <div className={styles.solIconWrap}>
                <Zap size={24} strokeWidth={2.5} />
              </div>
              <h2
                className={styles.solTitle}
                dangerouslySetInnerHTML={{ __html: adsData.solutions.title }}
              ></h2>
            </div>
            <div className={styles.solHeaderRight}>
              <p>{adsData.solutions.subtitle}</p>
            </div>
          </div>

          <div className={styles.solSliderContainer} ref={sliderRef}>
            <div
              className={styles.solSliderTrack}
              style={{
                transform: `translateX(-${solSlide * (100 / infiniteSlides.length)}%)`,
                width: `${infiniteSlides.length * 100}%`,
                transition: isTransitioning
                  ? "transform 0.8s ease-in-out"
                  : "none",
              }}
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
              onTransitionEnd={handleTransitionEnd}
            >
              {infiniteSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={styles.solSliderInner}
                  style={{ width: `${100 / infiniteSlides.length}%` }}
                >
                  <div className={styles.solSliderLeft}>
                    <img src={slide.img} alt={slide.title} draggable={false} />
                  </div>
                  <div
                    className={styles.solSliderRight}
                    style={{ background: "var(--accent-gradient)" }}
                  >
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                    <div className={styles.solSliderLine}></div>
                    <div className={styles.solSliderTags}>
                      {slide.tags.map((tag, tidx) => (
                        <span key={tidx} className={styles.solSliderTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centered} style={{ marginBottom: "48px" }}>
            <h2
              className={styles.sectionTitle}
              dangerouslySetInnerHTML={{ __html: adsData.process.title }}
            ></h2>
            <p style={{ color: "var(--text-secondary)" }}>
              {adsData.process.subtitle}
            </p>
          </div>
          <div className={styles.processGrid}>
            {adsData.process.steps.map((step, i) => {
              const icons = [
                <MessageSquare size={24} />,
                <Search size={24} />,
                <Layout size={24} />,
                <Zap size={24} />,
                <BarChart3 size={24} />,
                <CheckCircle2 size={24} />,
              ];
              return (
                <motion.div
                  key={i}
                  className={styles.processCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>{icons[i]}</div>
                    <span className={styles.stepLabel}>{step.step}</span>
                  </div>
                  <h4 className={styles.cardTitle}>{step.title}</h4>
                  <ul className={styles.cardList}>
                    {step.desc.map((d, idx) => (
                      <li key={idx}>
                        <div className={styles.bullet}></div>
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Pricing Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.pricingTitleWrap}>
            <h2
              className={styles.sectionTitle}
              dangerouslySetInnerHTML={{ __html: adsData.pricing.title }}
            ></h2>
            <div className={styles.pricingIcon}>
              <Zap size={32} />
            </div>
          </div>

          <div className={styles.pricingTableWrap}>
            <div className={styles.pricingTable}>
              {/* Header Row */}
              <div className={styles.pricingHeader}>
                {adsData.pricing.table.header.map((h, i) => (
                  <div key={i} className={styles.pricingHeaderCell}>
                    {h}
                  </div>
                ))}
              </div>
              {/* Data Row */}
              <div className={styles.pricingBody}>
                <div className={styles.pricingBodyCell}>
                  {adsData.pricing.table.fee}
                </div>
                {adsData.pricing.table.values.map((v, i) => (
                  <div key={i} className={styles.pricingBodyCell}>
                    {v}
                  </div>
                ))}
              </div>
            </div>
            <p className={styles.pricingNote}>{adsData.pricing.note}</p>
          </div>
        </div>
      </section>

      {/* 8. Funnel Diagram */}
      <section className={styles.diagramSection}>
        <div className="container">
          <div className={styles.diagramHeader}>
            <div className={styles.diagramHeaderLeft}>
              <p dangerouslySetInnerHTML={{ __html: adsData.diagram.left }}></p>
            </div>
            <div className={styles.diagramHeaderRight}>
              <h2
                className={styles.diagramTitle}
                dangerouslySetInnerHTML={{ __html: adsData.diagram.title }}
              ></h2>
            </div>
          </div>

          <div className={styles.diagramVisualWrap}>
            <motion.img
              src={diagramImg}
              alt="Facebook Ads Funnel"
              className={styles.diagramMainImage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
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

export default FacebookAds;

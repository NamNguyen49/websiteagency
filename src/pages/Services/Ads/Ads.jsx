import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTheme } from "../../../contexts/ThemeContext";
import {
  BarChart3,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  Users,
  Search,
  Zap,
  Layout,
  Layers,
  MessageSquare,
  PieChart,
} from "lucide-react";
import styles from "./Ads.module.css";
import fbHeroImg from "../../../assets/images/quang-cao-facebook-banner-631x599-1.webp";
import step1Img from "../../../assets/images/Seminar-pana.png";
import step2Img from "../../../assets/images/Generating new leads-amico.png";
import step3Img from "../../../assets/images/Building hashtag-amico.png";

const ADS_SUB = {
  "facebook-ads": {
    title: "Facebook Ads",
    icon: <BarChart3 size={48} />,
    color: "#38bdf8",
  },
  "google-ads": {
    title: "Google Ads",
    icon: <Target size={48} />,
    color: "#4285f4",
  },
  "tiktok-ads": {
    title: "TikTok Ads",
    icon: <TrendingUp size={48} />,
    color: "#000000",
  },
};

const solutionsSlides = [
  {
    title: "LƯỢT TƯƠNG TÁC",
    desc: "Tăng số tin nhắn, lượt xem video, lượt tương tác với bài viết, lượt thích Trang hoặc lượt phản hồi sự kiện.",
    img: "https://adsdigi.com/wp-content/uploads/2023/11/bao-gia-quang-cao-facebook-ads.png",
    tags: [
      "Messenger, Instagram, WhatsApp",
      "Lượt xem video",
      "Lượt tương tác bài viết",
      "Lượt chuyển đổi",
    ],
  },
  {
    title: "LƯU LƯỢNG TRUY CẬP WEBSITE",
    desc: "Chuyển mọi người tới một đích đến nào đó, chẳng hạn như trang web, ứng dụng hoặc sự kiện của bạn trên Facebook.",
    img: "https://adsdigi.com/wp-content/uploads/2023/11/dich-vu-quang-cao-facebook-ads.png",
    tags: [
      "Lượt click vào liên kết",
      "Lượt xem trang đích",
      "Messenger, Instagram, WhatsApp",
      "Cuộc gọi",
    ],
  },
  {
    title: "DOANH SỐ",
    desc: "Tìm những người có khả năng sẽ mua sản phẩm hoặc dịch vụ của bạn.",
    img: "https://adsdigi.com/wp-content/uploads/2023/11/bao-gia-quang-cao-facebook-ads.png",
    tags: [
      "Lượt chuyển đổi",
      "Doanh số theo hạng mục",
      "Messenger, Instagram, WhatsApp",
      "Cuộc gọi",
    ],
  },
  {
    title: "KHÁCH HÀNG TIỀM NĂNG",
    desc: "Tìm kiếm khách hàng tiềm năng thực hiện các hành động để lại thông tin liên hệ và cân nhắc đến sản phẩm của doanh nghiệp.",
    img: "https://adsdigi.com/wp-content/uploads/2023/11/dich-vu-quang-cao-facebook-ads.png",
    tags: [
      "Mẫu phản hồi tức thì",
      "Lượt chuyển đổi",
      "Messenger, Instagram",
      "Cuộc gọi",
    ],
  },
  {
    title: "ỨNG DỤNG",
    desc: "Thu hút những người dùng mới cài đặt và tiếp tục sử dụng ứng dụng của doanh nghiệp.",
    img: "https://adsdigi.com/wp-content/uploads/2023/11/bao-gia-quang-cao-facebook-ads.png",
    tags: ["Lượt cài đặt ứng dụng", "Sự kiện trong ứng dụng"],
  },
];

const Ads = () => {
  const { subId } = useParams();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const currentSubId = subId || "facebook-ads";
  const currentSub = ADS_SUB[currentSubId] || ADS_SUB["facebook-ads"];
  const [solSlide, setSolSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSubId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSolSlide((prev) => (prev + 1) % solutionsSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (currentSubId === "facebook-ads") {
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
                <span className={styles.heroBadge}>Dịch Vụ</span>
                <h1>
                  Quảng Cáo{" "}
                  <span className={styles.highlight}>Facebook Ads</span>
                </h1>
                <p className={styles.heroDesc}>
                  Chạy quảng cáo Facebook là giải pháp giúp bạn quảng bá thương
                  hiệu, giới thiệu sản phẩm / dịch vụ của mình đến đúng đối
                  tượng khách hàng tiềm năng một cách nhanh chóng và chính xác.
                </p>
                <div className={styles.heroFeatureList}>
                  {[
                    "Tiếp cận đúng đối tượng tiềm năng",
                    "Tăng doanh số bán hàng nhanh nhất",
                    "Tối ưu chi phí hiển thị, chi phí chuyển đổi",
                  ].map((feat, idx) => (
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
                    Nhận tư vấn ngay <ArrowRight size={20} />
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
              >
                Hãy Để <span className={styles.highlight}>Facebook</span> Kết
                Nối Sản Phẩm <br />
                Của Bạn Với Khách Hàng
              </h2>
            </div>
          </div>
        </section>

        {/* 3. Numbered Steps - Zigzag Layout */}
        <section className={styles.section} style={{ paddingTop: 0 }}>
          <div className="container">
            {[
              {
                num: "01.",
                title:
                  "Facebook vẫn đang là kênh Marketing hiệu quả bậc nhất để gia tăng doanh số",
                desc: "Mạng xã hội lớn nhất thế giới với hàng tỷ người dùng truy cập mỗi ngày. Đây là mỏ vàng để các doanh nghiệp tìm kiếm khách hàng.",
                img: step1Img,
                bullets: [
                  "Tiếp cận hàng triệu người dùng",
                  "Target chính xác đối tượng",
                ],
              },
              {
                num: "02.",
                title:
                  "Tập trung đúng đối tượng khách hàng mà bạn muốn nhắm tới",
                desc: "Dựa trên sở thích, hành vi và nhân khẩu học. Facebook cho phép quảng cáo hiển thị chính xác trước mặt những người có khả năng mua hàng cao nhất.",
                img: step2Img,
                reversed: true,
              },
              {
                num: "03.",
                title:
                  "Phễu khách hàng được xây dựng một cách chuẩn chỉnh, vững chắc",
                desc: "Không chỉ đơn thuần là chạy quảng cáo. Chúng tôi xây dựng hành trình khách hàng từ nhận diện thương hiệu đến hành động mua hàng.",
                img: step3Img,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className={`${styles.zigzagRow} ${step.reversed ? styles.zigzagReversed : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className={styles.zigzagImage}>
                  <div className={styles.zigzagImgWrapper}>
                    <img src={step.img} alt={step.title} />
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
                <p className={styles.ctaBannerLabel}>Đừng ngần ngại</p>
                <h2>Gọi ngay cho chúng tôi nếu bạn muốn gia tăng doanh số</h2>
              </div>
              <div className={styles.ctaBannerActions}>
                <Link to="/contact" className={styles.ctaButton}>
                  Đăng ký nhận tư vấn
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
                <h2 className={styles.solTitle}>
                  Giải Pháp <span className={styles.highlight}>Quảng Cáo</span>
                  <br />
                  <span className={styles.highlight}>Facebook</span> Đa Dạng
                </h2>
              </div>
              <div className={styles.solHeaderRight}>
                <p>
                  Nhưng bạn có đang gặp phải những vấn đề sau khiến doanh nghiệp
                  không khai thác hết được sức mạnh của Facebook?
                </p>
              </div>
            </div>

            <div className={styles.solSliderContainer}>
              <AnimatePresence mode="wait">
                <motion.div
                  className={styles.solSliderInner}
                  key={`slide-${solSlide}`}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className={styles.solSliderLeft}>
                    <img
                      src={solutionsSlides[solSlide].img}
                      alt={solutionsSlides[solSlide].title}
                    />
                  </div>

                  <div
                    className={styles.solSliderRight}
                    style={{ background: "var(--accent-gradient)" }}
                  >
                    <h3>{solutionsSlides[solSlide].title}</h3>
                    <p>{solutionsSlides[solSlide].desc}</p>
                    <div className={styles.solSliderLine}></div>

                    <div className={styles.solSliderTags}>
                      {solutionsSlides[solSlide].tags.map((tag, idx) => (
                        <span key={idx} className={styles.solSliderTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.centered} style={{ marginBottom: "48px" }}>
              <h2 className={styles.sectionTitle}>
                Quy Trình Quảng Cáo{" "}
                <span className={styles.highlight}>
                  Facebook Ads Tại HNT Solution
                </span>
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Luôn đặt mục tiêu hiệu quả lên hàng đầu bằng các tiêu chí cụ thể
                nhất.
              </p>
            </div>
            <div className={styles.processGrid}>
              {[
                {
                  step: "Bước 1",
                  title: "Tiếp nhận thông tin",
                  desc: [
                    "Phân tích sản phẩm, dịch vụ và đối thủ.",
                    "Tư vấn gói quảng cáo phù hợp với ngân sách.",
                  ],
                },
                {
                  step: "Bước 2",
                  title: "Phân tích & Lập kế hoạch",
                  desc: [
                    "Xác định đối tượng mục tiêu chính xác.",
                    "Lên kế hoạch ngân sách, thời gian triển khai.",
                  ],
                },
                {
                  step: "Bước 3",
                  title: "Lên Content & Landing",
                  desc: [
                    "Viết nội dung quảng cáo thu hút.",
                    "Thiết kế banner hình ảnh / video bắt mắt.",
                  ],
                },
                {
                  step: "Bước 4",
                  title: "Setup & Tracking",
                  desc: [
                    "Cài đặt chiến dịch trên Account Ads.",
                    "Gắn mã pixel, tracking đo lường hiệu quả.",
                  ],
                },
                {
                  step: "Bước 5",
                  title: "Tối ưu hoá & Báo cáo",
                  desc: [
                    "Theo dõi, tối ưu hoá mẫu quảng cáo hằng ngày.",
                    "Báo cáo minh bạch số liệu hằng ngày.",
                  ],
                },
                {
                  step: "Bước 6",
                  title: "Nghiệm thu & Duy trì",
                  desc: [
                    "Tổng hợp kết quả sau mỗi đợt chiến dịch.",
                    "Đề xuất phương án duy trì và mở rộng.",
                  ],
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className={styles.processCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className={styles.cardHeader}
                    style={{
                      color: "var(--accent-primary)",
                      fontWeight: "700",
                      marginBottom: "12px",
                    }}
                  >
                    <Target size={24} style={{ marginBottom: "8px" }} />
                    <div>{step.step}</div>
                  </div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "16px" }}>
                    {step.title}
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {step.desc.map((d, idx) => (
                      <li
                        key={idx}
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          display: "flex",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            minWidth: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "var(--accent-primary)",
                            marginTop: "8px",
                          }}
                        ></div>
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Pricing Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.centered} style={{ marginBottom: "48px" }}>
              <h2 className={styles.sectionTitle}>
                Gói Dịch Vụ Chạy Quảng Cáo{" "}
                <span className={styles.highlight}>
                  Facebook Ads HNT Solution
                </span>
              </h2>
            </div>
            <div
              className={styles.pricingGrid}
              style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              {[
                { name: "Gói quản lý cơ bản", price: "Thỏa thuận" },
                { name: "Gói doanh nghiệp", price: "Thỏa thuận" },
                { name: "Gói chuyên sâu", price: "Thỏa thuận" },
                { name: "Gói Tổng thể", price: "Thỏa thuận" },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={styles.pricingCard}
                  style={{ textAlign: "center", padding: "32px 20px" }}
                >
                  <div
                    style={{
                      background: "var(--accent-gradient)",
                      height: "4px",
                      width: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  ></div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "16px" }}>
                    {plan.name}
                  </h3>
                  <div className={styles.price} style={{ fontSize: "1.4rem" }}>
                    {plan.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Funnel Diagram */}
        <section className={styles.diagramSection}>
          <div className="container">
            <div className={styles.centered}>
              <h2
                className={styles.sectionTitle}
                style={{ marginBottom: "56px" }}
              >
                Luôn Hướng Đến{" "}
                <span className={styles.highlight}>Hiệu Quả Chuyển Đổi</span>{" "}
                Cuối Cùng
              </h2>
              <div className={styles.diagramContainer}>
                {[
                  { label: "Tiếp cận", color: "#f87171" },
                  { label: "Tương tác", color: "#fbbf24" },
                  { label: "Tối ưu", color: "#2dd4bf" },
                  { label: "Chuyển đổi", color: "#3b82f6" },
                  { label: "Doanh thu", color: "var(--accent-primary)" },
                ].map((node, i) => (
                  <React.Fragment key={i}>
                    <div
                      className={styles.diagramNode}
                      style={{ flex: 1, borderTop: `4px solid ${node.color}` }}
                    >
                      <h5>{node.label}</h5>
                    </div>
                    {i < 4 && (
                      <div className={styles.nodeArrow}>
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Contact Form Section */}
        <section className={styles.contactSection}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className={styles.sectionTitle}>
                Liên hệ với{" "}
                <span className={styles.highlight}>HNT Solution</span>
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Vui lòng để lại thông tin để được tư vấn sớm nhất
              </p>
            </div>
            <div
              className={styles.contactFormWrap}
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <input
                    type="text"
                    placeholder="Họ và tên *"
                    className={styles.formInput}
                  />
                  <input
                    type="text"
                    placeholder="Số điện thoại *"
                    className={styles.formInput}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.formInput}
                />
                <textarea
                  placeholder="Nội dung"
                  rows={4}
                  className={styles.formInput}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    padding: "16px 48px",
                    width: "fit-content",
                    margin: "0 auto",
                  }}
                >
                  Gửi yêu cầu
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Fallback for other sub-services (can be implemented similarly later)
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>COMING SOON</span>
            <h1>{currentSub.title} Redesign</h1>
            <p className={styles.heroDesc}>
              Chúng tôi đang hoàn thiện giao diện cho dịch vụ này.
            </p>
            <Link to="/services/ads/facebook-ads" className="btn-primary">
              Xem Facebook Ads Mẫu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ads;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CustomIcons } from "../../common/CustomIcons";
import { useTheme } from "../../../contexts/ThemeContext";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "Web Design", href: "/services" },
        { name: "Architecture", href: "/services" },
        { name: "SEO Strategy", href: "/services" },
        { name: "Mobile Apps", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About SVS", href: "/about" },
        { name: "Ecosystem", href: "/portfolio" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.logoGroup}>
              <img
                src={theme === "dark" ? "/logo.dark.png" : "/logo.light.png"}
                alt="SVS Corp Logo"
                className={`${styles.logoImage} ${theme === "dark" ? styles.logoDark : styles.logoLight}`}
              />
            </Link>
            <p className={styles.footerTagline}>
              Synvia Solutions Corp delivers mission-critical digital products
              that combine stunning design with industrial-grade performance.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <CustomIcons.Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <CustomIcons.Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <CustomIcons.Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <CustomIcons.Github size={20} />
              </a>
            </div>
          </div>

          <div className={styles.footerNav}>
            {footerLinks.map((group) => (
              <div key={group.title} className={styles.footerNavGroup}>
                <h4 className={styles.footerNavTitle}>{group.title}</h4>
                <ul className={styles.footerNavList}>
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className={styles.footerNavLink}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Synvia Solutions Corp. All rights reserved.
          </p>
          <div className={styles.footerStatus}>
            <span className={styles.statusDot}></span>
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

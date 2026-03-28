import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContext";
import { useLanguage } from "../../../contexts/LanguageContext";
import { CustomIcons } from "../../common/CustomIcons";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const { t } = useLanguage();

  const footerLinksData = [
    {
      title: t.footer.solutions.title,
      links: t.footer.solutions.items.map((name) => ({ name, href: "/services" })),
    },
    {
      title: t.footer.company.title,
      links: [
        { name: t.footer.company.items[0], href: "/about" },
        { name: t.footer.company.items[1], href: "/portfolio" },
        { name: t.footer.company.items[2], href: "/careers" },
        { name: t.footer.company.items[3], href: "/contact" },
      ],
    },
    {
      title: t.footer.legal.title,
      links: [
        { name: t.footer.legal.items[0], href: "/privacy" },
        { name: t.footer.legal.items[1], href: "/terms" },
        { name: t.footer.legal.items[2], href: "/cookies" },
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
              {t.footer.tagline}
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
            {footerLinksData.map((group) => (
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
            © {currentYear} Synvia Solutions Corp. {t.footer.copyright}
          </p>
          <div className={styles.footerStatus}>
            <span className={styles.statusDot}></span>
            {t.footer.status}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

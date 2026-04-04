import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Moon,
  Sun,
  ChevronDown,
  ChevronRight,
  Globe,
  Layers,
  Search,
  BarChart3,
  Zap,
} from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import { useLanguage } from "../../../contexts/LanguageContext";
import styles from "./Header.module.css";

const LANGUAGES = [
  { code: "en", label: "EN", flag: "🇺🇸", full: "English" },
  { code: "vi", label: "VI", flag: "🇻🇳", full: "Tiếng Việt" },
  { code: "ja", label: "JA", flag: "🇯🇵", full: "日本語" },
  { code: "zh", label: "ZH", flag: "🇨🇳", full: "中文" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services', 'caseStudy', 'pricing', 'blog'
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      id: "services",
      label: t.nav.services,
      type: "mega",
      groups: [
        {
          id: "web-design",
          title: t.nav.services_groups.web.title,
          icon: <Globe size={18} />,
          items: t.nav.services_groups.web.items,
          slugs: ["corporate-website", "landing-page"],

        },

        {
          id: "seo",
          title: t.nav.services_groups.seo.title,
          icon: <Search size={18} />,
          items: t.nav.services_groups.seo.items,
          slugs: ["overall-seo", "keyword-seo", "website-audit"],
        },
        {
          id: "ads",
          title: t.nav.services_groups.ads.title,
          icon: <BarChart3 size={18} />,
          items: t.nav.services_groups.ads.items,
          slugs: ["facebook-ads", "google-ads", "tiktok-ads"],
        },
        {
          id: "marketing-ai",
          title: t.nav.services_groups.advanced.title,
          icon: <Zap size={18} />,
          items: t.nav.services_groups.advanced.items,
          slugs: ["automation-marketing", "ai-content", "chatbot"],
        },
      ],
    },
    {
      id: "caseStudy",
      label: t.nav.caseStudy,
      type: "dropdown",
      items: t.nav.caseStudy_items,
    },
    {
      id: "pricing",
      label: t.nav.pricing,
      type: "dropdown",
      items: t.nav.pricing_items,
    },
    {
      id: "blog",
      label: t.nav.blog,
      type: "dropdown",
      items: t.nav.blog_items,
    },
    { id: "contact", label: t.nav.contact, href: "/contact", type: "link" },
  ];

  const currentLang =
    LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link
          to="/"
          className={styles.logoGroup}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img
            src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="HNT Solutions Logo"
            className={`${styles.logoImage} ${theme === "dark" ? styles.logoDark : styles.logoLight}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileActive : ""}`}
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              className={styles.navItemWrapper}
              onMouseEnter={() =>
                window.innerWidth > 1024 && setActiveDropdown(item.id)
              }
              onMouseLeave={() =>
                window.innerWidth > 1024 && setActiveDropdown(null)
              }
            >
              {item.type === "link" ? (
                <Link
                  to={item.href}
                  className={`${styles.navLink} ${location.pathname === item.href ? styles.active : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  className={`${styles.navLink} ${styles.hasDropdown}`}
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`${styles.dropdownIcon} ${activeDropdown === item.id ? styles.dropdownIconOpen : ""}`}
                  />
                </div>
              )}

              {/* Submenus Desktop */}
              {activeDropdown === item.id && item.type === "mega" && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuGrid}>
                    {item.groups.map((group, gIdx) => (
                      <div key={gIdx} className={styles.megaGroup}>
                        <h4 className={styles.groupTitle}>
                          {group.icon} {group.title}
                        </h4>
                        <div className={styles.groupItems}>
                          {group.items.map((subItem, sIdx) => {
                            const slug =
                              group.slugs?.[sIdx] ||
                              subItem
                                .toLowerCase()
                                .replace(/ & /g, "-")
                                .replace(/\s+/g, "-")
                                .replace(/[^\w-]/g, "");

                            return (
                              <Link
                                key={sIdx}
                                to={`/services/${group.id}/${slug}`}
                                className={styles.groupItem}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {subItem}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeDropdown === item.id && item.type === "dropdown" && (
                <div className={styles.simpleDropdown}>
                  {item.items.map((subItem, sIdx) => (
                    <Link
                      key={sIdx}
                      to={`/${item.id}#${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                      className={styles.dropdownOption}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subItem}
                      <ChevronRight
                        size={14}
                        className={styles.dropdownArrow}
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/contact"
            className={`btn-primary ${styles.headerCta} ${styles.mobileCta}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.cta} <ArrowUpRight size={16} />
          </Link>
        </nav>

        <div className={styles.headerActions}>
          {/* Language Switcher */}
          <div className={styles.langSwitcher} ref={langRef}>
            <button
              className={styles.langBtn}
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Select language"
            >
              <span className={styles.langFlag}>{currentLang.flag}</span>
              <span className={styles.langLabel}>{currentLang.label}</span>
              <ChevronDown
                size={14}
                className={`${styles.langChevron} ${isLangOpen ? styles.langChevronOpen : ""}`}
              />
            </button>

            {isLangOpen && (
              <div className={`${styles.langDropdown} `}>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    className={`${styles.langOption} ${language === lang.code ? styles.langOptionActive : ""}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span className={styles.langOptionFull}>{lang.full}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className={`btn-primary ${styles.headerCta} ${styles.desktopCta}`}
          >
            {t.nav.cta} <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

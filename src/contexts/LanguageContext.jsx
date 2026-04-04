import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      services: "Services",
      caseStudy: "Case Study",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      cta: "Consult Now",
      services_groups: {
        web: {
          title: "Website",
          items: ["Web Design", "Landing Page"],
        },

        seo: {
          title: "SEO",
          items: ["Overall SEO", "Keyword SEO", "Website Audit"],
        },
        ads: {
          title: "Ads",
          items: ["Facebook Ads", "Google Ads", "TikTok Ads"],
        },
        advanced: {
          title: "Marketing & AI",
          items: ["Automation Marketing", "AI Content", "Chatbot"],
        },
      },
      caseStudy_items: ["Website Projects", "SEO Results", "Ads Campaigns"],
      pricing_items: ["Web Design", "SEO", "Ads"],
      blog_items: [
        "Web Knowledge",
        "SEO Knowledge",
        "Digital Marketing",
        "Case Study",
        "AI & Automation",
      ],
    },
    landingPageDetail: {
      heroTitleLine1: "DESIGN",
      heroTitleLine2: "LANDING PAGE",
      heroSubtitle: "PROFESSIONAL - CONVERSION OPTIMIZED",
      heroDesc:
        "Enhance customer experience with professional Landing Pages. UI/UX standard design helps your business boost revenue.",
      heroBtn: "Get Consultation Now",
      statsTitle: "HNT Solution is proud to be a Google Partner in Vietnam",
      stats: [
        { value: "6+", label: "Years of Experience" },
        { value: "246+", label: "Trusted Clients" },
        { value: "+34%", label: "Conversion Rate" },
        { value: "1000+", label: "Successful Projects" },
      ],
      highlightsTitle: "What's outstanding about HNT Solution's Landing Page",
      highlightsSub:
        "Discover why our Landing Page service is trusted by customers.",
      highlights: [
        {
          title: "SEO & Speed Optimization",
          desc: "Ensure standard green scores on Google PageSpeed Insights, friendly on all devices.",
        },
        {
          title: "Hypnotic Copywriting",
          desc: "Experienced content marketing team creates top-notch sales content.",
        },
        {
          title: "UI/UX Optimization",
          desc: "Interface tailored to multi-dimensional customer personas, flawless smooth experience.",
        },
      ],
      empathyTitle: "We Put Ourselves In The Customer's Shoes",
      empathyContent: [
        {
          title: "Behavior Analysis",
          desc: "Track interaction flow to optimize every button and information form.",
        },
        {
          title: "Color Synchronization",
          desc: "Professional color systems following enterprise brand guidelines.",
        },
        {
          title: "Clear Messaging",
          desc: "Concise content, going straight to the core value delivered to users.",
        },
        {
          title: "Logical Layout",
          desc: "Purposeful information arrangement leading customers to purchase decisions.",
        },
      ],
      portfolioTitle: "Deployed Landing Page Projects",
      portfolioViewMore: "VIEW MORE",
      whyUsTitle: "Why Choose Us",
      whyUsList: [
        {
          title: "Google Partner",
          desc: "Official Google partner, ensuring credibility, support for ad optimization & measurement.",
        },
        {
          title: "Unlimited Access",
          desc: "Stable system, no worries about being locked when traffic is high.",
        },
        {
          title: "Built with WordPress",
          desc: "Easy to edit content, install marketing plugins, and upgrade to a full website.",
        },
        {
          title: "SEO & Fast Loading Speed",
          desc: "Smooth experience, saving advertising costs.",
        },
        {
          title: "High Security & Safety",
          desc: "Customer data is stored privately, independent of third parties.",
        },
        {
          title: "Long-term Support",
          desc: "The team is always ready to edit, upgrade, and handle issues quickly.",
        },
      ],
      pricingTitle: "Landing Page Design Price List",
      pricingPackages: [
        {
          name: "Basic",
          price: "1,500,000đ",
          desc: "Basic Landing Page design based on available templates",
          features: [
            "Free hosting for the first year",
            "Unlimited bandwidth",
            "Standard UI/UX interface",
            "Responsive design across devices",
            "1-year free warranty",
          ],
        },
        {
          name: "Medium",
          price: "2,500,000đ",
          desc: "Advanced Landing Page design based on available templates",
          features: [
            "Free hosting for the first year",
            "Unlimited bandwidth",
            "Standard UI/UX interface",
            "Responsive design across devices",
            "1-year free warranty",
            "Support setting up 1 Google Ads campaign",
          ],
          isPopular: true,
        },
        {
          name: "Premium",
          price: "From 3,500,000đ",
          desc: "Custom Landing Page design upon request",
          features: [
            "Free hosting for the first year",
            "Unlimited bandwidth",
            "Standard UI/UX interface",
            "Responsive design across devices",
            "1-year free warranty",
            "Support setting up 1 Google Ads campaign",
          ],
        },
      ],
      testimonialsTitle: "Customer Reviews",
      testimonials: [
        {
          name: "Phạm Văn A",
          role: "CEO ABC Corp",
          content:
            "Top-notch design quality, conversion rate increased by 40% compared to the old landing page.",
        },
        {
          name: "Trần Thị B",
          role: "Marketing Manager",
          content:
            "Extremely fast loading speed, punctual delivery team, professional working style.",
        },
        {
          name: "Hoàng C",
          role: "Founder E-com",
          content:
            "Very impressive and eye-catching color coordination, content accurately hits the target audience's pain points.",
        },
        {
          name: "Lê Đình D",
          role: "Director of Sales",
          content:
            "Well-optimized registration form, customer info streams to the system quickly, significantly reduced drop-off rate.",
        },
        {
          name: "Mai Tuyết Nhung",
          role: "Spa Owner",
          content:
            "Incredibly smooth interface, colors perfectly match brand identity. My Spa has seen a surge in orders this summer thanks to the professional Landing Page.",
        },
        {
          name: "Nguyễn V",
          role: "Real Estate Expert",
          content:
            "Fast image preload, very convenient for clients to click in and view the project's full legal details. The landing page truly delivers strong results.",
        },
      ],
      faqTitle: "FAQ - Frequently Asked Questions",
      faqs: [
        {
          question: "How long does it take to complete the landing page?",
          answer:
            "Completion time depends on requirements, usually 3 to 5 working days.",
        },
        {
          question: "Can I edit the content myself after handover?",
          answer:
            "Yes, HNT Solution will hand over the source code or CMS so you can easily change the content yourself.",
        },
        {
          question: "Can our landing page be expanded into a complete website?",
          answer:
            "Yes, the system has an open structure to easily upgrade to a static or dynamic website with full features.",
        },
        {
          question: "Is the page guaranteed to load quickly?",
          answer:
            "Absolutely. We follow best practices for optimizing images, CSS, and source code to ensure greenish Google Speed scores.",
        },
        {
          question: "Is the landing page SEO optimized?",
          answer:
            "Yes, every Landing Page project from our Agency comes with on-page SEO optimization: H1-H6 tags, Meta data, clear Sitemap.",
        },
      ],
    },
    seoDetail: {
      hero: {
        title: "OVERALL SEO",
        highlight: "DOMINATE GOOGLE",
        desc: "Breakthrough SEO solutions help your business website achieve high, sustainable rankings on the world's No. 1 search engine, increasing customers and revenue.",
        btnPrimary: "Free Consultation",
        btnSecondary: "See Packages",
      },
      subHero: {
        title: "Multi-channel SEO Growth",
        desc: "Optimize website, Google Maps, Social Entity and Content Growth.",
        btn: "Get Quote Now",
      },
      intro: {
        title: "What is SEO?",
        subtitle:
          "Do you want to dominate the market and reduce your advertising budget?",
        desc: "According to statistics, more than 90% of internet users use search engines like Google, Yahoo... to find information, products, and services they need. SEO will help your website have a high ranking on search engines, especially Google.\n\nSEO stands for Search Engine Optimization, providing standard and reputable website optimization solutions to improve your website's visibility on search engines. Thereby, you can achieve marketing and business efficiency for your enterprise sustainably.",
      },
      serviceTypes: {
        title: "What are the common SEO service types?",
        subtitle:
          "Are you looking for a new website or an effective SEO agency? Are you confused among many SEO companies in the market?",
        desc: "No mystery, all technical. Below are the 3 SEO services of HNT Solution focusing on the most important platforms.",
        items: [
          {
            id: "tong-the",
            title: "Overall SEO <span>Services</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total.png",
            content:
              "Overall SEO is a service that ranks all keywords related to a website's products and services. Thanks to this, you have a large number of keywords covering the entire search market. When you do overall SEO, your website will have a huge amount of traffic from search engines, especially Google, Yahoo, and potential markets.\n\nInvestment in overall SEO services will help your website grow stably and sustainably because it does not just focus on a specific group of keywords. Overall SEO is the optimal solution for businesses that want to dominate the market and optimize brand coverage.",
          },
          {
            id: "tu-khoa",
            title: "Keyword SEO <span>Services</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keyword-type.png",
            content:
              "Currently, keyword SEO services are chosen by many businesses. SEO by keywords helps businesses save costs while still achieving marketing and sales goals.\n\nKeyword SEO will only focus on a number of keyword clusters with high search volume and the greatest conversion potential. This helps speed up rankings and bring back search results as quickly as possible.",
          },
          {
            id: "backlink",
            title: "Backlink <span>SEO</span> Services",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-backlink.png",
            content:
              "Backlink (Off-page) SEO service is the process of building quality links from reputable websites pointing back to your website. This helps increase strength (Authority), reliability and significantly improve website rankings on Google.",
          },
          {
            id: "local",
            title: "Local <span>SEO</span> Services",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-local.png",
            darkTheme: true,
            content:
              "Local SEO is essentially a keyword SEO service but targeting entirely specific local areas. Local SEO campaigns often prioritize products and services in certain localities.",
          },
          {
            id: "map",
            title: "Google Map <span>SEO</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-map.png",
            darkTheme: true,
            content:
              "Google Map SEO, also known as SEO Map, is a service that optimizes business information (Google My Business) displays on Google Map results, helping users easily find locations linked to the brand.",
          },
          {
            id: "ecommerce",
            title: "Ecommerce <span>SEO</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-ecommerce.png",
            content:
              "Ecommerce SEO or e-commerce SEO service is an SEO optimization service for online stores, helping sales websites (SEO Ecommerce) often target high-conversion product keywords as well as brand keywords.",
          },
          {
            id: "consulting",
            title: "SEO <span>Consulting</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-consulting.png",
            content:
              "SEO consulting for businesses helps you get an overview of the current SEO status of the website, proposing a systematic strategy to help investment in website development and SEO be most effective.",
          },
        ],
      },
      packagesTitle: "Latest <span>SEO Service</span> Pricing",
      packages: [
        {
          name: "SEO Standard",
          price: "19M / Month",
          color: "red",
          features: [
            "Duration: 6 - 10 months",
            "20 - 50 medium competition keywords",
            "SEO Content creation",
            "Website Audit",
            "On-page optimization",
            "Social Network system",
            "Google Map optimization",
            "Google Page 1",
            "Work and ranking report",
          ],
          btnText: "GET CONSULTATION",
        },
        {
          name: "SEO Profession",
          price: "29M / Month",
          color: "purple",
          features: [
            "Duration: 9 - 12 months",
            "KPI: 50 - 100 keywords",
            "Overall SEO planning",
            "On-page and structure optimization",
            "Comprehensive SEO content",
            "Social & satellite site system",
            "Google Map optimization",
            "5 - 7 PR articles",
            "Monthly reports",
          ],
          btnText: "GET CONSULTATION",
        },
        {
          name: "SEO Premium",
          price: "39M / Month",
          color: "purple",
          features: [
            "Duration: 12 months",
            "KPI: 100 - 150 keywords",
            "SEO Planning",
            "Content Planning",
            "Link building plan",
            "Social & satellite site optimization",
            "Google Map + Top Ranking",
            "10 PR articles",
            "Advertisement support",
          ],
          btnText: "GET CONSULTATION",
        },
      ],
      processTitle: "How is the <span>SEO service</span> implemented?",
      processSteps: [
        {
          title: "INFORMATION AND REQUEST RECEPTION",
          desc: "The SEO service provider will collect information about the customer's products and services. In addition, you also need to provide specific requirements and goals so that the SEO Agency can launch the most appropriate SEO campaign.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit-active.png",
        },
        {
          title: "WEBSITE ANALYSIS, KEYWORD PROPOSAL, AND SEO STRATEGY",
          desc: "Based on understanding the product and service combined with the target audience, the SEO company will research and propose the most appropriate SEO keywords. The next indispensable step is surveying and analyzing the actual status of the website.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech-active.png",
        },
        {
          title: "SEO QUOTATION",
          desc: "If the customer agrees with the proposed SEO keywords and strategy, the SEO provider will proceed with an SEO quote including detailed information about keywords, KPI commitments, and detailed costs.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords-active.png",
        },
        {
          title: "KEYWORD RESEARCH",
          desc: "Meticulous keyword research plays an important role in our SEO services. SEORANKLEAD selects keywords with the potential to bring valuable traffic to your website.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content-active.png",
        },
        {
          title: "SEO CONTRACT SIGNING",
          desc: "After agreeing on costs and the quote, the SEO company will draft an SEO contract and negotiate its signing. This contract must have the consensus of all parties.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit-active.png",
        },
        {
          title: "SEO PLANNING",
          desc: "Before starting implementation, the SEO Agency designs a full plan including a summary of works and a detailed timeline so the client can easily track the project.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total-active.png",
        },
        {
          title: "SEO PROJECT IMPLEMENTATION",
          desc: "The implementation process is updated regularly. Main tasks include:\n\n• Keyword Research\n• Content Construction\n• Technical Audit\n• Onpage SEO\n• Offpage SEO\n• SEO performance report and analysis",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech-active.png",
        },
        {
          title: "SEO PERFORMANCE REPORT AND MEASUREMENT",
          desc: "Professional services will send periodic reports (weekly or monthly) including ranking data, organic traffic, conversion rate, and bounce rate of SEO landing pages.\n\nThis helps clients grasp the situation and effectiveness throughout the project.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords-active.png",
        },
        {
          title: "SEO PROJECT CLOSURE AND HANDOVER",
          desc: "If keywords rank as committed in the contract, the SEO company will hand over the entire project and systems. For all-inclusive services, a training session is organized to guide the client in maintaining results.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content-active.png",
        },
        {
          title: "SEO RANKING WARRANTY AND MAINTENANCE",
          desc: "This is a step you should request after KPIs are met. Sustainable white-hat SEO units will provide a warranty of at least 2 months.\n\nAt SEORANKLEAD, we always commit to a free maintenance and warranty for 2 months after project completion.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total-active.png",
        },
      ],
    },
    footer: {
      tagline:
        "HNT Solutions Co., Ltd delivers mission-critical digital products that combine stunning design with industrial-grade performance.",
      solutions: {
        title: "Solutions",
        items: ["Web Design", "Architecture", "SEO Strategy", "Mobile Apps"],
      },
      company: {
        title: "Company",
        items: ["About HNT", "Ecosystem", "Careers", "Contact"],
      },
      legal: {
        title: "Legal",
        items: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
      },
      copyright: "All rights reserved.",
      status: "Systems Operational",
    },
    hero: {
      badge: "Elite Digital Agency",
      line1: "Dominate.",
      line2: "Automate.",
      line3: "Scale.",
      subtitle:
        "HNT Solutions Co., Ltd delivers absolute market dominance through high-converting web design, elite SEO strategies, and powerful automation tools.",
      cta1: "Start Collaboration",
      cta2: "View Solutions",
    },
    features: {
      label: "The HNT Advantage",
      title: "Engineered for",
      highlight: "Dominance",
      subtitle:
        "We don't just build websites; we engineer digital platforms that give your business an unfair advantage in the modern market.",
      items: [
        {
          title: "Architectural Excellence",
          desc: "We build scalable, resilient systems designed for long-term growth. From microservices to global CDN deployments.",
        },
        {
          title: "Lightning Performance",
          desc: "Meticulously optimized codebases ensuring sub-second load times and flawless 60fps animations.",
        },
        {
          title: "Enterprise Security",
          desc: "Military-grade encryption and robust security protocols integrated into every layer of our applications.",
        },
        {
          title: "Quality Assurance",
          desc: "Rigorous automated testing and multi-device QA protocols guarantee flawless production releases.",
        },
      ],
    },
    stats: [
      { value: "100+", label: "Products Shipped" },
      { value: "45+", label: "Global Partners" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "0", label: "Security Breaches" },
    ],
    services: {
      title: "Strategic Digital",
      highlight: "Competencies",
      subtitle:
        "We solve complex business challenges with world-class engineering and visionary design.",
      items: [
        {
          title: "Global Branding",
          desc: "Engineering visual identities that resonate across global markets and establish corporate authority.",
        },
        {
          title: "Enterprise Architecture",
          desc: "Building mission-critical web applications with distributed systems and real-time reliability.",
        },
        {
          title: "SEO Ecosystems",
          desc: "Developing comprehensive organic growth frameworks that dominate search engine results.",
        },
        {
          title: "Performance Marketing",
          desc: "Data-driven demand generation for industrial and technology brands scaling globally.",
        },
        {
          title: "Mobile Ecosystems",
          desc: "Seamless cross-platform experiences synchronized with cloud-native backends.",
        },
        {
          title: "Tech Operations",
          desc: "Continuous maintenance and infrastructure scaling for HNT Solutions partners.",
        },
      ],
    },
    integrations: {
      title: "Plug into your own data &",
      highlight: "500+ integrations",
      subtitle:
        "Use pre-built connectors for leading enterprise platforms. Custom API integrations for everything else.",
    },
    techShowcase: {
      title: "Code when you need it,",
      highlight: "UI when you don't",
      subtitle:
        "Other agencies limit you to templates or unmaintainable custom code. With HNT Solutions, you get the best of both worlds.",
      codeTitle: "Native Engineering",
      codeDesc:
        "Write robust TypeScript, Python, or Go exactly where complex business logic demands it.",
      features: [
        {
          num: "01",
          title: "Move fast. Break nothing.",
          desc: "Re-run single modules, replay real data, evaluate AI accuracy — without touching your entire pipeline.",
        },
        {
          num: "02",
          title: "Real-time Visibility",
          desc: "See inputs, outputs, and execution steps side-by-side. No more black-box debugging.",
        },
        {
          num: "03",
          title: "Stunning Interfaces",
          desc: "High-fidelity UI/UX engineered for maximum retention. Every component pixel-perfect.",
        },
      ],
      tags: [
        "Lightning performance",
        "Security by default",
        "Zero-downtime deploys",
        "Git-based workflows",
        "Multi-stack support",
      ],
    },
    process: {
      title: "Design",
      highlight: "Process",
      subtitle:
        "Our systematic approach to building world-class digital products.",
      steps: [
        {
          title: "Consultation & Survey",
          text: "Conduct surveys and direct discussions with clients to capture essential project requirements.",
        },
        {
          title: "Planning & Sketching",
          text: "Build wireframes for website structure, layouts, and required functionalities; identify necessary elements.",
        },
        {
          title: "Implementation",
          text: "Execute UX/UI design, programming, and development of website features.",
        },
        {
          title: "Testing & QA",
          text: "Test the website across different browsers and devices to ensure compatibility, loading speed, and functionality.",
        },
        {
          title: "Handover & Launch",
          text: "Deliver the website to the client after completing step 4 and officially launch the project.",
        },
      ],
    },
    enterprise: {
      badge: "Enterprise-ready",
      title: "Reliable. Scalable. Secure.",
      subtitle:
        "Deploy on your infra or ours. HNT Solutions's security and governance features let you build, monitor, and scale without losing control.",
      btn1: "Explore HNT for enterprise",
      btn2: "Talk to sales",
      features: [
        {
          title: "Security and control",
          desc: "Fully on-prem option, SSO SAML, and LDAP, encrypted secret stores, version control, RBAC permissions.",
        },
        {
          title: "Observability and transparency",
          desc: "Audit logs and log streaming to your SIEM, workflow history, real-time alerts, usage dashboards.",
        },
        {
          title: "Developer experience",
          desc: "Git-based control, isolated environments, multi-user workflows, workflow diffs.",
        },
        {
          title: "AI governance",
          desc: "Human-in-the-loop, guardrails, evaluations, bias detection protocols.",
        },
      ],
      quoteText:
        '"The idea is that everybody in the organization can use HNT to manage data retrieval or complex multi-node data transformation."',
      quoteRole: "Senior Product Manager",
      quoteCta: "See the case",
    },
    caseStudies: {
      title: "Case",
      highlight: "Studies",
      subtitle:
        "Discover how industry leaders leverage HNT Solutions to solve complex architectural challenges.",
      readMore: "Read Case Study",
      feedbackTitle: "What our partners say",
      cases: [
        {
          company: "FinTech Neo",
          title:
            "How FinTech Neo built a scalable core banking ecosystem and accelerated deployment by 40%",
          author: "Sarah Jenkins",
          role: "VP of Engineering",
        },
        {
          company: "MedCore Health",
          title:
            "How HNT modernized MedCore's record processing, ensuring 100% compliance and zero downtime",
          author: "Dr. James Wilson",
          role: "Chief Technology Officer",
        },
      ],
      feedbacks: [
        {
          quote:
            "HNT Solutions didn't just build our software; they re-engineered our entire digital workflow. The ROI was evident within the first quarter.",
          author: "Elena Rodriguez",
          company: "Global Retail Solutions",
        },
        {
          quote:
            "Their DevOps architecture is unmatched. We handle 10x the traffic now without a single performance hiccup.",
          author: "Marcus Chen",
          company: "Streamline Media",
        },
        {
          quote:
            "Transformative digital engineering. Their codebase is so clean and scalable, our internal team couldn't believe it.",
          author: "Sophia Laurent",
          company: "NextGen Logix",
        },
        {
          quote:
            "From AI integrations to robust backends, HNT consistently delivers beyond expectations. An incredible partner.",
          author: "David O. Reynolds",
          company: "Hyperion Finance",
        },
        {
          quote:
            "The only development agency we trust with our mission-critical infrastructure. Reliable and completely secure.",
          author: "Emma Zhang",
          company: "MedCore Health",
        },
        {
          quote:
            "Working with HNT feels like having an elite Silicon Valley tech team in-house. Delivery is always flawless.",
          author: "Thomas Wright",
          company: "E-Commerce Elevate",
        },
      ],
    },
    cta: {
      title: "Ready to transform your",
      highlight: "ecosystem",
      subtitle:
        "Partner with HNT Solutions Co., Ltd for your next breakthrough digital project.",
      btn: "Connect With Us",
    },
    about: {
      badge: "Our Story",
      title: "HNT",
      highlight: "Solutions",
      subtitle:
        "A collective of visionary engineers and designers dedicated to building the future of industrial-grade digital ecosystems.",
      mission: {
        title: "Our Mission",
        text: "To empower global brands with scalable, mission-critical digital products that drive growth and institutional reliability.",
      },
      vision: {
        title: "Our Vision",
        text: "Becoming the world's most trusted partner for enterprise-grade digital architecture and visionary design by 2030.",
      },
      valuesTitle: "The Core",
      valuesHighlight: "Values",
      valuesItems: [
        {
          title: "Innovation First",
          desc: "Pushing boundaries with cutting-edge tech.",
        },
        {
          title: "Reliability",
          desc: "Mission-critical systems you can depend on 24/7.",
        },
        {
          title: "User-Centric",
          desc: "Every line of code is for the end user.",
        },
        { title: "Co-Creation", desc: "We work with you to scale empires." },
      ],
      history: {
        title: "A Decade of Scale",
        text: "From a small design studio into a full-scale digital engineering firm specializing in building 'impossible' solutions.",
      },
    },
    contact: {
      title: "Let’s",
      highlight: "Connect",
      subtitle:
        "Scale your digital presence with HNT Solutions's industrial-grade engineering.",
      station: {
        title: "Station Details",
        protocol: "Protocol",
        hotline: "Hotline",
        hq: "Headquarters",
        hours: "Operational Hours",
        hoursVal: "Mon - Fri, 09:00 - 18:00 (GMT+7)",
      },
      consult: {
        title: "Direct Consultation",
        text: "Looking for an immediate solution? Talk to our chief architects today.",
        btn: "Book an Appointment",
      },
      form: {
        title: "Transmission Protocol",
        name: "Full Name",
        email: "Email Address",
        industry: "Industry / Sector",
        message: "Operational Message",
        placeholderName: "Identity name",
        placeholderEmail: "Contact email",
        placeholderMsg: "Project details or inquiry",
        btn: "Send Transmission",
      },
      map: "Interactive Station Map Loading...",
    },
    portfolio: {
      title: "Our",
      highlight: "Ecosystem",
      subtitle:
        "Explore the collection of industrial-grade digital products designed and engineered by HNT Solutions Co., Ltd.",
      showcaseTitle: "Digital Ecosystem",
      showcaseHighlight: "Showcase",
      showcaseSubtitle:
        "A glimpse into the mission-critical products we've engineered.",
      viewProject: "View Ecosystem",
    },
    webDesignDetail: {
      "corporate-website": {
        title: "Corporate/Business Website",
        tagline: "WEB DESIGN SERVICES",
        description:
          "Targeted platform to help businesses build a brand and attract customers. Especially for ads, a website is where visitors convert into real customers.",
        features: [
          "Easy Management",
          "Cost Optimization",
          "Revenue Growth",
          "Building Trust",
          "Customer Utilities",
          "Effective Marketing",
        ],
      },
      "landing-page": {
        title: "Landing Page",
        tagline: "Optimal Landing Page for Ads Campaigns",
        description:
          "An independent website designed specifically to focus on a single goal, aiming to increase the ability to convert visitors into customers or leads.",
      },
      "e-commerce-website": {
        title: "E-Commerce Website",
        tagline: "Provide customers with a convenient shopping experience",
        description:
          "Helping them easily find, select, and pay for the products they want to buy.",
      },
      common: {
        stats: [
          { label: "Optimal Landing Pages for Ads Campaigns", value: "500+" },
          { label: "Average Conversion Rate for Clients", value: "+34%" },
          { label: "Years of Experience in Digital Marketing", value: "5+" },
          { label: "Successful Projects Delivered", value: "800+" },
        ],
        benefits: [
          {
            title: "Easy Management",
            desc: "Modern tools integrated to help track orders and business operations effortlessly.",
          },
          {
            title: "Cost Optimization",
            desc: "Save on marketing, business, and management costs while connecting with customers effectively.",
          },
          {
            title: "Revenue Growth",
            desc: "24/7 online sales, easy online payment without waiting for manual closing.",
          },
          {
            title: "Building Trust",
            desc: "Confirm the professionalism and prestige of your business through a company website.",
          },
          {
            title: "Customer Utilities",
            desc: "Integrated support channels help businesses advise users in the easiest way.",
          },
          {
            title: "Effective Marketing",
            desc: "Promote your brand, products, and services to many potential customers on the internet.",
          },
        ],
        labels: {
          heroTitle: "WEB DESIGN",
          heroTitleSub: "SERVICES",
          heroDesc1:
            "An important tool for businesses to build their brand and attract customers.",
          heroDesc2:
            "Especially for ads, a website is where visitors convert into real customers.",
          heroBtn: "Get Free Advice",
          benefitsTitle: "Benefits of owning a Professional - Modern Website",
          pricingTitle: "Service Price List",
          pricingSubtitle: "HNT Solution Website Design",
          testimonialsTitle: "Customer Testimonials",
          faqTitle: "FAQ - Frequently Asked Questions",
          packagesTitle: "Website Design Services",
          packagesDesc:
            "We provide flexible and diverse service packages to meet all your needs and budget",
          customBanner: "Custom Website Design",
          portfolioTitle: "Websites designed specifically for our clients",
          finalQuoteBtn: "Get Custom Design Consulting",
          contactTitle: "Contact Us",
          contactSubtitle:
            "Share your business challenges, and let HNT Solution craft the perfect digital cure.",
          formName: "Full Name",
          formPhone: "Phone Number",
          formEmail: "Email Address",
          formMessage: "Message / Pain Points",
          formBtn: "REGISTER NOW",
          formSending: "Sending...",
          formSuccess: "Email sent successfully!",
          formError: "Failed to send email. Try again.",
        },
        packages: [
          {
            name: "BASIC",
            price: "5,000,000đ - 7,000,000đ",
            desc: "Basic information website design",
            features: [
              "Free .com domain for the first year",
              "Free hosting for the first year",
              "Unlimited bandwidth",
              "SEO-optimized website",
              "Free SSL installation support",
              "Optimize page load speed",
              "Standard UI/UX interface",
              "Optimize the computer interface",
              "Optimize the mobile interface",
              "1-year free warranty",
              "Assistance in setting up 1 Google Ads campaign",
              "Data limit: 3GB",
              "Website backup support once a month",
            ],
          },
          {
            name: "MEDIUM",
            price: "8,000,000đ - 10,000,000đ",
            desc: "Shopping cart website design, advanced",
            features: [
              "Free .com domain for the first year",
              "Free hosting for the first year",
              "Unlimited bandwidth",
              "SEO-optimized website",
              "Free SSL installation support",
              "Optimize page load speed",
              "Standard UI/UX interface",
              "Optimize the computer interface",
              "Optimize the mobile interface",
              "1-year free warranty",
              "Assistance in setting up 2 Google Ads campaigns",
              "Data limit: 5GB",
              "Support for posting 5 articles/products",
              "Website backup support once a month",
            ],
          },
          {
            name: "PREMIUM",
            price: "Detailed consultation",
            desc: "Custom website design",
            features: [
              "Free .com domain for the first year",
              "Free hosting for the first year",
              "Unlimited bandwidth",
              "SEO-optimized website",
              "Free SSL installation support",
              "Optimize page load speed",
              "Standard UI/UX interface",
              "Optimize the computer interface",
              "Optimize the mobile interface",
              "1-year free warranty",
              "Assistance with setting up 3 Google Ads campaigns",
              "Data limit: 7GB",
              "Support for posting 10 articles/products",
              "Website backup support once a month",
            ],
          },
        ],
        testimonials: [
          {
            name: "Julian Rivera",
            role: "Real Estate Marketing",
            avatar: "https://i.pravatar.cc/150?u=julian",
            rating: 5,
            content:
              "We needed a website that could grow with our brand, and the team far exceeded expectations. From UX to admin features, everything is smooth and clean. Post-launch, bounce rate dropped 40%.",
          },
          {
            name: "Sarah Jenkins",
            role: "Marketing Manager",
            avatar: "https://i.pravatar.cc/150?u=sarah",
            rating: 5,
            content:
              "Working with this team was seamless. They understood our business goals and turned them into a modern, responsive site. Leads doubled just 2 weeks after launch.",
          },
          {
            name: "David Wilson",
            role: "Tech Lead",
            avatar: "https://i.pravatar.cc/150?u=david",
            rating: 5,
            content:
              "The most reliable tech partner we've had. Fast delivery, clean code, and great support.",
          },
        ],
        faq: [
          {
            question: "What is a website?",
            answer:
              "A website is a collection of web pages acting as your business's online office.",
          },
          {
            question: "Is the website SEO friendly?",
            answer:
              "All HNT Solution websites are built with SEO best practices by default.",
          },
          {
            question: "How much does it cost?",
            answer:
              "Costs vary by features. We have packages fitting all budgets.",
          },
          {
            question: "How long does it take?",
            answer:
              "Typically 7-15 days for standard sites, longer for complex projects.",
          },
          {
            question: "What technology do you use?",
            answer:
              "We use modern stacks like React, Next.js, or WordPress depending on project needs.",
          },
        ],
      },
    },
  },

  vi: {
    nav: {
      services: "Dịch vụ",
      caseStudy: "Case Study",
      pricing: "Bảng giá",
      blog: "Blog",
      contact: "Liên hệ",
      cta: "Báo giá ngay",
      services_groups: {
        web: {
          title: "Website",
          items: ["Thiết kế web", "Landing page"],
        },

        seo: {
          title: "SEO",
          items: ["SEO tổng thể", "SEO từ khóa", "Audit website"],
        },
        ads: {
          title: "Quảng cáo",
          items: ["Facebook Ads", "Google Ads", "TikTok Ads"],
        },
        advanced: {
          title: "Tự động hóa & AI",
          items: ["Automation Marketing", "AI Content", "Chatbot"],
        },
      },
      caseStudy_items: ["Website projects", "SEO results", "Ads campaigns"],
      pricing_items: ["Thiết kế website", "SEO", "Ads"],
      blog_items: [
        "Kiến thức Website",
        "SEO",
        "Digital Marketing",
        "Case study",
        "AI & Automation",
      ],
    },
    webDesignDetail: {
      "corporate-website": {
        title: "Website Công ty/Doanh nghiệp",
        tagline: "DỊCH VỤ THIẾT KẾ WEBSITE",
        description:
          "Công cụ quan trọng giúp doanh nghiệp xây dựng thương hiệu và thu hút khách hàng. Đặc biệt đối với quảng cáo, website là nơi chuyển đổi khách truy cập thành khách hàng thực sự.",
        features: [
          "Quản trị dễ dàng",
          "Tối ưu chi phí",
          "Tăng trưởng doanh thu",
          "Xây dựng uy tín",
          "Tiện ích khách hàng",
          "Marketing hiệu quả",
        ],
      },
      "landing-page": {
        title: "Landingpage",
        tagline: "Landing page tối ưu cho các chiến dịch quảng cáo",
        description:
          "Trang web độc lập được thiết kế đặc biệt tập trung vào mục tiêu duy nhất, nhằm tăng khả năng chuyển đổi người truy cập thành khách hàng hoặc người dùng tiềm năng.",
      },
      "e-commerce-website": {
        title: "Web Bán Hàng",
        tagline: "Cung cấp cho khách hàng một trải nghiệm mua sắm thuận tiện",
        description:
          "Giúp họ dễ dàng tìm kiếm, lựa chọn và thanh toán cho sản phẩm mình muốn mua.",
      },
      common: {
        stats: [
          {
            label: "Landing page tối ưu cho các chiến dịch quảng cáo",
            value: "500+",
          },
          {
            label: "Tỷ lệ chuyển đổi trung bình cho khách hàng",
            value: "+34%",
          },
          {
            label: "năm kinh nghiệm trong ngành digital marketing",
            value: "5+",
          },
          { label: "Dự án thành công", value: "800+" },
        ],
        benefits: [
          {
            title: "Quản trị dễ dàng",
            desc: "Tool hiện đại tích hợp trên website giúp việc thống kê đơn hàng, kinh doanh trở nên dễ dàng hơn.",
          },
          {
            title: "Tối ưu chi phí",
            desc: "Tiết kiệm chi phí marketing, kinh doanh và quản lý, có thể kết nối với khách hàng hiệu quả.",
          },
          {
            title: "Tăng trưởng doanh thu",
            desc: "Bán hàng online 24/7 thuận tiện, thanh toán online dễ dàng và không cần chờ chốt đơn.",
          },
          {
            title: "Xây dựng uy tín",
            desc: "Khẳng định sự chuyên nghiệp và uy tín của doanh nghiệp qua website của công ty.",
          },
          {
            title: "Tiện ích khách hàng",
            desc: "Tích hợp các kênh hỗ trợ khách hàng giúp doanh nghiệp tư vấn người dùng 1 cách dễ dàng nhất.",
          },
          {
            title: "Marketing hiệu quả",
            desc: "Quảng bá thương hiệu, sản phẩm và dịch vụ của bạn đến với nhiều khách hàng tiềm năng trên internet.",
          },
        ],
        labels: {
          heroTitle: "DỊCH VỤ THIẾT KẾ",
          heroTitleSub: "WEBSITE",
          heroDesc1:
            "Công cụ quan trọng giúp doanh nghiệp xây dựng thương hiệu và thu hút khách hàng.",
          heroDesc2:
            "Đặc biệt đối với quảng cáo, website là nơi chuyển đổi khách truy cập thành khách hàng thực sự.",
          heroBtn: "Nhận tư vấn ngay",
          benefitsTitle:
            "Lợi ích của việc sở hữu Website Chuyên Nghiệp - Hiện Đại",
          pricingTitle: "Bảng Giá Dịch Vụ",
          pricingSubtitle: "Thiết Kế Website HNT Solution",
          testimonialsTitle: "Đánh Giá Từ Khách Hàng",
          faqTitle: "FAQ - Câu Hỏi Thường Gặp",
          packagesTitle: "Dịch Vụ Thiết Kế Website",
          packagesDesc:
            "Chúng tôi cung cấp các gói dịch vụ linh hoạt và đa dạng để đáp ứng mọi nhu cầu và ngân sách của bạn",
          customBanner: "Thiết Kế Website Theo Yêu Cầu",
          portfolioTitle:
            "Các website được thiết kế theo yêu cầu của khách hàng",
          finalQuoteBtn: "Nhận Tư vấn thiết kế theo yêu cầu",
          contactTitle: "Liên hệ với Chúng tôi",
          contactSubtitle:
            "Hãy share những 'nỗi đau' của bạn để HNT Solution 'chữa lành' chúng.",
          formName: "Họ và tên",
          formPhone: "Số điện thoại",
          formEmail: "Email",
          formMessage: "Nội dung",
          formBtn: "ĐĂNG KÝ NGAY",
          formSending: "Đang gửi...",
          formSuccess: "Đã gửi liên hệ thành công!",
          formError: "Gửi thất bại. Vui lòng thử lại.",
        },
        seoPackages: {
          packagesTitle: "Bảng báo giá <span>dịch vụ SEO</span> mới nhất",
          packages: [
            {
              name: "SEO Standard",
              price: "19 triệu/tháng",
              color: "red",
              features: [
                "Thời gian: 6 - 10 tháng",
                "20 - 50 từ khóa cạnh tranh vừa",
                "Tạo nội dung SEO",
                "Audit website",
                "Tối ưu onpage",
                "Hệ thống social Network",
                "Tối ưu Google Map",
                "Trang 1 Google",
                "Báo cáo công việc và ranking",
              ],
              btnText: "NHẬN TƯ VẤN NGAY",
            },
            {
              name: "SEO Profession",
              price: "29 triệu/tháng",
              color: "purple",
              features: [
                "Thời gian: 9 - 12 tháng",
                "KPI: 50 - 100 từ khóa",
                "Lập kế hoạch SEO tổng thể",
                "Tối ưu Onpage và cấu trúc website",
                "Tạo nội dung SEO toàn diện",
                "Hệ thống Social và site vệ tinh",
                "Tối ưu Google Map",
                "5 - 7 bài PR",
                "Báo cáo công việc hàng tháng",
              ],
              btnText: "NHẬN TƯ VẤN NGAY",
            },
            {
              name: "SEO Premium",
              price: "39 triệu/tháng",
              color: "purple",
              features: [
                "Thời gian: 12 tháng",
                "KPI: 100 - 150 từ khóa",
                "Lập kế hoạch SEO",
                "Kế hoạch Contents",
                "Kế hoạch Link building",
                "Tối ưu hệ thống Social và site vệ tinh",
                "Tối ưu Google Map + Top Ranking",
                "10 bài PR",
                "Quảng cáo",
              ],
              btnText: "NHẬN TƯ VẤN NGAY",
            },
          ],
        },
        packages: [
          {
            name: "BASIC",
            price: "5.000.000đ - 7.000.000đ",
            desc: "Thiết kế website thông tin cơ bản",
            features: [
              "Miễn phí miền .com năm đầu",
              "Miễn phí hosting năm đầu",
              "Băng thông không giới hạn",
              "Website chuẩn SEO",
              "Hỗ trợ cài đặt SSL free",
              "Tối ưu tốc độ load trang",
              "Giao diện chuẩn UX/UI",
              "Tối ưu giao diện máy tính",
              "Tối ưu giao diện điện thoại",
              "Bảo hành miễn phí 1 năm",
              "Hỗ trợ setup 1 chiến dịch Google Ads",
              "Data giới hạn 3GB",
              "Hỗ trợ backup website 1 lần/ tháng",
            ],
          },
          {
            name: "MEDIUM",
            price: "8.000.000đ - 10.000.000đ",
            desc: "Thiết kế website giỏ hàng, nâng cao",
            features: [
              "Miễn phí miền .com năm đầu",
              "Miễn phí hosting năm đầu",
              "Băng thông không giới hạn",
              "Website chuẩn SEO",
              "Hỗ trợ cài đặt SSL free",
              "Tối ưu tốc độ load trang",
              "Giao diện chuẩn UX/UI",
              "Tối ưu giao diện máy tính",
              "Tối ưu giao diện điện thoại",
              "Bảo hành miễn phí 1 năm",
              "Hỗ trợ setup 2 chiến dịch Google Ads",
              "Data giới hạn 5GB",
              "Hỗ trợ đăng 5 bài viết/ sản phẩm",
              "Hỗ trợ backup website 1 lần/ tháng",
            ],
          },
          {
            name: "PREMIUM",
            price: "Tư vấn chi tiết",
            desc: "Thiết kế website theo yêu cầu",
            features: [
              "Miễn phí miền .com năm đầu",
              "Miễn phí hosting năm đầu",
              "Băng thông không giới hạn",
              "Website chuẩn SEO",
              "Hỗ trợ cài đặt SSL free",
              "Tối ưu tốc độ load trang",
              "Giao diện chuẩn UX/UI",
              "Tối ưu giao diện máy tính",
              "Tối ưu giao diện điện thoại",
              "Bảo hành miễn phí 1 năm",
              "Hỗ trợ setup 3 chiến dịch Google Ads",
              "Data giới hạn 7GB",
              "Hỗ trợ đăng 10 bài viết/ sản phẩm",
              "Hỗ trợ backup website 1 lần/ tháng",
            ],
          },
        ],
        testimonials: [
          {
            name: "Nguyễn Tường Vinh",
            role: "Marketing BĐS",
            avatar: "https://i.pravatar.cc/150?u=vinh",
            rating: 5,
            content:
              "Chúng tôi cần một website có thể phát triển cùng thương hiệu, và đội ngũ đã làm vượt xa mong đợi. Từ thiết kế trải nghiệm người dùng đến chức năng quản trị, mọi thứ đều mượt mà và tinh gọn. Sau khi triển khai, tỷ lệ thoát trang giảm 40% và lượng tương tác của khách hàng tăng đáng kể.",
          },
          {
            name: "Nguyễn Văn Luật",
            role: "Marketing BĐS",
            avatar: "https://i.pravatar.cc/150?u=luat",
            rating: 5,
            content:
              "Làm việc với đội ngũ này rất trôi chảy. Họ thật sự hiểu mục tiêu kinh doanh và biến nó thành một website hiện đại, chuẩn responsive. Giao diện đẹp, dễ dùng và mang lại hiệu quả rõ rệt. Chỉ sau 2 tuần ra mắt, số lượng khách hàng gửi form liên hệ đã tăng gấp đôi, đồng thời mình nhận được rất nhiều lời khen từ đối tác.",
          },
          {
            name: "Dương Công Thắng",
            role: "Marketing BĐS",
            avatar: "https://i.pravatar.cc/150?u=thang",
            rating: 5,
            content:
              "Website được thiết kế cực kỳ hiện đại, tối ưu load rất nhanh. Đội ngũ hỗ trợ nhiệt tình, giải quyết mọi yêu cầu của tôi ngay lập tức. Đây là đối tác công nghệ đáng tin cậy nhất mà tôi từng hợp tác.",
          },
        ],
        faq: [
          {
            question: "Website là gì?",
            answer:
              "Website là một tập hợp các trang web bao gồm văn bản, hình ảnh, video... nằm trên một tên miền, đóng vai trò như một văn phòng trực tuyến của doanh nghiệp.",
          },
          {
            question: "Website có chuẩn SEO không?",
            answer:
              "Tất cả website tại HNT Solution đều được thiết kế tối ưu cấu trúc chuẩn SEO, giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu và xếp hạng cao.",
          },
          {
            question: "Chi phí làm website là bao nhiêu?",
            answer:
              "Chi phí tùy thuộc vào tính năng và quy mô dự án. Chúng tôi có các gói từ cơ bản đến cao cấp phù hợp với mọi ngân sách doanh nghiệp.",
          },
          {
            question: "Thời gian hoàn thành website mất bao lâu?",
            answer:
              "Thông thường từ 7 - 15 ngày đối với landing page và website doanh nghiệp cơ bản, và lâu hơn đối với dự án phức tạp.",
          },
          {
            question: "Website dùng mã nguồn gì?",
            answer:
              "Chúng tôi sử dụng các công nghệ hiện đại nhất như React, Next.js, Node.js hoặc WordPress tùy theo nhu cầu và tính chất của dự án.",
          },
        ],
      },
    },
    landingPageDetail: {
      heroTitleLine1: "THIẾT KẾ",
      heroTitleLine2: "LANDING PAGE",
      heroSubtitle: "CHUYÊN NGHIỆP - TỐI ƯU CHUYỂN ĐỔI",
      heroDesc:
        "Tăng cường trải nghiệm khách hàng với Landing Page chuyên nghiệp. Thiết kế chuẩn UI/UX giúp doanh nghiệp của bạn bứt phá doanh thu.",
      heroBtn: "Nhận Tư Vấn Ngay",
      statsTitle: "HNT Solution tự hào là đối tác của Google tại Việt Nam",
      stats: [
        { value: "6+", label: "Năm kinh nghiệm" },
        { value: "246+", label: "Khách hàng tin tưởng" },
        { value: "+34%", label: "Tỉ lệ chuyển đổi" },
        { value: "1000+", label: "Dự án thành công" },
      ],
      highlightsTitle: "Landing Page của HNT Solution có gì nổi bật",
      highlightsSub:
        "Khám phá những lý do khiến dịch vụ Landing Page của chúng tôi được khách hàng tin chọn.",
      highlights: [
        {
          title: "Tối ưu SEO và Tốc độ",
          desc: "Đảm bảo điểm số xanh chuẩn mực trên Google PageSpeed Insights, thân thiện mọi thiết bị.",
        },
        {
          title: "Ngôn từ thôi miên",
          desc: "Đội ngũ content marketing dày dạn kinh nghiệm sáng tạo nội dung chốt sale đỉnh cao.",
        },
        {
          title: "Tối ưu hóa UI/UX",
          desc: "Giao diện thiết kế theo chân dung đa chiều khách hàng, trải nghiệm mượt mà không điểm gợn.",
        },
      ],
      empathyTitle: "Chúng Tôi Đặt Mình Vào Vị Trí Của Khách Hàng",
      empathyContent: [
        {
          title: "Phân tích hành vi",
          desc: "Theo dõi luồng tương tác để tối ưu từng nút bấm, form điền thông tin.",
        },
        {
          title: "Màu sắc đồng bộ",
          desc: "Hệ thống màu chuyên nghiệp theo chuẩn brand guidelines doanh nghiệp.",
        },
        {
          title: "Thông điệp rõ ràng",
          desc: "Nội dung súc tích, đi thẳng vào giá trị cốt lõi mang đến cho người dùng.",
        },
        {
          title: "Bố cục logic",
          desc: "Cách sắp xếp thông tin có chủ đích dẫn dắt khách hàng tới quyết định mua.",
        },
      ],
      portfolioTitle: "Dự Án Landing Page Đã Triển Khai",
      portfolioViewMore: "XEM THÊM",
      whyUsTitle: "Tại Sao Nên Chọn Chúng Tôi",
      whyUsList: [
        {
          title: "Đối tác Google",
          desc: "Đối tác chính thức của google, đảm bảo uy tín, hỗ trợ tối ưu quảng cáo & đo lường",
        },
        {
          title: "Không giới hạn truy cập",
          desc: "Hệ thống ổn định, không lo bị khóa khi lưu lượng lớn.",
        },
        {
          title: "Làm bằng Wordpress",
          desc: "Dễ chỉnh sửa nội dung, cài plugin marketing và nâng cấp thành website",
        },
        {
          title: "SEO & tốc độ tải nhanh",
          desc: "Trải nghiệm mượt mà, tiết kiệm chi phí quảng cáo.",
        },
        {
          title: "Bảo mật và an toàn",
          desc: "Dữ liệu khách hàng lưu trữ riêng, không phụ thuộc bên thứ ba.",
        },
        {
          title: "Hỗ trợ lâu dài",
          desc: "Đội ngũ luôn sẵn sàng chỉnh sửa, nâng cấp & xử lý sự cố nhanh chóng.",
        },
      ],
      pricingTitle: "Bảng Giá Dịch Vụ Thiết Kế Landing Page",
      pricingPackages: [
        {
          name: "Basic",
          price: "1.500.000đ",
          desc: "Thiết kế Landing Page cơ bản theo mẫu có sẵn",
          features: [
            "Tặng hosting năm đầu",
            "Băng thông không giới hạn",
            "Giao diện chuẩn UX/UI",
            "Thiết kế responsive trên các thiết bị",
            "Bảo hành miễn phí 1 năm",
          ],
        },
        {
          name: "Medium",
          price: "2.500.000đ",
          desc: "Thiết kế Landing Page nâng cao theo mẫu có sẵn",
          features: [
            "Tặng hosting năm đầu",
            "Băng thông không giới hạn",
            "Giao diện chuẩn UX/UI",
            "Thiết kế responsive trên các thiết bị",
            "Bảo hành miễn phí 1 năm",
            "Hỗ trợ setup 1 chiến dịch Google Ads",
          ],
          isPopular: true,
        },
        {
          name: "Premium",
          price: "Từ 3.500.000đ",
          desc: "Thiết kế Landing Page theo yêu cầu",
          features: [
            "Tặng hosting năm đầu",
            "Băng thông không giới hạn",
            "Giao diện chuẩn UX/UI",
            "Thiết kế responsive trên các thiết bị",
            "Bảo hành miễn phí 1 năm",
            "Hỗ trợ setup 1 chiến dịch Google Ads",
          ],
        },
      ],
      testimonialsTitle: "Đánh Giá Từ Khách Hàng",
      testimonials: [
        {
          name: "Phạm Văn A",
          role: "CEO ABC Corp",
          content:
            "Chất lượng thiết kế rất đỉnh, conversion rate tăng 40% so với landing cũ.",
        },
        {
          name: "Trần Thị B",
          role: "Marketing Manager",
          content:
            "Tốc độ tải cực nhanh, đội ngũ thi công đúng hẹn, phong cách làm việc chuyên nghiệp.",
        },
        {
          name: "Hoàng C",
          role: "Founder E-com",
          content:
            "Phối màu rất ấn tượng, bắt mắt, content chạm đúng pain points của tệp khách hàng.",
        },
        {
          name: "Lê Đình D",
          role: "Director of Sales",
          content:
            "Form đăng ký được tối ưu tốt, thông tin khách hàng trút về hệ thống nhanh chóng, tỷ lệ rớt khách giảm đáng kể.",
        },
        {
          name: "Mai Tuyết Nhung",
          role: "Chủ Spa Thẩm Mỹ",
          content:
            "Giao diện cực mượt, tone màu chuẩn nhận diện thương hiệu. Spa của tôi đã bùng nổ đơn hàng mùa hè này nhờ Landing Page chuyên nghiệp.",
        },
        {
          name: "Nguyễn V",
          role: "Chuyên Gia BDS",
          content:
            "Hình ảnh preload nhanh, khách click vô dự án xem đầy đủ pháp lý rất tiện lợi. Landing page thật sự mang lại hiệu quả cực mạnh.",
        },
      ],
      faqTitle: "FAQ - Câu Hỏi Thường Gặp",
      faqs: [
        {
          question: "Bao lâu hoàn thành landing page",
          answer:
            "Thời gian hoàn thành phụ thuộc vào từng yêu cầu, thông thường từ 3 đến 5 ngày làm việc.",
        },
        {
          question: "Tôi có thể tự chỉnh sửa nội dung sau khi bàn giao không?",
          answer:
            "Có, HNT Solution sẽ bàn giao mã nguồn hoặc hệ thống quản trị để bạn có thể tự thay đổi nội dung trên trang dễ dàng.",
        },
        {
          question:
            "Landing page của chúng tôi có thể mở rộng thành website hoàn chỉnh không?",
          answer:
            "Có, hệ thống được thiết kế theo cấu trúc mở để dễ dàng nâng cấp lên website tĩnh hoặc động với đầy đủ tính năng.",
        },
        {
          question: "Trang có đảm bảo tốc độ tải nhanh không?",
          answer:
            "Chắc chắn rồi. Chúng tôi tuân thủ các nguyên tắc tối ưu hình ảnh, CSS và mã nguồn để trả về điểm xanh Google Speed.",
        },
        {
          question: "Landing page có được tối ưu SEO không?",
          answer:
            "Có, mọi dự án Landing Page từ Agency chúng tôi đều được tối ưu SEO onpage: Thẻ H1-H6, Meta dữ liệu, Sitemap rõ ràng.",
        },
      ],
    },
    footer: {
      tagline:
        "HNT Solutions Co., Ltd cung cấp sản phẩm số then chốt kết hợp thiết kế đẳng cấp với hiệu suất công nghiệp.",
      solutions: {
        title: "Giải pháp",
        items: [
          "Thiết kế Web",
          "Kiến trúc",
          "Chiến lược SEO",
          "Ứng dụng Di động",
        ],
      },
      company: {
        title: "Công ty",
        items: ["Về HNT", "Hệ sinh thái", "Tuyển dụng", "Liên hệ"],
      },
      legal: {
        title: "Pháp lý",
        items: [
          "Chính sách bảo mật",
          "Điều khoản dịch vụ",
          "Chính sách Cookie",
        ],
      },
      copyright: "Bản quyền được bảo lưu.",
      status: "Hệ thống đang hoạt động",
    },
    hero: {
      badge: "Đại lý Kỹ thuật số Hàng đầu",
      line1: "Thống lĩnh.",
      line2: "Tự động hóa.",
      line3: "Bứt phá.",
      subtitle:
        "HNT Solutions Co., Ltd mang đến sự thống trị thị trường tuyệt đối thông qua thiết kế web chuyển đổi cao, chiến lược SEO chuyên sâu và các công cụ tự động hóa mạnh mẽ.",
      cta1: "Bắt đầu hợp tác",
      cta2: "Xem giải pháp",
    },
    features: {
      label: "Lợi thế HNT",
      title: "Được xây dựng để",
      highlight: "Vượt trội",
      subtitle:
        "Chúng tôi không chỉ xây website — chúng tôi kiến tạo nền tảng số mang lại lợi thế cạnh tranh vượt trội cho doanh nghiệp bạn.",
      items: [
        {
          title: "Kiến trúc xuất sắc",
          desc: "Xây dựng hệ thống có khả năng mở rộng và bền vững, từ microservices đến triển khai CDN toàn cầu.",
        },
        {
          title: "Hiệu suất vượt trội",
          desc: "Codebase tối ưu đảm bảo thời gian tải dưới 1 giây và hoạt ảnh 60fps hoàn hảo.",
        },
        {
          title: "Bảo mật doanh nghiệp",
          desc: "Mã hóa cấp quân sự và giao thức bảo mật mạnh mẽ tích hợp ở mọi tầng ứng dụng.",
        },
        {
          title: "Đảm bảo chất lượng",
          desc: "Kiểm thử tự động nghiêm ngặt và giao thức QA đa thiết bị đảm bảo phát hành không lỗi.",
        },
      ],
    },
    stats: [
      { value: "100+", label: "Sản phẩm đã xuất xưởng" },
      { value: "45+", label: "Đối tác toàn cầu" },
      { value: "99.9%", label: "SLA hoạt động" },
      { value: "0", label: "Vi phạm bảo mật" },
    ],
    services: {
      title: "Năng lực Số",
      highlight: "Chiến lược",
      subtitle:
        "Chúng tôi giải quyết các thách thức kinh doanh phức tạp bằng kỹ thuật đẳng cấp thế giới và thiết kế có tầm nhìn.",
      items: [
        {
          title: "Thương hiệu Toàn cầu",
          desc: "Thiết kế nhận diện hình ảnh tạo tiếng vang trên thị trường toàn cầu và xác lập uy tín doanh nghiệp.",
        },
        {
          title: "Kiến trúc Doanh nghiệp",
          desc: "Xây dựng các ứng dụng web tối quan trọng với hệ thống phân tán và độ tin cậy thời gian thực.",
        },
        {
          title: "Hệ sinh thái SEO",
          desc: "Phát triển các khung tăng trưởng tự nhiên toàn diện chiếm lĩnh kết quả tìm kiếm.",
        },
        {
          title: "Marketing hiệu suất",
          desc: "Tạo nhu cầu dựa trên dữ liệu cho các thương hiệu công nghiệp và công nghệ mở rộng quy mô toàn cầu.",
        },
        {
          title: "Hệ sinh thái Di động",
          desc: "Trải nghiệm đa nền tảng liền mạch được đồng bộ hóa với hệ thống lưu trữ đám mây.",
        },
        {
          title: "Vận hành Công nghệ",
          desc: "Bảo trì liên tục và mở rộng hạ tầng cho các đối tác của HNT Solutions.",
        },
      ],
    },
    integrations: {
      title: "Kết nối dữ liệu của bạn với",
      highlight: "500+ tích hợp",
      subtitle:
        "Sử dụng kết nối dựng sẵn cho các nền tảng hàng đầu. Tích hợp API tùy chỉnh cho mọi nhu cầu còn lại.",
    },
    techShowcase: {
      title: "Code khi cần,",
      highlight: "UI khi muốn",
      subtitle:
        "Các agency khác giới hạn bạn vào template hoặc code không thể bảo trì. Với HNT Solutions, bạn có cả hai.",
      codeTitle: "Kỹ thuật thuần",
      codeDesc:
        "Viết TypeScript, Python hoặc Go mạnh mẽ đúng nơi logic nghiệp vụ phức tạp đòi hỏi.",
      features: [
        {
          num: "01",
          title: "Nhanh mà không phá vỡ gì.",
          desc: "Chạy lại từng module, phát lại dữ liệu thực, đánh giá AI — mà không ảnh hưởng pipeline.",
        },
        {
          num: "02",
          title: "Hiển thị thời gian thực",
          desc: "Xem inputs/outputs và các bước thực thi song song. Không còn debug kiểu hộp đen.",
        },
        {
          num: "03",
          title: "Giao diện đẳng cấp",
          desc: "UI/UX độ trung thực cao được thiết kế để tối đa hóa giữ chân người dùng.",
        },
      ],
      tags: [
        "Hiệu suất tia chớp",
        "Bảo mật mặc định",
        "Triển khai không gián đoạn",
        "Workflow Git",
        "Hỗ trợ đa stack",
      ],
    },
    process: {
      title: "Quy trình",
      highlight: "Thiết Kế & Phát Triển",
      subtitle:
        "Quy trình xây dựng sản phẩm kỹ thuật số chuẩn quốc tế của chúng tôi.",
      steps: [
        {
          title: "Tư vấn - khảo sát",
          text: "Tiến hành khảo sát và trao đổi trực tiếp với khách hàng, nắm bắt các yếu tố thiết yếu cho dự án.",
        },
        {
          title: "Lập kế hoạch - phác thảo",
          text: "Xây dựng bản phác thảo giao diện (Wireframe) về cấu trúc website, bố cục các trang và các chức năng cần có.",
        },
        {
          title: "Thực hiện thiết kế",
          text: "Tiến hành thiết kế giao diện (UX/UI), lập trình và phát triển các tính năng cho website.",
        },
        {
          title: "Kiểm tra - kiểm định",
          text: "Kiểm tra website trên các trình duyệt và thiết bị khác nhau để đảm bảo tính tương thích và tốc độ.",
        },
        {
          title: "Bàn giao - khởi chạy",
          text: "Bàn giao website với khách hàng sau khi đã hoàn tất bước 4 và chính thức khởi chạy dự án.",
        },
      ],
    },
    enterprise: {
      badge: "Sẵn sàng cho doanh nghiệp",
      title: "Ổn định. Mở rộng. Bảo mật.",
      subtitle:
        "Triển khai trên hạ tầng của bạn hoặc của chúng tôi. HNT Solutions bảo vệ bạn ở mọi cấp độ trong khi vẫn cho phép mở rộng không giới hạn.",
      btn1: "Khám phá HNT doanh nghiệp",
      btn2: "Liên hệ bán hàng",
      features: [
        {
          title: "Bảo mật & Kiểm soát",
          desc: "Tùy chọn on-prem, SSO SAML, LDAP, kho secret mã hóa, kiểm soát phiên bản, phân quyền RBAC.",
        },
        {
          title: "Quan sát & Minh bạch",
          desc: "Audit log, streaming vào SIEM, lịch sử workflow, cảnh báo thực, dashboard sử dụng.",
        },
        {
          title: "Trải nghiệm lập trình",
          desc: "Kiểm soát Git, môi trường cô lập, workflow đa người dùng, so sánh diff.",
        },
        {
          title: "Quản trị AI",
          desc: "Human-in-the-loop, guardrail, đánh giá, giao thức phát hiện sai lệch.",
        },
      ],
      quoteText:
        '"Ý tưởng là mọi người trong tổ chức có thể sử dụng HNT để quản lý truy xuất dữ liệu hoặc chuyển đổi dữ liệu đa node phức tạp."',
      quoteRole: "Quản lý Sản phẩm Cấp cao",
      quoteCta: "Xem case study",
    },
    caseStudies: {
      title: "Case",
      highlight: "Studies",
      subtitle:
        "Khám phá cách các nhà lãnh đạo ngành tận dụng HNT Solutions để giải quyết thách thức kiến trúc phức tạp.",
      readMore: "Đọc Case Study",
      feedbackTitle: "Đối tác nói gì về chúng tôi",
      cases: [
        {
          company: "FinTech Neo",
          title:
            "FinTech Neo xây dựng hệ sinh thái ngân hàng lõi có khả năng mở rộng và tăng tốc triển khai lên 40%",
          author: "Sarah Jenkins",
          role: "Phó Giám đốc Kỹ thuật",
        },
        {
          company: "MedCore Health",
          title:
            "HNT hiện đại hóa xử lý hồ sơ của MedCore, đảm bảo 100% tuân thủ và không có thời gian chết",
          author: "TS. James Wilson",
          role: "Giám đốc Công nghệ",
        },
      ],
      feedbacks: [
        {
          quote:
            "HNT Solutions không chỉ xây phần mềm — họ tái cơ cấu toàn bộ quy trình số của chúng tôi. ROI rõ ràng ngay trong quý đầu.",
          author: "Elena Rodriguez",
          company: "Global Retail Solutions",
        },
        {
          quote:
            "Kiến trúc DevOps của họ không gì sánh được. Chúng tôi đang xử lý traffic gấp 10 lần mà không hề giật lag.",
          author: "Marcus Chen",
          company: "Streamline Media",
        },
        {
          quote:
            "Kỹ thuật số biến đổi. Codebase sạch và có khả năng mở rộng đến mức đội nội bộ không dám tin.",
          author: "Sophia Laurent",
          company: "NextGen Logix",
        },
        {
          quote:
            "Từ tích hợp AI đến backend mạnh mẽ, HNT luôn vượt kỳ vọng. Một đối tác tuyệt vời.",
          author: "David O. Reynolds",
          company: "Hyperion Finance",
        },
        {
          quote:
            "Agency duy nhất chúng tôi tin tưởng với hạ tầng quan trọng. Đáng tin cậy và hoàn toàn bảo mật.",
          author: "Emma Zhang",
          company: "MedCore Health",
        },
        {
          quote:
            "Làm việc với HNT như có đội kỹ thuật Silicon Valley trong công ty. Giao hàng luôn hoàn hảo.",
          author: "Thomas Wright",
          company: "E-Commerce Elevate",
        },
      ],
    },
    cta: {
      title: "Sẵn sàng chuyển đổi",
      highlight: "hệ sinh thái",
      subtitle:
        "Hợp tác với HNT Solutions Co., Ltd cho dự án số đột phá tiếp theo của bạn.",
      btn: "Kết nối ngay",
    },
    about: {
      badge: "Câu chuyện của chúng tôi",
      title: "HNT",
      highlight: "Solutions",
      subtitle:
        "Một tập thể các kỹ sư và nhà thiết kế có tầm nhìn xa trông rộng, tận tâm xây dựng tương lai của hệ sinh thái kỹ thuật số cấp công nghiệp.",
      mission: {
        title: "Nhiệm vụ",
        text: "Trao quyền cho các thương hiệu toàn cầu với các sản phẩm kỹ thuật số có khả năng mở rộng, đóng vai trò quan trọng trong việc thúc đẩy tăng trưởng và độ tin cậy.",
      },
      vision: {
        title: "Tầm nhìn",
        text: "Trở thành đối tác đáng tin cậy nhất thế giới về kiến trúc kỹ thuật số cấp doanh nghiệp và thiết kế có tầm nhìn vào năm 2030.",
      },
      valuesTitle: "Giá trị",
      valuesHighlight: "Cốt lõi",
      valuesItems: [
        {
          title: "Ưu tiên Đổi mới",
          desc: "Vượt qua các ranh giới với công nghệ tiên tiến.",
        },
        {
          title: "Sự tin cậy",
          desc: "Hệ thống tối quan trọng mà bạn có thể dựa vào 24/7.",
        },
        {
          title: "Lấy người dùng làm trung tâm",
          desc: "Mọi dòng mã đều dành cho người dùng cuối.",
        },
        {
          title: "Cùng sáng tạo",
          desc: "Chúng tôi làm việc với bạn để mở rộng các đế chế.",
        },
      ],
      history: {
        title: "Một thập kỷ mở rộng",
        text: "Từ một studio thiết kế nhỏ trở thành một công ty kỹ thuật kỹ thuật số quy mô lớn chuyên xây dựng các giải pháp 'không thể'.",
      },
    },
    contact: {
      title: "Hãy cùng",
      highlight: "Kết nối",
      subtitle:
        "Mở rộng sự hiện diện kỹ thuật số của bạn với kỹ thuật cấp công nghiệp của HNT Solutions.",
      station: {
        title: "Chi tiết Trạm",
        protocol: "Giao thức",
        hotline: "Đường dây nóng",
        hq: "Trụ sở chính",
        hours: "Giờ hoạt động",
        hoursVal: "Thứ 2 - Thứ 6, 09:00 - 18:00 (GMT+7)",
      },
      consult: {
        title: "Tư vấn Trực tiếp",
        text: "Bạn đang tìm kiếm một giải pháp tức thời? Hãy nói chuyện với các kiến trúc sư trưởng của chúng tôi ngay hôm nay.",
        btn: "Đặt lịch hẹn",
      },
      form: {
        title: "Giao thức Truyền tin",
        name: "Họ và Tên",
        email: "Địa chỉ Email",
        industry: "Ngành / Lĩnh vực",
        message: "Nội dung thông điệp",
        placeholderName: "Tên định danh",
        placeholderEmail: "Email liên hệ",
        placeholderMsg: "Chi tiết dự án hoặc yêu cầu",
        btn: "Gửi thông tin",
      },
      map: "Đang tải Bản đồ Trạm tương tác...",
    },
    portfolio: {
      title: "Hệ sinh thái",
      highlight: "của chúng tôi",
      subtitle:
        "Khám phá bộ sưu tập các sản phẩm kỹ thuật số cấp công nghiệp được thiết kế và kỹ thuật bởi HNT Solutions Co., Ltd.",
      showcaseTitle: "Hệ sinh thái",
      showcaseHighlight: "Kỹ thuật số",
      showcaseSubtitle:
        "Một cái nhìn thoáng qua về các sản phẩm tối quan trọng mà chúng tôi đã thiết kế.",
      viewProject: "Xem Dự án",
    },
    seoDetail: {
      hero: {
        title: "SEO TỔNG THỂ",
        highlight: "THỐNG LĨNH GOOGLE",
        desc: "Giải pháp SEO đột phá giúp website doanh nghiệp đạt thứ hạng cao, bền vững trên công cụ tìm kiếm số 1 thế giới, gia tăng khách hàng và doanh thu.",
        btnPrimary: "Tư Vấn Miễn Phí",
        btnSecondary: "Bảng Giá Dịch Vụ",
      },
      subHero: {
        title: "Hỗ trợ SEO tổng thể đa kênh",
        desc: "Tối ưu website, Google Maps, Social Entity và Content Growth.",
        btn: "Nhận báo giá ngay",
      },
      intro: {
        title: "Dịch vụ SEO là gì?",
        subtitle:
          "Doanh nghiệp bạn đang muốn thống lĩnh thị trường, giảm ngân sách chạy quảng cáo?",
        desc: "Theo thống kê, có hơn 90% người dùng internet sử dụng công cụ tìm kiếm như Google, Yahoo... để tìm các thông tin, sản phẩm và dịch vụ mà họ cần. SEO sẽ giúp trang web của bạn có được thứ hạng cao trên các công cụ tìm kiếm nhất là Google.\n\nDịch vụ SEO là viết tắt của cụm từ Search Engine Optimization cung cấp các giải pháp tối ưu website chuẩn SEO và uy tín nhằm cải thiện khả năng hiển thị trang web của bạn trên công cụ tìm kiếm. Qua đó bạn có thể đạt được hiệu quả về marketing và kinh doanh cho doanh nghiệp mình một cách bền vững.",
      },
      serviceTypes: {
        title: "Có những loại hình dịch vụ SEO nào?",
        subtitle:
          "Bạn đang cần làm mới website hay agency cung cấp dịch vụ SEO hiệu quả? Bạn đang phân vân giữa vô vàn công ty SEO hiện nay trên thị trường?",
        desc: "Không có bí ẩn, tất cả đều là kỹ thuật. Dưới đây là 3 dịch vụ SEO của HNT Solution tập trung vào các nền tảng quan trọng nhất.",
        items: [
          {
            id: "tong-the",
            title: "Dịch vụ SEO <span>tổng thể</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total.png",
            content:
              "SEO tổng thể là dịch vụ SEO top toàn bộ các từ khóa liên quan đến sản phẩm dịch vụ của một website. Nhờ vào bạn đã có một lượng lớn các từ khóa bao phủ hết thị trường tìm kiếm từ khoá liên quan. Khi bạn làm SEO tổng thể website của bạn sẽ có một lượng traffic khổng lồ từ các công cụ tìm kiếm nhất là Google, Yahoo và các thị trường tiềm năng.\n\nVốn đầu tư vào dịch vụ SEO tổng thể sẽ giúp website của bạn tăng trưởng ổn định và bền vững hơn vì không chỉ tập trung vào một nhóm từ khóa nhất định. Dịch vụ SEO tổng thể là giải pháp tối ưu cho doanh nghiệp muốn thống lĩnh thị trường và phủ sóng thương hiệu tối ưu.",
          },
          {
            id: "tu-khoa",
            title: "Dịch vụ SEO <span>từ khoá</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keyword-type.png",
            content:
              "Hiện nay dịch vụ SEO từ khóa được doanh nghiệp lựa chọn khá nhiều. Việc SEO theo từ khóa giúp doanh nghiệp tiết kiệm chi phí nhưng vẫn đạt được mục tiêu về marketing và bán hàng.\n\nSEO từ khóa sẽ chỉ tập trung vào một số cụm từ khóa có mức độ tìm kiếm cao và tiềm năng chuyển đổi lớn nhất. Điều này giúp đẩy nhanh thứ hạng và đem lại kết quả tìm kiếm nhanh chóng nhất.",
          },
          {
            id: "backlink",
            title: "Dịch vụ SEO <span>Backlink</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-backlink.png",
            content:
              "Dịch vụ SEO Backlink (Off-page) là quá trình xây dựng các liên kết chất lượng từ các website uy tín trỏ về website của bạn. Điều này giúp tăng sức mạnh (Authority), độ tin cậy và cải thiện thứ hạng website đáng kể trên Google.",
          },
          {
            id: "local",
            title: "Dịch vụ SEO <span>Local</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-local.png",
            darkTheme: true,
            content:
              "SEO Local thực chất là dịch vụ SEO từ khóa nhưng nhắm mục tiêu là các địa phương hoàn toàn cụ thể. Các chiến dịch SEO Local thường ưu tiên các sản phẩm dịch vụ tại các địa phương nhất định. Ví dụ dịch vụ SEO tại TP.HCM.",
          },
          {
            id: "map",
            title: "Dịch vụ SEO <span>Google Map</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-map.png",
            darkTheme: true,
            content:
              "SEO Google Map hay còn gọi là SEO Map là dịch vụ tối ưu hiển thị thông tin doanh nghiệp (Google My Business) trên kết quả Google Map giúp người dùng dễ dàng tìm kiếm địa điểm liên kết với thương hiệu.",
          },
          {
            id: "ecommerce",
            title: "Dịch vụ SEO <span>Ecommerce</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-ecommerce.png",
            content:
              "Dịch vụ SEO Ecommerce hay dịch vụ SEO thương mại điện tử là dịch vụ tối ưu SEO cho các cửa hàng trực tuyến giúp website bán hàng (SEO Ecommerce) thường nhắm mục tiêu vào từ khóa sản phẩm có chuyển đổi cao cũng như từ khóa về thương hiệu.",
          },
          {
            id: "consulting",
            title: "Dịch vụ <span>tư vấn SEO</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-consulting.png",
            content:
              "Dịch vụ tư vấn SEO cho doanh nghiệp giúp bạn có cái nhìn tổng quan thực trạng SEO của website, đề ra chiến lược bài bản giúp việc đầu tư phát triển website và SEO hiệu quả nhất, giúp website đạt được thứ hạng cao trong ngành hàng kinh doanh.",
          },
        ],
      },
      stats: [
        { val: "300%", lab: "Tăng Trưởng ROI" },
        { val: "2M+", lab: "Traffic Tự Nhiên" },
        { val: "500+", lab: "Từ Khoá TOP 1-3" },
        { val: "98%", lab: "Tỉ Lệ Giữ Chân" },
      ],
      benefits: [
        {
          title: "Audit Website Toàn Diện",
          desc: "Phân tích sâu cấu trúc hệ thống, fix lỗi kỹ thuật giúp Googlebot thu thập dữ liệu nhanh hơn và tối ưu trải nghiệm người dùng.",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit.png",
        },
        {
          title: "Nghiên Cứu Từ Khoá Chiến Lược",
          desc: "Tìm kiếm các bộ từ khóa mang lại chuyển đổi cao, thấu hiểu ý định tìm kiếm của khách hàng mục tiêu để xây dựng nội dung.",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords.png",
        },
        {
          title: "Tối Ưu Kỹ Thuật SEO",
          desc: "Xử lý tốc độ load, cấu trúc dữ liệu Schema và tính thân thiện mobile để Google 'yêu' website của bạn hơn.",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech.png",
        },
        {
          title: "Chiến Lược Nội Dung Đỉnh Cao",
          desc: "Sáng tạo nội dung giá trị, chuẩn E-E-A-T giúp tăng uy tín thương hiệu và tỉ lệ chuyển đổi đơn hàng.",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content.png",
        },
      ],
      packagesTitle: "Bảng báo giá <span>dịch vụ SEO</span> mới nhất",
      packages: [
        {
          name: "SEO Standard",
          price: "19 triệu/tháng",
          color: "red",
          features: [
            "Thời gian: 6 - 10 tháng",
            "20 - 50 từ khóa cạnh tranh vừa",
            "Tạo nội dung SEO",
            "Audit website",
            "Tối ưu onpage",
            "Hệ thống social Network",
            "Tối ưu Google Map",
            "Trang 1 Google",
            "Báo cáo công việc và ranking",
          ],
          btnText: "NHẬN TƯ VẤN NGAY",
        },
        {
          name: "SEO Profession",
          price: "29 triệu/tháng",
          color: "purple",
          features: [
            "Thời gian: 9 - 12 tháng",
            "KPI: 50 - 100 từ khóa",
            "Lập kế hoạch SEO tổng thể",
            "Tối ưu Onpage và cấu trúc website",
            "Tạo nội dung SEO toàn diện",
            "Hệ thống Social và site vệ tinh",
            "Tối ưu Google Map",
            "5 - 7 bài PR",
            "Báo cáo công việc hàng tháng",
          ],
          btnText: "NHẬN TƯ VẤN NGAY",
        },
        {
          name: "SEO Premium",
          price: "39 triệu/tháng",
          color: "purple",
          features: [
            "Thời gian: 12 tháng",
            "KPI: 100 - 150 từ khóa",
            "Lập kế hoạch SEO",
            "Kế hoạch Contents",
            "Kế hoạch Link building",
            "Tối ưu hệ thống Social và site vệ tinh",
            "Tối ưu Google Map + Top Ranking",
            "10 bài PR",
            "Quảng cáo",
          ],
          btnText: "NHẬN TƯ VẤN NGAY",
        },
      ],
      processTitle:
        'Quy trình triển khai <span class="styles.highlightText">dịch vụ SEO</span> như thế nào?',
      processSteps: [
        {
          title: "TIẾP NHẬN THÔNG TIN VÀ YÊU CẦU",
          desc: "Công ty cung cấp dịch vụ SEO sẽ thu thập các thông tin về sản phẩm và dịch vụ của khách hàng muốn làm SEO. Ngoài ra, bạn cũng cần cung cấp các yêu cầu và mục tiêu cụ thể để SEO Agency có thể lên chiến dịch SEO phù hợp nhất.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit-active.png",
        },
        {
          title: "PHÂN TÍCH WEBSITE, ĐỀ XUẤT TỪ KHOÁ VÀ CHIẾN LƯỢC SEO",
          desc: "Dựa trên việc tìm hiểu sản phẩm và dịch vụ kết hợp with mục tiêu của khách hàng, công ty SEO sẽ tiến hành nghiên cứu và đề xuất từ khóa SEO phù hợp nhất. Bước tiếp theo không thể thiếu trong quy trình triển khai dịch vụ SEO đó là khảo sát và phân tích thực trạng website.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech-active.png",
        },
        {
          title: "BÁO GIÁ SEO",
          desc: "Nếu khách hàng đồng ý với các đề xuất về từ khoá SEO cũng như chiến lược SEO mà bên SEO Agency đề xuất. Bên cung cấp dịch vụ SEO sẽ tiến hành làm báo giá SEO trong đó sẽ có thông tin chi tiết về bộ từ khóa, cam kết KPIs và chi phí SEO chi tiết.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords-active.png",
        },
        {
          title: "NGHIÊN CỨU TỪ KHÓA",
          desc: "Quá trình nghiên cứu từ khóa tỉ mỉ đóng vai trò quan trọng trong dịch vụ SEO của chúng tôi. SEORANKLEAD chọn lọc các từ khóa có tiềm năng mang lại lượng truy cập có giá trị cho trang web của bạn.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content-active.png",
        },
        {
          title: "KÝ HỢP ĐỒNG SEO",
          desc: "Sau khi thống nhất được về phân chi phí và báo giá SEO, bên công ty SEO sẽ tiến hành soạn thảo hợp đồng SEO và đàm phán ký kết hợp đồng cung cấp dịch vụ SEO. Hợp đồng SEO này phải được có được sự thống nhất giữa các bên.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit-active.png",
        },
        {
          title: "LẬP KẾ HOẠCH SEO",
          desc: "Trước khi bắt tay vào triển khai SEO theo hợp đồng SEO, SEO Agency sẽ phải thiết lập lập kế hoạch SEO một cách đầy đủ bao gồm tóm tắt các công việc cũng như timeline chi tiết để bên khách hàng có thể dễ dàng theo dõi dự án.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total-active.png",
        },
        {
          title: "TRIỂN KHAI DỰ ÁN SEO",
          desc: "Quá trình triển khai dự án SEO sẽ được cập nhật thường xuyên giúp doanh nghiệp theo sát được công việc đang thực hiện. Dịch vụ SEO sẽ tiến hành làm theo kế hoạch (SEO Plan) đã tạo với các công việc chính:\n\n• Keyword Research\n• Xây dựng Content\n• Technical Audit\n• Onpage SEO\n• Offpage SEO\n• Báo cáo và phân tích hiệu suất SEO",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech-active.png",
        },
        {
          title: "BÁO CÁO VÀ ĐO LƯỜNG HIỆU SUẤT SEO",
          desc: "Đa số các dịch vụ SEO chuyên nghiệp đều sẽ gửi một báo cáo hiệu suất và đo lường kết quả SEO định kỳ hàng tuần hoặc hàng tháng. Trong báo cáo sẽ có đầy đủ các số liệu về thứ hạng từ khoá, organic traffic, tỷ lệ chuyển đổi và tỷ lệ thoát của các landing page SEO.\n\nĐiều này giúp cho các khách hàng có thể nắm bắt tình hình và hiệu quả SEO trong quá trình triển khai dự án SEO.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords-active.png",
        },
        {
          title: "KẾT THÚC VÀ BÀN GIAO DỰ ÁN SEO",
          desc: "Sau thời gian triển khai dự án SEO, nếu từ khóa lên top đúng with cam kết trong hợp đồng SEO đã ký kết trước đó. Bên công ty SEO sẽ tiến hành bàn giao toàn bộ dự án và hệ thống đã xây dựng trong quá trình triển khai SEO.\n\nVới các dịch vụ SEO trọn gói, công ty SEO sẽ tổ chức một buổi đào tạo sau khi kết thúc dự án để hướng dẫn khách hàng duy trì kết quả sau khi bàn giao.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content-active.png",
        },
        {
          title: "BẢO HÀNH & DUY TRÌ THỨ HẠNG SEO",
          desc: "Đây là bước bạn nên yêu cầu các công ty SEO thực hiện sau khi hoàn thành KPIs theo cam kết vì có rất ít dịch vụ SEO top Google có bảo hành về duy trì thứ hạng. Các đơn vị triển khai SEO mũ trắng bền vững và an toàn sẽ không ngại bảo hành thứ hạng dự án SEO ít nhất 2 tháng.\n\nTại SEORANKLEAD, chúng tôi luôn cam kết bảo hành và duy trì kết quả SEO hoàn toàn miễn phí trong vòng 2 tháng sau khi kết thúc dự án.",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total-active.png",
        },
      ],
    },
  },

  ja: {
    nav: {
      services: "サービス",
      caseStudy: "導入事例",
      pricing: "料金プラン",
      blog: "ブログ",
      contact: "お問合せ",
      cta: "無料相談",
      services_groups: {
        web: {
          title: "Website",
          items: ["Webデザイン", "ランディングページ"],
        },

        seo: {
          title: "SEO対策",
          items: ["総合SEO", "キーワードSEO", "現状診断"],
        },
        ads: {
          title: "広告運用",
          items: ["Facebook広告", "Google広告", "TikTok広告"],
        },
        advanced: {
          title: "AI & 自動化",
          items: ["オートメーション", "AIコンテンツ制作", "チャットボット"],
        },
      },
      caseStudy_items: ["Web制作実績", "SEO実績", "広告運用実績"],
      pricing_items: ["Webデザイン", "SEO", "広告"],
      blog_items: [
        "Web制作ノウハウ",
        "SEO知識",
        "デジタルマーケティング",
        "導入事例",
        "AI・自動化",
      ],
    },
    webDesignDetail: {
      "corporate-website": {
        title: "コーポレート/ビジネスサイト",
        tagline: "ウェブデザインサービス",
        description:
          "ブランドを構築し、顧客を引き付けるためのターゲットプラットフォーム。特に広告において、ウェブサイトは訪問者が実際の顧客に転換する場所です。",
        features: [
          "簡単な管理",
          "コストの最適化",
          "収益の向上",
          "信頼の醸成",
          "顧客用ユーティリティ",
          "効果的なマーケティング",
        ],
      },
      "landing-page": {
        title: "ランディングページ",
        tagline: "広告キャンペーンに最適なLP",
        description:
          "単一の目標に焦点を当てて設計された独立したウェブサイトで、訪問者を顧客やリードに転換する能力を高めることを目的としています。",
      },
      "e-commerce-website": {
        title: "ECサイト",
        tagline: "顧客に便利なショッピング体験を提供",
        description:
          "顧客が買いたい商品を簡単に見つけ、選択し、支払うことができるように支援します。",
      },
      common: {
        stats: [
          { label: "広告キャンペーン向けの最適化LP", value: "500+" },
          { label: "クライアントの平均転換率", value: "+34%" },
          { label: "デジタルマーケティングの経験年数", value: "5+" },
          { label: "納品済みの成功プロジェクト", value: "800+" },
        ],
        benefits: [
          {
            title: "簡単な管理",
            desc: "注文や業務運営を簡単に追跡できる最新のツールが統合されています。",
          },
          {
            title: "コストの最適化",
            desc: "マーケティング、業務、管理コストを削減しながら、顧客と効果的に繋がります。",
          },
          {
            title: "収益の向上",
            desc: "24時間365日のオンライン販売、手動での締め作業を待たずに簡単にオンライン決済。",
          },
          {
            title: "信頼の醸成",
            desc: "企業ウェブサイトを通じて、ビジネスの専門性と威信を確認します。",
          },
          {
            title: "顧客用ユーティリティ",
            desc: "統合されたサポートチャネルにより、企業は最も簡単な方法でユーザーにアドバイスを提供できます。",
          },
          {
            title: "効果的なマーケティング",
            desc: "インターネット上の多くの潜在顧客に、ブランド、製品、サービスを宣伝します。",
          },
        ],
        labels: {
          heroTitle: "ウェブデザイン",
          heroTitleSub: "サービス",
          heroDesc1:
            "ビジネスがブランドを構築し、顧客を引き付けるための重要なツール。",
          heroDesc2:
            "特に広告において、ウェブサイトは訪問者が実際の顧客に転換する場所です。",
          heroBtn: "無料相談を受ける",
          benefitsTitle:
            "プロフェッショナルでモダンなウェブサイトを所有するメリット",
          pricingTitle: "サービス価格表",
          pricingSubtitle: "HNT Solution ウェブサイト設計",
          testimonialsTitle: "お客様の声",
          faqTitle: "よくある質問 (FAQ)",
          packagesTitle: "ウェブサイトデザインサービス",
          packagesDesc:
            "ニーズや予算に合わせて、柔軟で多様なサービスパッケージを提供します。",
          customBanner: "カスタムウェブサイトデザイン",
          portfolioTitle: "クライアントのために特別に設計されたウェブサイト",
          finalQuoteBtn: "カスタムデザインのコンサルティングを受ける",
          contactTitle: "お問い合わせ",
          contactSubtitle:
            "ビジネスの課題を共有してください。HNT Solution が最適なデジタルソリューションを作成します。",
          formName: "氏名",
          formPhone: "電話番号",
          formEmail: "メールアドレス",
          formMessage: "内容 / お悩み",
          formBtn: "今すぐ登録",
          formSending: "送信中...",
          formSuccess: "メッセージが正常に送信されました！",
          formError: "メッセージの送信に失敗しました。もう一度お試しください。",
        },
        packages: [
          {
            name: "基本",
            price: "5,000,000 đ - 7,000,000 đ",
            desc: "基本情報ウェブサイトデザイン",
            features: [
              "初年度.comドメイン無料",
              "初年度ホスティング無料",
              "無制限の帯域幅",
              "SEO最適化ウェブサイト",
              "無料SSLインストールサポート",
              "ページ読み込み速度の最適化",
              "標準UI/UXインターフェース",
              "コンピュータインターフェースの最適化",
              "モバイルインターフェースの最適化",
              "1年間の無料保証",
              "Google広告キャンペーン1件の設定サポート",
              "データ制限：3GB",
              "月に1回のウェブサイトバックアップサポート",
            ],
          },
          {
            name: "中級",
            price: "8,000,000 đ - 10,000,000 đ",
            desc: "ショッピングカートウェブサイトデザイン、高度",
            features: [
              "初年度.comドメイン無料",
              "初年度ホスティング無料",
              "無制限の帯域幅",
              "SEO最適化ウェブサイト",
              "無料SSLインストールサポート",
              "ページ読み込み速度の最適化",
              "標準UI/UXインターフェース",
              "コンピュータインターフェースの最適化",
              "モバイルインターフェースの最適化",
              "1年間の無料保証",
              "Google広告キャンペーン2件の設定サポート",
              "データ制限：5GB",
              "5つの記事/製品の投稿サポート",
              "月に1回のウェブサイトバックアップサポート",
            ],
          },
          {
            name: "プレミアム",
            price: "詳細な相談",
            desc: "カスタムウェブサイトデザイン",
            features: [
              "初年度.comドメイン無料",
              "初年度ホスティング無料",
              "無制限の帯域幅",
              "SEO最適化ウェブサイト",
              "無料SSLインストールサポート",
              "ページ読み込み速度の最適化",
              "標準UI/UXインターフェース",
              "コンピュータインターフェースの最適化",
              "モバイルインターフェースの最適化",
              "1年間の無料保証",
              "Google広告キャンペーン3件の設定サポート",
              "データ制限：7GB",
              "10の記事/製品の投稿サポート",
              "月に1回のウェブサイトバックアップサポート",
            ],
          },
        ],
        testimonials: [
          {
            name: "佐藤 健二",
            role: "不動産マーケティング",
            avatar: "https://i.pravatar.cc/150?u=sato",
            rating: 5,
            content:
              "私たちのブランドと共に成長できるウェブサイトが必要でしたが、チームは期待をはるかに超えてくれました。UXから管理機能まで、すべてがスムーズでクリーンです。",
          },
          {
            name: "田中 美恵子",
            role: "マーケティングマネージャー",
            avatar: "https://i.pravatar.cc/150?u=tanaka",
            rating: 5,
            content:
              "このチームとの仕事はシームレスでした。彼らは私たちのビジネス目標を理解し、それをモダンでレスポンシブなサイトに変えてくれました。ローンチからわずか2週間でリードが倍増しました。",
          },
          {
            name: "鈴木 一郎",
            role: "技術リーダー",
            avatar: "https://i.pravatar.cc/150?u=suzuki",
            rating: 5,
            content:
              "これまでで最も信頼できるテックパートナーです。迅速な納品、クリーンなコード、そして素晴らしいサポート。",
          },
        ],
        faq: [
          {
            question: "ウェブサイトとは何ですか？",
            answer:
              "ウェブサイトは、ビジネスのオンラインオフィスとして機能するウェブページの集合体です。",
          },
          {
            question: "ウェブサイトはSEOに対応していますか？",
            answer:
              "HNT Solutionのすべてのウェブサイトは、デフォルトでSEOのベストプラクティスに基づいて構築されています。",
          },
          {
            question: "費用はどのくらいかかりますか？",
            answer:
              "費用は機能によって異なります。あらゆる予算に合わせたパッケージをご用意しています。",
          },
          {
            question: "完成までにどのくらいかかりますか？",
            answer:
              "通常、標準的なサイトの場合は7〜15日、複雑なプロジェクトの場合はそれ以上かかります。",
          },
          {
            question: "どのような技術を使用していますか？",
            answer:
              "プロジェクトのニーズに応じて、React、Next.js、WordPressなどのモダンなスタックを使用します。",
          },
        ],
      },
    },
    landingPageDetail: {
      heroTitleLine1: "デザイン",
      heroTitleLine2: "ランディングページ",
      heroSubtitle: "プロフェッショナル - コンバージョン最適化",
      heroDesc:
        "専門的なランディングページで顧客体験を向上させます。標準のUI/UX設計により、ビジネスの収益向上を支援します。",
      heroBtn: "今すぐ相談する",
      statsTitle:
        "HNT SolutionはベトナムのGoogleパートナーであることを誇りに思います",
      stats: [
        { value: "6+", label: "年の経験" },
        { value: "246+", label: "信頼するクライアント" },
        { value: "+34%", label: "コンバージョン率" },
        { value: "1000+", label: "成功プロジェクト" },
      ],
      highlightsTitle: "HNT Solutionのランディングページの特長",
      highlightsSub:
        "当社のランディングページサービスがお客様に選ばれる理由をご覧ください。",
      highlights: [
        {
          title: "SEOとスピードの最適化",
          desc: "Google PageSpeed Insightsで標準のグリーンスコアを確保し、すべてのデバイスに対応。",
        },
        {
          title: "魅力的なコピーライティング",
          desc: "経験豊富なコンテンツマーケティングチームが、最高のセールスコンテンツを作成します。",
        },
        {
          title: "UI/UX最適化",
          desc: "多角的な顧客ペルソナに合わせたインターフェースで、完璧でスムーズな体験を提供。",
        },
      ],
      empathyTitle: "私たちはお客様の立場に立って考えます",
      empathyContent: [
        {
          title: "行動分析",
          desc: "インタラクションの流れを追跡し、各ボタンや入力フォームを最適化します。",
        },
        {
          title: "色の同期",
          desc: "企業のブランドガイドラインに沿ったプロフェッショナルなカラーシステム。",
        },
        {
          title: "明確なメッセージ",
          desc: "ユーザーに提供するコアバリューに直接直結する簡潔なコンテンツ。",
        },
        {
          title: "論理的なレイアウト",
          desc: "顧客を購買行動へと導く意図的な情報配置。",
        },
      ],
      portfolioTitle: "導入したランディングページプロジェクト",
      portfolioViewMore: "もっと見る",
      whyUsTitle: "私たちが選ばれる理由",
      whyUsList: [
        {
          title: "Googleパートナー",
          desc: "Googleの公式パートナーであり、信頼を保証し、広告の最適化と測定をサポートします。",
        },
        {
          title: "無制限のアクセス",
          desc: "安定したシステムで、トラフィックが多い時でもロックされる心配はありません。",
        },
        {
          title: "WordPressベース",
          desc: "コンテンツの編集が簡単で、マーケティングプラグインの導入や完全なウェブサイトへのアップグレードも容易です。",
        },
        {
          title: "SEOと高速読み込み",
          desc: "スムーズな体験で広告コストを削減。",
        },
        {
          title: "高いセキュリティと安全性",
          desc: "顧客データは第三者に依存せずプライベートに保存されます。",
        },
        {
          title: "長期的なサポート",
          desc: "チームは常に編集やアップグレード、問題解決に迅速に対応する準備ができています。",
        },
      ],
      pricingTitle: "ランディングページデザインの価格表",
      pricingPackages: [
        {
          name: "ベーシック",
          price: "1,500,000đ",
          desc: "既存のテンプレートを使用した基本的なランディングページデザイン",
          features: [
            "初年度の無料ホスティング",
            "無制限の帯域幅",
            "標準的なUI/UXインターフェース",
            "全デバイス対応のレスポンシブデザイン",
            "1年間の無料保証",
          ],
        },
        {
          name: "ミディアム",
          price: "2,500,000đ",
          desc: "既存のテンプレートを使用した高度なランディングページデザイン",
          features: [
            "初年度の無料ホスティング",
            "無制限の帯域幅",
            "標準的なUI/UXインターフェース",
            "全デバイス対応のレスポンシブデザイン",
            "1年間の無料保証",
            "Google広告キャンペーン1件の設定サポート",
          ],
          isPopular: true,
        },
        {
          name: "プレミアム",
          price: "3,500,000đ から",
          desc: "ご要望に応じたカスタムランディングページデザイン",
          features: [
            "初年度の無料ホスティング",
            "無制限の帯域幅",
            "標準的なUI/UXインターフェース",
            "全デバイス対応のレスポンシブデザイン",
            "1年間の無料保証",
            "Google広告キャンペーン1件の設定サポート",
          ],
        },
      ],
      testimonialsTitle: "お客様の声",
      testimonials: [
        {
          name: "ファム・ヴァン・A",
          role: "ABC Corp CEO",
          content:
            "最高のデザイン品質で、以前のLPと比較してコンバージョン率が40%向上しました。",
        },
        {
          name: "チャン・ティ・B",
          role: "マーケティングマネージャー",
          content:
            "読み込み速度が非常に速く、納期通りの納品、仕事ぶりもプロフェッショナルです。",
        },
        {
          name: "ホアン・C",
          role: "Eコマース創設者",
          content:
            "とても印象的で人目を引く配色で、ターゲット顧客のペインポイントを的確に捉えたコンテンツです。",
        },
        {
          name: "レ・ディン・D",
          role: "営業部長",
          content:
            "登録フォームが十分に最適化されており、顧客情報がシステムに素早く入力され、離脱率が大幅に減少しました。",
        },
        {
          name: "マイ・トゥイエ・ニュン",
          role: "スパオーナー",
          content:
            "非常にスムーズなインターフェースで、色がブランドのアイデンティティと完全に一致しています。プロフェッショナルなランディングページのおかげで、この夏は注文が殺到しました。",
        },
        {
          name: "グエン・V",
          role: "不動産専門家",
          content:
            "画像のプレロードが速く、クライアントがクリックしてプロジェクトの法的詳細を確認するのに非常に便利です。ランディングページは本当に強い結果をもたらします。",
        },
      ],
      faqTitle: "FAQ - よくある質問",
      faqs: [
        {
          question: "ランディングページの完成にはどのくらいかかりますか？",
          answer: "お要望により異なりますが、通常は3～5営業日です。",
        },
        {
          question: "引き渡し後に自分でコンテンツを編集できますか？",
          answer:
            "はい、HNT SolutionはソースコードまたはCMSを引き渡し、ご自身で簡単にコンテンツを変更できるようにします。",
        },
        {
          question: "ランディングページを完全なウェブサイトに拡張できますか？",
          answer:
            "はい、フル機能を備えた静的または動的ウェブサイトに簡単にアップグレードできるオープンな構造になっています。",
        },
        {
          question: "ページの読み込みは速いですか？",
          answer:
            "間違いありません。画像、CSS、ソースコードの最適化に関するベストプラクティスに従い、Googleでの高いスピードスコアを確保します。",
        },
        {
          question: "ランディングページはSEOに最適化されていますか？",
          answer:
            "はい、当エージェンシーのすべてのLPプロジェクトには、H1-H6タグ、メタデータ、明確なサイトマップなどのオンページSEO最適化が施されています。",
        },
      ],
    },
    seoDetail: {
      hero: {
        title: "総合SEO対策",
        highlight: "GOOGLEで圧倒的な優位性を",
        desc: "革新的なSEOソリューションにより、世界No.1の検索エンジンで持続可能な高順位を獲得し、集客と収益の最大化を実現します。",
        btnPrimary: "無料相談を受ける",
        btnSecondary: "料金プランを見る",
      },
      subHero: {
        title: "マルチチャネルSEO成長戦略",
        desc: "ウェブサイト、Googleマップ、ソーシャルエンティティ、コンテンツの成長を最適化します。",
        btn: "今すぐ見積もりを取る",
      },
      intro: {
        title: "SEOとは何ですか？",
        subtitle: "市場を支配し、広告予算を削減したいとお考えですか？",
        desc: "統計によると、インターネットユーザーの90%以上が、必要な情報、製品、サービスを見つけるためにGoogleやYahooなどの検索エンジンを利用しています。SEOは、あなたのウェブサイトが検索エンジン、特にGoogleで高い順位を獲得するのを助けます。\n\nSEOは検索エンジン最適化（Search Engine Optimization）の略で、検索エンジンでのウェブサイトの視認性を向上させるための、標準的で信頼性の高いウェブサイト最適化ソリューションを提供します。これにより、企業のマーケティングとビジネスの効率を持続的に達成できます。",
      },
      serviceTypes: {
        title: "一般的なSEOサービスの種類",
        subtitle: "新しいウェブサイトや効果的なSEOエージェンシーをお探しですか？市場にある多くのSEO会社の中で迷っていませんか？",
        desc: "不思議なことは何もありません、すべてはテクニカルなものです。以下は、最も重要なプラットフォームに焦点を当てたHNT Solutionの3つのSEOサービスです。",
        items: [
          {
            id: "tong-the",
            title: "総合SEO<span>サービス</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total.png",
            content: "総合SEOは、ウェブサイトの製品やサービスに関連するすべてのキーワードをランク付けするサービスです。これにより、検索市場全体をカバーする膨大な数のキーワードを所有できます。総合SEOを行うと、ウェブサイトは検索エンジン、特にGoogle、Yahoo、および潜在的な市場から膨大なトラフィックを獲得できます。\n\n総合SEOサービスへの投資は、特定のキーワードグループだけに焦点を当てるのではないため、ウェブサイトが安定して持続的に成長するのを助けます。総合SEOは、市場を支配し、ブランドのカバレッジを最適化したい企業にとって最適なソリューションです。"
          },
          {
            id: "tu-khoa",
            title: "キーワードSEO<span>サービス</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keyword-type.png",
            content: "現在、多くの企業にキーワードSEOサービスが選ばれています。キーワードによるSEOは、マーケティングと販売の目標を達成しながら、企業がコストを節約するのを助けます。\n\nキーワードSEOは、検索ボリュームが多く、コンバージョンポテンシャルが最も高いキーワードクラスターのみに焦点を当てます。これにより、ランキングをスピードアップし、検索結果を可能な限り迅速に返却するのに役立ちます。"
          },
          {
            id: "backlink",
            title: "バックリンクSEO<span>サービス</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-backlink.png",
            content: "バックリンク（オフページ）SEOサービスは、評判の良いウェブサイトからあなたのウェブサイトを指す高品質のリンクを構築するプロセスです。これにより、権威性（Authority）と信頼性が向上し、Googleでのウェブサイトの順位が大幅に改善されます。"
          },
          {
            id: "local",
            title: "ローカルSEO<span>サービス</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-local.png",
            darkTheme: true,
            content: "ローカルSEOは本質的にキーワードSEOサービスですが、完全に特定のローカルエリアをターゲットとしています。ローカルSEOキャンペーンは多くの場合、特定の地域の製品やサービスを優先します。"
          },
          {
            id: "map",
            title: "Googleマップ<span>SEO</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-map.png",
            darkTheme: true,
            content: "SEOマップとも呼ばれるGoogleマップSEOは、Googleマップの結果に表示されるビジネス情報（Googleマイビジネス）を最適化し、ユーザーがブランドに関連付けられた場所を簡単に見つけられるようにするサービスです。"
          },
          {
            id: "ecommerce",
            title: "ECサイト<span>SEO</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-ecommerce.png",
            content: "ECサイトSEOまたは電子商取引SEOサービスは、オンラインストア向けのSEO最適化サービスであり、販売ウェブサイト（SEO Ecommerce）がコンバージョンの高い製品キーワードやブランドキーワードをターゲットにするのを助けます。"
          },
          {
            id: "consulting",
            title: "SEO<span>コンサルティング</span>",
            img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-consulting.png",
            content: "企業向けのSEOコンサルティングは、ウェブサイトの現在のSEO状況の概要を把握し、ウェブサイト開発とSEOへの投資が最も効果的になるように体系的な戦略を提案するのに役立ちます。",
          },
        ],
      },
      stats: [
        { val: "300%", lab: "ROI向上" },
        { val: "2M+", lab: "自然流入" },
        { val: "500+", lab: "トップ3キーワード" },
        { val: "98%", lab: "顧客維持率" },
      ],
      benefits: [
        {
          title: "包括的なウェブサイト監査",
          desc: "システムアーキテクチャを深く分析し、技術的なエラーを修正して、Googlebotが迅速にクロールし、ユーザーエクスペリエンスを最適化できるようにします。",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit.png",
        },
        {
          title: "戦略的キーワード調査",
          desc: "高いコンバージョンをもたらすキーワードセットを探し、ターゲット顧客の検索意図を理解してコンテンツを構築します。",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords.png",
        },
        {
          title: "テクニカルSEO最適化",
          desc: "読み込み速度、構造化データ（Schema）、モバイルフレンドリーを処理し、Googleがあなたのウェブサイトをより「好む」ようにします。",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech.png",
        },
        {
          title: "最高峰のコンテンツ戦略",
          desc: "E-E-A-T基準に準拠した価値のあるコンテンツを作成し、ブランドの信頼性と注文転換率を向上させます。",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content.png",
        },
      ],
      packagesTitle: "<span>SEOサービス</span>の最新料金表",
      packages: [
        {
          name: "SEO Standard",
          price: "月額 19万円",
          color: "red",
          features: [
            "期間: 6〜10ヶ月",
            "中程度の競争力のキーワード 20〜50語",
            "SEOコンテンツ制作",
            "ウェブサイト監査",
            "内部SEO最適化",
            "ソーシャルネットワークシステム",
            "Googleマップ最適化",
            "Google検索1ページ目",
            "作業及びランキングレポート",
          ],
          btnText: "今すぐ相談する",
        },
        {
          name: "SEO Profession",
          price: "月額 29万円",
          color: "purple",
          features: [
            "期間: 9〜12ヶ月",
            "KPI: 50〜100語",
            "総合SEO計画の策定",
            "内部SEO及びサイト構造の最適化",
            "包括的なSEOコンテンツ",
            "ソーシャル及びサテライトサイトシステム",
            "Googleマップ最適化",
            "PR記事 5〜7本",
            "月次レポート",
          ],
          btnText: "今すぐ相談する",
        },
        {
          name: "SEO Premium",
          price: "月額 39万円",
          color: "purple",
          features: [
            "期間: 12ヶ月",
            "KPI: 100〜150語",
            "SEO計画",
            "コンテンツ計画",
            "リンク構築計画",
            "ソーシャル及びサテライトサイトの最適化",
            "Googleマップ + 上位ランキング",
            "PR記事 10本",
            "広告サポート",
          ],
          btnText: "今すぐ相談する",
        },
      ],
      processTitle: "<span>SEOサービス</span>はどのように実施されますか？",
      processSteps: [
        { title: "情報収集とリクエスト受付", desc: "お客様の製品やサービスに関する情報を収集し、具体的な要件や目標を伺います。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit-active.png" },
        { title: "サイト分析と戦略提案", desc: "製品や対象顧客の調査に基づき、最適なキーワードとウェブサイトの現状分析を提案します。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech-active.png" },
        { title: "お見積り", desc: "キーワードと戦略に基づき、KPIコミットメントと詳細なコストを含む見積書を作成します。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords-active.png" },
        { title: "キーワード調査", desc: "価値のあるトラフィックをもたらす可能性のあるキーワードを厳選します。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content-active.png" },
        { title: "ご契約", desc: "費用と見積もりに合意した後、正式にSEOサービス提供の契約を締結します。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit-active.png" },
        { title: "計画策定", desc: "詳細なタイムラインを含む全体計画を策定し、進捗を可視化します。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total-active.png" },
        { title: "プロジェクト実施", desc: "キーワード調査、コンテンツ制作、テクニカル監査、内部・外部SEOを実施します。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech-active.png" },
        { title: "レポートと効果計測", desc: "ランキング、自然トラフィック、コンバージョン率などの定期レポートを作成します。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords-active.png" },
        { title: "完了と引き継ぎ", desc: "目標達成後、全ての成果物を引き継ぎ、運用方法をレクチャーします。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content-active.png" },
        { title: "保証とメンテナンス", desc: "2ヶ月間の成果維持保証を提供し、継続的な成功をサポートします。", icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total-active.png" },
      ],
      contactTitle: "無料のSEO提案を受ける",
      contactSub: "あなたのウェブサイトを監査し、ターゲットを絞った成長ロードマップを提供します。",
      faqTitle: "SEO - よくある質問",
      faqs: [
        { question: "結果が出るまでどのくらいかかりますか？", answer: "業界の競争状況によりますが、通常3〜6ヶ月かかります。" },
        { question: "SEOの効果は持続しますか？", answer: "はい。広告を停止しても、検索からの自然流入は継続的にターゲット顧客をもたらします。" },
      ],
    },
    footer: {
      tagline:
        "HNT Solutions Co., Ltdは、卓越したデザインと産業グレードのパフォーマンスを融合した使命遂行型デジタル製品を提供します。",
      solutions: {
        title: "ソリューション",
        items: ["Webデザイン", "アーキテクチャ", "SEO戦略", "モバイルアプリ"],
      },
      company: {
        title: "会社",
        items: ["HNTについて", "エコシステム", "採用情報", "お問合せ"],
      },
      legal: {
        title: "法務",
        items: ["プライバシーポリシー", "利用規約", "クッキーポリシー"],
      },
      copyright: "All rights reserved.",
      status: "システム稼働中",
    },
    hero: {
      badge: "エリートデジタルエージェンシー",
      line1: "支配する。",
      line2: "自動化する。",
      line3: "拡張する。",
      subtitle:
        "HNT Solutions Co., Ltdは、高コンバージョンのウェブデザイン、エリートSEO戦略、そして強力な自動化ツールを通じて、絶対的な市場支配力を提供します。",
      cta1: "コラボを始める",
      cta2: "ソリューションを見る",
    },
    features: {
      label: "HNTアドバンテージ",
      title: "圧倒的な",
      highlight: "優位性",
      subtitle:
        "私たちは単なるウェブサイトではなく、現代市場で他社に差をつけるデジタルプラットフォームを構築します。",
      items: [
        {
          title: "卓越したアーキテクチャ",
          desc: "マイクロサービスからグローバルCDNまで、長期的な成長を見据えたスケーラブルなシステムを構築します。",
        },
        {
          title: "圧倒的なパフォーマンス",
          desc: "1秒以下の読み込み時間と滑らかな60fpsアニメーションを実現する最適化されたコードを提供します。",
        },
        {
          title: "エンタープライズセキュリティ",
          desc: "軍レベルの暗号化と堅牢なセキュリティプロトコルをアプリケーション全層に統合します。",
        },
        {
          title: "品質保証",
          desc: "厳格な自動テストとマルチデバイスQAが、完璧なプロダクションリリースを保証します。",
        },
      ],
    },
    stats: [
      { value: "100+", label: "出荷製品数" },
      { value: "45+", label: "グローバルパートナー" },
      { value: "99.9%", label: "稼働率SLA" },
      { value: "0", label: "セキュリティ侵害" },
    ],
    services: {
      title: "戦略的デジタル",
      highlight: "基盤",
      subtitle:
        "世界クラスのエンジニアリングと先見性のあるデザインで、複雑なビジネス課題を解決します。",
      items: [
        {
          title: "グローバルブランディング",
          desc: "グローバル市場に響き、企業の権威を確立するビジュアルアイデンティティを構築します。",
        },
        {
          title: "エンタープライズアーキテクチャ",
          desc: "分散システムとリアルタイムの信頼性を備えた使命遂行型ウェブアプリケーションを構築します。",
        },
        {
          title: "SEOエコシステム",
          desc: "検索エンジン結果を支配する包括的なオーガニック成長フレームワークを開発します。",
        },
        {
          title: "パフォーマンスマーケティング",
          desc: "グローバルに展開する産業・テクノロジーブランド向けのデータ駆動型デマンドジェネレーション。",
        },
        {
          title: "モバイルエコシステム",
          desc: "クラウドネイティブのバックエンドと同期したシームレスなクロスプラットフォーム体験。",
        },
        {
          title: "テックオペレーション",
          desc: "HNT Solutionsパートナー向けの継続的なメンテナンスとインフラのスケーリング。",
        },
      ],
    },
    integrations: {
      title: "データと",
      highlight: "500以上の統合に接続",
      subtitle:
        "主要なエンタープライズプラットフォーム向けのプレビルトコネクタ。その他はすべてカスタムAPI統合で対応。",
    },
    techShowcase: {
      title: "必要な時はコード、",
      highlight: "不要な時はUI",
      subtitle:
        "他の代理店はテンプレートか、保守不能なカスタムコードに制限します。HNT Solutionsでは両方の良いところを活かせます。",
      codeTitle: "ネイティブエンジニアリング",
      codeDesc:
        "複雑なビジネスロジックが求める場所に、堅牢なTypeScript、Python、またはGoを記述します。",
      features: [
        {
          num: "01",
          title: "速く動く。壊さない。",
          desc: "単一モジュールを再実行し、実データを再生し、パイプライン全体に触れずにAIの精度を評価します。",
        },
        {
          num: "02",
          title: "リアルタイムの可視性",
          desc: "入出力と実行ステップを並べて確認。ブラックボックスデバッグは不要です。",
        },
        {
          num: "03",
          title: "圧倒的なUI",
          desc: "最高の保持率を実現するように設計された高忠実度のUI/UX。すべてのインタラクションが心地よい。",
        },
      ],
      tags: [
        "超高速パフォーマンス",
        "デフォルトセキュリティ",
        "ゼロダウンタイム展開",
        "Gitベースワークフロー",
        "マルチスタック対応",
      ],
    },
    process: {
      title: "デザイン",
      highlight: "プロセス",
      subtitle: "世界クラスのデジタル製品を構築するための体系的なアプローチ。",
      steps: [
        {
          title: "相談・調査",
          text: "顧客との直接の調査と協議を行い、プロジェクトに不可欠な要素を把握します。",
        },
        {
          title: "計画・スケッチ",
          text: "サイト構造、レイアウト、必要な機能のワイヤーフレームを構築し、必要事項を特定します。",
        },
        {
          title: "設計・開発",
          text: "UX/UIデザイン、プログラミング、およびウェブサイト機能の開発を実施します。",
        },
        {
          title: "テスト・検証",
          text: "互換性、読み込み速度、機能を確保するため、異なるブラウザやデバイスでテストを行います。",
        },
        {
          title: "引き渡し・ローンチ",
          text: "ステップ4の完了後、顧客にサイトを引き渡し、プロジェクトを正式にローンチします。",
        },
      ],
    },
    enterprise: {
      badge: "エンタープライズ対応",
      title: "信頼性。拡張性。セキュリティ。",
      subtitle:
        "お客様のインフラまたは弊社のインフラに展開。エンタープライズチームが信頼するDevOpsエクスペリエンスで本番環境へ。",
      btn1: "エンタープライズを見る",
      btn2: "営業に相談",
      features: [
        {
          title: "セキュリティとコントロール",
          desc: "オンプレミスオプション、SSO SAML、LDAP、暗号化シークレットストア、バージョン管理、RBACアクセス権限。",
        },
        {
          title: "可観測性と透明性",
          desc: "SIEMへの監査ログとログストリーミング、ワークフロー履歴、リアルタイムアラート、使用状況ダッシュボード。",
        },
        {
          title: "開発者体験",
          desc: "Gitベースのコントロール、分離環境、マルチユーザーワークフロー、ワークフロー差分。",
        },
        {
          title: "AIガバナンス",
          desc: "ヒューマンインザループ、ガードレール、評価、バイアス検出プロトコル。",
        },
      ],
      quoteText:
        '"組織のすべての人がHNTを使ってデータ取得や複雑なマルチノードデータ変換を管理できるというのがアイデアです。"',
      quoteRole: "シニアプロダクトマネージャー",
      quoteCta: "ケースを見る",
    },
    caseStudies: {
      title: "ケース",
      highlight: "スタディ",
      subtitle:
        "業界リーダーがどのようにHNT Solutionsを活用して複雑な課題を解決しているかをご覧ください。",
      readMore: "ケーススタディを読む",
      feedbackTitle: "パートナーからの声",
      cases: [
        {
          company: "FinTech Neo",
          title:
            "FinTech Neoがスケーラブルなコアバンキングエコシステムを構築し、展開速度を40%向上させた方法",
          author: "Sarah Jenkins",
          role: "技術担当副社長",
        },
        {
          company: "MedCore Health",
          title:
            "HNTがMedCoreの記録処理を近代化し、100%コンプライアンスとゼロダウンタイムを実現した方法",
          author: "ジェームズ・ウィルソン博士",
          role: "最高技術責任者",
        },
      ],
      feedbacks: [
        {
          quote:
            "HNT Solutionsは私たちのソフトウェアを構築しただけでなく、デジタルワークフロー全体を再設計しました。ROIは最初の四半期に明らかでした。",
          author: "Elena Rodriguez",
          company: "Global Retail Solutions",
        },
        {
          quote:
            "彼らのDevOpsアーキテクチャは卓越しています。今では10倍のトラフィックをパフォーマンスの低下なく処理できます。",
          author: "Marcus Chen",
          company: "Streamline Media",
        },
        {
          quote:
            "変革的なデジタルエンジニアリング。コードベースがクリーンすぎて社内チームが信じられなかったほどです。",
          author: "Sophia Laurent",
          company: "NextGen Logix",
        },
        {
          quote:
            "AI統合から堅牢なバックエンドまで、HNTは常に期待を超えます。素晴らしいパートナーです。",
          author: "David O. Reynolds",
          company: "Hyperion Finance",
        },
        {
          quote:
            "ミッションクリティカルなインフラを任せられる唯一の開発代理店。信頼性があり完全に安全です。",
          author: "Emma Zhang",
          company: "MedCore Health",
        },
        {
          quote:
            "HNTとの仕事はシリコンバレーのエリートチームが社内にいるようです。納品は常に完璧です。",
          author: "Thomas Wright",
          company: "E-Commerce Elevate",
        },
      ],
    },
    cta: {
      title: "あなたの",
      highlight: "エコシステム",
      subtitle:
        "HNT Solutions Co., Ltdと共に、次の革命的なデジタルプロジェクトを始めましょう。",
      btn: "お問い合わせ",
    },
    about: {
      badge: "ストーリー",
      title: "HNT",
      highlight: "Solutions",
      subtitle:
        "産業用デジタルエコシステムの未来を構築することに専念する、先見性のあるエンジニアとデザイナーの集団。",
      mission: {
        title: "私たちの使命",
        text: "成長と制度的信頼性を促進する、スケーラブルで重要なデジタル製品をグローバルブランドに提供すること。",
      },
      vision: {
        title: "私たちのビジョン",
        text: "2030年までに、エンタープライズグレードのデジタルアーキテクチャと先見性のあるデザインにおいて世界で最も信頼されるパートナーになること。",
      },
      valuesTitle: "コア",
      valuesHighlight: "バリュー",
      valuesItems: [
        {
          title: "イノベーション第一",
          desc: "最先端技術で限界を押し広げます。",
        },
        { title: "信頼性", desc: "24時間365日信頼できる重要なシステム。" },
        {
          title: "ユーザー中心",
          desc: "すべてのコードは最終ユーザーのためにあります。",
        },
        { title: "共創", desc: "お客様と共に歩み、帝国をスケールさせます。" },
      ],
      history: {
        title: "10年の歩み",
        text: "小さなデザインスタジオから、'不可能'なソリューションの構築に特化した本格的なデジタルエンジニアリング企業へと進化しました。",
      },
    },
    contact: {
      title: "一緒に",
      highlight: "始めましょう",
      subtitle:
        "HNT Solutionsの産業グレードのエンジニアリングで、デジタルプレゼンスを拡張しましょう。",
      station: {
        title: "ステーション詳細",
        protocol: "プロトコル",
        hotline: "ホットライン",
        hq: "本社",
        hours: "営業時間",
        hoursVal: "月 - 金, 09:00 - 18:00 (GMT+7)",
      },
      consult: {
        title: "直接相談",
        text: "即時の解決策をお探しですか？本日、チーフアーキテクトにご相談ください。",
        btn: "予約する",
      },
      form: {
        title: "送信プロトコル",
        name: "名前（フルネーム）",
        email: "メールアドレス",
        industry: "業界 / セクター",
        message: "メッセージ",
        placeholderName: "お名前",
        placeholderEmail: "連絡先メール",
        placeholderMsg: "プロジェクトの詳細やお問い合わせ",
        btn: "送信する",
      },
      map: "インタラクティブなマップを読み込み中...",
    },
    portfolio: {
      title: "私たちの",
      highlight: "エコシステム",
      subtitle:
        "HNT Solutions Co., Ltdが設計・エンジニアリングした産業グレードのデジタル製品コレクションをご覧ください。",
      showcaseTitle: "デジタルエコシステム",
      showcaseHighlight: "ショーケース",
      showcaseSubtitle: "私たちが手がけた重要な製品を垣間見る。",
      viewProject: "エコシステムを見る",
    },
  },

  zh: {
    nav: {
      services: "服务",
      caseStudy: "案例研究",
      pricing: "价格方案",
      blog: "博客",
      contact: "联系",
      cta: "立即咨询",
      services_groups: {
        web: {
          title: "Website",
          items: ["网页设计", "落地页"],
        },

        seo: {
          title: "SEO",
          items: ["全站SEO", "关键字SEO", "网站审计"],
        },
        ads: {
          title: "广告投放",
          items: ["Facebook 广告", "Google 广告", "TikTok 广告"],
        },
        advanced: {
          title: "营销与AI",
          items: ["自动化营销", "AI内容创作", "聊天机器人"],
        },
      },
      caseStudy_items: ["网页项目", "SEO成果", "广告系列"],
      pricing_items: ["网页设计", "SEO", "广告投放"],
      blog_items: ["网页知识", "SEO知识", "数字营销", "案例研究", "AI与自动化"],
    },
    webDesignDetail: {
      "corporate-website": {
        title: "企业/商务网站",
        tagline: "网站设计服务",
        description:
          "旨在帮助企业建立品牌并吸引客户的针对性平台。特别是对于广告，网站是访客转化为真实客户的地方。",
        features: [
          "易于管理",
          "成本优化",
          "收入增长",
          "建立信任",
          "客户实用工具",
          "有效营销",
        ],
      },
      "landing-page": {
        title: "落地页",
        tagline: "广告系列的优化落地页",
        description:
          "专门为关注单一目标而设计的独立网站，旨在提高将访客转化为客户或潜在客户的能力。",
      },
      "e-commerce-website": {
        title: "电子商务网站",
        tagline: "为客户提供便捷的购物体验",
        description: "帮助他们轻松找到、选择并支付他们想要购买的产品。",
      },
      common: {
        stats: [
          { label: "广告系列的优化落地页", value: "500+" },
          { label: "客户平均转化率", value: "+34%" },
          { label: "数字营销经验年数", value: "5+" },
          { label: "成功交付的项目数", value: "800+" },
        ],
        benefits: [
          {
            title: "易于管理",
            desc: "集成现代工具，帮助轻松跟踪订单和商业运营。",
          },
          {
            title: "成本优化",
            desc: "在有效连接客户的同时，节省营销、业务和管理成本。",
          },
          {
            title: "收入增长",
            desc: "24/7 在线销售，无需等待手动结账即可轻松在线支付。",
          },
          {
            title: "建立信任",
            desc: "通过公司网站确认您业务的专业性和声望。",
          },
          {
            title: "客户实用工具",
            desc: "集成的支持渠道帮助企业以最简单的方式为用户提供咨询。",
          },
          {
            title: "有效营销",
            desc: "向互联网上的许多潜在客户推广您的品牌、产品和服务。",
          },
        ],
        labels: {
          heroTitle: "网页设计",
          heroTitleSub: "服务",
          heroDesc1: "企业建立品牌和吸引客户的重要工具。",
          heroDesc2: "特别是对于广告，网站是访客转化为真实客户的地方。",
          heroBtn: "获取免费建议",
          benefitsTitle: "拥有专业现代网站的益处",
          pricingTitle: "服务价格表",
          pricingSubtitle: "HNT Solution 网页设计",
          testimonialsTitle: "客户评价",
          faqTitle: "常见问题 (FAQ)",
          packagesTitle: "网站设计服务",
          packagesDesc:
            "我们提供灵活多样的服务套餐，以满足您的所有需求和预算。",
          customBanner: "自定义网站设计",
          portfolioTitle: "专为我们客户设计的网站",
          finalQuoteBtn: "获取自定义设计咨询",
          contactTitle: "联系我们",
          contactSubtitle:
            "分享您的业务挑战，让 HNT Solution 为您打造完美的数字解决方案。",
          formName: "姓名",
          formPhone: "电话号码",
          formEmail: "电子邮件",
          formMessage: "内容 / 痛点",
          formBtn: "立即注册",
          formSending: "发送中...",
          formSuccess: "消息发送成功！",
          formError: "发送消息失败。请重试。",
        },
        packages: [
          {
            name: "基础型",
            price: "5,000,000 đ - 7,000,000 đ",
            desc: "基础信息网站设计",
            features: [
              "首年免费 .com 域名",
              "首年免费托管",
              "无限带宽",
              "SEO 优化网站",
              "免费 SSL 安装支持",
              "优化页面加载速度",
              "标准 UI/UX 界面",
              "优化电脑界面",
              "优化手机界面",
              "1年免费保修",
              "支持设置 1 个 Google 广告系列",
              "数据限制：3GB",
              "每月一次网站备份支持",
            ],
          },
          {
            name: "增强型",
            price: "8,000,000 đ - 10,000,000 đ",
            desc: "购物车网站设计，高级",
            features: [
              "首年免费 .com 域名",
              "首年免费托管",
              "无限带宽",
              "SEO 优化网站",
              "免费 SSL 安装支持",
              "优化页面加载速度",
              "标准 UI/UX 界面",
              "优化电脑界面",
              "优化手机界面",
              "1年免费保修",
              "支持设置 2 个 Google 广告系列",
              "数据限制：5GB",
              "支持发布 5 篇文章/产品",
              "每月一次网站备份支持",
            ],
          },
          {
            name: "专家型",
            price: "详细咨询",
            desc: "定制网站设计",
            features: [
              "首年免费 .com 域名",
              "首年免费托管",
              "无限带宽",
              "SEO 优化网站",
              "免费 SSL 安装支持",
              "优化页面加载速度",
              "标准 UI/UX 界面",
              "优化电脑界面",
              "优化手机界面",
              "1年免费保修",
              "支持设置 3 个 Google 广告系列",
              "数据限制：7GB",
              "支持发布 10 篇文章/产品",
              "每月一次网站备份支持",
            ],
          },
        ],
        testimonials: [
          {
            name: "陈伟",
            role: "房地产营销",
            avatar: "https://i.pravatar.cc/150?u=chen",
            rating: 5,
            content:
              "我们需要一个能够随品牌共同成长的网站，而团队的表现远远超出了预期。从用户体验到管理功能，一切都非常流畅和简洁。",
          },
          {
            name: "林芳",
            role: "运营经理",
            avatar: "https://i.pravatar.cc/150?u=lin",
            rating: 5,
            content:
              "与该团队的合作非常顺畅。他们了解我们的业务目标，并将其转化为一个现代化的响应式网站。上线仅两周后，潜在客户数量就翻了一番。",
          },
          {
            name: "王建国",
            role: "技术负责人",
            avatar: "https://i.pravatar.cc/150?u=wang",
            rating: 5,
            content:
              "这是我们合作过的最可靠的技术合作伙伴。交付速度快，代码整洁，支持也很到位。",
          },
        ],
        faq: [
          {
            question: "什么是网站？",
            answer: "网站是充当您业务在线办公室的网页集合。",
          },
          {
            question: "网站是否符合 SEO 标准？",
            answer: "所有 HNT Solution 的网站默认都根据 SEO 最佳实践构建。",
          },
          {
            question: "费用是多少？",
            answer: "费用取决于功能。我们提供适合各种预算的套餐。",
          },
          {
            question: "完成需要多长时间？",
            answer: "标准网站通常需要 7-15 天，复杂项目则需要更长时间。",
          },
          {
            question: "你们使用什么技术？",
            answer:
              "根据项目需求，我们使用 React、Next.js 或 WordPress 等现代技术栈。",
          },
        ],
      },
    },
    landingPageDetail: {
      heroTitleLine1: "设计",
      heroTitleLine2: "着陆页",
      heroSubtitle: "专业 - 转换优化",
      heroDesc:
        "通过专业的落地页增强客户体验。标准的UI/UX设计可以帮助您的企业提高收入。",
      heroBtn: "立即咨询",
      statsTitle: "HNT Solution 自豪地成为 Google 驻越南合作伙伴",
      stats: [
        { value: "6+", label: "年经验" },
        { value: "246+", label: "值得信赖的客户" },
        { value: "+34%", label: "转化率" },
        { value: "1000+", label: "成功的项目" },
      ],
      highlightsTitle: "HNT Solution的落地页有什么出众之处",
      highlightsSub: "了解为什么我们的落地页服务深受客户信赖。",
      highlights: [
        {
          title: "SEO 与速度优化",
          desc: "确保在 Google PageSpeed Insights 上达到标准的绿色分数，兼容所有设备。",
        },
        {
          title: "极具吸引力的文案",
          desc: "经验丰富的内容营销团队创造顶级的销售内容。",
        },
        {
          title: "UI/UX 优化",
          desc: "根据多维度的客户画像量身定制界面，提供流畅无瑕疵的体验。",
        },
      ],
      empathyTitle: "我们设身处地为客户着想",
      empathyContent: [
        { title: "行为分析", desc: "跟踪互动流程，优化每一个按钮和信息表单。" },
        { title: "颜色同步", desc: "遵循企业品牌设计规范的专业颜色系统。" },
        { title: "信息清晰", desc: "内容简明扼要，直接传递给用户的核心价值。" },
        { title: "布局合理", desc: "有目的的信息安排引导客户做出购买决定。" },
      ],
      portfolioTitle: "已部署的落地页项目",
      portfolioViewMore: "查看更多",
      whyUsTitle: "为什么选择我们",
      whyUsList: [
        {
          title: "Google 合作伙伴",
          desc: "Google 的官方合作伙伴，保证信誉，支持广告优化与评估。",
        },
        { title: "无限访问量", desc: "系统稳定，流量大也不用担心被封。" },
        {
          title: "WordPress 构建",
          desc: "易于编辑内容，安装营销插件，并升级为完整网站。",
        },
        { title: "SEO & 页面加载快", desc: "流畅的体验，节省广告成本。" },
        { title: "高安全性和可靠性", desc: "客户数据私密存储，独立于第三方。" },
        { title: "长期支持", desc: "团队时刻准备修改、升级并迅速处理问题。" },
      ],
      pricingTitle: "落地页设计报价表",
      pricingPackages: [
        {
          name: "基础版",
          price: "1,500,000₫",
          desc: "基于现有模板的基础落地页设计",
          features: [
            "首年免费主机",
            "无限带宽",
            "标准的 UI/UX 界面",
            "响应全设备",
            "1年免费保修",
          ],
        },
        {
          name: "标准版",
          price: "2,500,000₫",
          desc: "基于现有模板的高级落地页设计",
          features: [
            "首年免费主机",
            "无限带宽",
            "标准的 UI/UX 界面",
            "响应全设备",
            "1年免费保修",
            "支持搭建 1 个 Google 广告系列",
          ],
          isPopular: true,
        },
        {
          name: "高级版",
          price: "从 3,500,000₫ 起",
          desc: "根据要求定制落地页设计",
          features: [
            "首年免费主机",
            "无限带宽",
            "标准的 UI/UX 界面",
            "响应全设备",
            "1年免费保修",
            "支持搭建 1 个 Google 广告系列",
          ],
        },
      ],
      testimonialsTitle: "客户评价",
      testimonials: [
        {
          name: "Phạm Văn A",
          role: "ABC Corp 首席执行官",
          content: "顶级的设计质量，转化率比旧的着陆页提高了 40%。",
        },
        {
          name: "Trần Thị B",
          role: "市场经理",
          content: "加载速度极快，团队准时交付，工作方式专业。",
        },
        {
          name: "Hoàng C",
          role: "E-com 创始人",
          content: "色彩搭配非常引人注目，内容准确击中目标客户群体的痛点。",
        },
        {
          name: "Lê Đình D",
          role: "销售总监",
          content: "注册表单优化得很好，客户信息迅速流入系统，流失率大幅下降。",
        },
        {
          name: "Mai Tuyết Nhung",
          role: "水疗中心老板",
          content:
            "极其流畅的界面，颜色完美符合品牌形象。由于专业的着陆页，我的水疗中心在今年夏天订单激增。",
        },
        {
          name: "Nguyễn V",
          role: "房地产专家",
          content:
            "图片预加载快，客户点击进去查看项目的完整法律细节非常方便。着陆页真的带来了强劲的效果。",
        },
      ],
      faqTitle: "FAQ - 常见问题",
      faqs: [
        {
          question: "完成着陆页需要多长时间？",
          answer: "完成时间取决于要求，通常需要 3 到 5 个工作日。",
        },
        {
          question: "交接后我可以自己编辑内容吗？",
          answer:
            "是的，HNT Solution 将交接源代码或 CMS，以便您自己轻松更改内容。",
        },
        {
          question: "我们的着陆页可以扩展为一个完整的网站吗？",
          answer:
            "是的，该系统具有开放的结构，可轻松升级为具有完整功能的静态或动态网站。",
        },
        {
          question: "页面能保证快速加载吗？",
          answer:
            "绝对可以。我们遵循优化图片、CSS 和源代码的最佳实践，以确保在 Google Speed 上获得绿色分数。",
        },
        {
          question: "着陆页是否进行了 SEO 优化？",
          answer:
            "是的，我们代理机构的每个着陆页项目都带有页面 SEO 优化：H1-H6 标签、元数据、清晰的站点地图。",
        },
      ],
    },
    footer: {
      tagline:
        "HNT Solutions Co., Ltd 提供关键任务数字产品，将精美设计与工业级性能完美融合。",
      solutions: {
        title: "解决方案",
        items: ["网页设计", "架构设计", "SEO策略", "移动应用"],
      },
      company: {
        title: "公司",
        items: ["关于 HNT", "生态系统", "加入我们", "联系我们"],
      },
      legal: { title: "法律", items: ["隐私政策", "服务条款", "Cookie 政策"] },
      copyright: "版权所有。",
      status: "系统运行正常",
    },
    hero: {
      badge: "顶尖数字代理机构",
      line1: "主导。",
      line2: "自动化。",
      line3: "扩展。",
      subtitle:
        "HNT Solutions Co., Ltd 通过高转化率的网页设计、顶尖的SEO战略和强大的自动化工具，为您带来绝对的市场主导地位。",
      cta1: "开始合作",
      cta2: "查看解决方案",
    },
    features: {
      label: "HNT 优势",
      title: "为",
      highlight: "卓越而生",
      subtitle:
        "我们不仅构建网站，更打造让企业在现代市场中获得不公平竞争优势的数字平台。",
      items: [
        {
          title: "卓越架构",
          desc: "构建可扩展、韧性强的系统，从微服务到全球CDN部署，为长期增长而设计。",
        },
        {
          title: "极速性能",
          desc: "精心优化的代码库，确保亚秒级加载时间和完美的60fps动画。",
        },
        {
          title: "企业级安全",
          desc: "军事级加密和强大的安全协议集成到应用程序的每个层次。",
        },
        {
          title: "质量保证",
          desc: "严格的自动化测试和多设备QA协议，保证无瑕疵的生产发布。",
        },
      ],
    },
    stats: [
      { value: "100+", label: "交付产品" },
      { value: "45+", label: "全球合作伙伴" },
      { value: "99.9%", label: "正常运行时间SLA" },
      { value: "0", label: "安全漏洞" },
    ],
    services: {
      title: "战略数字",
      highlight: "能力",
      subtitle: "我们通过世界级的工程和远见卓识的设计解决复杂的商业挑战。",
      items: [
        {
          title: "全球品牌",
          desc: "打造在全球市场产生共鸣并建立企业权威的视觉识别。",
        },
        {
          title: "企业架构",
          desc: "构建具有分布式系统和实时可靠性的关键任务Web应用程序。",
        },
        {
          title: "SEO生态系统",
          desc: "开发占领搜索引擎结果的综合有机增长框架。",
        },
        {
          title: "性能营销",
          desc: "为专注于全球扩张的工业和技术品牌提供数据驱动的需求生成。",
        },
        { title: "移动生态系统", desc: "与云原生后端同步的无缝跨平台体验。" },
        {
          title: "技术运营",
          desc: "为HNT Solutions合作伙伴提供持续维护和基础设施扩展。",
        },
      ],
    },
    integrations: {
      title: "接入您的数据与",
      highlight: "500+ 集成",
      subtitle:
        "使用预构建连接器连接领先企业平台，为其他一切提供自定义API集成。",
    },
    techShowcase: {
      title: "需要时编码，",
      highlight: "不需要时用UI",
      subtitle:
        "其他代理商将您限制在模板或无法维护的自定义代码中。HNT Solutions同时给您两者的最佳选择。",
      codeTitle: "原生工程",
      codeDesc: "在复杂业务逻辑需要的地方编写健壮的TypeScript、Python或Go。",
      features: [
        {
          num: "01",
          title: "快速行动，不破坏任何东西。",
          desc: "重新运行单个模块，重放真实数据，评估AI精度——而不触及整个管道。",
        },
        {
          num: "02",
          title: "实时可视性",
          desc: "在并排视图中查看输入、输出和执行步骤。无需再进行黑盒调试。",
        },
        {
          num: "03",
          title: "精美界面",
          desc: "为最大留存率设计的高保真UI/UX。每个组件像素完美，每个交互令人愉悦。",
        },
      ],
      tags: ["闪电性能", "默认安全", "零停机部署", "Git工作流", "多栈支持"],
    },
    process: {
      title: "设计",
      highlight: "流程",
      subtitle: "我们打造世界级数字产品的系统化方法。",
      steps: [
        {
          title: "咨询与调研",
          text: "与客户进行直接调研和交流，把握项目的核心要素。",
        },
        {
          title: "规划与草图",
          text: "构建网站结构、页面布局和功能需求的草图（线框图）；确定必要元素。",
        },
        {
          title: "设计实施",
          text: "进行UX/UI设计、编程以及网站功能的开发。",
        },
        {
          title: "测试与验证",
          text: "在不同浏览器和设备上测试网站，以确保兼容性、加载速度和功能完整。",
        },
        {
          title: "交付与上线",
          text: "完成第4步后向客户交付网站并正式启动项目。",
        },
      ],
    },
    enterprise: {
      badge: "企业就绪",
      title: "可靠. 可扩展. 安全.",
      subtitle:
        "部署在您的基础设施或我们的基础设施上。HNT Solutions的安全和治理功能让您在不失控的情况下构建、监控和扩展。",
      btn1: "探索HNT企业版",
      btn2: "联系销售",
      features: [
        {
          title: "安全与控制",
          desc: "完整本地部署、SSO SAML与LDAP、加密密钥库、版本控制、RBAC权限管理。",
        },
        {
          title: "可观测性与透明度",
          desc: "审计日志与SIEM流式传输、工作流历史、实时告警、使用情况仪表板。",
        },
        {
          title: "开发者体验",
          desc: "基于Git的控制、隔离环境、多用户工作流、工作流差异对比。",
        },
        { title: "AI治理", desc: "人在回路中、护栏、评估、偏见检测协议。" },
      ],
      quoteText:
        '"理念是组织中的每个人都可以使用HNT来管理数据检索或复杂的多节点数据转换。"',
      quoteRole: "高级产品经理",
      quoteCta: "查看案例研究",
    },
    caseStudies: {
      title: "案例",
      highlight: "研究",
      subtitle: "了解行业领导者如何利用HNT Solutions解决复杂的架构挑战。",
      readMore: "阅读案例研究",
      feedbackTitle: "合作伙伴评价",
      cases: [
        {
          company: "FinTech Neo",
          title:
            "FinTech Neo如何构建可扩展的核心银行生态系统并将部署速度提升40%",
          author: "Sarah Jenkins",
          role: "技术副总裁",
        },
        {
          company: "MedCore Health",
          title: "HNT如何现代化MedCore的记录处理，确保100%合规和零停机",
          author: "詹姆斯·威尔逊博士",
          role: "首席技术官",
        },
      ],
      feedbacks: [
        {
          quote:
            "HNT Solutions不只是构建了我们的软件，而是重新设计了我们整个数字工作流程。ROI在第一个季度就很明显了。",
          author: "Elena Rodriguez",
          company: "Global Retail Solutions",
        },
        {
          quote:
            "他们的DevOps architecture无与伦比。我们现在处理10倍的流量，没有任何性能问题。",
          author: "Marcus Chen",
          company: "Streamline Media",
        },
        {
          quote:
            "变革性的数字工程。他们的代码库如此干净和可扩展，以至于我们的内部团队难以置信。",
          author: "Sophia Laurent",
          company: "NextGen Logix",
        },
        {
          quote:
            "从AI集成到强大的后端，HNT始终超越期望。一个不可思议的合作伙伴。",
          author: "David O. Reynolds",
          company: "Hyperion Finance",
        },
        {
          quote: "我们唯一信任关键基础设施的开发代理商。可靠且完全安全。",
          author: "Emma Zhang",
          company: "MedCore Health",
        },
        {
          quote:
            "与HNT合作感觉就像在公司内部拥有硅谷精英技术团队。交付始终完美。",
          author: "Thomas Wright",
          company: "E-Commerce Elevate",
        },
      ],
    },
    cta: {
      title: "准备好转型您的",
      highlight: "数字生态",
      subtitle: "与HNT Solutions Co., Ltd合作，开启您下一个突破性数字项目。",
      btn: "立即联系",
    },
    about: {
      badge: "我们的故事",
      title: "HNT",
      highlight: "Solutions",
      subtitle:
        "由富有远见的工程师和设计师组成的团队，致力于构建工业级数字生态系统的未来。",
      mission: {
        title: "我们的使命",
        text: "为全球品牌提供可扩展的关键任务数字产品，推动增长并建立机构级的可靠性。",
      },
      vision: {
        title: "我们的愿景",
        text: "到2030年，成为全球最受信任的企业级数字架构和前瞻性设计合作伙伴。",
      },
      valuesTitle: "核心",
      valuesHighlight: "价值",
      valuesItems: [
        { title: "创新优先", desc: "利用前沿技术挑战各种可能。" },
        { title: "可靠性", desc: "您可以 24/7 依赖的关键任务系统。" },
        { title: "以用户为中心", desc: "每一行代码都是为最终用户服务的。" },
        { title: "共同创造", desc: "我们与您合作，扩展商业帝国。" },
      ],
      history: {
        title: "十年的跨越",
        text: "从一个小型设计工作室发展成为全方位的数字工程公司，专门构建“不可能”的解决方案。",
      },
    },
    contact: {
      title: "让我们",
      highlight: "建立联系",
      subtitle: "利用 HNT Solutions 的工业级工程能力，扩展您的数字版图。",
      station: {
        title: "联络详情",
        protocol: "联络协议",
        hotline: "热线电话",
        hq: "总部地址",
        hours: "运营时间",
        hoursVal: "周一 - 周五, 09:00 - 18:00 (GMT+7)",
      },
      consult: {
        title: "直接咨询",
        text: "正在寻找即时解决方案？立即与我们的总架构师沟通。",
        btn: "预约咨询",
      },
      form: {
        title: "传输协议",
        name: "全名",
        email: "电子邮箱",
        industry: "所属行业",
        message: "操作信息",
        placeholderName: "您的姓名",
        placeholderEmail: "联系邮箱",
        placeholderMsg: "项目详情或咨询内容",
        btn: "发送传输",
      },
      map: "交互式地图加载中...",
    },
    portfolio: {
      title: "我们的",
      highlight: "生态系统",
      subtitle:
        "探索由 HNT Solutions Co., Ltd 设计和制造的一系列工业级数字产品。",
      showcaseTitle: "数字生态",
      showcaseHighlight: "展示",
      showcaseSubtitle: "一窥我们打造的关键任务产品。",
      viewProject: "查看案例",
    },
    seoDetail: {
      hero: {
        title: "全案 SEO 服务",
        highlight: "霸屏谷歌搜索",
        desc: "突破性 SEO 解决方案，助力您的企业网站在世界第一搜索引擎中获得持续高排名，实现客户与营收的双重增长。",
        btnPrimary: "免费咨询",
        btnSecondary: "服务方案",
      },
      stats: [
        { val: "300%", lab: "ROI 增长" },
        { val: "2M+", lab: "自然流量" },
        { val: "500+", lab: "前三关键词" },
        { val: "98%", lab: "客户留存" },
      ],
      benefits: [
        {
          title: "全面网站审计",
          desc: "深度分析系统架构，修复技术错误，助力 Googlebot 快速抓取并优化用户体验。",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit.png",
        },
        {
          title: "战略关键词研究",
          desc: "挖掘高转化关键词，洞察目标客户搜索意图，构建战略性内容体系。",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords.png",
        },
        {
          title: "技术 SEO 优化",
          desc: "优化加载速度、结构化数据和移动端友好度，确保 Google 偏爱您的网站。",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech.png",
        },
        {
          title: "优质内容营销策略",
          desc: "创作符合 E-E-A-T 标准的高价值内容，提升品牌权威性与转化率。",
          img: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content.png",
        },
      ],
      packages: [
        {
          name: "SEO 初创型",
          price: "$300/月起",
          features: ["15-30个关键词", "技术审计", "每月4篇博客"],
        },
        {
          name: "SEO 增长型",
          price: "$600/月起",
          features: ["50-100个关键词", "外链建设", "每月10篇博客"],
          popular: true,
        },
        {
          name: "SEO 突破型",
          price: "需咨询",
          features: ["市场垄断策略", "视频脚本创作", "24/7 技术支持"],
        },
      ],
      processTitle: "<span>SEO服务</span>是如何实施的？",
      processSteps: [
        {
          title: "接收信息与需求",
          desc: "收集客户产品和服务信息，明确具体需求和目标，制定合适的方案。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit-active.png",
        },
        {
          title: "网站分析与策略建议",
          desc: "调研产品和目标客户，研究并建议最匹配的关键词及网站现状分析。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech-active.png",
        },
        {
          title: "SEO 报价",
          desc: "根据关键词和策略，提供包含KPI承诺和详细成本的报价单。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords-active.png",
        },
        {
          title: "关键词研究",
          desc: "深入研究关键词，筛选出具备高价值流量潜力的关键词序列。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content-active.png",
        },
        {
          title: "签署合同",
          desc: "在达成成本和报价一致后，正式签署SEO服务合同并启动项目。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-audit-active.png",
        },
        {
          title: "制定计划",
          desc: "设计完整的实施计划，包括工作摘要和详细的时间进度表。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total-active.png",
        },
        {
          title: "项目实施",
          desc: "执行关键词调研、内容创作、技术审计、站内及站外SEO优化。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-tech-active.png",
        },
        {
          title: "报告与衡量",
          desc: "发送定期报告，包含排名数据、自然流量、转化率及跳出率等指标。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-keywords-active.png",
        },
        {
          title: "结项与交付",
          desc: "当关键词达标后，交付整个项目及系统，并提供结果维护培训。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-content-active.png",
        },
        {
          title: "排名保障与维护",
          desc: "提供至少2个月的排名保障期，确保SEO效果的可持续性与稳定性。",
          icon: "https://adsdigi.com/wp-content/uploads/2025/09/seo-total-active.png",
        },
      ],
      contactTitle: "免费获取 SEO 方案",
      contactSub: "我们将审计您的网站并提供针对性的发展路线图。",
      faqTitle: "SEO - 常见问题解答",
      faqs: [
        {
          question: "多久能看到成效？",
          answer: "视行业竞争程度而定，通常需要3-6个月。",
        },
        {
          question: "SEO 的效果持久吗？",
          answer:
            "是的，即便停止广告投放，自然流量依然会持续为您带来精准客户。",
        },
      ],
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "vi";
  });

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

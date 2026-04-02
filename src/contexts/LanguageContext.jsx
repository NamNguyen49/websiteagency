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
          title: "Web Design",
          items: [
            "Corporate Website",
            "E-commerce Website",
            "Landing Page",
            "UI/UX Design",
          ],
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
          heroDesc1: "An important tool for businesses to build their brand and attract customers.",
          heroDesc2: "Especially for ads, a website is where visitors convert into real customers.",
          heroBtn: "Get Free Advice",
          benefitsTitle: "Benefits of owning a Professional - Modern Website",
          pricingTitle: "Service Price List",
          pricingSubtitle: "HNT Solution Website Design",
          testimonialsTitle: "Customer Testimonials",
          faqTitle: "FAQ - Frequently Asked Questions",
          packagesTitle: "Website Design Services",
          packagesDesc: "We provide flexible and diverse service packages to meet all your needs and budget",
          customBanner: "Custom Website Design",
          portfolioTitle: "Websites designed specifically for our clients",
          finalQuoteBtn: "Get Custom Design Consulting",
          contactTitle: "Contact Us",
          contactSubtitle: "Share your business challenges, and let HNT Solution craft the perfect digital cure.",
          formName: "Full Name",
          formPhone: "Phone Number",
          formEmail: "Email Address",
          formMessage: "Message / Pain Points",
          formBtn: "REGISTER NOW",
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
            content: "We needed a website that could grow with our brand, and the team far exceeded expectations. From UX to admin features, everything is smooth and clean. Post-launch, bounce rate dropped 40%."
          },
          {
            name: "Sarah Jenkins",
            role: "Marketing Manager",
            avatar: "https://i.pravatar.cc/150?u=sarah",
            rating: 5,
            content: "Working with this team was seamless. They understood our business goals and turned them into a modern, responsive site. Leads doubled just 2 weeks after launch."
          },
          {
            name: "David Wilson",
            role: "Tech Lead",
            avatar: "https://i.pravatar.cc/150?u=david",
            rating: 5,
            content: "The most reliable tech partner we've had. Fast delivery, clean code, and great support."
          }
        ],
        faq: [
          {
            question: "What is a website?",
            answer: "A website is a collection of web pages acting as your business's online office."
          },
          {
            question: "Is the website SEO friendly?",
            answer: "All HNT Solution websites are built with SEO best practices by default."
          },
          {
            question: "How much does it cost?",
            answer: "Costs vary by features. We have packages fitting all budgets."
          },
          {
            question: "How long does it take?",
            answer: "Typically 7-15 days for standard sites, longer for complex projects."
          },
          {
            question: "What technology do you use?",
            answer: "We use modern stacks like React, Next.js, or WordPress depending on project needs."
          }
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
      cta: "Nhận tư vấn",
      services_groups: {
        web: {
          title: "Thiết kế website",
          items: [
            "Website doanh nghiệp",
            "Website bán hàng",
            "Landing page",
            "UI/UX Design",
          ],
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
          heroDesc1: "Công cụ quan trọng giúp doanh nghiệp xây dựng thương hiệu và thu hút khách hàng.",
          heroDesc2: "Đặc biệt đối với quảng cáo, website là nơi chuyển đổi khách truy cập thành khách hàng thực sự.",
          heroBtn: "Nhận tư vấn ngay",
          benefitsTitle: "Lợi ích của việc sở hữu Website Chuyên Nghiệp - Hiện Đại",
          pricingTitle: "Bảng Giá Dịch Vụ",
          pricingSubtitle: "Thiết Kế Website HNT Solution",
          testimonialsTitle: "Đánh Giá Từ Khách Hàng",
          faqTitle: "FAQ - Câu Hỏi Thường Gặp",
          packagesTitle: "Dịch Vụ Thiết Kế Website",
          packagesDesc: "Chúng tôi cung cấp các gói dịch vụ linh hoạt và đa dạng để đáp ứng mọi nhu cầu và ngân sách của bạn",
          customBanner: "Thiết Kế Website Theo Yêu Cầu",
          portfolioTitle: "Các website được thiết kế theo yêu cầu của khách hàng",
          finalQuoteBtn: "Nhận Tư vấn thiết kế theo yêu cầu",
          contactTitle: "Liên hệ với Chúng tôi",
          contactSubtitle: "Hãy share những 'nỗi đau' của bạn để HNT Solution 'chữa lành' chúng.",
          formName: "Họ và tên",
          formPhone: "Số điện thoại",
          formEmail: "Email",
          formMessage: "Nội dung",
          formBtn: "ĐĂNG KÝ NGAY",
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
            content: "Chúng tôi cần một website có thể phát triển cùng thương hiệu, và đội ngũ đã làm vượt xa mong đợi. Từ thiết kế trải nghiệm người dùng đến chức năng quản trị, mọi thứ đều mượt mà và tinh gọn. Sau khi triển khai, tỷ lệ thoát trang giảm 40% và lượng tương tác của khách hàng tăng đáng kể."
          },
          {
            name: "Nguyễn Văn Luật",
            role: "Marketing BĐS",
            avatar: "https://i.pravatar.cc/150?u=luat",
            rating: 5,
            content: "Làm việc với đội ngũ này rất trôi chảy. Họ thật sự hiểu mục tiêu kinh doanh và biến nó thành một website hiện đại, chuẩn responsive. Giao diện đẹp, dễ dùng và mang lại hiệu quả rõ rệt. Chỉ sau 2 tuần ra mắt, số lượng khách hàng gửi form liên hệ đã tăng gấp đôi, đồng thời mình nhận được rất nhiều lời khen từ đối tác."
          },
          {
            name: "Dương Công Thắng",
            role: "Marketing BĐS",
            avatar: "https://i.pravatar.cc/150?u=thang",
            rating: 5,
            content: "Website được thiết kế cực kỳ hiện đại, tối ưu load rất nhanh. Đội ngũ hỗ trợ nhiệt tình, giải quyết mọi yêu cầu của tôi ngay lập tức. Đây là đối tác công nghệ đáng tin cậy nhất mà tôi từng hợp tác."
          }
        ],
        faq: [
          {
            question: "Website là gì?",
            answer: "Website là một tập hợp các trang web bao gồm văn bản, hình ảnh, video... nằm trên một tên miền, đóng vai trò như một văn phòng trực tuyến của doanh nghiệp."
          },
          {
            question: "Website có chuẩn SEO không?",
            answer: "Tất cả website tại HNT Solution đều được thiết kế tối ưu cấu trúc chuẩn SEO, giúp công cụ tìm kiếm dễ dàng thu thập dữ liệu và xếp hạng cao."
          },
          {
            question: "Chi phí làm website là bao nhiêu?",
            answer: "Chi phí tùy thuộc vào tính năng và quy mô dự án. Chúng tôi có các gói từ cơ bản đến cao cấp phù hợp với mọi ngân sách doanh nghiệp."
          },
          {
            question: "Thời gian hoàn thành website mất bao lâu?",
            answer: "Thông thường từ 7 - 15 ngày đối với landing page và website doanh nghiệp cơ bản, và lâu hơn đối với dự án phức tạp."
          },
          {
            question: "Website dùng mã nguồn gì?",
            answer: "Chúng tôi sử dụng các công nghệ hiện đại nhất như React, Next.js, Node.js hoặc WordPress tùy theo nhu cầu và tính chất của dự án."
          }
        ],
      },
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
          title: "Webデザイン",
          items: [
            "コーポレートサイト",
            "ECサイト制作",
            "ランディングページ",
            "UI/UX設計",
          ],
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
          heroDesc1: "ビジネスがブランドを構築し、顧客を引き付けるための重要なツール。",
          heroDesc2: "特に広告において、ウェブサイトは訪問者が実際の顧客に転換する場所です。",
          heroBtn: "無料相談を受ける",
          benefitsTitle: "プロフェッショナルでモダンなウェブサイトを所有するメリット",
          pricingTitle: "サービス価格表",
          pricingSubtitle: "HNT Solution ウェブサイト設計",
          testimonialsTitle: "お客様の声",
          faqTitle: "よくある質問 (FAQ)",
          packagesTitle: "ウェブサイトデザインサービス",
          packagesDesc: "ニーズや予算に合わせて、柔軟で多様なサービスパッケージを提供します。",
          customBanner: "カスタムウェブサイトデザイン",
          portfolioTitle: "クライアントのために特別に設計されたウェブサイト",
          finalQuoteBtn: "カスタムデザインのコンサルティングを受ける",
          contactTitle: "お問い合わせ",
          contactSubtitle: "ビジネスの課題を共有してください。HNT Solution が最適なデジタルソリューションを作成します。",
          formName: "氏名",
          formPhone: "電話番号",
          formEmail: "メールアドレス",
          formMessage: "内容 / お悩み",
          formBtn: "今すぐ登録",
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
            content: "私たちのブランドと共に成長できるウェブサイトが必要でしたが、チームは期待をはるかに超えてくれました。UXから管理機能まで、すべてがスムーズでクリーンです。"
          },
          {
            name: "田中 美恵子",
            role: "マーケティングマネージャー",
            avatar: "https://i.pravatar.cc/150?u=tanaka",
            rating: 5,
            content: "このチームとの仕事はシームレスでした。彼らは私たちのビジネス目標を理解し、それをモダンでレスポンシブなサイトに変えてくれました。ローンチからわずか2週間でリードが倍増しました。"
          },
          {
            name: "鈴木 一郎",
            role: "技術リーダー",
            avatar: "https://i.pravatar.cc/150?u=suzuki",
            rating: 5,
            content: "これまでで最も信頼できるテックパートナーです。迅速な納品、クリーンなコード、そして素晴らしいサポート。"
          }
        ],
        faq: [
          {
            question: "ウェブサイトとは何ですか？",
            answer: "ウェブサイトは、ビジネスのオンラインオフィスとして機能するウェブページの集合体です。"
          },
          {
            question: "ウェブサイトはSEOに対応していますか？",
            answer: "HNT Solutionのすべてのウェブサイトは、デフォルトでSEOのベストプラクティスに基づいて構築されています。"
          },
          {
            question: "費用はどのくらいかかりますか？",
            answer: "費用は機能によって異なります。あらゆる予算に合わせたパッケージをご用意しています。"
          },
          {
            question: "完成までにどのくらいかかりますか？",
            answer: "通常、標準的なサイトの場合は7〜15日、複雑なプロジェクトの場合はそれ以上かかります。"
          },
          {
            question: "どのような技術を使用していますか？",
            answer: "プロジェクトのニーズに応じて、React、Next.js、WordPressなどのモダンなスタックを使用します。"
          }
        ],
      },
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
      viewProject: "プロジェクトを見る",
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
          title: "网页设计",
          items: ["企业网站", "电子商务网站", "落地页", "UI/UX设计"],
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
          packagesDesc: "我们提供灵活多样的服务套餐，以满足您的所有需求和预算。",
          customBanner: "自定义网站设计",
          portfolioTitle: "专为我们客户设计的网站",
          finalQuoteBtn: "获取自定义设计咨询",
          contactTitle: "联系我们",
          contactSubtitle: "分享您的业务挑战，让 HNT Solution 为您打造完美的数字解决方案。",
          formName: "姓名",
          formPhone: "电话号码",
          formEmail: "电子邮件",
          formMessage: "内容 / 痛点",
          formBtn: "立即注册",
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
            content: "我们需要一个能够随品牌共同成长的网站，而团队的表现远远超出了预期。从用户体验到管理功能，一切都非常流畅和简洁。"
          },
          {
            name: "林芳",
            role: "运营经理",
            avatar: "https://i.pravatar.cc/150?u=lin",
            rating: 5,
            content: "与该团队的合作非常顺畅。他们了解我们的业务目标，并将其转化为一个现代化的响应式网站。上线仅两周后，潜在客户数量就翻了一番。"
          },
          {
            name: "王建国",
            role: "技术负责人",
            avatar: "https://i.pravatar.cc/150?u=wang",
            rating: 5,
            content: "这是我们合作过的最可靠的技术合作伙伴。交付速度快，代码整洁，支持也很到位。"
          }
        ],
        faq: [
          {
            question: "什么是网站？",
            answer: "网站是充当您业务在线办公室的网页集合。"
          },
          {
            question: "网站是否符合 SEO 标准？",
            answer: "所有 HNT Solution 的网站默认都根据 SEO 最佳实践构建。"
          },
          {
            question: "费用是多少？",
            answer: "费用取决于功能。我们提供适合各种预算的套餐。"
          },
          {
            question: "完成需要多长时间？",
            answer: "标准网站通常需要 7-15 天，复杂项目则需要更长时间。"
          },
          {
            question: "你们使用什么技术？",
            answer: "根据项目需求，我们使用 React、Next.js 或 WordPress 等现代技术栈。"
          }
        ],
      },
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
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

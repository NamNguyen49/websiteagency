import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  /* ───────────── ENGLISH ───────────── */
  en: {
    nav: { services: 'Services', portfolio: 'Portfolio', company: 'Company', contact: 'Contact', cta: "Let's Talk" },
    footer: {
      tagline: 'Synvia Solutions Corp delivers mission-critical digital products that combine stunning design with industrial-grade performance.',
      solutions: { title: 'Solutions', items: ['Web Design', 'Architecture', 'SEO Strategy', 'Mobile Apps'] },
      company: { title: 'Company', items: ['About SVS', 'Ecosystem', 'Careers', 'Contact'] },
      legal: { title: 'Legal', items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
      copyright: 'All rights reserved.',
      status: 'Systems Operational'
    },
    hero: {
      badge: 'Innovation & Scale Solution',
      line1: 'Design. Develop.',
      line2: 'Accelerate',
      line3: 'Growth.',
      subtitle: 'Synvia Solutions Corp delivers mission-critical digital products that combine stunning design with industrial-grade performance.',
      cta1: 'Start Collaboration',
      cta2: 'View Ecosystem',
    },
    features: {
      label: 'The SVS Advantage',
      title: 'Engineered for',
      highlight: 'Dominance',
      subtitle: "We don't just build websites; we engineer digital platforms that give your business an unfair advantage in the modern market.",
      items: [
        { title: 'Architectural Excellence', desc: 'We build scalable, resilient systems designed for long-term growth. From microservices to global CDN deployments.' },
        { title: 'Lightning Performance', desc: 'Meticulously optimized codebases ensuring sub-second load times and flawless 60fps animations.' },
        { title: 'Enterprise Security', desc: 'Military-grade encryption and robust security protocols integrated into every layer of our applications.' },
        { title: 'Quality Assurance', desc: 'Rigorous automated testing and multi-device QA protocols guarantee flawless production releases.' },
      ],
    },
    stats: [
      { value: '100+', label: 'Products Shipped' },
      { value: '45+',  label: 'Global Partners' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '0',    label: 'Security Breaches' },
    ],
    services: {
      title: 'Strategic Digital',
      highlight: 'Competencies',
      subtitle: 'We solve complex business challenges with world-class engineering and visionary design.',
      items: [
        { title: 'Global Branding', desc: 'Engineering visual identities that resonate across global markets and establish corporate authority.' },
        { title: 'Enterprise Architecture', desc: 'Building mission-critical web applications with distributed systems and real-time reliability.' },
        { title: 'SEO Ecosystems', desc: 'Developing comprehensive organic growth frameworks that dominate search engine results.' },
        { title: 'Performance Marketing', desc: 'Data-driven demand generation for industrial and technology brands scaling globally.' },
        { title: 'Mobile Ecosystems', desc: 'Seamless cross-platform experiences synchronized with cloud-native backends.' },
        { title: 'Tech Operations', desc: 'Continuous maintenance and infrastructure scaling for SVS Corp partners.' },
      ]
    },
    integrations: {
      title: 'Plug into your own data &',
      highlight: '500+ integrations',
      subtitle: 'Use pre-built connectors for leading enterprise platforms. Custom API integrations for everything else.',
    },
    techShowcase: {
      title: 'Code when you need it,',
      highlight: "UI when you don't",
      subtitle: 'Other agencies limit you to templates or unmaintainable custom code. With SVS Corp, you get the best of both worlds.',
      codeTitle: 'Native Engineering',
      codeDesc: 'Write robust TypeScript, Python, or Go exactly where complex business logic demands it.',
      features: [
        { num: '01', title: 'Move fast. Break nothing.', desc: 'Re-run single modules, replay real data, evaluate AI accuracy — without touching your entire pipeline.' },
        { num: '02', title: 'Real-time Visibility', desc: 'See inputs, outputs, and execution steps side-by-side. No more black-box debugging.' },
        { num: '03', title: 'Stunning Interfaces', desc: 'High-fidelity UI/UX engineered for maximum retention. Every component pixel-perfect.' },
      ],
      tags: ['Lightning performance', 'Security by default', 'Zero-downtime deploys', 'Git-based workflows', 'Multi-stack support'],
    },
    process: {
      title: 'The Delivery',
      highlight: 'Matrix',
      subtitle: 'Our systematic approach to engineering world-class digital products.',
      steps: [
        { title: 'Discovery & Blueprint', text: 'Deep architectural analysis and strategic planning mapping every touchpoint of your digital ecosystem.' },
        { title: 'UI/UX Engineering', text: 'Crafting high-conversion, award-winning interfaces designed for maximum user retention.' },
        { title: 'Fullstack Development', text: 'Deploying robust, scalable codebases utilizing modern, future-proof technologies.' },
        { title: 'Testing & Launch', text: 'Rigorous QA and seamless deployment protocols guaranteeing a flawless go-live.' },
      ],
    },
    enterprise: {
      badge: 'Enterprise-ready',
      title: 'Reliable. Scalable. Secure.',
      subtitle: "Deploy on your infra or ours. SVS Corp's security and governance features let you build, monitor, and scale without losing control.",
      btn1: 'Explore SVS for enterprise',
      btn2: 'Talk to sales',
      features: [
        { title: 'Security and control', desc: 'Fully on-prem option, SSO SAML, and LDAP, encrypted secret stores, version control, RBAC permissions.' },
        { title: 'Observability and transparency', desc: 'Audit logs and log streaming to your SIEM, workflow history, real-time alerts, usage dashboards.' },
        { title: 'Developer experience', desc: 'Git-based control, isolated environments, multi-user workflows, workflow diffs.' },
        { title: 'AI governance', desc: 'Human-in-the-loop, guardrails, evaluations, bias detection protocols.' },
      ],
      quoteText: '"The idea is that everybody in the organization can use SVS to manage data retrieval or complex multi-node data transformation."',
      quoteRole: 'Senior Product Manager',
      quoteCta: 'See the case',
    },
    caseStudies: {
      title: 'Case',
      highlight: 'Studies',
      subtitle: 'Discover how industry leaders leverage SVS Corp to solve complex architectural challenges.',
      readMore: 'Read Case Study',
      feedbackTitle: 'What our partners say',
      cases: [
        { company: 'FinTech Neo', title: 'How FinTech Neo built a scalable core banking ecosystem and accelerated deployment by 40%', author: 'Sarah Jenkins', role: 'VP of Engineering' },
        { company: 'MedCore Health', title: "How SVS modernized MedCore's record processing, ensuring 100% compliance and zero downtime", author: 'Dr. James Wilson', role: 'Chief Technology Officer' },
      ],
      feedbacks: [
        { quote: "SVS Corp didn't just build our software; they re-engineered our entire digital workflow. The ROI was evident within the first quarter.", author: 'Elena Rodriguez', company: 'Global Retail Solutions' },
        { quote: "Their DevOps architecture is unmatched. We handle 10x the traffic now without a single performance hiccup.", author: 'Marcus Chen', company: 'Streamline Media' },
        { quote: "Transformative digital engineering. Their codebase is so clean and scalable, our internal team couldn't believe it.", author: 'Sophia Laurent', company: 'NextGen Logix' },
        { quote: 'From AI integrations to robust backends, SVS consistently delivers beyond expectations. An incredible partner.', author: 'David O. Reynolds', company: 'Hyperion Finance' },
        { quote: "The only development agency we trust with our mission-critical infrastructure. Reliable and completely secure.", author: 'Emma Zhang', company: 'MedCore Health' },
        { quote: 'Working with SVS feels like having an elite Silicon Valley tech team in-house. Delivery is always flawless.', author: 'Thomas Wright', company: 'E-Commerce Elevate' },
      ],
    },
    cta: {
      title: 'Ready to transform your',
      highlight: 'ecosystem',
      subtitle: 'Partner with Synvia Solutions Corp for your next breakthrough digital project.',
      btn: 'Connect With Us',
    },
    about: {
      badge: 'Our Story',
      title: 'Synvia Solutions',
      highlight: 'Corp',
      subtitle: 'A collective of visionary engineers and designers dedicated to building the future of industrial-grade digital ecosystems.',
      mission: { title: 'Our Mission', text: 'To empower global brands with scalable, mission-critical digital products that drive growth and institutional reliability.' },
      vision: { title: 'Our Vision', text: "Becoming the world's most trusted partner for enterprise-grade digital architecture and visionary design by 2030." },
      valuesTitle: 'The Core',
      valuesHighlight: 'Values',
      valuesItems: [
        { title: 'Innovation First', desc: 'Pushing boundaries with cutting-edge tech.' },
        { title: 'Reliability', desc: 'Mission-critical systems you can depend on 24/7.' },
        { title: 'User-Centric', desc: 'Every line of code is for the end user.' },
        { title: 'Co-Creation', desc: 'We work with you to scale empires.' }
      ],
      history: { title: 'A Decade of Scale', text: "From a small design studio into a full-scale digital engineering firm specializing in building 'impossible' solutions." }
    },
    contact: {
      title: 'Let’s',
      highlight: 'Connect',
      subtitle: "Scale your digital presence with SVS Corp's industrial-grade engineering.",
      station: {
        title: 'Station Details',
        protocol: 'Protocol',
        hotline: 'Hotline',
        hq: 'Headquarters',
        hours: 'Operational Hours',
        hoursVal: 'Mon - Fri, 09:00 - 18:00 (GMT+7)'
      },
      consult: {
        title: 'Direct Consultation',
        text: 'Looking for an immediate solution? Talk to our chief architects today.',
        btn: 'Book an Appointment'
      },
      form: {
        title: 'Transmission Protocol',
        name: 'Full Name',
        email: 'Email Address',
        industry: 'Industry / Sector',
        message: 'Operational Message',
        placeholderName: 'Identity name',
        placeholderEmail: 'Contact email',
        placeholderMsg: 'Project details or inquiry',
        btn: 'Send Transmission'
      },
      map: 'Interactive Station Map Loading...'
    },
    portfolio: {
      title: 'Our',
      highlight: 'Ecosystem',
      subtitle: 'Explore the collection of industrial-grade digital products designed and engineered by Synvia Solutions Corp.',
      showcaseTitle: 'Digital Ecosystem',
      showcaseHighlight: 'Showcase',
      showcaseSubtitle: "A glimpse into the mission-critical products we've engineered.",
      viewProject: 'View Ecosystem'
    }
  },

  /* ───────────── TIẾNG VIỆT ───────────── */
  vi: {
    nav: { services: 'Dịch vụ', portfolio: 'Dự án', company: 'Công ty', contact: 'Liên hệ', cta: 'Tư vấn ngay' },
    footer: {
      tagline: 'Synvia Solutions Corp cung cấp sản phẩm số then chốt kết hợp thiết kế đẳng cấp với hiệu suất công nghiệp.',
      solutions: { title: 'Giải pháp', items: ['Thiết kế Web', 'Kiến trúc', 'Chiến lược SEO', 'Ứng dụng Di động'] },
      company: { title: 'Công ty', items: ['Về SVS', 'Hệ sinh thái', 'Tuyển dụng', 'Liên hệ'] },
      legal: { title: 'Pháp lý', items: ['Chính sách bảo mật', 'Điều khoản dịch vụ', 'Chính sách Cookie'] },
      copyright: 'Bản quyền được bảo lưu.',
      status: 'Hệ thống đang hoạt động'
    },
    hero: {
      badge: 'Giải pháp Đổi mới & Mở rộng',
      line1: 'Thiết kế. Phát triển.',
      line2: 'Tăng tốc',
      line3: 'Tăng trưởng.',
      subtitle: 'Synvia Solutions Corp cung cấp sản phẩm số then chốt kết hợp thiết kế đẳng cấp với hiệu suất công nghiệp.',
      cta1: 'Bắt đầu hợp tác',
      cta2: 'Xem hệ sinh thái',
    },
    features: {
      label: 'Lợi thế SVS',
      title: 'Được xây dựng để',
      highlight: 'Vượt trội',
      subtitle: 'Chúng tôi không chỉ xây website — chúng tôi kiến tạo nền tảng số mang lại lợi thế cạnh tranh vượt trội cho doanh nghiệp bạn.',
      items: [
        { title: 'Kiến trúc xuất sắc', desc: 'Xây dựng hệ thống có khả năng mở rộng và bền vững, từ microservices đến triển khai CDN toàn cầu.' },
        { title: 'Hiệu suất vượt trội', desc: 'Codebase tối ưu đảm bảo thời gian tải dưới 1 giây và hoạt ảnh 60fps hoàn hảo.' },
        { title: 'Bảo mật doanh nghiệp', desc: 'Mã hóa cấp quân sự và giao thức bảo mật mạnh mẽ tích hợp ở mọi tầng ứng dụng.' },
        { title: 'Đảm bảo chất lượng', desc: 'Kiểm thử tự động nghiêm ngặt và giao thức QA đa thiết bị đảm bảo phát hành không lỗi.' },
      ],
    },
    stats: [
      { value: '100+', label: 'Sản phẩm đã xuất xưởng' },
      { value: '45+',  label: 'Đối tác toàn cầu' },
      { value: '99.9%', label: 'SLA hoạt động' },
      { value: '0',    label: 'Vi phạm bảo mật' },
    ],
    services: {
      title: 'Năng lực Số',
      highlight: 'Chiến lược',
      subtitle: 'Chúng tôi giải quyết các thách thức kinh doanh phức tạp bằng kỹ thuật đẳng cấp thế giới và thiết kế có tầm nhìn.',
      items: [
        { title: 'Thương hiệu Toàn cầu', desc: 'Thiết kế nhận diện hình ảnh tạo tiếng vang trên thị trường toàn cầu và xác lập uy tín doanh nghiệp.' },
        { title: 'Kiến trúc Doanh nghiệp', desc: 'Xây dựng các ứng dụng web tối quan trọng với hệ thống phân tán và độ tin cậy thời gian thực.' },
        { title: 'Hệ sinh thái SEO', desc: 'Phát triển các khung tăng trưởng tự nhiên toàn diện chiếm lĩnh kết quả tìm kiếm.' },
        { title: 'Marketing hiệu suất', desc: 'Tạo nhu cầu dựa trên dữ liệu cho các thương hiệu công nghiệp và công nghệ mở rộng quy mô toàn cầu.' },
        { title: 'Hệ sinh thái Di động', desc: 'Trải nghiệm đa nền tảng liền mạch được đồng bộ hóa với hệ thống lưu trữ đám mây.' },
        { title: 'Vận hành Công nghệ', desc: 'Bảo trì liên tục và mở rộng hạ tầng cho các đối tác của SVS Corp.' },
      ]
    },
    integrations: {
      title: 'Kết nối dữ liệu của bạn với',
      highlight: '500+ tích hợp',
      subtitle: 'Sử dụng kết nối dựng sẵn cho các nền tảng hàng đầu. Tích hợp API tùy chỉnh cho mọi nhu cầu còn lại.',
    },
    techShowcase: {
      title: 'Code khi cần,',
      highlight: 'UI khi muốn',
      subtitle: 'Các agency khác giới hạn bạn vào template hoặc code không thể bảo trì. Với SVS Corp, bạn có cả hai.',
      codeTitle: 'Kỹ thuật thuần',
      codeDesc: 'Viết TypeScript, Python hoặc Go mạnh mẽ đúng nơi logic nghiệp vụ phức tạp đòi hỏi.',
      features: [
        { num: '01', title: 'Nhanh mà không phá vỡ gì.', desc: 'Chạy lại từng module, phát lại dữ liệu thực, đánh giá AI — mà không ảnh hưởng pipeline.' },
        { num: '02', title: 'Hiển thị thời gian thực', desc: 'Xem inputs/outputs và các bước thực thi song song. Không còn debug kiểu hộp đen.' },
        { num: '03', title: 'Giao diện đẳng cấp', desc: 'UI/UX độ trung thực cao được thiết kế để tối đa hóa giữ chân người dùng.' },
      ],
      tags: ['Hiệu suất tia chớp', 'Bảo mật mặc định', 'Triển khai không gián đoạn', 'Workflow Git', 'Hỗ trợ đa stack'],
    },
    process: {
      title: 'Ma trận',
      highlight: 'Triển khai',
      subtitle: 'Phương pháp hệ thống của chúng tôi để xây dựng sản phẩm số đẳng cấp thế giới.',
      steps: [
        { title: 'Khám phá & Lập kế hoạch', text: 'Phân tích kiến trúc chuyên sâu và lập kế hoạch chiến lược bao quát mọi điểm chạm của hệ sinh thái số.' },
        { title: 'Thiết kế UI/UX', text: 'Tạo giao diện chuyển đổi cao, đoạt giải thưởng, thiết kế để tối đa hóa tỷ lệ giữ chân người dùng.' },
        { title: 'Phát triển Fullstack', text: 'Triển khai codebase mạnh mẽ, có khả năng mở rộng sử dụng công nghệ hiện đại, tương lai.' },
        { title: 'Kiểm thử & Ra mắt', text: 'QA nghiêm ngặt và triển khai liền mạch đảm bảo go-live hoàn hảo.' },
      ],
    },
    enterprise: {
      badge: 'Sẵn sàng cho doanh nghiệp',
      title: 'Ổn định. Mở rộng. Bảo mật.',
      subtitle: 'Triển khai trên hạ tầng của bạn hoặc của chúng tôi. SVS Corp bảo vệ bạn ở mọi cấp độ trong khi vẫn cho phép mở rộng không giới hạn.',
      btn1: 'Khám phá SVS doanh nghiệp',
      btn2: 'Liên hệ bán hàng',
      features: [
        { title: 'Bảo mật & Kiểm soát', desc: 'Tùy chọn on-prem, SSO SAML, LDAP, kho secret mã hóa, kiểm soát phiên bản, phân quyền RBAC.' },
        { title: 'Quan sát & Minh bạch', desc: 'Audit log, streaming vào SIEM, lịch sử workflow, cảnh báo thực, dashboard sử dụng.' },
        { title: 'Trải nghiệm lập trình', desc: 'Kiểm soát Git, môi trường cô lập, workflow đa người dùng, so sánh diff.' },
        { title: 'Quản trị AI', desc: 'Human-in-the-loop, guardrail, đánh giá, giao thức phát hiện sai lệch.' },
      ],
      quoteText: '"Ý tưởng là mọi người trong tổ chức có thể sử dụng SVS để quản lý truy xuất dữ liệu hoặc chuyển đổi dữ liệu đa node phức tạp."',
      quoteRole: 'Quản lý Sản phẩm Cấp cao',
      quoteCta: 'Xem case study',
    },
    caseStudies: {
      title: 'Case',
      highlight: 'Studies',
      subtitle: 'Khám phá cách các nhà lãnh đạo ngành tận dụng SVS Corp để giải quyết thách thức kiến trúc phức tạp.',
      readMore: 'Đọc Case Study',
      feedbackTitle: 'Đối tác nói gì về chúng tôi',
      cases: [
        { company: 'FinTech Neo', title: 'FinTech Neo xây dựng hệ sinh thái ngân hàng lõi có khả năng mở rộng và tăng tốc triển khai lên 40%', author: 'Sarah Jenkins', role: 'Phó Giám đốc Kỹ thuật' },
        { company: 'MedCore Health', title: 'SVS hiện đại hóa xử lý hồ sơ của MedCore, đảm bảo 100% tuân thủ và không có thời gian chết', author: 'TS. James Wilson', role: 'Giám đốc Công nghệ' },
      ],
      feedbacks: [
        { quote: 'SVS Corp không chỉ xây phần mềm — họ tái cơ cấu toàn bộ quy trình số của chúng tôi. ROI rõ ràng ngay trong quý đầu.', author: 'Elena Rodriguez', company: 'Global Retail Solutions' },
        { quote: 'Kiến trúc DevOps của họ không gì sánh được. Chúng tôi đang xử lý traffic gấp 10 lần mà không hề giật lag.', author: 'Marcus Chen', company: 'Streamline Media' },
        { quote: 'Kỹ thuật số biến đổi. Codebase sạch và có khả năng mở rộng đến mức đội nội bộ không dám tin.', author: 'Sophia Laurent', company: 'NextGen Logix' },
        { quote: 'Từ tích hợp AI đến backend mạnh mẽ, SVS luôn vượt kỳ vọng. Một đối tác tuyệt vời.', author: 'David O. Reynolds', company: 'Hyperion Finance' },
        { quote: 'Agency duy nhất chúng tôi tin tưởng với hạ tầng quan trọng. Đáng tin cậy và hoàn toàn bảo mật.', author: 'Emma Zhang', company: 'MedCore Health' },
        { quote: 'Làm việc với SVS như có đội kỹ thuật Silicon Valley trong công ty. Giao hàng luôn hoàn hảo.', author: 'Thomas Wright', company: 'E-Commerce Elevate' },
      ],
    },
    cta: {
      title: 'Sẵn sàng chuyển đổi',
      highlight: 'hệ sinh thái',
      subtitle: 'Hợp tác với Synvia Solutions Corp cho dự án số đột phá tiếp theo của bạn.',
      btn: 'Kết nối ngay',
    },
    about: {
      badge: 'Câu chuyện của chúng tôi',
      title: 'Synvia Solutions',
      highlight: 'Corp',
      subtitle: 'Một tập thể các kỹ sư và nhà thiết kế có tầm nhìn xa trông rộng, tận tâm xây dựng tương lai của hệ sinh thái kỹ thuật số cấp công nghiệp.',
      mission: { title: 'Nhiệm vụ', text: 'Trao quyền cho các thương hiệu toàn cầu với các sản phẩm kỹ thuật số có khả năng mở rộng, đóng vai trò quan trọng trong việc thúc đẩy tăng trưởng và độ tin cậy.' },
      vision: { title: 'Tầm nhìn', text: 'Trở thành đối tác đáng tin cậy nhất thế giới về kiến trúc kỹ thuật số cấp doanh nghiệp và thiết kế có tầm nhìn vào năm 2030.' },
      valuesTitle: 'Giá trị',
      valuesHighlight: 'Cốt lõi',
      valuesItems: [
        { title: 'Ưu tiên Đổi mới', desc: 'Vượt qua các ranh giới với công nghệ tiên tiến.' },
        { title: 'Sự tin cậy', desc: 'Hệ thống tối quan trọng mà bạn có thể dựa vào 24/7.' },
        { title: 'Lấy người dùng làm trung tâm', desc: 'Mọi dòng mã đều dành cho người dùng cuối.' },
        { title: 'Cùng sáng tạo', desc: 'Chúng tôi làm việc với bạn để mở rộng các đế chế.' }
      ],
      history: { title: 'Một thập kỷ mở rộng', text: "Từ một studio thiết kế nhỏ trở thành một công ty kỹ thuật kỹ thuật số quy mô lớn chuyên xây dựng các giải pháp 'không thể'." }
    },
    contact: {
      title: 'Hãy cùng',
      highlight: 'Kết nối',
      subtitle: 'Mở rộng sự hiện diện kỹ thuật số của bạn với kỹ thuật cấp công nghiệp của SVS Corp.',
      station: {
        title: 'Chi tiết Trạm',
        protocol: 'Giao thức',
        hotline: 'Đường dây nóng',
        hq: 'Trụ sở chính',
        hours: 'Giờ hoạt động',
        hoursVal: 'Thứ 2 - Thứ 6, 09:00 - 18:00 (GMT+7)'
      },
      consult: {
        title: 'Tư vấn Trực tiếp',
        text: 'Bạn đang tìm kiếm một giải pháp tức thời? Hãy nói chuyện với các kiến trúc sư trưởng của chúng tôi ngay hôm nay.',
        btn: 'Đặt lịch hẹn'
      },
      form: {
        title: 'Giao thức Truyền tin',
        name: 'Họ và Tên',
        email: 'Địa chỉ Email',
        industry: 'Ngành / Lĩnh vực',
        message: 'Nội dung thông điệp',
        placeholderName: 'Tên định danh',
        placeholderEmail: 'Email liên hệ',
        placeholderMsg: 'Chi tiết dự án hoặc yêu cầu',
        btn: 'Gửi thông tin'
      },
      map: 'Đang tải Bản đồ Trạm tương tác...'
    },
    portfolio: {
      title: 'Hệ sinh thái',
      highlight: 'của chúng tôi',
      subtitle: 'Khám phá bộ sưu tập các sản phẩm kỹ thuật số cấp công nghiệp được thiết kế và kỹ thuật bởi Synvia Solutions Corp.',
      showcaseTitle: 'Hệ sinh thái',
      showcaseHighlight: 'Kỹ thuật số',
      showcaseSubtitle: 'Một cái nhìn thoáng qua về các sản phẩm tối quan trọng mà chúng tôi đã thiết kế.',
      viewProject: 'Xem Dự án'
    }
  },

  /* ───────────── 日本語 ───────────── */
  ja: {
    nav: { services: 'サービス', portfolio: '実績', company: '会社概要', contact: 'お問合せ', cta: '無料相談' },
    footer: {
      tagline: 'Synvia Solutions Corpは、卓越したデザインと産業グレードのパフォーマンスを融合した使命遂行型デジタル製品を提供します。',
      solutions: { title: 'ソリューション', items: ['Webデザイン', 'アーキテクチャ', 'SEO戦略', 'モバイルアプリ'] },
      company: { title: '会社', items: ['SVSについて', 'エコシステム', '採用情報', 'お問合せ'] },
      legal: { title: '法務', items: ['プライバシーポリシー', '利用規約', 'クッキーポリシー'] },
      copyright: 'All rights reserved.',
      status: 'システム稼働中'
    },
    hero: {
      badge: 'イノベーション & スケール ソリューション',
      line1: 'デザイン。開発。',
      line2: '加速させる',
      line3: '成長。',
      subtitle: 'Synvia Solutions Corpは、卓越したデザインと産業グレードのパフォーマンスを融合した使命遂行型デジタル製品を提供します。',
      cta1: 'コラボを始める',
      cta2: 'エコシステムを見る',
    },
    features: {
      label: 'SVSアドバンテージ',
      title: '圧倒的な',
      highlight: '優位性',
      subtitle: '私たちは単なるウェブサイトではなく、現代市場で他社に差をつけるデジタルプラットフォームを構築します。',
      items: [
        { title: '卓越したアーキテクチャ', desc: 'マイクロサービスからグローバルCDNまで、長期的な成長を見据えたスケーラブルなシステムを構築します。' },
        { title: '圧倒的なパフォーマンス', desc: '1秒以下の読み込み時間と滑らかな60fpsアニメーションを実現する最適化されたコードを提供します。' },
        { title: 'エンタープライズセキュリティ', desc: '軍レベルの暗号化と堅牢なセキュリティプロトコルをアプリケーション全層に統合します。' },
        { title: '品質保証', desc: '厳格な自動テストとマルチデバイスQAが、完璧なプロダクションリリースを保証します。' },
      ],
    },
    stats: [
      { value: '100+', label: '出荷製品数' },
      { value: '45+',  label: 'グローバルパートナー' },
      { value: '99.9%', label: '稼働率SLA' },
      { value: '0',    label: 'セキュリティ侵害' },
    ],
    services: {
      title: '戦略的デジタル',
      highlight: '基盤',
      subtitle: '世界クラスのエンジニアリングと先見性のあるデザインで、複雑なビジネス課題を解決します。',
      items: [
        { title: 'グローバルブランディング', desc: 'グローバル市場に響き、企業の権威を確立するビジュアルアイデンティティを構築します。' },
        { title: 'エンタープライズアーキテクチャ', desc: '分散システムとリアルタイムの信頼性を備えた使命遂行型ウェブアプリケーションを構築します。' },
        { title: 'SEOエコシステム', desc: '検索エンジン結果を支配する包括的なオーガニック成長フレームワークを開発します。' },
        { title: 'パフォーマンスマーケティング', desc: 'グローバルに展開する産業・テクノロジーブランド向けのデータ駆動型デマンドジェネレーション。' },
        { title: 'モバイルエコシステム', desc: 'クラウドネイティブのバックエンドと同期したシームレスなクロスプラットフォーム体験。' },
        { title: 'テックオペレーション', desc: 'SVS Corpパートナー向けの継続的なメンテナンスとインフラのスケーリング。' },
      ]
    },
    integrations: {
      title: 'データと',
      highlight: '500以上の統合に接続',
      subtitle: '主要なエンタープライズプラットフォーム向けのプレビルトコネクタ。その他はすべてカスタムAPI統合で対応。',
    },
    techShowcase: {
      title: '必要な時はコード、',
      highlight: '不要な時はUI',
      subtitle: '他の代理店はテンプレートか、保守不能なカスタムコードに制限します。SVS Corpでは両方の良いところを活かせます。',
      codeTitle: 'ネイティブエンジニアリング',
      codeDesc: '複雑なビジネスロジックが求める場所に、堅牢なTypeScript、Python、またはGoを記述します。',
      features: [
        { num: '01', title: '速く動く。壊さない。', desc: '単一モジュールを再実行し、実データを再生し、パイプライン全体に触れずにAIの精度を評価します。' },
        { num: '02', title: 'リアルタイムの可視性', desc: '入出力と実行ステップを並べて確認。ブラックボックスデバッグは不要です。' },
        { num: '03', title: '圧倒的なUI', desc: '最高の保持率を実現するように設計された高忠実度のUI/UX。すべてのインタラクションが心地よい。' },
      ],
      tags: ['超高速パフォーマンス', 'デフォルトセキュリティ', 'ゼロダウンタイム展開', 'Gitベースワークフロー', 'マルチスタック対応'],
    },
    process: {
      title: 'デリバリー',
      highlight: 'マトリックス',
      subtitle: '世界クラスのデジタル製品を構築するための体系的なアプローチ。',
      steps: [
        { title: '発見 & ブループリント', text: 'デジタルエコシステムのすべてのタッチポイントをマッピングする深いアーキテクチャ分析と戦略的計画。' },
        { title: 'UI/UXエンジニアリング', text: '最大のユーザー保持を目指した、高コンバージョンの受賞歴あるインターフェースを構築。' },
        { title: 'フルスタック開発', text: '現代的で将来性のある技術を活用した、堅牢でスケーラブルなコードベースを展開。' },
        { title: 'テスト & ローンチ', text: '完璧なゴーライブを保証する厳格なQAとシームレスな展開プロトコル。' },
      ],
    },
    enterprise: {
      badge: 'エンタープライズ対応',
      title: '信頼性。拡張性。セキュリティ。',
      subtitle: 'お客様のインフラまたは弊社のインフラに展開。エンタープライズチームが信頼するDevOpsエクスペリエンスで本番環境へ。',
      btn1: 'エンタープライズを見る',
      btn2: '営業に相談',
      features: [
        { title: 'セキュリティとコントロール', desc: 'オンプレミスオプション、SSO SAML、LDAP、暗号化シークレットストア、バージョン管理、RBACアクセス権限。' },
        { title: '可観測性と透明性', desc: 'SIEMへの監査ログとログストリーミング、ワークフロー履歴、リアルタイムアラート、使用状況ダッシュボード。' },
        { title: '開発者体験', desc: 'Gitベースのコントロール、分離環境、マルチユーザーワークフロー、ワークフロー差分。' },
        { title: 'AIガバナンス', desc: 'ヒューマンインザループ、ガードレール、評価、バイアス検出プロトコル。' },
      ],
      quoteText: '"組織のすべての人がSVSを使ってデータ取得や複雑なマルチノードデータ変換を管理できるというのがアイデアです。"',
      quoteRole: 'シニアプロダクトマネージャー',
      quoteCta: 'ケースを見る',
    },
    caseStudies: {
      title: 'ケース',
      highlight: 'スタディ',
      subtitle: '業界リーダーがどのようにSVS Corpを活用して複雑な課題を解決しているかをご覧ください。',
      readMore: 'ケーススタディを読む',
      feedbackTitle: 'パートナーからの声',
      cases: [
        { company: 'FinTech Neo', title: 'FinTech Neoがスケーラブルなコアバンキングエコシステムを構築し、展開速度を40%向上させた方法', author: 'Sarah Jenkins', role: '技術担当副社長' },
        { company: 'MedCore Health', title: 'SVSがMedCoreの記録処理を近代化し、100%コンプライアンスとゼロダウンタイムを実現した方法', author: 'ジェームズ・ウィルソン博士', role: '最高技術責任者' },
      ],
      feedbacks: [
        { quote: 'SVS Corpは私たちのソフトウェアを構築しただけでなく、デジタルワークフロー全体を再設計しました。ROIは最初の四半期に明らかでした。', author: 'Elena Rodriguez', company: 'Global Retail Solutions' },
        { quote: '彼らのDevOpsアーキテクチャは卓越しています。今では10倍のトラフィックをパフォーマンスの低下なく処理できます。', author: 'Marcus Chen', company: 'Streamline Media' },
        { quote: '変革的なデジタルエンジニアリング。コードベースがクリーンすぎて社内チームが信じられなかったほどです。', author: 'Sophia Laurent', company: 'NextGen Logix' },
        { quote: 'AI統合から堅牢なバックエンドまで、SVSは常に期待を超えます。素晴らしいパートナーです。', author: 'David O. Reynolds', company: 'Hyperion Finance' },
        { quote: 'ミッションクリティカルなインフラを任せられる唯一の開発代理店。信頼性があり完全に安全です。', author: 'Emma Zhang', company: 'MedCore Health' },
        { quote: 'SVSとの仕事はシリコンバレーのエリートチームが社内にいるようです。納品は常に完璧です。', author: 'Thomas Wright', company: 'E-Commerce Elevate' },
      ],
    },
    cta: {
      title: 'あなたの',
      highlight: 'エコシステム',
      subtitle: 'Synvia Solutions Corpと共に、次の革命的なデジタルプロジェクトを始めましょう。',
      btn: 'お問い合わせ',
    },
    about: {
      badge: 'ストーリー',
      title: 'Synvia Solutions',
      highlight: 'Corp',
      subtitle: '産業用デジタルエコシステムの未来を構築することに専念する、先見性のあるエンジニアとデザイナーの集団。',
      mission: { title: '私たちの使命', text: '成長と制度的信頼性を促進する、スケーラブルで重要なデジタル製品をグローバルブランドに提供すること。' },
      vision: { title: '私たちのビジョン', text: '2030年までに、エンタープライズグレードのデジタルアーキテクチャと先見性のあるデザインにおいて世界で最も信頼されるパートナーになること。' },
      valuesTitle: 'コア',
      valuesHighlight: 'バリュー',
      valuesItems: [
        { title: 'イノベーション第一', desc: '最先端技術で限界を押し広げます。' },
        { title: '信頼性', desc: '24時間365日信頼できる重要なシステム。' },
        { title: 'ユーザー中心', desc: 'すべてのコードは最終ユーザーのためにあります。' },
        { title: '共創', desc: 'お客様と共に歩み、帝国をスケールさせます。' }
      ],
      history: { title: '10年の歩み', text: "小さなデザインスタジオから、'不可能'なソリューションの構築に特化した本格的なデジタルエンジニアリング企業へと進化しました。" }
    },
    contact: {
      title: '一緒に',
      highlight: '始めましょう',
      subtitle: 'SVS Corpの産業グレードのエンジニアリングで、デジタルプレゼンスを拡張しましょう。',
      station: {
        title: 'ステーション詳細',
        protocol: 'プロトコル',
        hotline: 'ホットライン',
        hq: '本社',
        hours: '営業時間',
        hoursVal: '月 - 金, 09:00 - 18:00 (GMT+7)'
      },
      consult: {
        title: '直接相談',
        text: '即時の解決策をお探しですか？本日、チーフアーキテクトにご相談ください。',
        btn: '予約する'
      },
      form: {
        title: '送信プロトコル',
        name: '名前（フルネーム）',
        email: 'メールアドレス',
        industry: '業界 / セクター',
        message: 'メッセージ',
        placeholderName: 'お名前',
        placeholderEmail: '連絡先メール',
        placeholderMsg: 'プロジェクトの詳細やお問い合わせ',
        btn: '送信する'
      },
      map: 'インタラクティブなマップを読み込み中...'
    },
    portfolio: {
      title: '私たちの',
      highlight: 'エコシステム',
      subtitle: 'Synvia Solutions Corpが設計・エンジニアリングした産業グレードのデジタル製品コレクションをご覧ください。',
      showcaseTitle: 'デジタルエコシステム',
      showcaseHighlight: 'ショーケース',
      showcaseSubtitle: '私たちが手がけた重要な製品を垣間見る。',
      viewProject: 'プロジェクトを見る'
    }
  },

  /* ───────────── 中文 ───────────── */
  zh: {
    nav: { services: '服务', portfolio: '案例', company: '公司', contact: '联系', cta: '立即咨询' },
    footer: {
      tagline: 'Synvia Solutions Corp 提供关键任务数字产品，将精美设计与工业级性能完美融合。',
      solutions: { title: '解决方案', items: ['网页设计', '架构设计', 'SEO策略', '移动应用'] },
      company: { title: '公司', items: ['关于 SVS', '生态系统', '加入我们', '联系我们'] },
      legal: { title: '法律', items: ['隐私政策', '服务条款', 'Cookie 政策'] },
      copyright: '版权所有。',
      status: '系统运行正常'
    },
    hero: {
      badge: '创新与规模化解决方案',
      line1: '设计。开发。',
      line2: '加速',
      line3: '增长。',
      subtitle: 'Synvia Solutions Corp 提供关键任务数字产品，将精美设计与工业级性能完美融合。',
      cta1: '开始合作',
      cta2: '查看生态系统',
    },
    features: {
      label: 'SVS 优势',
      title: '为',
      highlight: '卓越而生',
      subtitle: '我们不仅构建网站，更打造让企业在现代市场中获得不公平竞争优势的数字平台。',
      items: [
        { title: '卓越架构', desc: '构建可扩展、韧性强的系统，从微服务到全球CDN部署，为长期增长而设计。' },
        { title: '极速性能', desc: '精心优化的代码库，确保亚秒级加载时间和完美的60fps动画。' },
        { title: '企业级安全', desc: '军事级加密和强大的安全协议集成到应用程序的每个层次。' },
        { title: '质量保证', desc: '严格的自动化测试和多设备QA协议，保证无瑕疵的生产发布。' },
      ],
    },
    stats: [
      { value: '100+', label: '交付产品' },
      { value: '45+',  label: '全球合作伙伴' },
      { value: '99.9%', label: '正常运行时间SLA' },
      { value: '0',    label: '安全漏洞' },
    ],
    services: {
      title: '战略数字',
      highlight: '能力',
      subtitle: '我们通过世界级的工程和远见卓识的设计解决复杂的商业挑战。',
      items: [
        { title: '全球品牌', desc: '打造在全球市场产生共鸣并建立企业权威的视觉识别。' },
        { title: '企业架构', desc: '构建具有分布式系统和实时可靠性的关键任务Web应用程序。' },
        { title: 'SEO生态系统', desc: '开发占领搜索引擎结果的综合有机增长框架。' },
        { title: '性能营销', desc: '为专注于全球扩张的工业和技术品牌提供数据驱动的需求生成。' },
        { title: '移动生态系统', desc: '与云原生后端同步的无缝跨平台体验。' },
        { title: '技术运营', desc: '为SVS Corp合作伙伴提供持续维护和基础设施扩展。' },
      ]
    },
    integrations: {
      title: '接入您的数据与',
      highlight: '500+ 集成',
      subtitle: '使用预构建连接器连接领先企业平台，为其他一切提供自定义API集成。',
    },
    techShowcase: {
      title: '需要时编码，',
      highlight: '不需要时用UI',
      subtitle: '其他代理商将您限制在模板或无法维护的自定义代码中。SVS Corp同时给您两者的最佳选择。',
      codeTitle: '原生工程',
      codeDesc: '在复杂业务逻辑需要的地方编写健壮的TypeScript、Python或Go。',
      features: [
        { num: '01', title: '快速行动，不破坏任何东西。', desc: '重新运行单个模块，重放真实数据，评估AI精度——而不触及整个管道。' },
        { num: '02', title: '实时可视性', desc: '在并排视图中查看输入、输出和执行步骤。无需再进行黑盒调试。' },
        { num: '03', title: '精美界面', desc: '为最大留存率设计的高保真UI/UX。每个组件像素完美，每个交互令人愉悦。' },
      ],
      tags: ['闪电性能', '默认安全', '零停机部署', 'Git工作流', '多栈支持'],
    },
    process: {
      title: '交付',
      highlight: '矩阵',
      subtitle: '我们打造世界级数字产品的系统化方法。',
      steps: [
        { title: '探索与蓝图', text: '深度架构分析和战略规划，映射您数字生态系统的每个接触点。' },
        { title: 'UI/UX工程', text: '打造高转化率、屡获殊荣的界面，专为最大化用户留存率而设计。' },
        { title: '全栈开发', text: '利用现代、面向未来的技术部署强大、可扩展的代码库。' },
        { title: '测试与发布', text: '严格的质量保证和无缝部署协议，确保完美上线。' },
      ],
    },
    enterprise: {
      badge: '企业就绪',
      title: '可靠. 可扩展. 安全.',
      subtitle: '部署在您的基础设施或我们的基础设施上。SVS Corp的安全和治理功能让您在不失控的情况下构建、监控和扩展。',
      btn1: '探索SVS企业版',
      btn2: '联系销售',
      features: [
        { title: '安全与控制', desc: '完整本地部署、SSO SAML与LDAP、加密密钥库、版本控制、RBAC权限管理。' },
        { title: '可观测性与透明度', desc: '审计日志与SIEM流式传输、工作流历史、实时告警、使用情况仪表板。' },
        { title: '开发者体验', desc: '基于Git的控制、隔离环境、多用户工作流、工作流差异对比。' },
        { title: 'AI治理', desc: '人在回路中、护栏、评估、偏见检测协议。' },
      ],
      quoteText: '"理念是组织中的每个人都可以使用SVS来管理数据检索或复杂的多节点数据转换。"',
      quoteRole: '高级产品经理',
      quoteCta: '查看案例研究',
    },
    caseStudies: {
      title: '案例',
      highlight: '研究',
      subtitle: '了解行业领导者如何利用SVS Corp解决复杂的架构挑战。',
      readMore: '阅读案例研究',
      feedbackTitle: '合作伙伴评价',
      cases: [
        { company: 'FinTech Neo', title: 'FinTech Neo如何构建可扩展的核心银行生态系统并将部署速度提升40%', author: 'Sarah Jenkins', role: '技术副总裁' },
        { company: 'MedCore Health', title: 'SVS如何现代化MedCore的记录处理，确保100%合规和零停机', author: '詹姆斯·威尔逊博士', role: '首席技术官' },
      ],
      feedbacks: [
        { quote: 'SVS Corp不只是构建了我们的软件，而是重新设计了我们整个数字工作流程。ROI在第一个季度就很明显了。', author: 'Elena Rodriguez', company: 'Global Retail Solutions' },
        { quote: '他们的DevOps architecture无与伦比。我们现在处理10倍的流量，没有任何性能问题。', author: 'Marcus Chen', company: 'Streamline Media' },
        { quote: '变革性的数字工程。他们的代码库如此干净和可扩展，以至于我们的内部团队难以置信。', author: 'Sophia Laurent', company: 'NextGen Logix' },
        { quote: '从AI集成到强大的后端，SVS始终超越期望。一个不可思议的合作伙伴。', author: 'David O. Reynolds', company: 'Hyperion Finance' },
        { quote: '我们唯一信任关键基础设施的开发代理商。可靠且完全安全。', author: 'Emma Zhang', company: 'MedCore Health' },
        { quote: '与SVS合作感觉就像在公司内部拥有硅谷精英技术团队。交付始终完美。', author: 'Thomas Wright', company: 'E-Commerce Elevate' },
      ],
    },
    cta: {
      title: '准备好转型您的',
      highlight: '数字生态',
      subtitle: '与Synvia Solutions Corp合作，开启您下一个突破性数字项目。',
      btn: '立即联系',
    },
    about: {
      badge: '我们的故事',
      title: 'Synvia Solutions',
      highlight: 'Corp',
      subtitle: '由富有远见的工程师和设计师组成的团队，致力于构建工业级数字生态系统的未来。',
      mission: { title: '我们的使命', text: '为全球品牌提供可扩展的关键任务数字产品，推动增长并建立机构级的可靠性。' },
      vision: { title: '我们的愿景', text: '到2030年，成为全球最受信任的企业级数字架构和前瞻性设计合作伙伴。' },
      valuesTitle: '核心',
      valuesHighlight: '价值',
      valuesItems: [
        { title: '创新优先', desc: '利用前沿技术挑战各种可能。' },
        { title: '可靠性', desc: '您可以 24/7 依赖的关键任务系统。' },
        { title: '以用户为中心', desc: '每一行代码都是为最终用户服务的。' },
        { title: '共同创造', desc: '我们与您合作，扩展商业帝国。' }
      ],
      history: { title: '十年的跨越', text: '从一个小型设计工作室发展成为全方位的数字工程公司，专门构建“不可能”的解决方案。' }
    },
    contact: {
      title: '让我们',
      highlight: '建立联系',
      subtitle: '利用 SVS Corp 的工业级工程能力，扩展您的数字版图。',
      station: {
        title: '联络详情',
        protocol: '联络协议',
        hotline: '热线电话',
        hq: '总部地址',
        hours: '运营时间',
        hoursVal: '周一 - 周五, 09:00 - 18:00 (GMT+7)'
      },
      consult: {
        title: '直接咨询',
        text: '正在寻找即时解决方案？立即与我们的总架构师沟通。',
        btn: '预约咨询'
      },
      form: {
        title: '传输协议',
        name: '全名',
        email: '电子邮箱',
        industry: '所属行业',
        message: '操作信息',
        placeholderName: '您的姓名',
        placeholderEmail: '联系邮箱',
        placeholderMsg: '项目详情或咨询内容',
        btn: '发送传输'
      },
      map: '交互式地图加载中...'
    },
    portfolio: {
      title: '我们的',
      highlight: '生态系统',
      subtitle: '探索由 Synvia Solutions Corp 设计和制造的一系列工业级数字产品。',
      showcaseTitle: '数字生态',
      showcaseHighlight: '展示',
      showcaseSubtitle: '一窥我们打造的关键任务产品。',
      viewProject: '查看案例'
    }
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

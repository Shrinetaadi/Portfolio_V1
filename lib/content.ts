export const profile = {
  name: "Aditya Singh Shrinet",
  shortName: "Aditya",
  title: "Software Engineer",
  subtitle: "Catvision IPTV · Android · Full-Stack",
  company: "Catvision Limited",
  companyTenure: "4 yrs 9 mos",
  location: "Noida, Uttar Pradesh, India",
  email: "shrinetaadi@gmail.com",
  phone: "+91-9650607906",
  whatsapp: "919650607906",
  github: "https://github.com/shrinetaadi/",
  linkedin: "https://www.linkedin.com/in/aditya-singh-shrinet-053395151/",
  yearsExperience: 5,
  totalExperienceLabel: "5+ years",
  resumePath: "/resume.pdf",
  profileImage: "/profile.png",
  heroImage: "/hero-developer-bg.png",
  /** Used for WhatsApp, LinkedIn, Twitter link previews — not the hero background */
  ogImage: "/profile.png",
  siteUrl: "https://shrinetaadi.in",
};

export const aboutBio =
  "As a Software Engineer at Catvision Limited, I design, develop, and maintain software for Android TV, set-top boxes, IPTV platforms, and hospitality entertainment systems. My work spans Android development, IPTV middleware, video streaming, Linux-based systems, networking, backend integrations, and customer-specific product customization. I collaborate with customers, product teams, and deployment teams to deliver scalable solutions for hospitality, broadcasting, and IPTV environments — including Catvision IPTV, our end-to-end guest-experience platform for hotels and healthcare properties.";

/** @deprecated Use aboutBio — kept for metadata helpers */
export const summary = aboutBio;

export const experience = [
  {
    id: "01",
    company: "Catvision Limited",
    role: "Software Engineer",
    period: "Jan 2022 – Present · 4 yrs 6 mos",
    employmentType: "Full-time · On-site",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Developed and customized Android TV and Set-Top Box applications using Java and Kotlin.",
      "Built and maintained IPTV solutions including channel management, EPG integration, middleware communication, and guest experience features.",
      "Designed hospitality TV platforms integrating PMS systems, guest services, room information, weather updates, flight information, messaging, and content management.",
      "Worked with video streaming technologies including HLS, UDP multicast, and media playback systems.",
      "Developed Android remote-control applications with over 1,000+ installations, improving accessibility and user experience for Catvision devices.",
      "Integrated REST APIs, backend services, and third-party systems to support customer-specific requirements.",
      "Configured, deployed, and supported Linux-based IPTV and streaming environments.",
      "Troubleshot complex software, networking, and device-level issues across Android, Linux, and IPTV ecosystems.",
      "Contributed to modern web-based IPTV solutions using React, Node.js, PostgreSQL, WebSockets, and responsive user interfaces.",
      "Leveraged AI-assisted development workflows to accelerate prototyping, debugging, documentation, and product delivery.",
    ],
    technologies: [
      "Android",
      "Kotlin",
      "Java",
      "React",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Linux",
      "REST APIs",
      "WebSockets",
      "IPTV",
      "Android TV",
      "HLS",
      "UDP Multicast",
      "Networking",
      "System Integration",
    ],
  },
  {
    id: "02",
    company: "Catvision Limited",
    role: "Graduate Engineering Trainee",
    period: "Oct 2021 – Dec 2021 · 3 mos",
    employmentType: "Full-time · On-site",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Completed an intensive engineering training program focused on Android development, STB software, IPTV systems, software testing, and debugging.",
      "Learned Android application development using Java.",
      "Assisted in development and testing of STB software solutions.",
      "Participated in troubleshooting and quality assurance activities.",
      "Gained practical experience with Linux environments, networking fundamentals, and IPTV technologies.",
      "Worked alongside senior engineers on customer-focused software solutions.",
    ],
    technologies: ["Android", "Java", "STB", "IPTV", "Linux", "Networking"],
  },
  {
    id: "03",
    company: "Webtek Labs Pvt. Ltd.",
    role: "Intern",
    period: "Jul 2018 – Oct 2018 · 4 mos",
    employmentType: "Internship",
    location: "Greater Delhi Area",
    highlights: [
      "Completed a hands-on internship focused on Android application development and software engineering fundamentals.",
      "Developed Android applications using Java and Android SDK.",
      "Worked on UI implementation, application logic, and debugging.",
      "Collaborated with development teams to deliver project requirements.",
      "Strengthened understanding of software development lifecycle, testing, and troubleshooting.",
      "Gained practical exposure to mobile application architecture and industry development practices.",
    ],
    technologies: ["Android", "Java", "Android SDK"],
  },
];

export const skills = [
  {
    category: "Mobile & Android",
    items: [
      "Android Development",
      "Kotlin",
      "Java",
      "Android TV",
      "Android SDK",
      "MVVM",
    ],
  },
  {
    category: "Web & Full-Stack",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "WebSocket",
    ],
  },
  {
    category: "Streaming & IPTV",
    items: [
      "IPTV",
      "Video Streaming",
      "HLS Streaming",
      "UDP Multicast",
      "EPG Integration",
      "Channel Management",
    ],
  },
  {
    category: "Backend & Data",
    items: [
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Database Design",
      "Retrofit",
      "Room",
    ],
  },
  {
    category: "Systems & DevOps",
    items: [
      "Linux",
      "Networking",
      "System Integration",
      "Git",
      "GitHub",
      "Postman",
      "Android Studio",
    ],
  },
  {
    category: "Product & Practices",
    items: [
      "Product Development",
      "Debugging",
      "Troubleshooting",
      "QA Testing",
      "AI-Assisted Development",
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "Catvision IPTV",
    subtitle: "Flagship Hospitality Guest Experience Platform",
    company: "Catvision Limited",
    featured: true,
    description:
      "End-to-end hospitality IPTV platform I built at Catvision — hotel staff configure channels, branding, menus, and guest services through a web admin portal; in-room TVs run a React guest app on Android TV, Samsung Tizen, and LG; guests pair a Companion PWA for remote control and services. Architected for 50–300 room properties across hotels and healthcare.",
    highlights: [
      "React TV guest app with Live TV, EPG, PMS billing, room service, weather, news, flights, signage, and companion pairing.",
      "Node.js/PostgreSQL SMS backend with WebSockets, 30+ admin modules, licensing, and production Docker/Nginx deployment.",
      "Companion PWA for QR pairing, remote control, and guest services over real-time WebSocket.",
      "PMS integration, Chromecast orchestration, emergency/ticker overlays, and multi-platform TV packaging.",
      "IPTV channel management, EPG, HLS/UDP workflows, and middleware integration with hotel headends.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Android TV",
      "IPTV",
      "Docker",
      "Linux",
    ],
    image: "/projects/project-hospitality.png",
    badge: "Flagship · Production",
    role: "Full-stack development — TV app, admin portal, SMS backend, companion PWA, and deployments",
  },
  {
    id: "02",
    title: "Android Remote Control Application",
    subtitle: "1,000+ Installs · Production",
    company: "Catvision Limited",
    description:
      "Developed Android applications that enable users to control set-top boxes directly from their smartphones, eliminating traditional infrared remotes and improving accessibility for end users.",
    highlights: [
      "1,000+ installs on Google Play.",
      "Mobile-based remote control with device discovery and communication.",
      "Improved user convenience and accessibility for Catvision customers.",
      "Production deployment for Catvision device ecosystems.",
    ],
    tech: ["Android", "Java", "Android SDK", "Networking", "Kotlin"],
    image: "/projects/project-remote.png",
    badge: "Play Store · 1000+",
    role: "Designed UI, implemented device communication, and shipped to production",
  },
  {
    id: "03",
    title: "IPTV Monitoring & Multiviewer",
    subtitle: "Broadcast & Hospitality Delivery",
    company: "Catvision Limited",
    description:
      "Developed and deployed IPTV solutions supporting channel distribution, content delivery, monitoring, and middleware integration across hospitality and broadcast environments — including Multiviewer, a 3×3 live UDP/HLS monitoring grid for broadcasters.",
    highlights: [
      "EPG and channel management across hospitality and broadcast deployments.",
      "HLS and multicast delivery workflows with MVP/VLC playback.",
      "Multiviewer: 9 live streams in a broadcaster monitoring grid with per-tile audio.",
      "Android STB integration, network troubleshooting, and customer-specific deployments.",
    ],
    tech: [
      "IPTV",
      "HLS Streaming",
      "UDP Multicast",
      "Linux",
      "Networking",
      "REST APIs",
      "Kotlin",
    ],
    image: "/projects/project-iptv.png",
    badge: "Live · Production",
    role: "Developed monitoring tools, streaming workflows, and deployment support",
  },
  {
    id: "04",
    title: "Group Expense App",
    subtitle: "Collaborative Group Finance · In Development",
    company: "Personal Project",
    description:
      "Building a modern group finance platform that simplifies expense sharing during trips, events, and group activities — combining expense tracking, settlements, communication, and shared memories in a single collaborative workspace.",
    highlights: [
      "Automated balance calculation and settlements.",
      "Shared receipts, photos, and trip memories.",
      "Real-time group chat and voice notes.",
      "Authentication, group management, and mobile-friendly responsive interface.",
    ],
    tech: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/project-expense.png",
    badge: "In Development",
    role: "Full-stack development — UI, auth, database, and real-time features",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology, Information Technology",
    school: "Ch. Brahm Prakash Govt. Engineering College (GGSIP University)",
    location: "New Delhi, Delhi, India",
    period: "2015 – 2019",
  },
  {
    degree: "12th Standard – PCM",
    school: "JKG Sr. Sec. School, Ghaziabad",
    location: "Ghaziabad, India",
    period: "2015",
  },
];

export const recommendations = [
  {
    name: "Sagar Saxena",
    role: "Colleague at Catvision Limited",
    linkedin: "https://www.linkedin.com/in/sagarsaxena153",
    quote:
      "Aditya is very passionate and has great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met, and makes sure that whatever project he is working on meets the highest standards. He brought an energy and dependability that made him crucial place in our team. I highly recommend him!",
  },
];

export const certifications = [
  {
    title: "Android App Development",
    issuer: "Internshala",
    date: "Jul 2021",
    url: "https://trainings.internshala.com/verify_certificate",
  },
  {
    title: "Problem Solving Basics",
    issuer: "HackerRank",
    date: "Jul 2021",
    url: "https://www.hackerrank.com/certificates/a073342c06af",
  },
  {
    title: "SQL Intermediate",
    issuer: "HackerRank",
    date: "Jul 2021",
    url: "https://www.hackerrank.com/certificates/e30bd4db9988",
  },
  {
    title: "Kotlin for Android: Best Practices",
    issuer: "LinkedIn Learning",
    date: "Jun 2021",
    url: "https://www.linkedin.com/learning/certificates/19dc6c337c94a178579102e8469ade38f6b85c593cac9326c37b54ad3ef1a1d0",
  },
  {
    title: "SQL Basics",
    issuer: "HackerRank",
    date: "Jun 2021",
    url: "https://www.hackerrank.com/certificates/40f55e50d491",
  },
  {
    title: "Kotlin Skill Assessment",
    issuer: "LinkedIn",
    date: "Passed",
    url: "https://www.linkedin.com/in/aditya-singh-shrinet-053395151/",
  },
  {
    title: "Java Skill Assessment",
    issuer: "LinkedIn",
    date: "Passed",
    url: "https://www.linkedin.com/in/aditya-singh-shrinet-053395151/",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Education", href: "#education" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

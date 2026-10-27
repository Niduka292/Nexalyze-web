import type {
  Service,
  Project,
  Testimonial,
  ProcessStep,
  Stat,
  Feature,
  TrustItem,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// ─── Trust Bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { label: "Modern Design", icon: "Layers" },
  { label: "Fully Responsive", icon: "Smartphone" },
  { label: "SEO Friendly", icon: "Search" },
  { label: "Fast Performance", icon: "Zap" },
  { label: "Secure", icon: "Shield" },
  { label: "Scalable", icon: "TrendingUp" },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Professional, fast-loading websites that turn visitors into customers and establish your brand online.",
    icon: "Monitor",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description:
      "Full-featured online stores with inventory management, secure payments, and real-time order tracking.",
    icon: "ShoppingCart",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Bespoke applications tailored to your workflow — automating operations and saving you time every day.",
    icon: "Code2",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive specific campaign goals.",
    icon: "Flag",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description:
      "Modernize your existing website with better UX, faster performance, and a premium visual identity.",
    icon: "Pencil",
  },
  {
    id: "hosting",
    title: "Hosting & Deployment",
    description:
      "Reliable cloud hosting with 99.9% uptime, SSL certificates, and optimized CDN delivery worldwide.",
    icon: "Server",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description:
      "Monthly care plans that keep your site secure, updated, and performing at its best — always.",
    icon: "Wrench",
  },
  {
    id: "email-setup",
    title: "Business Email Setup",
    description:
      "Professional email with your own domain — setup, migration, and configuration all included.",
    icon: "Mail",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO that helps your business rank higher and be found by the right customers.",
    icon: "BarChart2",
  },
  {
    id: "social-media",
    title: "Social Media Integration",
    description:
      "Connect your website to your social channels and synchronize your entire marketing presence.",
    icon: "Share2",
  },
];

// ─── Features ─────────────────────────────────────────────────────────────────
export const FEATURES: Feature[] = [
  {
    title: "Modern UI/UX",
    description:
      "Premium interface design with pixel-perfect attention to detail and user experience that converts.",
  },
  {
    title: "Mobile First",
    description:
      "Every site is designed for mobile first, then scaled up — where the majority of your customers browse.",
  },
  {
    title: "Fast Loading",
    description:
      "Optimized assets, CDN delivery, and clean code ensure sub-second load times across all devices.",
  },
  {
    title: "Secure Architecture",
    description:
      "SSL, input validation, and secure deployment pipelines — protecting you and your customers.",
  },
  {
    title: "Future Proof",
    description:
      "Built with modern frameworks that scale as your business grows — no costly rewrites needed.",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: "hivebliss",
    title: "HiveBliss",
    industry: "E-Commerce",
    category: "ecommerce",
    description:
      "Transforming a Sri Lankan honey business from WhatsApp ordering into a complete online store with admin control and real-time inventory management.",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary", "Resend"],
    features: [
      "Product management dashboard",
      "Order tracking system",
      "Customer accounts & profiles",
      "WhatsApp order integration",
      "Responsive design",
    ],
    status: "Deployed",
    color: "from-emerald-900 to-green-700",
    githubUrl: "https://github.com",
    liveUrl: "https://hivebliss.lk",
  },
  {
    id: "japuraxtream",
    title: "JapuraXtream 3.0",
    industry: "Education",
    category: "education",
    description:
      "Hackathon event website for the IEEE Computer Society with a phoenix-fire theme, animated gallery, and full sponsor management system.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Animated ember particle system",
      "Dynamic gallery with transitions",
      "Sponsor tier management",
      "Event registration flow",
      "Custom SVG cursor",
    ],
    status: "Live",
    color: "from-purple-950 to-indigo-800",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "taskbridge",
    title: "TaskBridge",
    industry: "Enterprise",
    category: "enterprise",
    description:
      "Freelance marketplace built on microservices architecture with real-time notifications, JWT auth, and secure payment flows.",
    stack: ["Next.js", "Spring Boot", "Supabase", "Docker", "PostgreSQL"],
    features: [
      "Microservices architecture",
      "Real-time WebSocket notifications",
      "JWT authentication system",
      "OpenAPI contracts",
      "Supabase Realtime integration",
    ],
    status: "In Progress",
    color: "from-slate-900 to-blue-900",
    githubUrl: "https://github.com",
  },
  {
    id: "email-client",
    title: "Enterprise Email Client",
    industry: "Business",
    category: "business",
    description:
      "Full-stack email platform with JWT auth, folder management, full-text search, and keyboard shortcuts — deployed on Vercel and Render.",
    stack: ["Spring Boot", "React", "PostgreSQL", "Vercel", "Render"],
    features: [
      "JWT authentication system",
      "Folder & label management",
      "Full-text search",
      "Keyboard shortcut system",
      "Railway deployment pipeline",
    ],
    status: "Deployed",
    color: "from-amber-900 to-yellow-700",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "codefest",
    title: "CODEFEST",
    industry: "Education",
    category: "education",
    description:
      "Cyberpunk-themed event platform with real-time features, participant registration, Supabase backend, and a stunning dark UI.",
    stack: ["Next.js 15", "Supabase", "TypeScript", "Tailwind CSS"],
    features: [
      "Real-time participant tracking",
      "Dynamic event schedule",
      "Registration & ticketing",
      "Admin dashboard",
      "Cyberpunk visual design",
    ],
    status: "Live",
    color: "from-cyan-950 to-teal-800",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: "supplypulse",
    title: "SupplyPulse",
    industry: "Enterprise",
    category: "enterprise",
    description:
      "SaaS platform for supplier risk monitoring with AI-powered insights, OpenAI integration, and Stripe payment processing.",
    stack: ["Next.js", "Supabase", "OpenAI", "Stripe", "Netlify"],
    features: [
      "AI-powered risk scoring",
      "Supplier health dashboard",
      "Stripe subscription billing",
      "Netlify serverless functions",
      "Real-time alerts",
    ],
    status: "Deployed",
    color: "from-rose-950 to-pink-800",
    githubUrl: "https://github.com",
    liveUrl: "https://supplypulse.netlify.app",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: "Discovery", description: "Understanding your business goals and challenges" },
  { step: 2, title: "Planning", description: "Architecture, roadmap, and timeline scoping" },
  { step: 3, title: "Design", description: "UI/UX prototyping and client approval" },
  { step: 4, title: "Development", description: "Clean, modern code built to spec" },
  { step: 5, title: "Testing", description: "QA, performance, and security checks" },
  { step: 6, title: "Launch", description: "Deployment, DNS, and go-live support" },
  { step: 7, title: "Support", description: "Ongoing maintenance and updates" },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "We went from taking orders via WhatsApp to having a full online store in six weeks. Our revenue doubled in the first month. Nexalyze didn't just build us a website — they changed our business.",
    name: "Saman Kumara",
    role: "Founder",
    company: "HiveBliss Naturals",
    initials: "SK",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "The JapuraXtream website was stunning. Event registrations increased three times compared to the previous year, and the animations left attendees genuinely impressed. Beyond what we imagined.",
    name: "Dinusha Perera",
    role: "President",
    company: "IEEE CS SBC USJ",
    initials: "DP",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Professional, fast, and genuinely invested in our success. The team understood our technical requirements and delivered a scalable architecture we can grow into. I recommend Nexalyze without hesitation.",
    name: "Raveena Jayasekara",
    role: "CTO",
    company: "SupplyPulse SaaS",
    initials: "RJ",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "They took our vague idea and turned it into a working product faster than any agency we've worked with before. The attention to detail in both design and functionality was outstanding.",
    name: "Kasun Fernando",
    role: "CEO",
    company: "Colombo Tech Ventures",
    initials: "KF",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "Our website now ranks on the first page of Google for our key search terms. The SEO work Nexalyze did made a tangible difference to our enquiry rate within two months.",
    name: "Amaya Wickramasinghe",
    role: "Marketing Director",
    company: "PearlBay Hotels",
    initials: "AW",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "The support after launch is what truly sets them apart. Every question was answered promptly and every change was made without fuss. This is a team that cares about your long-term success.",
    name: "Lahiru Bandara",
    role: "Operations Manager",
    company: "Kandy Fresh Produce",
    initials: "LB",
    rating: 5,
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [];

// ─── About Values ─────────────────────────────────────────────────────────────
export const ABOUT_VALUES = [
  {
    title: "Problem Solvers",
    description:
      "We understand your business challenges before writing a single line of code.",
    icon: "Lightbulb",
  },
  {
    title: "Local Expertise",
    description:
      "We understand Sri Lankan businesses, their market, and their customers deeply.",
    icon: "Users",
  },
  {
    title: "Post-Launch Support",
    description:
      "We stay with you. Our relationship doesn't end when your website goes live.",
    icon: "HeadphonesIcon",
  },
  {
    title: "Grow Together",
    description:
      "Your success is ours. We scale our support as your business grows.",
    icon: "TrendingUp",
  },
];

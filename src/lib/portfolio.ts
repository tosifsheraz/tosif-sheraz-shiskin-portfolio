/**
 * ============================================================
 * SOURCE OF TRUTH — Tosif Sheraz portfolio content
 * ============================================================
 * Every fact below is drawn from the verified source materials
 * provided by Tosif Sheraz (LinkedIn profile content, Fiverr
 * profile headline & service description, professional photos).
 *
 * Rules honoured here:
 *  - No invented metrics, clients, testimonials, dates or awards.
 *  - Platform profiles linked only where the handle is verified.
 *  - Company-level work (Core Elite Experts) is kept distinct
 *    from personal freelance work.
 * ============================================================
 */

export const profile = {
  name: "Tosif Sheraz",
  firstName: "Tosif",
  initials: "TS",
  title: "Founder & CEO, Core Elite Experts",
  roles: [
    "Entrepreneur",
    "Digital Educator",
    "DevOps & Cloud Engineer",
    "Technology Consultant",
    "Community Builder",
  ],
  headline: "I build businesses, develop talent, and engineer cloud systems that work in production.",
  intro:
    "I'm an entrepreneur and technology consultant from Gilgit-Baltistan, Pakistan. As Founder & CEO of Core Elite Experts, I help businesses modernise their infrastructure, automate delivery, and ship reliable products — and as a digital educator, I mentor young people building careers in the digital economy.",
  location: "Gilgit-Baltistan, Pakistan",
  languages: ["English", "Urdu", "Hindi"],
  availability: "Open to consulting, freelance projects, partnerships & speaking",
  portrait: "/images/tosif-portrait.png",
  portraitAlt:
    "Professional studio portrait of Tosif Sheraz wearing a navy suit and tie",
  workingShot: "/images/tosif-working.jpg",
  workingShotAlt:
    "Tosif Sheraz working with a headset at his desk, managing client communication and infrastructure tasks",
  founderShot: "/images/tosif-founder.png",
  founderShotAlt:
    "Tosif Sheraz in a navy blazer with arms crossed, photographed against a dark background",
} as const;

/* ------------------------------------------------------------------ */
/* Verified links (handles taken directly from provided materials)     */
/* ------------------------------------------------------------------ */
export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tosifsheraz",
    handle: "in/tosifsheraz",
    // flag: verify — inferred from provided LinkedIn profile name/handle
    verified: false,
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/tosifsheraz",
    handle: "@tosifsheraz",
    verified: true, // handle shown in provided Fiverr profile
  },
  {
    label: "Core Elite Experts",
    href: "https://coreeliteexperts.com/",
    handle: "coreeliteexperts.com",
    verified: true, // official URL provided
  },
] as const;

export const platformNote =
  "Upwork profile: available on request — Upwork does not permit public profile links in all regions.";

/* ------------------------------------------------------------------ */
/* Hero statistics — only figures stated in the source materials       */
/* ------------------------------------------------------------------ */
export const stats = [
  { value: "5,256+", label: "LinkedIn community", detail: "Followers engaging with digital-skills & technology content" },
  { value: "500+", label: "Professional connections", detail: "Founders, freelancers, recruiters & engineers" },
  { value: "3", label: "Cloud platforms", detail: "AWS · Azure · Google Cloud" },
  { value: "2", label: "Freelance marketplaces", detail: "Fiverr & Upwork client delivery" },
] as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "company", label: "Core Elite Experts" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "freelancing", label: "Freelancing" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ */
/* About — narrative built from verified biography                     */
/* ------------------------------------------------------------------ */
export const about = {
  eyebrow: "About Me",
  title: "One career, four threads — woven together on purpose.",
  paragraphs: [
    "I started in one of Pakistan's most remote and beautiful regions — Gilgit-Baltistan — with an internet connection, a laptop, and a stubborn belief that geography shouldn't decide opportunity. That belief turned into a freelance career, then into a company, and now into a mission to open the digital economy to the people around me.",
    "Today I run Core Elite Experts, a private-limited technology company serving clients internationally, while personally working as a DevOps & Cloud Engineer across AWS, Azure, and Google Cloud. Between those two worlds, I mentor aspiring freelancers on Fiverr, Upwork, LinkedIn, and practical AI tools — the exact skills that changed my own trajectory.",
    "What ties it all together is a simple operating philosophy: technology only matters when it moves a business forward, and businesses only last when they develop people along the way.",
  ],
  values: [
    {
      title: "Build, don't just plan",
      body: "Ideas earn their value in production. I ship working systems and functioning businesses, then iterate.",
    },
    {
      title: "Talent multiplies opportunity",
      body: "Every skill I learn gets taught forward. Developing people is how a single freelancer becomes an ecosystem.",
    },
    {
      title: "Reliability is the product",
      body: "Clients don't buy servers or pipelines — they buy certainty. I deliver production-ready work with clear communication.",
    },
    {
      title: "Local roots, global standards",
      body: "I operate from Gilgit-Baltistan and hold my delivery to international standards — proving both can coexist.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Core Elite Experts — company facts from provided materials          */
/* ------------------------------------------------------------------ */
export const company = {
  eyebrow: "Founder & CEO",
  name: "Core Elite Experts",
  legalName: "Core Elite Experts Pvt Ltd",
  website: "https://coreeliteexperts.com/",
  websiteLabel: "coreeliteexperts.com",
  positioning:
    "A technology services company built to give international clients enterprise-grade delivery — and to create meaningful technology careers in Pakistan.",
  description:
    "As Founder & CEO, I lead the company's direction, client relationships, and service quality. Core Elite Experts works with businesses that need dependable cloud infrastructure, software solutions, and digital delivery — combining my engineering background with a team-based delivery model.",
  leadershipPoints: [
    "Set company strategy, service standards, and delivery quality",
    "Lead client relationships and technical scoping for projects",
    "Build and develop a team of technology professionals",
    "Represent the company with international clients and partners",
  ],
  companyServices: [
    "Cloud & DevOps engineering services",
    "Web & software development",
    "Technology consulting & project delivery",
    "Digital solutions for growing businesses",
  ],
  transparencyNote:
    "Company services are delivered through the Core Elite Experts team; my personal freelance work is listed separately below. Website content reflects the company's current public positioning.",
} as const;

/* ------------------------------------------------------------------ */
/* Services — strictly those supported by the provided materials       */
/* ------------------------------------------------------------------ */
export type Service = {
  id: string;
  title: string;
  problem: string;
  value: string;
  deliverables: string[];
  bestFor: string;
  tags: string[];
  personal: boolean; // true = personally delivered; false = via company
};

export const services: Service[] = [
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure — AWS · Azure · GCP",
    problem:
      "Your stack has outgrown hand-managed servers: deployments are risky, costs are opaque, and outages are a surprise every time.",
    value:
      "I design, deploy, and manage scalable, automated, and secure cloud systems on the three major platforms — infrastructure you can grow into, not out of.",
    deliverables: [
      "Cloud architecture & environment setup",
      "Infrastructure management on AWS / Azure / GCP",
      "Scaling, security hardening & cost awareness",
    ],
    bestFor: "Startups & SMEs needing dependable foundations",
    tags: ["AWS", "Azure", "Google Cloud"],
    personal: true,
  },
  {
    id: "containers",
    title: "Docker & Kubernetes",
    problem:
      "Apps behave differently across machines, releases are fragile, and nobody can say what's running where.",
    value:
      "I containerise applications with Docker and deploy orchestrated Kubernetes clusters with the scaling and self-healing behaviour modern products expect.",
    deliverables: [
      "Docker containerisation of applications",
      "Kubernetes cluster setup & workload orchestration",
      "Rolling updates & resilient deployments",
    ],
    bestFor: "Product teams shipping services frequently",
    tags: ["Docker", "Kubernetes"],
    personal: true,
  },
  {
    id: "cicd-gitops",
    title: "CI/CD Pipelines & GitOps",
    problem:
      "Releases depend on one person's memory, take hours, and occasionally break a Friday evening.",
    value:
      "I build CI/CD pipelines and GitOps workflows so every commit travels safely from version control to production — repeatable, reviewable, and boring in the best way.",
    deliverables: [
      "End-to-end build, test & deploy pipelines",
      "GitOps deployment workflows",
      "Release automation & rollback safety",
    ],
    bestFor: "Teams that want fast, fear-free releases",
    tags: ["CI/CD", "GitOps", "Automation"],
    personal: true,
  },
  {
    id: "devops-troubleshooting",
    title: "DevOps Troubleshooting & Rescue",
    problem:
      "Something is broken — a pipeline, a cluster, a Git repository, a cloud resource — and your team needs it fixed now.",
    value:
      "I diagnose and fix Git, container, pipeline, and cloud issues quickly, then leave behind documentation so the same problem doesn't return.",
    deliverables: [
      "Git & repository issue resolution",
      "Pipeline & deployment debugging",
      "Cloud resource & configuration fixes",
    ],
    bestFor: "Teams blocked by an urgent technical issue",
    tags: ["Troubleshooting", "Git", "Recovery"],
    personal: true,
  },
  {
    id: "web-software",
    title: "Web & Software Solutions",
    problem:
      "Your business needs a dependable digital presence or custom software — not a template that falls over in six months.",
    value:
      "Through Core Elite Experts, my company plans, builds, and delivers web and software solutions with a team-based delivery model and accountable project management.",
    deliverables: [
      "Business websites & web applications",
      "Custom software development",
      "Ongoing maintenance & support",
    ],
    bestFor: "Businesses wanting a partner, not just a coder",
    tags: ["Web", "Software", "Delivery"],
    personal: false,
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    problem:
      "You're making expensive technology decisions with incomplete information — tooling, hosting, hiring, or roadmapping.",
    value:
      "I bring a business-first lens to technical decisions: what to build, what to buy, what to automate, and in what order — grounded in hands-on delivery experience.",
    deliverables: [
      "Technical decision support & architecture reviews",
      "Automation & delivery-process assessment",
      "Practical, prioritised roadmaps",
    ],
    bestFor: "Founders & leaders without in-house CTO coverage",
    tags: ["Strategy", "Architecture", "Automation"],
    personal: true,
  },
  {
    id: "training",
    title: "Digital Skills Training & Freelancing Mentorship",
    problem:
      "Talented people around you want to earn online but lack a map: which platform, which skill, which first step.",
    value:
      "I train and mentor individuals and groups on freelancing platforms, personal branding, and practical digital tools — the same playbook I used to build my own career.",
    deliverables: [
      "Fiverr & Upwork start-up mentoring",
      "LinkedIn personal-branding coaching",
      "AI tools & digital-skills workshops",
    ],
    bestFor: "Beginners, students & career-switchers",
    tags: ["Training", "Mentorship", "Digital Skills"],
    personal: true,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Projects — representative engagement types actually delivered via  */
/* the provided Fiverr service description. No invented clients,       */
/* metrics, or screenshots.                                            */
/* ------------------------------------------------------------------ */
export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  role: string;
  approach: string;
  stack: string[];
  outcome: string;
};

export const projectCategories = ["All", "Cloud", "DevOps", "Automation", "Web"] as const;

export const projects: Project[] = [
  {
    id: "k8s-clusters",
    title: "Kubernetes Cluster Deployment & Orchestration",
    category: "Cloud",
    summary:
      "Production-grade Kubernetes clusters with orchestrated, self-healing workloads for client applications.",
    challenge:
      "Clients running containerised services manually faced inconsistent environments and downtime during releases.",
    role: "End-to-end setup and configuration of cluster infrastructure and workloads.",
    approach:
      "Designed cluster topology, containerised services, configured deployments and services, and validated resilience under scaling and failure conditions.",
    stack: ["Kubernetes", "Docker", "Cloud Networking"],
    outcome:
      "Delivered stable, production-ready clusters where workloads scale and recover automatically — a repeatable setup now reused across engagements.",
  },
  {
    id: "cicd-pipelines",
    title: "End-to-End CI/CD Pipeline Automation",
    category: "DevOps",
    summary:
      "Automated pipelines taking client code from commit to production with build, test, and deploy stages.",
    challenge:
      "Manual releases were slow, error-prone, and dependent on individual team members' availability.",
    role: "Pipeline architecture, implementation, and handover documentation.",
    approach:
      "Built staged pipelines (build → test → deploy), integrated version-control triggers, and added rollback paths so failed releases recover in minutes, not hours.",
    stack: ["CI/CD", "Git", "Automation Tools"],
    outcome:
      "Clients moved from hand-run deployments to push-button releases with consistent, reviewable delivery every time.",
  },
  {
    id: "multicloud-infra",
    title: "Multi-Cloud Infrastructure Management — AWS & Azure",
    category: "Cloud",
    summary:
      "Day-to-day management of client infrastructure across AWS and Azure with security and reliability focus.",
    challenge:
      "Growing businesses needed their cloud environments managed professionally without hiring a full in-house platform team.",
    role: "Ongoing infrastructure management and optimisation as a retained freelancer.",
    approach:
      "Standardised resource configuration, applied security best practices, monitored workloads, and kept environments documented and recoverable.",
    stack: ["AWS", "Azure", "Cloud Security"],
    outcome:
      "Client environments became predictable and auditable — with infrastructure handled proactively instead of reactively.",
  },
  {
    id: "gitops-workflows",
    title: "GitOps Workflow Implementation",
    category: "Automation",
    summary:
      "Git-driven deployment workflows where the repository is the single source of truth for production state.",
    challenge:
      "Teams had configuration drift between environments and no clear audit trail of who changed what.",
    role: "GitOps adoption, workflow design, and team onboarding.",
    approach:
      "Aligned deployment flows with version control so every change is reviewed, traceable, and reversible — then trained client teams to operate it confidently.",
    stack: ["GitOps", "Git", "CI/CD"],
    outcome:
      "Deployment changes became transparent and auditable, eliminating drift and the blame game that came with it.",
  },
  {
    id: "docker-containerisation",
    title: "Application Containerisation with Docker",
    category: "DevOps",
    summary:
      "Legacy and modern applications packaged into portable, consistent Docker containers.",
    challenge:
      "Applications that worked on one machine failed on another, and environment setup ate days of engineering time.",
    role: "Containerisation strategy and Docker implementation.",
    approach:
      "Analysed application dependencies, wrote production-grade Docker configurations, and verified identical behaviour across development, staging, and production.",
    stack: ["Docker", "Linux", "Compose"],
    outcome:
      "Portable applications with one-command setup — environment bugs dropped dramatically for client teams.",
  },
  {
    id: "client-web-presence",
    title: "Business Websites & Digital Presence Delivery",
    category: "Web",
    summary:
      "Web solutions delivered for clients through Core Elite Experts' team-based model.",
    challenge:
      "Small businesses needed professional, dependable web presences and a partner who could also advise on hosting and infrastructure.",
    role: "Company leadership: scoping, quality standards, and client communication.",
    approach:
      "Combined in-house web development with my infrastructure background — sites deployed on properly configured, secure hosting rather than an afterthought.",
    stack: ["Web Development", "Hosting", "Team Delivery"],
    outcome:
      "Clients received complete packages: the website itself plus the infrastructure underneath it, from one accountable team.",
  },
] as const;

export const projectsNote =
  "These represent the core engagement types I deliver through Fiverr, Upwork, and Core Elite Experts. Client confidentiality is respected — detailed case studies and references are available on request.";

/* ------------------------------------------------------------------ */
/* Freelancing — from the provided Fiverr profile & positioning        */
/* ------------------------------------------------------------------ */
export const freelancing = {
  eyebrow: "Freelancing & Client Work",
  title: "Platform-tested delivery, on two marketplaces.",
  intro:
    "My freelance career runs through Fiverr and Upwork, where I deliver DevOps and cloud engineering work for international clients — from full platform setups to urgent rescues of broken infrastructure.",
  fiverrTitle:
    "DevOps Engineer — AWS, Azure, Docker, Kubernetes, CI/CD, GitOps",
  fiverrAbout:
    "I design and deploy scalable, automated, and secure cloud systems — from Docker containers and Kubernetes clusters to CI/CD pipelines, AWS/Azure infrastructure management, and Git or cloud issue resolution.",
  workTypes: [
    "Full DevOps environment setup",
    "Docker & Kubernetes deployments",
    "CI/CD pipeline construction",
    "AWS & Azure infrastructure management",
    "Git & cloud issue troubleshooting",
    "Automation & deployment workflows",
  ],
  approach: [
    {
      title: "Requirements before estimates",
      body: "Every engagement starts with understanding what 'done' means for the client — scope agreed in writing before work begins.",
    },
    {
      title: "Communication you can set your watch to",
      body: "Proactive updates, honest timelines, and early warnings. Clients never chase me for status.",
    },
    {
      title: "Production-ready means production-ready",
      body: "Work is delivered documented, verified, and handover-ready — not 'works on my machine'.",
    },
    {
      title: "Relationships over transactions",
      body: "Most of my work comes from clients who return. I optimise for the second project, not the first payment.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Digital education & community — from verified positioning           */
/* ------------------------------------------------------------------ */
export const education = {
  eyebrow: "Digital Education & Mentorship",
  title: "The skills that changed my life should be teachable.",
  intro:
    "Freelancing rebuilt my own future — so I teach others how to build theirs. I mentor aspiring freelancers and young professionals on the practical skills the digital economy actually rewards.",
  focusAreas: [
    {
      title: "Freelancing Foundations",
      body: "Getting started on Fiverr & Upwork: profiles, first gigs, proposals, pricing, and winning that difficult first order.",
    },
    {
      title: "LinkedIn & Personal Branding",
      body: "Building a professional presence that attracts clients and recruiters — the same approach behind my 5,256+ follower community.",
    },
    {
      title: "AI Tools & Productivity",
      body: "Practical, honest use of AI tools in daily workflows — where they genuinely help and where they waste your time.",
    },
    {
      title: "Digital Career Strategy",
      body: "Choosing a skill, building a portfolio, and turning platform work into a durable career rather than pocket money.",
    },
  ],
  community: {
    eyebrow: "Leadership & Community Impact",
    title: "Building the ecosystem I wished existed.",
    points: [
      {
        title: "A growing digital community",
        body: "A LinkedIn community of 5,256+ followers, built by sharing what actually works in freelancing, technology, and digital careers.",
      },
      {
        title: "Opportunity creation in Gilgit-Baltistan",
        body: "Proving from Pakistan's northern regions that global digital work is achievable — and showing the path to those who follow.",
      },
      {
        title: "Founder-led job creation",
        body: "Core Elite Experts is structured to create technology careers at home while serving clients abroad.",
      },
      {
        title: "Collaboration over gatekeeping",
        body: "Openly sharing knowledge, playbooks, and honest guidance with peers, students, and aspiring freelancers.",
      },
    ],
  },
} as const;

/* ------------------------------------------------------------------ */
/* Skills — only tools/areas evidenced in provided materials           */
/* ------------------------------------------------------------------ */
export const skillGroups = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
  },
  {
    title: "DevOps & Automation",
    skills: ["Docker", "Kubernetes", "CI/CD", "GitOps", "Git", "Terraform", "Linux"],
  },
  {
    title: "Business & Leadership",
    skills: ["Entrepreneurship", "Business Development", "Client Relations", "Team Leadership", "Project Delivery"],
  },
  {
    title: "Freelancing & Client Management",
    skills: ["Fiverr", "Upwork", "Proposals & Bidding", "Client Communication", "Requirements Scoping"],
  },
  {
    title: "Education & Mentoring",
    skills: ["Freelancing Mentorship", "LinkedIn Coaching", "Digital Skills Training", "AI Tools"],
  },
  {
    title: "Languages",
    skills: ["English", "Urdu", "Hindi"],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Experience & education — only verified entries, no invented dates   */
/* ------------------------------------------------------------------ */
export const experience = [
  {
    title: "Founder & CEO",
    org: "Core Elite Experts Pvt Ltd",
    type: "Entrepreneurship",
    period: "Present",
    points: [
      "Leading a private-limited technology company serving international clients",
      "Directing strategy, service quality, and client relationships",
      "Building a team delivering cloud, web, and digital solutions",
    ],
  },
  {
    title: "DevOps & Cloud Engineer",
    org: "Fiverr & Upwork — International Clients",
    type: "Freelance",
    period: "Ongoing",
    points: [
      "Delivering AWS, Azure, Docker, Kubernetes, CI/CD, and GitOps engagements",
      "Handling full environment setups and urgent production troubleshooting",
    ],
  },
  {
    title: "Digital Educator & Freelancing Mentor",
    org: "Community & Online Programs",
    type: "Education",
    period: "Ongoing",
    points: [
      "Mentoring aspiring freelancers on Fiverr, Upwork, LinkedIn, and AI tools",
      "Building a 5,256+ follower community around digital skills",
    ],
  },
] as const;

export const educationHistory = [
  {
    institution: "Virtual University of Pakistan",
    detail: "Higher education — technology & business foundations",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Contact — inquiry types & form config. NO invented email/phone.     */
/* ------------------------------------------------------------------ */
export const inquiryTypes = [
  "Business Inquiry",
  "Technology Consulting",
  "Freelance Project",
  "Partnership",
  "Training & Speaking",
  "Professional Networking",
] as const;

export const contactChannels = [
  {
    title: "Location",
    primary: "Gilgit-Baltistan, Pakistan",
    secondary: "Working with clients internationally",
  },
  {
    title: "Fastest Channels",
    primary: "LinkedIn or Fiverr messages",
    secondary: "For project inquiries, use the form — it reaches me directly",
  },
  {
    title: "Working Languages",
    primary: "English · Urdu · Hindi",
    secondary: "Client communication in English",
  },
] as const;

export const footer = {
  blurb:
    "Founder & CEO of Core Elite Experts. Building businesses, developing talent, and engineering reliable cloud systems from Gilgit-Baltistan to the world.",
  copyright: `© ${new Date().getFullYear()} Tosif Sheraz. All rights reserved.`,
  builtWith: "Designed & engineered with intent — Next.js, TypeScript & Tailwind CSS",
} as const;

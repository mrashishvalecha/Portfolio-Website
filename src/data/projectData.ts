export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Ejaro",
    shortTitle: "Ejaro",
    category: "AI-Enhanced Marketplace",
    description: "The first fully licensed P2P vehicle sharing platform in Saudi Arabia, now featuring AI-optimized search filters and intelligent owner-renter matching algorithms built on high-performance Angular architecture.",
    tools: ["Angular", "AI Matching", "REST APIs", "JWT Auth"],
    image: "/images/ejaro.png",
  },
  {
    id: "02",
    title: "MHK Market Prominence",
    shortTitle: "MHK / MPWEB",
    category: "AI-Integrated Enterprise Platform",
    description: "A comprehensive enterprise insurance platform (MPWEB) for the US market, leveraging Generative AI for automated compliance checks and LLM-driven member enrollment optimizations.",
    tools: ["Angular 8-21", "Angular Signals", "OpenAI API", "Prompt Engineering", "Jenkins"],
    image: "/images/placeholder.webp",
  },
  {
    id: "03",
    title: "Australian Super",
    shortTitle: "Australian Super",
    category: "Superannuation & AI Logic",
    description: "Digital transformation for Australia's largest superannuation fund, streamlining advisor workflows with AI-ready data processing and enterprise Angular components.",
    tools: ["Angular v17", "Angular Signals", "Azure AI Service", "REST APIs", "Enterprise UI"],
    image: "/images/placeholder.webp",
  },
  {
    id: "04",
    title: "IGL CRM",
    shortTitle: "IGL CRM",
    category: "Autonomous Utility Ecosystem",
    description: "Automated CRM ecosystem for Indraprastha Gas Limited, featuring AI-integrated self-service channels and automated sentiment analysis for real-time grievance tracking.",
    tools: ["Angular", "Sentiment Analysis", "SAP Integration", "BI Dashboards"],
    image: "/images/placeholder.webp",
  },
  {
    id: "05",
    title: "IHS Markit (now S&P)",
    shortTitle: "S&P Global / ISDA",
    category: "Financial Digitalization & AI",
    description: "Architected a high-security digitalization platform for S&P Global’s derivatives ecosystem, integrating ISDA Create with Counterparty Manager to automate multi-jurisdictional compliance and contract lifecycle management using enterprise Angular modules.",
    tools: ["Angular 18", "Angular Signals", "RxJS", "D3.js", "Enterprise Security", "REST APIs"],
    image: "/images/spglobal.png",
  }
];

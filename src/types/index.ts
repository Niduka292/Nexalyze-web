// ─── Service Types ────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

// ─── Project Types ────────────────────────────────────────────────────────────
export type ProjectCategory =
  | "all"
  | "ecommerce"
  | "business"
  | "enterprise"
  | "education"
  | "healthcare";

export interface Project {
  id: string;
  title: string;
  industry: string;
  category: Exclude<ProjectCategory, "all">;
  description: string;
  stack: string[];
  features: string[];
  status: string;
  color: string; // Tailwind gradient class or hex pair
  githubUrl?: string;
  liveUrl?: string;
}

// ─── Testimonial Types ────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
}

// ─── Process Step Types ───────────────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// ─── Stat Types ───────────────────────────────────────────────────────────────
export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

// ─── Feature Types ────────────────────────────────────────────────────────────
export interface Feature {
  title: string;
  description: string;
}

// ─── Trust Item Types ─────────────────────────────────────────────────────────
export interface TrustItem {
  label: string;
  icon: string;
}

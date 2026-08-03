import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with clsx (lightweight alternative to cn from shadcn)
 */
export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Smooth scroll to a section by id
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

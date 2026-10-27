/**
 * Merge class names (lightweight alternative to cn from shadcn)
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
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

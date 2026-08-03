import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Eyebrow label used above section headings.
 */
export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-bold tracking-[2px] uppercase text-blue mb-3",
        className
      )}
    >
      {children}
    </p>
  );
}

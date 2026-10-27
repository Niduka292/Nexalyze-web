import Link from "next/link";

/**
 * Custom 404 page — styled to match the Nexalyze brand.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Big 404 */}
        <div className="text-[120px] font-extrabold leading-none tracking-tight gradient-text mb-2 select-none">
          404
        </div>

        <h1 className="text-2xl font-bold text-navy mb-3">
          Page not found
        </h1>
        <p className="text-text-muted leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-blue shadow-blue-glow hover:shadow-blue-glow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            ← Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-navy border-2 border-border hover:border-blue hover:text-blue transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

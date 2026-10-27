"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  "OpenAI-powered risk scoring across every supplier",
  "Real-time alerts with configurable thresholds",
  "Supplier health monitoring and trend analysis",
  "Stripe-billed SaaS with team and enterprise plans",
];

const TECH_TAGS = [
  "Next.js",
  "OpenAI",
  "Spring Boot",
  "PostgreSQL",
  "Stripe",
  "Redis",
  "AWS",
];

const ease = [0.25, 0.1, 0.25, 1] as const;

function CheckIcon() {
  return (
    <svg
      width="10"
      height="10"
      fill="none"
      stroke="#22C55E"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleVisit = () => {
    window.open("https://supplypulse.netlify.app", "_blank", "noopener,noreferrer");
  };

  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="products"
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0A1128",
        padding: "96px 48px",
      }}
    >
      {/* Subtle dark-mode dot matrix */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(96, 165, 250, 0.11) 1.25px, transparent 1.25px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient Cobalt glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-100px",
          width: "440px",
          height: "440px",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.16), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1140px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0 }}
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#60A5FA",
              marginBottom: "14px",
            }}
          >
            What we build
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.07 }}
            style={{
              fontSize: "42px",
              fontWeight: 800,
              letterSpacing: "-1.2px",
              lineHeight: 1.08,
              color: "#F8FAFC",
              marginBottom: "16px",
            }}
          >
            Products that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              move the needle
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.14 }}
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "#94A3B8",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            We ship focused, AI-powered tools that solve specific, painful business problems — and keep getting better.
          </motion.p>
        </div>

        {/* Products grid */}
        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.45fr 1fr",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* ── Flagship: SupplyPulse ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.18 }}
            whileHover={{ y: -4 }}
            style={{
              background: "#111C38",
              border: "1px solid rgba(96, 165, 250, 0.25)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Inner glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "260px",
                height: "260px",
                background:
                  "radial-gradient(circle, rgba(37, 99, 235, 0.22), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Top content */}
            <div style={{ padding: "40px 36px", position: "relative", zIndex: 1 }}>
              {/* Badge */}
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#60A5FA",
                    background: "rgba(37, 99, 235, 0.18)",
                    border: "1px solid rgba(96, 165, 250, 0.3)",
                    borderRadius: "9999px",
                    padding: "5px 12px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#60A5FA",
                      animation: "nx-pulse 2s ease-in-out infinite",
                      flexShrink: 0,
                    }}
                  />
                  Flagship product
                </span>
              </div>

              <p
                style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  letterSpacing: "-0.8px",
                  color: "#F8FAFC",
                  marginBottom: "12px",
                }}
              >
                SupplyPulse
              </p>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#CBD5E1",
                  marginBottom: "28px",
                  maxWidth: "440px",
                }}
              >
                AI-powered supplier risk monitoring that detects disruptions before they reach your operations — in real time.
              </p>

              {/* Feature list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "32px",
                }}
              >
                {FEATURES.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#CBD5E1",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(34, 197, 94, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckIcon />
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <button
                  onClick={handleVisit}
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "11px 24px",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(37, 99, 235, 0.35)",
                    transition: "transform 0.15s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 26px rgba(37, 99, 235, 0.48)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(37, 99, 235, 0.35)";
                  }}
                >
                  Visit SupplyPulse →
                </button>
                <button
                  onClick={handleContact}
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#CBD5E1",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "9999px",
                    padding: "11px 20px",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)";
                    e.currentTarget.style.color = "#F8FAFC";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                    e.currentTarget.style.color = "#CBD5E1";
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Tech stack card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.25 }}
              style={{
                background: "#111C38",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "26px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#60A5FA",
                  marginBottom: "16px",
                }}
              >
                Built with
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#CBD5E1",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "6px",
                      padding: "5px 11px",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Coming soon card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.32 }}
              style={{
                background: "#111C38",
                border: "1px dashed rgba(167, 139, 250, 0.28)",
                borderRadius: "20px",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Violet ambient */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgba(124, 58, 237, 0.14), transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(124, 58, 237, 0.16)",
                  border: "1px solid rgba(167, 139, 250, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#A78BFA"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#A78BFA",
                  background: "rgba(124, 58, 237, 0.16)",
                  border: "1px solid rgba(167, 139, 250, 0.25)",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  marginBottom: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Coming soon
              </span>

              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#F8FAFC",
                  marginBottom: "10px",
                  letterSpacing: "-0.3px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                The next product is in the works.
              </p>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: "#94A3B8",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Nexalyze is building additional AI-powered tools for enterprise teams. Follow us or reach out to learn more about what&apos;s coming next.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nx-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.75); }
        }
        @media (max-width: 860px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

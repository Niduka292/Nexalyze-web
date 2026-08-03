"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  "OpenAI-powered risk scoring across every supplier",
  "Real-time alerts with configurable thresholds",
  "Supplier health dashboards and trend analysis",
  "Stripe-billed SaaS with team and enterprise plans",
];

const MINI_KPIS = [
  { label: "RISK SCORE", value: "74", sub: "Moderate", subColor: "#F59E0B" },
  { label: "SUPPLIERS", value: "1,284", sub: "↑ 12 new", subColor: "#22C55E" },
  { label: "ALERTS", value: "3", sub: "Active", subColor: "#64748B", valueColor: "#EF4444" },
];

const TECH_TAGS = ["Next.js", "OpenAI", "Spring Boot", "PostgreSQL", "Stripe", "Redis", "AWS"];

const ease = [0.25, 0.1, 0.25, 1] as const;

function CheckIcon() {
  return (
    <svg width="10" height="10" fill="none" stroke="#22C55E" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleVisit = () => {
    window.open("https://supplypulse.io", "_blank", "noopener,noreferrer");
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
        backgroundColor: "#0B1626",
        padding: "96px 48px",
      }}
    >
      {/* Section separator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0,212,255,0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

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
              color: "#00D4FF",
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
                background: "linear-gradient(135deg, #00D4FF, #7C5CFF)",
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
          style={{
            display: "grid",
            gridTemplateColumns: "1.55fr 1fr",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {/* ── Flagship: SupplyPulse ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.18 }}
            style={{
              background: "#101C2D",
              border: "1px solid rgba(0,212,255,0.18)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
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
                background: "radial-gradient(circle, rgba(0,212,255,0.1), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Top content */}
            <div style={{ padding: "36px 36px 28px", position: "relative", zIndex: 1 }}>
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
                    color: "#00D4FF",
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    borderRadius: "9999px",
                    padding: "4px 12px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#00D4FF",
                      animation: "v9-pulse 2s ease-in-out infinite",
                      flexShrink: 0,
                    }}
                  />
                  Flagship product
                </span>
              </div>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  letterSpacing: "-0.8px",
                  color: "#F8FAFC",
                  marginBottom: "10px",
                }}
              >
                SupplyPulse
              </p>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "#94A3B8",
                  marginBottom: "24px",
                  maxWidth: "380px",
                }}
              >
                AI-powered supplier risk monitoring that detects disruptions before they reach your operations — in real time.
              </p>

              {/* Feature list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {FEATURES.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#94A3B8" }}>
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(34,197,94,0.12)",
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
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <button
                  onClick={handleVisit}
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#07121F",
                    background: "#00D4FF",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "10px 24px",
                    cursor: "pointer",
                    transition: "opacity 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.88";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Visit SupplyPulse →
                </button>
                <button
                  onClick={handleContact}
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#94A3B8",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "9999px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                    e.currentTarget.style.color = "#F8FAFC";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>

            {/* Mini dashboard strip */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "20px 36px 28px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "12px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {MINI_KPIS.map(({ label, value, sub, subColor, valueColor }) => (
                <div
                  key={label}
                  style={{
                    background: "#0B1626",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "14px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "9px",
                      color: "#64748B",
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.5px",
                      marginBottom: "4px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: valueColor ?? "#F8FAFC",
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {value}
                  </p>
                  <p style={{ fontSize: "10px", color: subColor, marginTop: "3px" }}>{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Tech stack card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.25 }}
              style={{
                background: "#101C2D",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#64748B",
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
                      color: "#94A3B8",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "6px",
                      padding: "4px 10px",
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
                background: "#101C2D",
                border: "1px dashed rgba(255,255,255,0.1)",
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
                  background: "radial-gradient(ellipse at 80% 20%, rgba(124,92,255,0.07), transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(124,92,255,0.1)",
                  border: "1px solid rgba(124,92,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <svg width="22" height="22" fill="none" stroke="#7C5CFF" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#7C5CFF",
                  background: "rgba(124,92,255,0.1)",
                  border: "1px solid rgba(124,92,255,0.2)",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  marginBottom: "20px",
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
                  color: "#64748B",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Vector9 is building additional AI-powered tools for enterprise teams. Follow us or reach out to learn more about what's coming next.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes v9-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.75); }
        }
      `}</style>
    </section>
  );
}
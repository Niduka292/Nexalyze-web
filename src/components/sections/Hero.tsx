"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  "OpenAI-powered",
  "Enterprise-grade security",
  "Real-time intelligence",
];

const KPI_CARDS = [
  { label: "AVG RISK SCORE", value: "74", badge: "Moderate", badgeColor: "#F59E0B", badgeBg: "rgba(245,158,11,0.12)" },
  { label: "CRITICAL SUPPLIERS", value: "12", badge: "↑ 3 new", badgeColor: "#EF4444", badgeBg: "rgba(239,68,68,0.12)" },
  { label: "HEALTH SCORE", value: "91%", badge: "↑ 2.4%", badgeColor: "#22C55E", badgeBg: "rgba(34,197,94,0.12)" },
];

const BAR_HEIGHTS = [35, 55, 42, 78, 60, 48, 90, 65, 50, 82, 44, 58];

const SIDEBAR_ITEMS = ["Dashboard", "Suppliers", "Alerts", "Reports", "Settings"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

function GridBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.045) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        pointerEvents: "none",
      }}
    />
  );
}

function FloatingCard({
  side,
  label,
  value,
  sub,
  valueColor,
  subColor,
}: {
  side: "left" | "right";
  label: string;
  value: string;
  sub: string;
  valueColor?: string;
  subColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.9 }}
      style={{
        position: "absolute",
        [side]: side === "left" ? "-40px" : "-40px",
        top: side === "left" ? "36px" : "90px",
        background: "#101C2D",
        border: "1px solid rgba(0,212,255,0.22)",
        borderRadius: "12px",
        padding: "12px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        zIndex: 10,
        minWidth: "150px",
      }}
    >
      <p style={{ fontSize: "10px", color: "#64748B", marginBottom: "4px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.5px" }}>
        {label}
      </p>
      <p style={{ fontSize: "18px", fontWeight: 800, color: valueColor ?? "#F8FAFC", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-0.5px" }}>
        {value}
      </p>
      <p style={{ fontSize: "11px", color: subColor ?? "#22C55E", marginTop: "3px" }}>
        {sub}
      </p>
    </motion.div>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.65 }}
      style={{ position: "relative", width: "100%", maxWidth: "860px", margin: "0 auto" }}
    >
      <FloatingCard
        side="left"
        label="SUPPLIERS MONITORED"
        value="1,284"
        sub="↑ 12 new this week"
        subColor="#22C55E"
      />
      <FloatingCard
        side="right"
        label="RISK ALERTS"
        value="3"
        sub="Needs attention"
        valueColor="#EF4444"
        subColor="#F59E0B"
      />

      {/* Window frame */}
      <div
        style={{
          background: "#0B1626",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.05)",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: "#101C2D",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
            <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
          ))}
          <span style={{ marginLeft: "8px", fontSize: "11px", color: "#64748B", fontFamily: "'JetBrains Mono', monospace" }}>
            SupplyPulse — Risk Dashboard
          </span>
        </div>

        {/* Body */}
        <div style={{ display: "grid", gridTemplateColumns: "176px 1fr", minHeight: "240px" }}>
          {/* Sidebar */}
          <div style={{ background: "#0D1929", borderRight: "1px solid rgba(255,255,255,0.05)", padding: "16px 0" }}>
            {SIDEBAR_ITEMS.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  color: item === "Dashboard" ? "#00D4FF" : "#64748B",
                  background: item === "Dashboard" ? "rgba(0,212,255,0.07)" : "transparent",
                  borderLeft: item === "Dashboard" ? "2px solid #00D4FF" : "2px solid transparent",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "3px",
                    background: item === "Dashboard" ? "#00D4FF" : "#64748B",
                    opacity: 0.5,
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* KPI row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
              {KPI_CARDS.map(({ label, value, badge, badgeColor, badgeBg }) => (
                <div
                  key={label}
                  style={{
                    background: "#101C2D",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                >
                  <p style={{ fontSize: "10px", color: "#64748B", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.5px", marginBottom: "4px" }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "22px", fontWeight: 800, color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "-1px" }}>
                    {value}
                  </p>
                  <span style={{ display: "inline-block", fontSize: "9px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px", marginTop: "4px", background: badgeBg, color: badgeColor }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div
              style={{
                background: "#101C2D",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                padding: "12px",
                height: "88px",
                display: "flex",
                alignItems: "flex-end",
                gap: "4px",
              }}
            >
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: "3px 3px 0 0",
                    background: h >= 75 ? "rgba(0,212,255,0.55)" : "rgba(0,212,255,0.18)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#07121F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "140px 48px 80px",
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

      <GridBackground />

      {/* Top cyan + violet glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "360px",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, rgba(124,92,255,0.06) 50%, transparent 75%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "80px",
          left: "-80px",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(124,92,255,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "760px",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Eyebrow */}
        <motion.div {...fadeUp(0.05)} style={{ marginBottom: "28px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#00D4FF",
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "9999px",
              padding: "5px 14px",
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
            AI-Powered Software
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.12)}
          style={{
            fontSize: "clamp(38px, 5.5vw, 58px)",
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1.04,
            color: "#F8FAFC",
            marginBottom: "24px",
          }}
        >
          Software that thinks.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00D4FF 0%, #7C5CFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Solutions that scale.
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          {...fadeUp(0.19)}
          style={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "#94A3B8",
            maxWidth: "540px",
            marginBottom: "40px",
          }}
        >
          Vector9 builds intelligent SaaS products and enterprise tools that help businesses move faster, see further, and operate with confidence.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.26)}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "52px", flexWrap: "wrap", justifyContent: "center" }}
        >
          <button
            onClick={() => handleScroll("#products")}
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#07121F",
              background: "#00D4FF",
              border: "none",
              borderRadius: "9999px",
              padding: "12px 28px",
              cursor: "pointer",
              letterSpacing: "0.1px",
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
            Explore our products
          </button>

          <button
            onClick={() => handleScroll("#about")}
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#F8FAFC",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "9999px",
              padding: "12px 28px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "border-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="16" height="16" fill="none" stroke="#F8FAFC" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Learn about us
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          {...fadeUp(0.33)}
          style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <span key={item} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", color: "#64748B", fontWeight: 500 }}>
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    color: "#22C55E",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {item}
              </span>
              {i < TRUST_ITEMS.length - 1 && (
                <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.1)" }} />
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Dashboard mockup */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "1100px", marginTop: "64px" }}>
        <DashboardMockup />
      </div>

      {/* Keyframe for pulsing dot */}
      <style>{`
        @keyframes v9-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.75); }
        }
      `}</style>
    </section>
  );
}
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { num: "1,200+", label: "Suppliers monitored via SupplyPulse" },
  { num: "99.9%", label: "Platform uptime SLA" },
  { num: "<2s", label: "Real-time alert delivery" },
  { num: "AI-first", label: "Every product, from day one" },
];

const VALUES = [
  {
    title: "Speed with precision",
    body: "We move fast without cutting corners. Every feature ships when it's right, not just when it's ready.",
    iconColor: "#00D4FF",
    iconBg: "rgba(0,212,255,0.1)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#00D4FF" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Radical transparency",
    body: "Our products show their reasoning. Our team communicates openly. No black boxes — ever.",
    iconColor: "#7C5CFF",
    iconBg: "rgba(124,92,255,0.1)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#7C5CFF" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Enterprise trust",
    body: "Security and reliability aren't features — they're foundations we build everything else on top of.",
    iconColor: "#22C55E",
    iconBg: "rgba(34,197,94,0.1)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#22C55E" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Genuine innovation",
    body: "We build things that didn't exist before — not wrappers around existing tools with a new coat of paint.",
    iconColor: "#F59E0B",
    iconBg: "rgba(245,158,11,0.1)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#F59E0B" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#07121F",
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
          top: "40px",
          right: "-120px",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, rgba(124,92,255,0.07), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Top two-column block ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >
          {/* Left — who we are */}
          <div>
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
                marginBottom: "16px",
              }}
            >
              Who we are
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
                marginBottom: "24px",
              }}
            >
              Built to solve{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7C5CFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                hard problems.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.14 }}
              style={{ fontSize: "16px", lineHeight: 1.75, color: "#94A3B8", marginBottom: "16px" }}
            >
              Vector9 Technologies is a software company focused on building AI-powered products that give businesses a real edge. We combine deep technical expertise with a sharp focus on practical outcomes.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.19 }}
              style={{ fontSize: "16px", lineHeight: 1.75, color: "#94A3B8" }}
            >
              Our team brings together engineers, designers, and domain experts who believe the best technology disappears into the workflow — invisible until you can't imagine working without it.
            </motion.p>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginTop: "36px",
              }}
            >
              {STATS.map(({ num, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.26 + i * 0.07 }}
                  style={{
                    background: "#101C2D",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "30px",
                      fontWeight: 800,
                      letterSpacing: "-1px",
                      fontFamily: "'JetBrains Mono', monospace",
                      background: "linear-gradient(135deg, #00D4FF, #7C5CFF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "4px",
                    }}
                  >
                    {num}
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", fontWeight: 500 }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — mission card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
            style={{
              background: "#0B1626",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gradient top border */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, #00D4FF, #7C5CFF)",
                borderRadius: "16px 16px 0 0",
              }}
            />

            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#7C5CFF",
                marginBottom: "16px",
              }}
            >
              Our mission
            </p>

            <p
              style={{
                fontSize: "19px",
                fontWeight: 700,
                lineHeight: 1.5,
                color: "#F8FAFC",
                letterSpacing: "-0.3px",
                marginBottom: "24px",
              }}
            >
              "Give every business the intelligence to act before problems become crises."
            </p>

            <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#94A3B8" }}>
              We founded Vector9 because too many companies operate blind — reacting to failures that could have been predicted. We're changing that by building software that surfaces the right signal at the right time.
            </p>

            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.06)",
                margin: "24px 0",
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#00D4FF",
                  flexShrink: 0,
                }}
              />
              <p style={{ fontSize: "13px", color: "#64748B" }}>
                Founded to make AI-powered foresight accessible to every operations team
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Values row ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          style={{
            textAlign: "center",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#00D4FF",
            marginBottom: "12px",
          }}
        >
          What drives us
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.17 }}
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: 800,
            letterSpacing: "-0.8px",
            color: "#F8FAFC",
            marginBottom: "40px",
          }}
        >
          Our principles
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {VALUES.map(({ title, body, iconBg, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.24 + i * 0.07 }}
              style={{
                background: "#101C2D",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "24px 20px",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}
              >
                {icon}
              </div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "8px" }}>
                {title}
              </p>
              <p style={{ fontSize: "12px", lineHeight: 1.65, color: "#64748B" }}>{body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
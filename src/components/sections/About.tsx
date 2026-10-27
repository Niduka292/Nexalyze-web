"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VALUES = [
  {
    title: "Speed with precision",
    body: "We move fast without cutting corners. Every feature ships when it's right, not just when it's ready.",
    iconColor: "#2563EB",
    iconBg: "rgba(37, 99, 235, 0.1)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#2563EB" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Radical transparency",
    body: "Our products show their reasoning. Our team communicates openly. No black boxes — ever.",
    iconColor: "#7C3AED",
    iconBg: "rgba(124, 58, 237, 0.1)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Enterprise trust",
    body: "Security and reliability aren't features — they're foundations we build everything else on top of.",
    iconColor: "#16A34A",
    iconBg: "rgba(22, 163, 74, 0.1)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#16A34A" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Genuine innovation",
    body: "We build things that didn't exist before — not wrappers around existing tools with a new coat of paint.",
    iconColor: "#D97706",
    iconBg: "rgba(217, 119, 6, 0.1)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="#D97706" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
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
        backgroundColor: "#F1F5F9",
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
          background:
            "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.18), transparent)",
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
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        {/* ── Top two-column block ── */}
        <div
          className="about-top-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
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
                color: "#2563EB",
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
                color: "#0F172A",
                marginBottom: "24px",
              }}
            >
              Built to solve{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB, #7C3AED)",
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
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#475569",
                marginBottom: "16px",
              }}
            >
              Nexalyze is a software company focused on building AI-powered products that give businesses a real edge. We combine deep technical expertise with a sharp focus on practical outcomes.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.19 }}
              style={{ fontSize: "16px", lineHeight: 1.75, color: "#475569" }}
            >
              Our team brings together engineers, designers, and domain experts who believe the best technology disappears into the workflow — invisible until you can&apos;t imagine working without it.
            </motion.p>
          </div>

          {/* Right — Deep Navy contrast mission card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
            style={{
              background: "#0A1128",
              border: "1px solid rgba(37, 99, 235, 0.25)",
              boxShadow: "0 20px 50px rgba(10, 17, 40, 0.16)",
              borderRadius: "20px",
              padding: "40px 36px",
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
                height: "3px",
                background: "linear-gradient(90deg, #2563EB, #7C3AED)",
              }}
            />

            {/* Subtle internal glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle, rgba(37, 99, 235, 0.22), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#60A5FA",
                marginBottom: "16px",
              }}
            >
              Our mission
            </p>

            <p
              style={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: 1.5,
                color: "#F8FAFC",
                letterSpacing: "-0.3px",
                marginBottom: "22px",
              }}
            >
              &ldquo;Give every business the intelligence to act before problems become crises.&rdquo;
            </p>

            <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#94A3B8" }}>
              We founded Nexalyze because too many companies operate blind — reacting to failures that could have been predicted. We&apos;re changing that by building software that surfaces the right signal at the right time.
            </p>

            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.08)",
                margin: "24px 0",
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#60A5FA",
                  flexShrink: 0,
                }}
              />
              <p style={{ fontSize: "13px", color: "#CBD5E1" }}>
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
            color: "#2563EB",
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
            fontSize: "30px",
            fontWeight: 800,
            letterSpacing: "-0.8px",
            color: "#0F172A",
            marginBottom: "40px",
          }}
        >
          Our principles
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "18px",
          }}
        >
          {VALUES.map(({ title, body, iconBg, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.24 + i * 0.07 }}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
                borderRadius: "16px",
                padding: "26px 22px",
                transition: "border-color 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              whileHover={{ y: -5 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.35)";
                e.currentTarget.style.boxShadow =
                  "0 14px 32px rgba(37, 99, 235, 0.09)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.08)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(15, 23, 42, 0.04)";
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                {icon}
              </div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: "8px",
                }}
              >
                {title}
              </p>
              <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#64748B" }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-top-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}

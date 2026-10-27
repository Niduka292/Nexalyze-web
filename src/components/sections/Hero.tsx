"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  "OpenAI-powered",
  "Enterprise-grade security",
  "Real-time intelligence",
];

const SATELLITE_NODES = [
  { label: "Predictive AI", x: "8%", y: "14%", delay: 0, color: "#2563EB" },
  { label: "Signal Analysis", x: "72%", y: "10%", delay: 0.6, color: "#7C3AED" },
  { label: "Risk Foresight", x: "4%", y: "78%", delay: 1.2, color: "#4F46E5" },
  { label: "Cloud Native", x: "70%", y: "82%", delay: 1.8, color: "#2563EB" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

function DotMatrixBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "radial-gradient(rgba(37, 99, 235, 0.14) 1.25px, transparent 1.25px)",
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 85% 75% at 50% 45%, black 35%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 75% at 50% 45%, black 35%, transparent 100%)",
        pointerEvents: "none",
      }}
    />
  );
}

function AnimatedLogoShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 24 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.15 }}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        height: "440px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {/* Soft Cobalt & Violet Ambient Backdrop Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(124,58,237,0.14) 50%, transparent 72%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* Interactive Node Connection Lines SVG */}
      <svg
        width="440"
        height="440"
        viewBox="0 0 440 440"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nx-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {/* Connecting lines from center (220,220) to satellite nodes */}
        {[
          { x2: 95, y2: 85 },
          { x2: 345, y2: 70 },
          { x2: 85, y2: 350 },
          { x2: 350, y2: 360 },
        ].map((pt, idx) => (
          <motion.line
            key={idx}
            x1="220"
            y1="220"
            x2={pt.x2}
            y2={pt.y2}
            stroke="url(#nx-line-grad)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.75 }}
            transition={{ duration: 1.2, delay: 0.4 + idx * 0.15 }}
          />
        ))}
      </svg>

      {/* Outer Rotating Orbital Ring */}
      <motion.svg
        width="340"
        height="340"
        viewBox="0 0 340 340"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <defs>
          <linearGradient id="nx-hero-orbit-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle
          cx="170"
          cy="170"
          r="156"
          fill="none"
          stroke="url(#nx-hero-orbit-1)"
          strokeWidth="1.5"
          strokeDasharray="14 10"
        />
        <circle cx="170" cy="14" r="5" fill="#2563EB" />
        <circle cx="326" cy="170" r="4" fill="#7C3AED" />
        <circle cx="14" cy="170" r="3.5" fill="#2563EB" />
      </motion.svg>

      {/* Inner Counter-Rotating Ring */}
      <motion.svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        animate={{ rotate: -360 }}
        transition={{ duration: 19, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <circle
          cx="125"
          cy="125"
          r="112"
          fill="none"
          stroke="rgba(124, 58, 237, 0.32)"
          strokeWidth="1.5"
          strokeDasharray="40 20"
        />
        <circle cx="125" cy="13" r="4" fill="#7C3AED" />
        <circle cx="125" cy="237" r="3.5" fill="#2563EB" />
      </motion.svg>

      {/* Floating Satellite Pills */}
      {SATELLITE_NODES.map((node) => (
        <motion.div
          key={node.label}
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
          style={{
            position: "absolute",
            left: node.x,
            top: node.y,
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.07)",
            borderRadius: "9999px",
            padding: "6px 13px",
            display: "flex",
            alignItems: "center",
            gap: "7px",
            zIndex: 3,
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: node.color,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#0F172A",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "-0.2px",
              whiteSpace: "nowrap",
            }}
          >
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* Core Deep Navy Animated Logo Emblem */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06, rotate: 3 }}
        style={{
          position: "relative",
          width: "148px",
          height: "148px",
          borderRadius: "36px",
          background: "linear-gradient(145deg, #0A1128 0%, #162347 100%)",
          border: "1.5px solid rgba(37, 99, 235, 0.45)",
          boxShadow:
            "0 24px 60px rgba(10, 17, 40, 0.28), 0 0 0 8px rgba(37, 99, 235, 0.07), inset 0 0 28px rgba(37, 99, 235, 0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          zIndex: 4,
          cursor: "pointer",
        }}
      >
        <svg
          width="68"
          height="68"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="nx-core-grad"
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
          {/* Animated N */}
          <motion.path
            d="M7 30V10L21 30V10"
            stroke="url(#nx-core-grad)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeInOut", delay: 0.25 }}
          />
          {/* Animated X */}
          <motion.path
            d="M22 13L33 28M33 13L22 28"
            stroke="#60A5FA"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.15, ease: "easeInOut", delay: 0.65 }}
          />
        </svg>

        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2.2px",
            textTransform: "uppercase",
            color: "#93C5FD",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          NEXALYZE
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const router = useRouter();

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F8FAFC",
        padding: "136px 48px 96px",
      }}
    >
      <DotMatrixBackground />

      {/* Top right soft Cobalt/Violet mesh glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          right: "-80px",
          width: "640px",
          height: "640px",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.09) 0%, rgba(124,58,237,0.06) 45%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom left soft glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-100px",
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Two-column container: Left = Name, Vision & Buttons | Right = Animated Logo */}
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1140px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "56px",
          alignItems: "center",
        }}
      >
        {/* ── Left Column: Name, Headline, Vision & Buttons ── */}
        <div
          className="hero-left"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          {/* Eyebrow + Brand Name Lockup */}
          <motion.div
            {...fadeUp(0.05)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "#2563EB",
                background: "rgba(37, 99, 235, 0.08)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                borderRadius: "9999px",
                padding: "6px 14px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#2563EB",
                  animation: "nx-pulse 2s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              Nexalyze — AI Software &amp; Intelligence
            </span>
          </motion.div>

          {/* Prominent Brand Name & Headline */}
          <motion.h1
            {...fadeUp(0.12)}
            style={{
              fontSize: "clamp(38px, 5vw, 56px)",
              fontWeight: 900,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              color: "#0F172A",
              marginBottom: "24px",
            }}
          >
            Nexa
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              lyze
            </span>
            : Software that thinks.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Solutions that scale.
            </span>
          </motion.h1>

          {/* Company Vision Box */}
          <motion.div
            {...fadeUp(0.19)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 12px 36px rgba(15, 23, 42, 0.06)",
              borderRadius: "16px",
              padding: "24px 28px",
              marginBottom: "32px",
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
          >
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
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: "8px",
              }}
            >
              Our Vision
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.7,
                color: "#334155",
              }}
            >
              To empower modern enterprises with predictive AI intelligence that turns complex data into clarity — enabling teams to anticipate challenges, automate decisions, and scale with confidence.
            </p>
          </motion.div>

          {/* CTA row */}
          <motion.div
            {...fadeUp(0.26)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "36px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => handleScroll("#products")}
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                border: "none",
                borderRadius: "9999px",
                padding: "13px 28px",
                cursor: "pointer",
                letterSpacing: "0.1px",
                boxShadow: "0 8px 24px rgba(37, 99, 235, 0.28)",
                transition: "transform 0.15s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(37, 99, 235, 0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(37, 99, 235, 0.28)";
              }}
            >
              Explore our products
            </button>

            <button
              onClick={() => router.push("/team")}
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#0F172A",
                background: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.14)",
                borderRadius: "9999px",
                padding: "13px 28px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                transition: "border-color 0.2s, transform 0.15s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2563EB";
                e.currentTarget.style.color = "#2563EB";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.14)";
                e.currentTarget.style.color = "#0F172A";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Meet the team
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            {...fadeUp(0.33)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {TRUST_ITEMS.map((item, i) => (
              <span
                key={item}
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    fontSize: "12px",
                    color: "#475569",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "rgba(22, 163, 74, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      color: "#16A34A",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </span>
                {i < TRUST_ITEMS.length - 1 && (
                  <span
                    style={{
                      width: "1px",
                      height: "14px",
                      background: "rgba(15, 23, 42, 0.12)",
                    }}
                  />
                )}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right Column: Animated Logo & Interactive Node Graph ── */}
        <div>
          <AnimatedLogoShowcase />
        </div>
      </div>

      <style>{`
        @keyframes nx-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.75); }
        }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-left {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}

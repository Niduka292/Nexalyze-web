"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "64px",
        display: "flex",
        alignItems: "center",
        backgroundColor: scrolled
          ? "rgba(7, 18, 31, 0.92)"
          : "rgba(7, 18, 31, 0.60)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.09)"
          : "1px solid rgba(255,255,255,0.05)",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("Home", "#home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="Vector9 Technologies — go to home"
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #00D4FF, #7C5CFF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.5px",
              flexShrink: 0,
            }}
          >
            V9
          </div>
          <span
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#F8FAFC",
              letterSpacing: "-0.3px",
            }}
          >
            Vector<span style={{ color: "#00D4FF" }}>9</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(label, href)}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: active === label ? "#F8FAFC" : "#94A3B8",
                background:
                  active === label
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
                border: "none",
                borderRadius: "8px",
                padding: "6px 14px",
                cursor: "pointer",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (active !== label) {
                  (e.currentTarget as HTMLButtonElement).style.color = "#F8FAFC";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== label) {
                  (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleNav("Contact", "#contact")}
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#07121F",
            background: "#00D4FF",
            border: "none",
            borderRadius: "9999px",
            padding: "8px 22px",
            cursor: "pointer",
            letterSpacing: "0.1px",
            transition: "opacity 0.2s, transform 0.15s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(0)";
          }}
        >
          Get in touch
        </button>
      </div>

      {/* Mobile menu toggle — shown via CSS on small screens */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
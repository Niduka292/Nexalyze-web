"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/team") {
      setActive("Team");
    } else if (active === "Team") {
      setActive("Home");
    }
  }, [pathname, active]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);

    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

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
        height: "68px",
        display: "flex",
        alignItems: "center",
        backgroundColor: scrolled
          ? "rgba(248, 250, 252, 0.90)"
          : "rgba(248, 250, 252, 0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(15, 23, 42, 0.09)"
          : "1px solid rgba(15, 23, 42, 0.05)",
        boxShadow: scrolled ? "0 4px 24px rgba(15, 23, 42, 0.04)" : "none",
        transition:
          "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
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
          aria-label="Nexalyze — go to home"
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #2563EB, #7C3AED)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.5px",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
              flexShrink: 0,
            }}
          >
            NX
          </div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.4px",
            }}
          >
            Nexa<span style={{ color: "#2563EB" }}>lyze</span>
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
                fontWeight: 600,
                color: active === label ? "#2563EB" : "#475569",
                background:
                  active === label
                    ? "rgba(37, 99, 235, 0.08)"
                    : "transparent",
                border: "none",
                borderRadius: "8px",
                padding: "7px 14px",
                cursor: "pointer",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (active !== label) {
                  e.currentTarget.style.color = "#0F172A";
                  e.currentTarget.style.background = "rgba(15, 23, 42, 0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== label) {
                  e.currentTarget.style.color = "#475569";
                  e.currentTarget.style.background = "transparent";
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
            color: "#FFFFFF",
            background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
            border: "none",
            borderRadius: "9999px",
            padding: "9px 22px",
            cursor: "pointer",
            letterSpacing: "0.1px",
            boxShadow: "0 4px 14px rgba(37, 99, 235, 0.28)",
            transition: "opacity 0.2s, transform 0.15s, box-shadow 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(37, 99, 235, 0.38)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 14px rgba(37, 99, 235, 0.28)";
          }}
        >
          Get in touch
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}

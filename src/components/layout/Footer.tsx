/**
 * Footer.tsx — Nexora Solutions
 *
 * Dark-themed site footer.
 *
 * Layout (1100px max, 48px horizontal padding — matches site-wide):
 *   Top grid : 4 columns — Brand (1.8fr) · Quick Links · Services · Contact
 *   Divider  : 1px rgba line
 *   Bottom   : copyright left · "Built with ♥" center · legal links right
 *
 * Spacing spec:
 *   Footer padding top   : 64px
 *   Footer padding bottom: 32px
 *   Top grid gap         : 48px
 *   Top grid → divider   : 56px
 *   Divider → bottom bar : 28px
 *   Link gap             : 11px
 *   Social btn size      : 34×34px, border-radius 8px
 *   Logo font            : 22px / weight 800
 */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: "Home",       href: "#home"         },
  { label: "Services",   href: "#services"     },
  { label: "Projects",   href: "#projects"     },
  { label: "About",      href: "#about"        },
  { label: "Contact",    href: "#contact"      },
];

const SERVICE_LINKS = [
  { label: "Business Websites",   href: "#services" },
  { label: "E-Commerce",          href: "#services" },
  { label: "Custom Software",     href: "#services" },
  { label: "Landing Pages",       href: "#services" },
  { label: "SEO Optimization",    href: "#services" },
  { label: "Hosting & Deployment",href: "#services" },
];

const CONTACT_LINKS = [
  { label: "hello@nexorasolutions.lk", href: "mailto:hello@nexorasolutions.lk" },
  { label: "+94 77 123 4567",          href: "tel:+94771234567"                },
  { label: "WhatsApp Us",              href: "https://wa.me/94771234567"       },
  { label: "Colombo, Sri Lanka",       href: "#"                               },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn",  icon: "in", href: "#" },
  { label: "GitHub",    icon: "gh", href: "#" },
  { label: "Facebook",  icon: "fb", href: "#" },
  { label: "Instagram", icon: "ig", href: "#" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "rgba(241,245,255,0.30)",
        marginBottom: 18,
      }}
    >
      {children}
    </p>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          if (href.startsWith("#")) {
            e.preventDefault();
            document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
          }
        }}
        style={{
          fontSize: 13,
          color: "rgba(241,245,255,0.42)",
          textDecoration: "none",
          transition: "color 0.18s",
          display: "inline-block",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "rgba(241,245,255,0.42)";
        }}
      >
        {label}
      </a>
    </li>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Footer() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const year = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      style={{
        background: "#060C18",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "64px 0 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        {/* ── Top grid ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.3px",
                marginBottom: 14,
              }}
            >
              Nexora<span style={{ color: "#3B82F6" }}>.</span>
            </div>

            <p
              style={{
                fontSize: 13,
                color: "rgba(241,245,255,0.38)",
                lineHeight: 1.75,
                maxWidth: 240,
                marginBottom: 24,
              }}
            >
              Helping Sri Lankan businesses grow beyond WhatsApp — into powerful
              digital presences that attract customers and generate real revenue.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {SOCIAL_LINKS.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(241,245,255,0.40)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(59,130,246,0.38)";
                    el.style.color       = "#60A5FA";
                    el.style.background  = "rgba(30,94,255,0.09)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color       = "rgba(241,245,255,0.40)";
                    el.style.background  = "rgba(255,255,255,0.03)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ColTitle>Quick Links</ColTitle>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
              {QUICK_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <ColTitle>Services</ColTitle>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
              {SERVICE_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColTitle>Contact</ColTitle>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
              {CONTACT_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Divider ───────────────────────────────────────────────────── */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.05)",
            marginBottom: 28,
          }}
        />

        {/* ── Bottom bar ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {/* Copyright */}
          <p style={{ fontSize: 12, color: "rgba(241,245,255,0.22)" }}>
            © {year} Nexora Solutions. All rights reserved.
          </p>

          {/* Built with */}
          <p style={{ fontSize: 12, color: "rgba(241,245,255,0.22)", display: "flex", alignItems: "center", gap: 5 }}>
            Built with{" "}
            <span style={{ color: "#3B82F6" }}>♥</span>
            {" "}in Sri Lanka
          </p>

          {/* Legal links */}
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: 12,
                  color: "rgba(241,245,255,0.22)",
                  textDecoration: "none",
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(241,245,255,0.60)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(241,245,255,0.22)";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
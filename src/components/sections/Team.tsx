"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import lavinduImg from "../../../assets/team/lavindu-nexalyze-rm-bg.png";
import rusiraImg from "../../../assets/team/rusira-nexalyze-rm-bg.png";
import nidukaImg from "../../../assets/team/niduka-nexalyze-rm-bg.png";

export interface TeamMember {
  id: "lavindu" | "rusira" | "niduka";
  name: string;
  role: string;
  workplace: string;
  university: string;
  bio: string;
  image: StaticImageData;
  position: "left" | "center" | "right";
  accentColor: string;
  accentBg: string;
  tags: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "lavindu",
    name: "Lavindu Perera",
    role: "Software Engineering Intern",
    workplace: "Intern at Epic Lanka",
    university: "Undergraduate at University of Sri Jayewardenepura",
    bio: "Currently working as an intern at Epic Lanka while completing his degree as an undergraduate at the University of Sri Jayewardenepura.",
    image: lavinduImg,
    position: "left",
    accentColor: "#2563EB",
    accentBg: "rgba(37, 99, 235, 0.12)",
    tags: ["Epic Lanka", "USJ Undergraduate", "Full-Stack Development"],
  },
  {
    id: "rusira",
    name: "Rusira Sandul",
    role: "Associate Software Engineer",
    workplace: "Associate SE at Company X",
    university: "Undergraduate at IIT",
    bio: "Working as an Associate Software Engineer at Company X while completing his undergraduate degree at the Informatics Institute of Technology (IIT).",
    image: rusiraImg,
    position: "center",
    accentColor: "#7C3AED",
    accentBg: "rgba(124, 58, 237, 0.12)",
    tags: ["Company X", "IIT Undergraduate", "Software Engineering"],
  },
  {
    id: "niduka",
    name: "Niduka Jayathunga",
    role: "Freelance Software Developer",
    workplace: "Freelance Developer",
    university: "CS (Hons) Undergraduate at University of Sri Jayewardenepura",
    bio: "Freelancing and building production software solutions while completing his Computer Science (Hons) degree at the University of Sri Jayewardenepura.",
    image: nidukaImg,
    position: "right",
    accentColor: "#2563EB",
    accentBg: "rgba(37, 99, 235, 0.12)",
    tags: ["Freelancing", "CS (Hons) at USJ", "AI & Web Systems"],
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Team() {
  const [hoveredId, setHoveredId] = useState<TeamMember["id"] | null>(null);

  const activeMember =
    TEAM_MEMBERS.find((m) => m.id === hoveredId) ?? null;

  return (
    <section
      id="team"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#F8FAFC",
        padding: "124px 48px 96px",
      }}
    >
      {/* Subtle radial dot matrix */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(37, 99, 235, 0.13) 1.25px, transparent 1.25px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 45%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 45%, black 30%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient Cobalt & Violet glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "-120px",
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.09), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-120px",
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Back link + Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            style={{ marginBottom: "18px" }}
          >
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#475569",
                background: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.1)",
                borderRadius: "9999px",
                padding: "6px 14px",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              ← Back to Home
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#2563EB",
              marginBottom: "12px",
            }}
          >
            The Developers Behind Nexalyze
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              lineHeight: 1.06,
              color: "#0F172A",
              marginBottom: "14px",
            }}
          >
            Meet{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.16 }}
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#475569",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Hover over any member in the team portrait below to bring them into full color and view their profile.
          </motion.p>
        </div>

        {/* ── Main Interactive Layout: Composite Group Photo + Side Details Panel ── */}
        <div
          className="team-stage-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 0.95fr",
            gap: "36px",
            alignItems: "center",
          }}
        >
          {/* ── Left: Unified 3-Member Group Portrait Stage ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{
              position: "relative",
              background:
                "linear-gradient(165deg, #0A1128 0%, #111C38 60%, #162347 100%)",
              borderRadius: "28px",
              border: "1px solid rgba(37, 99, 235, 0.25)",
              boxShadow:
                "0 28px 70px rgba(10, 17, 40, 0.22), inset 0 1px 0 rgba(255,255,255,0.08)",
              overflow: "hidden",
              padding: "32px 24px 0",
              minHeight: "520px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Stage Ambient Spotlight */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "12%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "85%",
                height: "360px",
                background:
                  "radial-gradient(ellipse, rgba(37, 99, 235, 0.26) 0%, rgba(124, 58, 237, 0.14) 45%, transparent 72%)",
                filter: "blur(24px)",
                pointerEvents: "none",
              }}
            />

            {/* Subtle Stage Grid Lines */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(rgba(96, 165, 250, 0.12) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                pointerEvents: "none",
              }}
            />

            {/* Floating Popup Badge inside the Stage when Hovered */}
            <div
              style={{
                position: "relative",
                zIndex: 20,
                minHeight: "58px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AnimatePresence mode="wait">
                {activeMember ? (
                  <motion.div
                    key={activeMember.id}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      background: "rgba(15, 23, 42, 0.88)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid rgba(96, 165, 250, 0.35)",
                      borderRadius: "9999px",
                      padding: "8px 20px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#60A5FA",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#F8FAFC",
                      }}
                    >
                      {activeMember.name}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#93C5FD",
                        fontWeight: 500,
                      }}
                    >
                      · {activeMember.workplace}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "rgba(203, 213, 225, 0.7)",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "9999px",
                      padding: "6px 16px",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Hover over a team member to inspect details
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Composite 3-Person Cutout Row (Left: Lavindu, Middle: Rusira, Right: Niduka) ── */}
            <div
              className="composite-photo-row"
              style={{
                position: "relative",
                height: "430px",
                width: "100%",
                maxWidth: "660px",
                margin: "0 auto",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {TEAM_MEMBERS.map((member) => {
                const isHovered = hoveredId === member.id;
                const someoneElseHovered =
                  hoveredId !== null && hoveredId !== member.id;

                // Fine-tuned alignment so all 3 cutouts stand shoulder-to-shoulder at equal head height:
                // - lavindu (left): shifted slightly inward toward center, scaled to match head level
                // - rusira (center): centered in the middle
                // - niduka (right): shifted slightly inward toward center, scaled to match head level
                const layoutStyles: Record<
                  TeamMember["position"],
                  React.CSSProperties
                > = {
                  left: {
                    width: "47%",
                    height: "455px",
                    marginRight: "-12%",
                    zIndex: isHovered ? 12 : 2,
                    transformOrigin: "bottom center",
                  },
                  center: {
                    width: "44%",
                    height: "395px",
                    zIndex: isHovered ? 12 : 4,
                    transformOrigin: "bottom center",
                  },
                  right: {
                    width: "44%",
                    height: "435px",
                    marginLeft: "-17%",
                    zIndex: isHovered ? 12 : 3,
                    transformOrigin: "bottom center",
                  },
                };

                // Saturation logic:
                // Default (no hover): slightly lower saturation (0.48)
                // Hovered person: increased full saturation (1.2) + glow
                // Unhovered when another is hovered: desaturated (0.22) + slightly dimmed
                const filterValue = isHovered
                  ? "saturate(1.22) contrast(1.05) brightness(1.04) drop-shadow(0 18px 36px rgba(37, 99, 235, 0.45))"
                  : someoneElseHovered
                  ? "saturate(0.22) contrast(0.95) brightness(0.82)"
                  : "saturate(0.48) contrast(0.98) brightness(0.95) drop-shadow(0 10px 24px rgba(0, 0, 0, 0.35))";

                return (
                  <motion.div
                    key={member.id}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() =>
                      setHoveredId((prev) =>
                        prev === member.id ? null : member.id
                      )
                    }
                    animate={{
                      scale: isHovered ? 1.055 : someoneElseHovered ? 0.975 : 1,
                      y: isHovered ? -6 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                    style={{
                      position: "relative",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      transition: "filter 0.35s ease, opacity 0.35s ease",
                      filter: filterValue,
                      opacity: someoneElseHovered ? 0.78 : 1,
                      ...layoutStyles[member.position],
                    }}
                    aria-label={member.name}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 340px"
                      priority
                      style={{
                        objectFit: "contain",
                        objectPosition: "bottom center",
                        transform:
                          member.id === "lavindu"
                            ? "scale(1.07) translateY(8px)"
                            : "none",
                        transformOrigin: "bottom center",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Bottom Stage Vignette Gradient */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "-24px",
                  right: "-24px",
                  height: "72px",
                  background:
                    "linear-gradient(to top, #0A1128 10%, rgba(10, 17, 40, 0.65) 55%, transparent 100%)",
                  zIndex: 15,
                  pointerEvents: "none",
                }}
              />

              {/* Interactive Member Selector Pills at bottom of portrait */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: 0,
                  right: 0,
                  zIndex: 18,
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "0 16px",
                  pointerEvents: "none",
                }}
              >
                {TEAM_MEMBERS.map((member) => {
                  const isHovered = hoveredId === member.id;
                  return (
                    <div
                      key={member.id}
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: isHovered ? "#FFFFFF" : "#CBD5E1",
                        background: isHovered
                          ? "linear-gradient(135deg, #2563EB, #7C3AED)"
                          : "rgba(15, 23, 42, 0.75)",
                        border: isHovered
                          ? "1px solid rgba(147, 197, 253, 0.6)"
                          : "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "9999px",
                        padding: "5px 14px",
                        backdropFilter: "blur(8px)",
                        transition: "all 0.25s ease",
                        boxShadow: isHovered
                          ? "0 6px 18px rgba(37, 99, 235, 0.45)"
                          : "none",
                      }}
                    >
                      {member.name.split(" ")[0]}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Dynamic Member Details Popup / Side Panel ── */}
          <div style={{ minHeight: "420px", display: "flex", alignItems: "center" }}>
            <AnimatePresence mode="wait">
              {activeMember ? (
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, x: 20, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -12, scale: 0.98 }}
                  transition={{ duration: 0.28, ease }}
                  style={{
                    width: "100%",
                    background: "#FFFFFF",
                    border: "1px solid rgba(37, 99, 235, 0.22)",
                    boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
                    borderRadius: "24px",
                    padding: "36px 32px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Top gradient accent bar */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "linear-gradient(90deg, #2563EB, #7C3AED)",
                    }}
                  />

                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                      color: activeMember.accentColor,
                      background: activeMember.accentBg,
                      borderRadius: "9999px",
                      padding: "5px 14px",
                      marginBottom: "16px",
                    }}
                  >
                    {activeMember.role}
                  </span>

                  <h2
                    style={{
                      fontSize: "30px",
                      fontWeight: 800,
                      color: "#0F172A",
                      letterSpacing: "-0.8px",
                      marginBottom: "18px",
                    }}
                  >
                    {activeMember.name}
                  </h2>

                  {/* Experience & Education highlights */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginBottom: "22px",
                      padding: "16px",
                      background: "#F8FAFC",
                      borderRadius: "14px",
                      border: "1px solid rgba(15, 23, 42, 0.06)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#1E293B",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#2563EB",
                          flexShrink: 0,
                        }}
                      />
                      {activeMember.workplace}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#475569",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#7C3AED",
                          flexShrink: 0,
                        }}
                      />
                      {activeMember.university}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.75,
                      color: "#475569",
                      marginBottom: "24px",
                    }}
                  >
                    {activeMember.bio}
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(15, 23, 42, 0.06)",
                    }}
                  >
                    {activeMember.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#334155",
                          background: "#F1F5F9",
                          border: "1px solid rgba(15, 23, 42, 0.08)",
                          borderRadius: "8px",
                          padding: "4px 10px",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    width: "100%",
                    background: "#FFFFFF",
                    border: "1px solid rgba(15, 23, 42, 0.08)",
                    boxShadow: "0 12px 36px rgba(15, 23, 42, 0.05)",
                    borderRadius: "24px",
                    padding: "32px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.8px",
                      textTransform: "uppercase",
                      color: "#2563EB",
                      marginBottom: "10px",
                    }}
                  >
                    Nexalyze Founding Developers
                  </p>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#0F172A",
                      letterSpacing: "-0.5px",
                      marginBottom: "12px",
                    }}
                  >
                    Three builders. One shared vision.
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#64748B",
                      marginBottom: "24px",
                    }}
                  >
                    Hover over any developer in the team photo (or select a name below) to highlight them and view their background.
                  </p>

                  {/* Quick interactive directory list */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {TEAM_MEMBERS.map((m) => (
                      <div
                        key={m.id}
                        onMouseEnter={() => setHoveredId(m.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                          padding: "14px 16px",
                          borderRadius: "14px",
                          background: "#F8FAFC",
                          border: "1px solid rgba(15, 23, 42, 0.07)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                          transition: "border-color 0.2s, transform 0.15s",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              color: "#0F172A",
                            }}
                          >
                            {m.name}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "#64748B",
                              marginTop: "2px",
                            }}
                          >
                            {m.workplace} · {m.university}
                          </p>
                        </div>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#2563EB",
                          }}
                        >
                          →
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .team-stage-grid {
            grid-template-columns: 1fr !important;
          }
          .composite-photo-row {
            height: 340px !important;
          }
        }
      `}</style>
    </section>
  );
}

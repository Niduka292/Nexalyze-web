import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Meet the Team — Nexalyze",
  description:
    "Meet the founding developers behind Nexalyze: Lavindu Perera, Rusira Sandul, and Niduka Jayathunga.",
};

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <Team />
    </main>
  );
}

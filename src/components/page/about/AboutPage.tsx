"use client";
import React from "react";
import Education from "./parts/Education";
import Bio from "./parts/Bio";
import Contact from "@/components/parts/Contact";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white px-8 transition duration-300 pt-24">
      <Bio />

      <Education />
    </main>
  );
}

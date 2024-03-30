import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Page",
  description: "SEO description",
  keywords: ["about"],
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-7xl">About Page</span>
    </main>
  );
}

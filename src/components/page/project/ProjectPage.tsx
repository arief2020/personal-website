import React from "react";
import Side from "./parts/Side";
import CardProject from "./parts/CardProject";

export default function ProjectPage() {
  return (
    <main className="flex min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white px-8 transition duration-300 pt-24">
      {/* Sidebar */}
      <Side />
      {/* Projects Section */}
      <div className="ml-16 flex-1">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* card */}
          <CardProject />
        </div>
      </div>
    </main>
  );
}

import React from "react";
import Side from "./parts/Side";
import CardProject from "./parts/CardProject";

export default function ProjectPage() {
  const dataProject = [
    {
      name: "Promo Pioneer",
      posterImg: "/promopioneer.png",
      bestProject: true,
      typeProject: "Fullstack Web",
      description: "Final Project Web in Bootcamp Rakamin Academy",
      techStack: ["Next.js", "Express.js", "PostgreSQL"],
      link: {
        "Link Website": "https://promo-pioneer.vercel.app/",
        "Github Frontend": "https://github.com/arief2020/promoPioneerFrontEnd",
        "Github Backend": "https://github.com/arief2020/promoPioneerBackend",
        "Power Point":
          "https://drive.google.com/file/d/17O_2eKcZ26-oOE5XtRVOLs9piSP7fgbD/view",
      },
    },
  ];
  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white px-8 transition duration-300 pt-24">
      {/* Sidebar */}
      <Side />
      {/* Projects Section */}
      <div className="lg:ml-16 flex-1">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* card */}
          {dataProject.map((data, index) => (
            <CardProject key={index} data={data} />
          ))}
        </div>
      </div>
    </main>
  );
}

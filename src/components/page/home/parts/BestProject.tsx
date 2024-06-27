"use client";
import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPostgresql } from "react-icons/si";
import Link from "next/link";
interface ProjectLink {
  [key: string]: string;
}

interface ProjectData {
  name: string;
  typeProject: string;
  bestProject: boolean;
  description: string;
  techStack: string[];
  link: ProjectLink;
  posterImg: string;
}
export default function BestProject() {
  const bestProject: ProjectData = {
    name: "Promo Pioneer",
    posterImg: "/promopioneer.png",
    bestProject: true,
    typeProject: "Fullstack Web",
    description: "Final Project Web in Bootcamp Rakamin Academy",
    techStack: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
    ],
    link: {
      "Link Website": "https://promo-pioneer.vercel.app/",
      "Github Frontend": "https://github.com/arief2020/promoPioneerFrontEnd",
      "Github Backend": "https://github.com/arief2020/promoPioneerBackend",
      "Power Point":
        "https://drive.google.com/file/d/17O_2eKcZ26-oOE5XtRVOLs9piSP7fgbD/view",
    },
  };
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 dark:text-white px-8 transition duration-300">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Best Project</h1>
      </div>
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition duration-300 ">
        <img
          className="w-full md:w-1/2 object-cover"
          src={bestProject.posterImg}
          alt={bestProject.name}
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{bestProject.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">E-Comerce Website</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Project Type: {bestProject.typeProject}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Description:
            </p>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              {bestProject.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-sm font-medium mb-2">Main Tech:</p>
              <div className="flex space-x-2">
                {bestProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-400 px-4 py-2 text-white rounded-full text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {Object.entries(bestProject.link).map(([label, url], index) => (
                <Link key={index} href={url} passHref>
                  <button className="btn btn-primary text-center w-full">
                    {label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

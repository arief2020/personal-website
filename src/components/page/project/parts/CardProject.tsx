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
  description: string;
  techStack: string[];
  link: ProjectLink;
  posterImg: string;
}

interface CardProjectProps {
  data: ProjectData;
}
export default function CardProject({ data } : CardProjectProps) {
   const { name, typeProject, description, techStack, link, posterImg } = data;
  return (
    <div className="max-w-sm mx-auto">
      <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <figure>
          <img
            src={posterImg}
            alt={name}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-semibold mb-4">{name}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-slate-400 px-4 py-2 text-white rounded-full text-center">
              {typeProject}
            </span>
          </div>
          <p className="mb-4">{description}</p>
          <p className="font-semibold">Tech Stack:</p>
          <div className="flex space-x-4 mt-4">
            {techStack.map((tech , index) => (
              <span
                key={index}
                className="bg-slate-400 px-4 py-2 text-white rounded-full text-center"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {Object.entries(link).map(([label, url], index) => (
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
  );
}

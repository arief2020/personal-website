import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPostgresql } from "react-icons/si";

export default function CardProject() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Promo Pioneer"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-semibold mb-4">
            Promo Pioneer
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-slate-400 px-4 py-2 text-white rounded-full text-center">
              Fullstack Web
            </span>
          </div>
          <p className="mb-4">Final Project Web in Bootcamp Rakamin Academy</p>
          <p className="font-semibold">Tech Stack:</p>
          <div className="flex space-x-4 mt-4 text-3xl">
            <RiNextjsFill className="text-black dark:text-white" />
            <SiExpress className="text-gray-800 dark:text-white" />
            <SiPostgresql className="text-blue-800" />
          </div>
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Link Website</button>
          </div>
        </div>
      </div>
    </div>
  );
}

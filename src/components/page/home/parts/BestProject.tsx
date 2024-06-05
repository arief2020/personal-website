"use client";
import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPostgresql } from "react-icons/si";

export default function BestProject() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 dark:text-white px-8 transition duration-300">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Best Project</h1>
      </div>
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition duration-300 ">
        <img
          className="w-full md:w-1/2 object-cover"
          src="https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp"
          alt="best project"
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Promo Pioneer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Web Apps</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Project Type: Team Project
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Deskripsi:
            </p>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              Aplikasi E-commerce dengan fitur promo. Aplikasi ini merupakan
              hasil dari final project bootcamp Rakamin Academy.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-sm font-medium mb-2">Main Tech:</p>
              <div className="flex space-x-2">
                <RiNextjsFill className="text-2xl" />
                <SiExpress className="text-2xl" />
                <SiPostgresql className="text-2xl" />
              </div>
            </div>
			<div>
              <button className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Github Backend
              </button>
              <button className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ml-2">
                Github Frontend
              </button>
			</div>
          </div>
        </div>
      </div>
    </main>
  );
}

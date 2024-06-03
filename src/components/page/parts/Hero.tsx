"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiPostgresql } from "react-icons/si";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center dark:text-white transition duration-300">
      <h4 className="text-lg text-gray-600 dark:text-gray-400">
        Hello, I&apos;m
      </h4>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-2">
        Muhammad Syaifullah Al Arief
      </h1>
      <h4 className="text-xl text-gray-600 dark:text-gray-400 mt-2">
        Web Developer
      </h4>
      <p className="text-gray-600 dark:text-gray-400 mt-4">Main Tech:</p>
      <div className="flex space-x-4 mt-4">
        <FaReact className="text-blue-500 text-3xl" />
        <SiExpress className="text-gray-800 dark:text-white text-3xl" />
        <SiPostgresql className="text-blue-800 text-3xl" />
        <SiJavascript className="text-yellow-500 text-3xl" />
      </div>
      <button className="btn mt-6 bg-white dark:bg-gray-800 dark:text-white border-2 border-gray-800 dark:border-white px-6 py-2 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 dark:hover:border-gray-400 transition duration-300">
        Hire Me
      </button>
    </main>
  );
}

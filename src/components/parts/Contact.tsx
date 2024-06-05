'use client'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="flex items-center  h-screen bg-gray-100 dark:bg-gray-900 dark:text-white px-8 transition duration-300">
      <div className="text-center mb-8 w-3/5 flex flex-col justify-between h-3/5">
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Ayo membuat project bersama atau bicarakan sesuatu tentang dunia
          teknologi informasi yang mungkin dapat menambah wawasan bersama
        </h3>
        <div className="social-media flex justify-center space-x-4 text-4xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="text-center flex flex-col justify-between items-center h-3/5 grow">
        <button className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-300 transition duration-300 mb-4 btn w-36">
          Contact Me
        </button>
        <p className="text-gray-600 dark:text-gray-400">
          Copyright 2024, @musarif
        </p>
      </div>
    </main>
  );
}

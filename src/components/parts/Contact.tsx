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
            href="https://github.com/arief2020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-syaifullah-al-arief/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="text-center flex flex-col justify-between items-center h-3/5 grow">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=msyaifullahalarief@gmail.com&su=about your portofolio&body=Hello, i have seen your portofolio and i want ..."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-300 transition duration-300 mb-4 btn w-36 flex items-center justify-center"
        >
          Contact Me
        </a>
        <p className="text-gray-600 dark:text-gray-400">
          Copyright 2024, @musarif
        </p>
      </div>
    </main>
  );
}

"use client";
import React from "react";
import { SiArduino, SiTrello } from "react-icons/si";

export default function Education() {
	const activity = [
    {
      name: "Program Kreativitas Mahasiswa (PKM-GFT)",
      duration: "November 2022",
      skill: "",
    },
    {
      name: "IoT Engineer Camp (Independent Study Program by Kampus Merdeka)",
      duration: "Aug 2022 - Dec 2022",
      skill: "IoT, Arduino, and Trello",
    },
  ];
  return (
    <main className="flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white transition duration-300 mt-12 pt-8">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full">
        {/* Politeknik Negeri Jember */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-2">
            Politeknik Negeri Jember
          </h3>
          <p className="text-md mb-1">
            Associate&apos;s degree in Computer Engineering
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400">
            2020 - 2023
          </p>
          {/* <div className="mt-4">
            <p className="text-lg font-semibold">Activity & Awards :</p>
            <ul className="list-disc list-inside">
              <li className="my-2">
                Program Kreativitas Mahasiswa (PKM-GFT)
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  November 2022
                </p>
                <p className="text-lg font-semibold mt-4">Skills:</p>
                <div className="flex space-x-4 mt-2">
                  
                </div>
              </li>
              <li className="my-2">
                IoT Engineer Camp (Independent Study Program by Kampus Merdeka)
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Aug 2022 - Dec 2022
                </p>
              </li>
            </ul>
            <p className="text-lg font-semibold mt-4">Skills:</p>
            <div className="flex space-x-4 mt-2">
              <SiArduino className="text-3xl" />
              <SiTrello className="text-3xl" />
            </div>
          </div> */}
        </div>
        {/* SMA Negeri 1 Jember */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">MAN 2 Probolinggo City</h3>
          <p className="text-md mb-1">Senior Islamic High School - Nature Sciences</p>
          <p className="text-md text-gray-600 dark:text-gray-400">
            2017 - 2020
          </p>
          {/* <div className="mt-4">
            <p className="text-lg font-semibold">Activity & Awards :</p>
            <ul className="list-disc list-inside">
              <li className="my-2">
                Program Kreativitas Mahasiswa (PKM-GFT)
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  November 2022
                </p>
              </li>
              <li className="my-2">
                IoT Engineer Camp (Independent Study Program by Kampus Merdeka)
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Aug 2022 - Dec 2022
                </p>
              </li>
            </ul>
            <p className="text-lg font-semibold mt-4">Skills:</p>
            <div className="flex space-x-4 mt-2">
              <SiArduino className="text-3xl" />
              <SiTrello className="text-3xl" />
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}

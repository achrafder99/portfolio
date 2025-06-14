'use client'

import React from 'react'

const exp = [
  {
    company: "Navimar systems",
    title: "Full-stack developer",
    desc: "I performed unit tests to ensure code quality. I also implemented real-time display of AIS data by ship type. Additionally, I designed a route playback system for operators. Finally, I handled the processing and visualization of real-time data to enable precise monitoring.",
    date: "2024 - 2025 (present)"
  }
]

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 p-4">
      <h1 className="sm:text-xl dark:text-[#ccc] font-bold mb-4">Experience</h1>
      <div>
        {exp.map((ex, index) => (
          <div key={index} className="mt-6 pb-6 p-4 dark:bg-[#1f1f1f] rounded-2xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold">{ex.company}</h1>
                <h5 className="text-sm sm:text-base dark:text-gray-400">{ex.title}</h5>
              </div>
              <label className="text-xs sm:text-sm dark:text-gray-300">{ex.date}</label>
            </div>
            <p className="tracking-wide text-sm sm:text-base dark:bg-[#282828] dark:text-gray-200 p-4 border dark:border-gray-600 rounded-xl leading-relaxed">
              {ex.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

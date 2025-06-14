import React from 'react';

const educations = [
  {
    intitule: "1337 (Khouribga)",
    title: "Software Developer",
    date: "2024 - 2022",
  },
  {
    intitule: "Institut Spécialisé de Technologie Appliquée Sidi Kacem",
    title: "Development Informatique",
    date: "2022 - 2020",
  },
  {
    intitule: "Allal El Fassi",
    title: "Physical Sciences",
    date: "2022 - 2020",
  },
];

const Educations = () => {
  return (
    <section
      className="p-4  max-w-5xl mx-auto scroll-mt-20 "
      id="educations"
    >
      <h1 className="text-xl dark:text-[#ccc] mb-2 font-bold  text-start md:text-left">
        Education
      </h1>

      <div className="flex flex-col gap-6">
        {educations.map((education, index) => (
          <div
            key={index}
            className="border-b border-dotted pb-4 p-2"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {education.intitule}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{education.title}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 md:text-right whitespace-nowrap">
                {education.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;

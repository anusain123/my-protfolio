import React from 'react';

const WorkExperience = () => {
  return (
    <section id="experience" className="bg-[#1e293b] text-white py-16 px-6 md:px-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">Work Experience</h2>
      <p className="text-center text-gray-300 mb-12">
        My professional journey in web development.
      </p>

      <div className="relative max-w-4xl mx-auto pl-8 border-l-2 border-gray-600">
        <div className="absolute w-4 h-4 bg-indigo-500 rounded-full left-[-9px] top-[6px]"></div>
        <div className="ml-4">
          <p className="text-sm text-gray-400">2024 - <span className="text-white">Present</span></p>
          <h3 className="text-xl font-semibold mt-1">Front-End Developer</h3>
          <p className="text-sm text-gray-300 mb-4">Abohar, Punjab</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Developed responsive user interfaces using React, Tailwind CSS, and Bootstrap</li>
            <li>Implemented complex filtering features for e-commerce product listings</li>
            <li>Built reusable React components to improve development workflow</li>
            <li>Optimized website performance through code splitting and lazy loading</li>
            <li>Collaborated with designers to implement pixel-perfect designs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

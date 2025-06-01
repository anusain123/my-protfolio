import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-[#0f172a] text-white py-20 px-4 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">Education</h2>
        <p className="text-center text-gray-400 mb-14">
          My academic background and qualifications.
        </p>

        <div className="relative max-w-4xl mx-auto pl-8 border-l-2 border-gray-600">
          <div className="mb-16 ml-6 relative">
            <span className="absolute -left-16 top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-[#0f172a]" />
            <p className="text-gray-400 mb-1">2023</p>
            <h3 className="text-lg font-bold">Bachelor of Arts</h3>
            <p className="text-gray-400">Satyam College for Girls, Abohar</p>
          </div>
          <div className="ml-6 relative">
            <span className="absolute -left-16 top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-[#0f172a]" />
            <p className="text-gray-400 mb-1">2022</p>
            <h3 className="text-lg font-bold">High School</h3>
            <p className="text-gray-400">Govt. School, Abohar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

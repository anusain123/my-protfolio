import React from 'react';
import { MapPin,GitPullRequest,Linkedin,Mail } from "lucide-react";
const Hero = () => {
  return (
    <section className="container mx-auto px-6 md:px-20 py-16 md:py-32 flex flex-col md:flex-row items-center gap-12">
      <div className="basis-1/2 space-y-6 text-center md:text-left">
      <p className="text-base sm:text-lg text-indigo-600 font-medium">Hello, I'm</p>
  
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mt-4">Anu Sain</h1>

  <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-semibold mt-3">Front-End Developer</h2>
  <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 flex items-center justify-center md:justify-start mt-4"> <MapPin className="mr-2 h-4 w-4 text-slate-400" />Abohar, India</p>
  <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 mt-4">
    Front-End Developer skilled in React, Tailwind CSS, and JavaScript. Passionate about building clean, responsive UIs and delivering great user experiences.
  </p>

  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4 pt-6">
  <a href="/"className="w-fit px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md text-center mx-auto sm:mx-0">Contact Me</a>
  <a href="/"className="w-fit px-6 py-2 rounded-xl border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition shadow-md text-center mx-auto sm:mx-0">View Projects</a>
</div>

        <div className='py-5 flex justify-center lg:justify-start items-center gap-5'>
      <a href="https://github.com/anusain123/"target="_blank"  rel="noopener noreferrer"  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"><GitPullRequest className="h-6 w-6" /></a>
          <a href="https://www.linkedin.com/in/anu-sain-26b42931b/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
          <a href="mailto:anurani.ittechxpert@gmail.com"className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" >
            <Mail className="h-6 w-6" />
          </a>
      </div>
      </div>
      <div className="basis-1/2 flex items-center justify-end">
        <div className="relative w-72 h-72 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-400 z-0 animate-spin-slow"></div>
          <div className="relative z-10 bg-white p-8 rounded-full shadow-2xl w-60 h-60 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-extrabold text-indigo-600 leading-snug">AS</h1>
          </div>
        </div>
      </div>
     

    </section>
  );
};

export default Hero;

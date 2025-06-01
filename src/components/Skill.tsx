import React from 'react'
import{FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact, FaWordpress,}from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiTypescript, SiVite,SiBun,SiApollographql,SiCanva } from 'react-icons/si';

const SkillCard = ({ icon: Icon, label }) => (
      <div className="flex flex-col items-center bg-slate-800 p-6 rounded-lg shadow-md hover:bg-slate-700 transition">
      <Icon className=" text-indigo-400 text-4xl mb-2" />
         <p className="text-white text-sm font-medium">{label}</p>
      </div>
);
function Skill() {
  return (
    <section id="skill" className="container mx-auto min-h-screen bg-slate-900 py-20 px-6 md:px-20 text-white">
    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
    <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
        Here are the technologies and tools I work with regularly to bring web projects to life.
    </p>

    <div className='mb-10'>
    <h3 className="text-xl font-semibold mb-6">Frontend Technologies</h3>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
    <SkillCard icon={FaHtml5}  label="HTML" />
    <SkillCard icon={FaCss3Alt}  label="CSS" />
    <SkillCard icon={FaJsSquare}   label="Javascript" />
    <SkillCard icon={SiTypescript}  label="Typescript" />
    <SkillCard icon={SiTailwindcss}  label="Tailwind CSS" />
    <SkillCard icon={SiBootstrap}  label="Bootstrap 5" />
    <SkillCard icon={FaReact}  label="React js" />
    <SkillCard icon={FaWordpress}  label="Wordpress" />
    </div>
    </div>
    <div className='mb-10'>
    <h3 className="text-xl font-semibold mb-6">Tools & Development</h3>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
    <SkillCard icon={FaGitAlt}  label="Git" />
    <SkillCard icon={FaGithub} label="GitHub" />
    <SkillCard icon={SiVite}   label="Vite" />
    <SkillCard icon={SiBun} label="Bun" />
    <SkillCard icon={SiApollographql} label="API Integration" />
    <SkillCard icon={SiCanva} label="Canva" />
    </div>
    </div>
    </section>
  )
}
export default Skill;
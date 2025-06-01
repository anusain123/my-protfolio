import React from 'react';
import { Globe } from 'lucide-react';
const projects = [
  {
    title: 'Kid-Ex.com',
    desc: 'Portfolio website built with Next.js and deployed on Vercel. Features responsive design and modern UI elements.',
    tags: ['Next.js', 'React', 'Vercel', 'Tailwind CSS'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Blinds.com',
    desc: 'E-commerce frontend for smart window blinds with advanced product filtering, search, and shopping cart functionality.',
    tags: ['React', 'TypeScript', 'Bootstrap 5', 'RESTful API'],
    demo: '#',
    github: '#',
  },
  {
    title: 'SmartBlinds Dashboard',
    desc: 'A smart home dashboard that simulates curtain control features with a clean, intuitive UI and interactive controls.',
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'API Integration'],
    demo: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section id="products" className="bg-slate-900 text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
        <p className="text-slate-400">
          Here are some of the projects I've worked on that showcase my skills and experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800 rounded-xl overflow-hidden">
            <div className="h-32 bg-slate-700 flex items-center justify-center text-slate-400 text-lg font-semibold">
              {project.title}
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i} className="bg-slate-700 text-xs px-2 py-1 rounded-md text-indigo-300"> {tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a href={project.demo} className="flex items-center gap-1 hover:underline text-indigo-300">
                <Globe className="h-4 w-4" />
                <span>Live Demo</span>
                </a>
                <a href={project.github} className="hover:underline text-slate-400">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

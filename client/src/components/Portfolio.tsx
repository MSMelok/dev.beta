import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  id: number;
  title: string;
  description: string;
  category: 'tool' | 'business' | 'game';
  image: string;
  tags: string[];
  link: string;
};

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "BoxMate",
      description: "Equipment selection system that streamlines the process of choosing the right tools for specific tasks.",
      category: "tool",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JS"],
      link: "https://msmelok.github.io/box-mate/"
    },
    {
      id: 2,
      title: "ClipMate",
      description: "Clipboard manager that allows users to store and quickly access multiple copied items.",
      category: "tool",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JS"],
      link: "https://msmelok.github.io/clipmate/index.html"
    },
    {
      id: 3,
      title: "TimeZone Converter",
      description: "Tool for converting times between USA and CLT timezones, simplifying scheduling across time zones.",
      category: "tool",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JS"],
      link: "https://msmelok.github.io/convert/"
    },
    {
      id: 4,
      title: "XO Game",
      description: "Classic tic-tac-toe multiplayer game with a modern interface and smooth gameplay experience.",
      category: "game",
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JS"],
      link: "https://msmelok.github.io/xo/"
    },
    {
      id: 5,
      title: "Vet Corner Clinic",
      description: "Professional website for a veterinary clinic featuring services, staff profiles, and appointment booking.",
      category: "business",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JS"],
      link: "https://msmelok.github.io/vetcorner/"
    },
    {
      id: 6,
      title: "Plastic Plus Group",
      description: "Corporate website for a manufacturing company showcasing products, facilities and capabilities.",
      category: "business",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JS"],
      link: "https://msmelok.github.io/plastic-plus/"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tool':
        return 'bg-blue-500';
      case 'business':
        return 'bg-yellow-500';
      case 'game':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Check out some of my recent web development projects
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <button 
            className={`filter-btn px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm border font-medium ${
              filter === 'all' 
                ? 'bg-primary text-white border-primary shadow-md scale-105' 
                : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 hover:border-primary/30'
            }`}
            onClick={() => setFilter('all')}
          >
            <span className="mr-1">🔍</span> All Projects
          </button>
          <button 
            className={`filter-btn px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm border font-medium ${
              filter === 'tool' 
                ? 'bg-blue-500 text-white border-blue-500 shadow-md scale-105' 
                : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 hover:border-blue-300'
            }`}
            onClick={() => setFilter('tool')}
          >
            <span className="mr-1">🛠️</span> Tools
          </button>
          <button 
            className={`filter-btn px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm border font-medium ${
              filter === 'business' 
                ? 'bg-yellow-500 text-white border-yellow-500 shadow-md scale-105' 
                : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 hover:border-yellow-300'
            }`}
            onClick={() => setFilter('business')}
          >
            <span className="mr-1">💼</span> Business
          </button>
          <button 
            className={`filter-btn px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm border font-medium ${
              filter === 'game' 
                ? 'bg-green-500 text-white border-green-500 shadow-md scale-105' 
                : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 hover:border-green-300'
            }`}
            onClick={() => setFilter('game')}
          >
            <span className="mr-1">🎮</span> Games
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" 
              data-category={project.category}
            >
              <div className="h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/0 p-3 rounded-full text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-white/90 hover:text-primary"
                  >
                    <i className="fas fa-external-link-alt text-xl"></i>
                  </a>
                </div>
                
                <div className="absolute top-3 right-3">
                  <span className={`inline-block px-3 py-1 text-xs font-bold ${getCategoryColor(project.category)} text-white rounded-full shadow-md`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-inter mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-full border border-slate-200 dark:border-slate-600 hover:bg-primary/10 hover:border-primary/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-blue-700 transition-colors flex items-center text-sm font-medium"
                  >
                    <i className="fas fa-globe mr-1.5"></i> View Live Project
                    <i className="fas fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
            <i className="fas fa-envelope mr-2"></i> 
            Interested in working together? Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
}

import React from "react";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  score: string;
  url: string;
  image: string;
};

export default function Education() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "English Test (C1 Advanced)",
      issuer: "EF SET",
      date: "Aug 2024",
      score: "C1",
      url: "https://cert.efset.org/k1q97e",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    },
    {
      id: 2,
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "Feb 2024",
      score: "98.75%",
      url: "https://www.coursera.org/account/accomplishments/certificate/FZ2UNZJYCZCC",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    },
    {
      id: 3,
      title: "Microsoft Excel",
      issuer: "Coursera",
      date: "Jul 2023",
      score: "100%",
      url: "https://www.coursera.org/account/accomplishments/certificate/22MW4P93UPP4",
      image: "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    },
    {
      id: 4,
      title: "Computer Networking",
      issuer: "Google",
      date: "Nov 2022",
      score: "94.50%",
      url: "https://www.coursera.org/account/accomplishments/certificate/XT4CH9JRT6BV",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">Education & Certifications</span>
            <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-transparent dark:from-blue-400 dark:to-transparent rounded-full absolute bottom-0 left-0"></div>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-8">My continuous learning journey and professional development</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Animated gradient line */}
          <div className="absolute left-8 top-0 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 dark:from-blue-500 dark:via-blue-400 dark:to-blue-300"></div>
          
          <div className="relative pl-8 space-y-16 pb-8">
            {certificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className="relative group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot with animated ring */}
                <div className="absolute -left-[41px] w-20 h-20 flex items-center justify-center">
                  <div className="absolute w-full h-full rounded-full border-4 border-primary/20 dark:border-primary/30 animate-[ping_3s_ease-in-out_infinite]"></div>
                  <div className="absolute w-full h-full rounded-full border-4 border-primary/40 dark:border-primary/50 animate-[ping_3s_ease-in-out_1.5s_infinite]"></div>
                  <div className="absolute w-16 h-16 bg-white dark:bg-slate-800 rounded-full border-2 border-primary dark:border-blue-400 flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <img src={cert.image} alt={cert.title} className="w-12 h-12 object-cover rounded-full" />
                  </div>
                </div>
                
                {/* Certificate card */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-100 dark:border-slate-700 ml-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group-hover:border-primary/50 dark:group-hover:border-primary/40">
                  {/* Subtle background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/5 dark:bg-blue-500/10 rounded-full transform group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">{cert.title}</h3>
                      <span className="px-4 py-1.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-300 rounded-full shadow-sm inline-flex items-center">
                        <i className="far fa-calendar-alt mr-1.5"></i> {cert.date}
                      </span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <p className="text-slate-600 dark:text-slate-400 flex items-center">
                        <i className="fas fa-building mr-2 text-slate-400 dark:text-slate-500"></i>
                        <span className="font-medium">{cert.issuer}</span>
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 hidden md:block"></div>
                        <p className="md:ml-4 flex items-center">
                          <i className="fas fa-award mr-2 text-yellow-500"></i>
                          <span>Score: <span className="font-semibold">{cert.score}</span></span>
                        </p>
                      </div>
                    </div>
                    
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-sm font-medium mt-2 group/link"
                    >
                      <i className="fas fa-external-link-alt mr-2 transform group-hover/link:translate-x-1 transition-transform"></i> 
                      View Certificate
                      <i className="fas fa-arrow-right ml-2 opacity-0 group-hover/link:opacity-100 transform -translate-x-2 group-hover/link:translate-x-0 transition-all"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 relative z-10">
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium relative overflow-hidden group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 ease-in-out group-hover:w-[300%] group-hover:h-[300%]"></span>
              <i className="fas fa-download mr-3"></i> 
              <span className="relative z-10">Download Complete Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

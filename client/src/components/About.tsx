import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">Get to know more about my background and skills</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <div className="terminal mb-8 shadow-lg">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
              </div>
              <div className="py-1">
                <span className="terminal-prompt">meluk@portfolio:~$</span> 
                <span className="terminal-command">cat about.md</span>
              </div>
              <div className="terminal-output py-2">
                I'm Muhammad Salah, a Web Developer specializing in HTML, CSS, and Vanilla JavaScript. With experience in customer service and technical support, I create user-friendly, responsive websites that blend functionality with great design.
              </div>
              <div className="py-1">
                <span className="terminal-prompt">meluk@portfolio:~$</span> 
                <span className="terminal-command">ls skills/</span>
              </div>
              <div className="terminal-output py-2">
                html.js css.js javascript.js responsive-design.js customer-service.js technical-support.js
              </div>
              <div className="py-1">
                <span className="terminal-prompt">meluk@portfolio:~$</span> 
                <span className="terminal-command">_</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">HTML5</span>
                  <span>95%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">CSS3</span>
                  <span>90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Responsive Design</span>
                  <span>90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Technical Support</span>
                  <span>95%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Customer Service</span>
                  <span>98%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-inter mb-6">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-8">
              <div>
                <h4 className="font-medium text-slate-500 dark:text-slate-400 mb-1">Name</h4>
                <p className="font-medium">Muhammad Meluk</p>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-500 dark:text-slate-400 mb-1">Location</h4>
                <p className="font-medium">Alexandria, Egypt</p>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-500 dark:text-slate-400 mb-1">Email</h4>
                <a href="mailto:MuhammadMeluk@gmail.com" className="font-medium text-primary hover:underline">MuhammadMeluk@gmail.com</a>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-500 dark:text-slate-400 mb-1">Phone</h4>
                <a href="tel:+201022723804" className="font-medium">+20 102-272-3804</a>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-inter mb-6">Why Work With Me?</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-check text-xs text-primary"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">User-Centric Approach</h4>
                  <p className="text-slate-600 dark:text-slate-300">I develop with the end user in mind, creating intuitive interfaces that solve real problems.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-check text-xs text-primary"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Technical Knowledge</h4>
                  <p className="text-slate-600 dark:text-slate-300">My background in technical support gives me insight into common issues and how to prevent them.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-check text-xs text-primary"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Attention to Detail</h4>
                  <p className="text-slate-600 dark:text-slate-300">I believe small details make a big difference in user experience and overall quality.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center text-primary hover:text-blue-700 font-medium cursor-pointer transition-transform hover:translate-x-1 duration-300"
              >
                <i className="fas fa-download mr-2"></i> Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

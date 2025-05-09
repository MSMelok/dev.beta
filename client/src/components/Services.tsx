import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Services I Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">Here's how I can help bring your web projects to life</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-gradient-to-r from-blue-300 to-blue-100 dark:from-blue-900 dark:to-blue-800 pointer-events-none"></div>
            
            {/* Corner Accent */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/10 dark:bg-blue-500/20 rounded-full transform group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-3 transition-transform duration-300 relative z-10">
              <i className="fas fa-pencil-ruler text-3xl"></i>
            </div>
            
            <h3 className="text-2xl font-bold font-inter mb-4 group-hover:text-primary transition-colors">Design From Scratch</h3>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10">
              Modern and visually appealing layouts that capture your brand's essence while ensuring a great user experience.
            </p>
            
            <ul className="space-y-3 mb-6 relative z-10">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-primary text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Responsive design</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-primary text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">UI/UX optimization</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-primary text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Brand consistency</span>
              </li>
            </ul>
            
            <div className="relative z-10 mt-auto">
              <span className="text-sm text-primary font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="fas fa-long-arrow-alt-right mr-1"></i> Learn more
              </span>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-gradient-to-r from-purple-300 to-purple-100 dark:from-purple-900 dark:to-purple-800 pointer-events-none"></div>
            
            {/* Corner Accent */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/10 dark:bg-purple-500/20 rounded-full transform group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-3 transition-transform duration-300 relative z-10">
              <i className="fas fa-code text-3xl"></i>
            </div>
            
            <h3 className="text-2xl font-bold font-inter mb-4 group-hover:text-purple-500 transition-colors">Develop Live Projects</h3>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10">
              Functional and responsive web solutions built with clean, efficient code that works across all devices.
            </p>
            
            <ul className="space-y-3 mb-6 relative z-10">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-purple-500 text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Custom development</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-purple-500 text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Cross-browser compatibility</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-purple-500 text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Performance optimization</span>
              </li>
            </ul>
            
            <div className="relative z-10 mt-auto">
              <span className="text-sm text-purple-500 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="fas fa-long-arrow-alt-right mr-1"></i> Learn more
              </span>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-gradient-to-r from-green-300 to-green-100 dark:from-green-900 dark:to-green-800 pointer-events-none"></div>
            
            {/* Corner Accent */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-500/10 dark:bg-green-500/20 rounded-full transform group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-3 transition-transform duration-300 relative z-10">
              <i className="fas fa-cogs text-3xl"></i>
            </div>
            
            <h3 className="text-2xl font-bold font-inter mb-4 group-hover:text-green-500 transition-colors">Solve Problems</h3>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10">
              Scalable and intuitive web applications that address specific needs and overcome technical challenges.
            </p>
            
            <ul className="space-y-3 mb-6 relative z-10">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-green-500 text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Technical troubleshooting</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-green-500 text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Performance improvement</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                  <i className="fas fa-check text-green-500 text-xs"></i>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Custom solutions</span>
              </li>
            </ul>
            
            <div className="relative z-10 mt-auto">
              <span className="text-sm text-green-500 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="fas fa-long-arrow-alt-right mr-1"></i> Learn more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Avatar from "@/components/Avatar";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-sm font-code text-primary mb-2 animate-pulse">
              <span className="text-code-pink">const</span> <span className="text-primary">developer</span> <span className="text-slate-400">=</span> <span className="text-code-indigo">{`{`}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-inter leading-tight mb-4">
              Hi, I'm <span className="text-primary">Muhammad Meluk</span>
            </h1>
            
            <div className="flex space-x-2 mb-4">
              <h2 className="text-xl md:text-2xl font-medium font-inter">Web Developer</h2>
              <span className="text-xl md:text-2xl text-slate-400">&</span>
              <h2 className="text-xl md:text-2xl font-medium font-inter">More</h2>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
              Creating user-friendly, responsive websites that blend functionality with great design.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium flex items-center">
                <i className="fas fa-envelope mr-2"></i> Contact Me
              </a>
              <a href="#portfolio" className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium flex items-center">
                <i className="fas fa-code mr-2"></i> See My Work
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#4267B2] transition-all duration-300 transform hover:-translate-y-1" 
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a 
                href="https://wa.me/201022723804" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#25D366] transition-all duration-300 transform hover:-translate-y-1" 
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
              <a 
                href="https://github.com/msmelok" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#333] transition-all duration-300 transform hover:-translate-y-1" 
                aria-label="GitHub"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
            
            <div className="text-sm font-code text-primary mt-4 animate-pulse">
              <span className="text-code-indigo">{`}`}</span>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
}

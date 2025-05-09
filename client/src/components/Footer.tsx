import avatarImg from "@assets/msmelok_AvatarWithHighLook.png";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <a href="#home" className="flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary shadow-md">
                  <img 
                    src={avatarImg} 
                    alt="Muhammad Meluk" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>
              <div className="font-bold text-xl">Muhammad Meluk</div>
            </div>
            <p className="text-slate-400 mt-4 leading-relaxed">
              A professional web developer specializing in creating fast, 
              secure, and responsive web applications with an exceptional 
              user experience.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#4267B2] transition-all duration-300 shadow-lg hover:shadow-blue-500/20" 
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://wa.me/201022723804" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#25D366] transition-all duration-300 shadow-lg hover:shadow-green-500/20" 
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                href="https://github.com/msmelok" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#333] transition-all duration-300 shadow-lg hover:shadow-gray-500/20" 
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-meluk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077B5] transition-all duration-300 shadow-lg hover:shadow-blue-500/20" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-primary"></i> Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-primary"></i> About</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-primary"></i> Services</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-primary"></i> Portfolio</a></li>
              <li><a href="#education" className="text-slate-400 hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-primary"></i> Education</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-primary transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-primary"></i> Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1.5 text-primary mr-3"></i>
                <span className="text-slate-400">Alexandria, Egypt</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1.5 text-primary mr-3"></i>
                <a href="mailto:msmelok@gmail.com" className="text-slate-400 hover:text-primary transition-colors">msmelok@gmail.com</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1.5 text-primary mr-3"></i>
                <a href="tel:+201022723804" className="text-slate-400 hover:text-primary transition-colors">+201022723804</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-globe mt-1.5 text-primary mr-3"></i>
                <a href="http://msmelok.github.io/dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">msmelok.github.io/dev</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-800 mb-8" />
        
        <div className="flex justify-center items-center">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Muhammad Meluk. All rights reserved. Handcrafted with <i className="fas fa-heart text-red-500"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";

export default function Contact() {

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">Let's discuss your project or just say hello</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="w-full md:w-1/2 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full -ml-20 -mb-20"></div>
            
            <h3 className="text-2xl font-bold font-inter mb-8 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Contact Information</span>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mt-3"></div>
            </h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start transform transition-all hover:translate-x-2 duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white mr-5 shadow-md group-hover:shadow-lg transition-all">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div className="pt-1">
                  <h4 className="font-medium text-lg mb-1 text-slate-700 dark:text-white transition-colors">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">Alexandria, Egypt</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:translate-x-2 duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white mr-5 shadow-md group-hover:shadow-lg transition-all">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div className="pt-1">
                  <h4 className="font-medium text-lg mb-1 text-slate-700 dark:text-white transition-colors">Email</h4>
                  <a 
                    href="mailto:MuhammadMeluk@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
                  >
                    MuhammadMeluk@gmail.com
                    <i className="fas fa-external-link-alt ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:translate-x-2 duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white mr-5 shadow-md group-hover:shadow-lg transition-all">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div className="pt-1">
                  <h4 className="font-medium text-lg mb-1 text-slate-700 dark:text-white transition-colors">Phone</h4>
                  <a 
                    href="tel:+201022723804" 
                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center"
                  >
                    +20 102-272-3804
                    <i className="fas fa-phone ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:translate-x-2 duration-300 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-white mr-5 shadow-md group-hover:shadow-lg transition-all">
                  <i className="fab fa-whatsapp text-xl"></i>
                </div>
                <div className="pt-1">
                  <h4 className="font-medium text-lg mb-1 text-slate-700 dark:text-white transition-colors">WhatsApp</h4>
                  <a 
                    href="https://wa.me/201022723804" 
                    className="text-slate-600 dark:text-slate-300 hover:text-green-500 dark:hover:text-green-400 transition-colors flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    +20 102-272-3804
                    <i className="fab fa-whatsapp ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10 relative z-10">
              <h3 className="text-xl font-bold font-inter mb-5 relative inline-block">
                Connect With Me
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-[#4267B2] shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300" 
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a 
                  href="https://wa.me/201022723804" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-[#25D366] shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300" 
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                </a>
                <a 
                  href="https://github.com/msmelok" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-[#333] dark:text-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300" 
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden relative transform transition-all duration-500 hover:shadow-xl h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-xl blur-xl opacity-40 dark:opacity-20"></div>
            
            <div className="h-full min-h-[615px] relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6823.516390329705!2d29.912249426488406!3d31.205771795869847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a0562fe85%3A0xa34cc632ec23e7!2sAlexandria%2C%20Alexandria%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1746770941064!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ 
                  border: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Alexandria Map View"
                className="z-10"
              ></iframe>
              
              <div className="absolute top-4 right-4 z-30 bg-white/90 dark:bg-slate-800/90 shadow-lg rounded-lg p-3 backdrop-blur-sm border border-slate-100 dark:border-slate-700 max-w-xs">
                <h4 className="font-bold text-lg">Live Location</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 flex items-center">
                  <i className="fas fa-map-marked-alt text-blue-500 mr-2"></i>
                  Alexandria, Egypt
                </p>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}

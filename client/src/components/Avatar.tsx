import { useEffect, useState } from "react";
import avatarImg from "@assets/msmelok_AvatarWithHighLook.png";

export default function Avatar() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading for avatar reveal animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`relative transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Light glow effect behind avatar */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary rounded-full filter blur-[40px] opacity-20 animate-pulse-slow"></div>
      
      {/* Rotating decorative circles */}
      <div className="absolute inset-0 w-full h-full animate-spin-slow">
        <div className="absolute top-0 right-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-5 h-5 bg-purple-400 rounded-full opacity-40"></div>
      </div>
      
      {/* Avatar container with border glow effect */}
      <div className="relative bg-white dark:bg-slate-800 rounded-full p-2.5 shadow-2xl border-2 border-blue-100 dark:border-blue-900 w-64 h-64 md:w-80 md:h-80 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_30px_rgba(30,90,255,0.3)]">
        {/* Avatar image */}
        <img 
          src={avatarImg} 
          alt="Muhammad Meluk" 
          className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105" 
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      {/* Verification badge */}
      <div className="absolute -top-3 -right-3 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-blue-100 dark:border-slate-700 animate-bounce-slow z-10">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
          <i className="fas fa-check"></i>
        </div>
      </div>
      
      {/* Status badge */}
      <div className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-800 rounded-lg p-2 shadow-lg border border-blue-100 dark:border-slate-700 animate-pulse-slow z-10">
        <div className="flex items-center space-x-2 px-2 py-1">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-slow opacity-75"></div>
          </div>
          <span className="text-sm font-medium">Available for hire</span>
        </div>
      </div>
      
      {/* Tech-themed small icons around the avatar */}
      <div className="absolute top-1/3 -left-4 bg-white dark:bg-slate-800 rounded-full w-8 h-8 shadow-md border border-blue-100 dark:border-slate-700 flex items-center justify-center animate-float-slow">
        <i className="fab fa-html5 text-orange-500"></i>
      </div>
      <div className="absolute top-2/3 -right-4 bg-white dark:bg-slate-800 rounded-full w-8 h-8 shadow-md border border-blue-100 dark:border-slate-700 flex items-center justify-center animate-float-slow animation-delay-500">
        <i className="fab fa-css3-alt text-blue-500"></i>
      </div>
      <div className="absolute bottom-1/3 -right-4 bg-white dark:bg-slate-800 rounded-full w-8 h-8 shadow-md border border-blue-100 dark:border-slate-700 flex items-center justify-center animate-float-slow animation-delay-1000">
        <i className="fab fa-js-square text-yellow-500"></i>
      </div>
    </div>
  );
}

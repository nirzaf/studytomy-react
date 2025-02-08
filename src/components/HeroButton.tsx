import { Sparkles, Rocket, Stars } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroButton() {
  return (
    <Link
      to="/book-trial"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl p-[4px] hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,#f97316_50%,#fb923c_60%,transparent_75%)] opacity-70 group-hover:opacity-100"
          style={{
            animation: 'spin 4s linear infinite',
            backgroundSize: '200% 200%',
          }}
        ></div>
      </div>

      {/* Button background */}
      <div className="relative flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-sm px-8 py-4 text-lg font-bold transition-all duration-300 ease-out group-hover:bg-orange-50 shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
        {/* Left sparkle */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:left-1 group-hover:opacity-100">
          <Stars className="h-4 w-4 text-orange-400 animate-[sparkle_1.5s_ease-in-out_infinite]" />
        </div>

        {/* Button content */}
        <div className="flex items-center gap-2 relative">
          <Rocket 
            className="h-5 w-5 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-110 text-orange-500"
          />
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent font-extrabold transition-all duration-300 group-hover:tracking-wide">
            Start a Free Trial
          </span>
          <Sparkles className="h-5 w-5 text-orange-400 transition-transform duration-300 group-hover:scale-125" style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }} />
        </div>

        {/* Right sparkle */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:right-1 group-hover:opacity-100">
          <Stars className="h-4 w-4 text-orange-400 animate-[sparkle_1.5s_ease-in-out_infinite_0.5s]" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-orange-200/80 animate-[float_3s_ease-in-out_infinite]"></div>
        <div className="absolute right-1/4 top-3/4 h-2 w-2 rounded-full bg-orange-200/80 animate-[float_3s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute bottom-1/4 left-1/2 h-2 w-2 rounded-full bg-orange-200/80 animate-[float_3s_ease-in-out_infinite_1s]"></div>
      </div>
    </Link>
  );
}
import { Sparkles, Rocket, Stars } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroButton() {
  return (
    <Link
      to="/book-trial"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl p-[4px] hover:cursor-pointer"
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,#f97316_50%,transparent_75%)] opacity-70 group-hover:opacity-100 animate-spin-slow"></div>
      </div>

      {/* Button background */}
      <div className="relative flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold transition-all duration-300 ease-out group-hover:bg-orange-50">
        {/* Left sparkle */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100">
          <Stars className="h-4 w-4 text-orange-400 animate-sparkle-1" />
        </div>

        {/* Button content */}
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-12" />
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Start Free Trial
          </span>
          <Sparkles className="h-5 w-5 animate-pulse text-orange-400" />
        </div>

        {/* Right sparkle */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100">
          <Stars className="h-4 w-4 text-orange-400 animate-sparkle-3" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-orange-200 animate-float1"></div>
        <div className="absolute right-1/4 top-3/4 h-2 w-2 rounded-full bg-orange-200 animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/2 h-2 w-2 rounded-full bg-orange-200 animate-float3"></div>
      </div>
    </Link>
  );
} 
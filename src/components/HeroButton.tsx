import { Sparkles, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function HeroButton() {
  return (
    <Link
      href="/book-trial"
      className="relative inline-block group"
    >
      <span className="absolute inset-0 w-full h-full transition-all duration-300 rounded-full filter blur-sm opacity-20 scale-[1.1] group-hover:scale-100 group-hover:opacity-70 bg-gradient-to-br from-orange-400 to-red-500 animate-gradient"></span>
      <span className="relative flex items-center gap-3 px-6 py-3 text-lg font-bold text-white rounded-full bg-black transition-colors duration-300 group-hover:bg-gray-900">
        <Rocket className="h-5 w-5 text-orange-400" />
        <span>Start a Free Trial</span>
        <Sparkles className="h-5 w-5 text-orange-400 animate-spin" />
      </span>
    </Link>
  );
}

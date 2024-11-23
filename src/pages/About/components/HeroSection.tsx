export default function HeroSection() {
  return (
    <div className="text-center mb-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <img
            src="/hero-image.jpg"
            alt="Online Education"
            className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 animate-float"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Learning Journey</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming education through personalized online tutoring, connecting students with expert tutors worldwide.
        </p>
      </div>
    </div>
  );
}

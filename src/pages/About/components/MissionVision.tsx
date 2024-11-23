export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <div className="bg-orange-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          To provide accessible, high-quality education to students globally through personalized online tutoring, 
          helping them achieve their academic goals and unlock their full potential.
        </p>
      </div>
      <div className="bg-orange-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-gray-600">
          To become the world's leading online tutoring platform, known for excellence in education, 
          innovation in teaching methods, and commitment to student success.
        </p>
      </div>
    </div>
  );
}

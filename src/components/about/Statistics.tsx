export default function Statistics() {
  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
          <div className="text-gray-600">Students Taught</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
          <div className="text-gray-600">Expert Tutors</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">5+</div>
          <div className="text-gray-600">Countries Reached</div>
        </div>
      </div>
    </div>
  );
}

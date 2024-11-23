import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] mt-16 rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15588.37219289967!2d130.8811128!3d-12.3766992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cc095a4b9fc0ded%3A0x3ec30b54c649d96!2sStudytomy!5e0!3m2!1sen!2sqa!4v1687603317244!5m2!1sen!2sqa"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Studytomy Location"
        className="rounded-lg"
      />
    </div>
  );
};

export default GoogleMap;

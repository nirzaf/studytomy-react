import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { getSupabaseClient } from '../lib/supabaseClient';
import Slider from 'react-slick';
import { FloatingAchievements, FloatingEducationalIcon } from './animations/EducationalAnimations';

interface Testimonial {
  id: number;
  student_id: string;
  name: string;
  gender: 'male' | 'female';
  country: string;
  syllabus: string;
  comments: string;
  image_url: string;
  created_at: string;
  subject: string;
  is_active: boolean;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="px-4 h-full">
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col h-full">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-auto">
          <Quote className="w-8 h-8 text-orange-400" />
        </div>
      </div>
      <div className="text-white flex-grow flex flex-col">
        <p className="mb-4 text-sm leading-relaxed flex-grow">{testimonial.comments}</p>
        <div className="mt-auto">
          <h3 className="font-semibold text-base">{testimonial.name} ({testimonial.country})</h3>
          <span className="text-sm text-orange-400">{testimonial.syllabus} - {testimonial.subject}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const supabase = getSupabaseClient();
      if (!supabase) {
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (isLoading) {
    return <div className="py-20 text-center text-white">Loading testimonials...</div>;
  }

  return (
    <section
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url(https://ik.imagekit.io/studytomy/Studytomy_Testimonial_Background.jpg?updatedAt=1717449732211)"
      }}
    >
      <div className="absolute inset-0 bg-black/80" />

      {/* Educational Success Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Achievement Icons */}
        <FloatingAchievements count={8} variant="celebration" />

        {/* Floating Educational Icons for Success */}
        <FloatingEducationalIcon
          index={1}
          variant="vibrant"
          size="medium"
          opacity={0.3}
          duration={18}
        />
        <FloatingEducationalIcon
          index={3}
          variant="vibrant"
          size="medium"
          opacity={0.25}
          duration={22}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="mb-12">
          <p className="text-orange-400 font-medium mb-2">Testimonial</p>
          <h2 className="text-3xl font-bold text-white">What they say</h2>
        </div>

        <div className="testimonial-carousel">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

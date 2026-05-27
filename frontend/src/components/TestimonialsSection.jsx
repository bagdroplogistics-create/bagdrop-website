import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../mock';
import { Card } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
           <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-700 font-semibold text-sm">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">What they are saying about us</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-12 shadow-xl bg-white/90 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <Quote className="text-orange-600" size={48} />
            </div>
            
            <div className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-6 ring-4 ring-orange-100">
                <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentTestimonial.name}</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{currentTestimonial.review}</p>
              
              <div className="flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-orange-600 hover:text-white text-gray-700 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-orange-600 hover:text-white text-gray-700 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
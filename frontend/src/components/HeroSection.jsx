import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ onBookNow }) => {
  return (
    <section id="home" className="relative pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-lg mb-6 animate-fade-in">
            <span className="text-orange-700 font-semibold text-sm">Express Baggage Delivery</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
            Door-To-Door
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500 mt-2">
              Baggage Delivery
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We pick up your bags and deliver them, saving you time and effort. Travel hands-free, hassle-free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onBookNow}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              Book Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">10,000+</div>
              <div className="text-sm text-gray-600">Bags Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Major Airports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">24hrs</div>
              <div className="text-sm text-gray-600">Fast Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Secure Transit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
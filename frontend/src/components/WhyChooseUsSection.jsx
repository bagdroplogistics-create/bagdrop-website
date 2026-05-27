import { benefits } from '../mock';
import { Calendar, Package, MapPin, Truck } from 'lucide-react';

const iconComponents = {
  Calendar,
  Package,
  MapPin,
  Truck
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-700 font-semibold text-sm">Easy and Fast</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Book your next trip in 4 easy steps
          </h2>
          <p className="text-xl text-gray-600">
            Simple, secure, and stress-free baggage delivery process
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconComponents[benefit.icon];
            return (
              <div key={benefit.id} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 pt-10 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Connecting Arrow (except for last item) */}
                {index < benefits.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <div className="w-8 h-0.5 bg-orange-300"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
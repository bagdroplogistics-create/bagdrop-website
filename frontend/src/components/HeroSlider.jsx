import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const slides = [
  {
    id: 1,
    badge: "Express Baggage Delivery",
    title: "Door-To-Door Baggage Delivery",
    description: "We pick up your bags and deliver them, saving you time and effort.",
    image: "https://images.unsplash.com/photo-1714235058817-af16a662fe1d?w=1920&q=80"
  },
  {
    id: 2,
    badge: "Express Baggage Delivery",
    title: "Airport Baggage Transfer Service",
    description: "Bagdrop delivers your bags door-to-door or airport-to-airport hands-free, hassle-free travel.",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80"
  },
  {
    id: 3,
    badge: "Express Baggage Delivery",
    title: "Excess Baggage Delivery Service",
    description: "Bagdrop delivers your extra luggage, so you don't have to carry it.",
    image: "https://images.unsplash.com/photo-1708192070421-2da651d85876?w=1920&q=80"
  },
  {
    id: 4,
    badge: "Package/Parcel Delivery",
    title: "Door-To-Door Package Delivery",
    description: "Door-to-Door Peace of Mind. One Delivery at a Time.",
    image: "https://customer-assets.emergentagent.com/job_luggage-service/artifacts/9jiaamec_banner-image-bg-5.jpg"
  },
  {
    id: 5,
    badge: "Storage, Sorted – Coming Soon!",
    title: "Secure. Simple. Storage – Arriving Soon",
    description: "Running Out of Room? We've Got You. Pack It. Store It. Relax",
    image: "https://customer-assets.emergentagent.com/job_luggage-service/artifacts/g4inyz4g_banner-image-bg-6.jpg"
  }
];

const HeroSlider = ({ onBookNow }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              {/* Background Image with Overlay */}
              <div className="relative h-[600px] sm:h-[700px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                  <div className="max-w-2xl text-white">
                    {/* Badge */}
                    <div className="inline-block px-4 py-2 bg-orange-600/90 rounded-lg mb-6">
                      <span className="text-white font-semibold text-sm">{slide.badge}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl sm:text-2xl mb-8 text-gray-200">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <a href="https://bag-drop-app2.vercel.app/login" target="_blank" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl" onclick="return gtag_report_conversion('https://bag-drop-app2.vercel.app/login');"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? 'w-8 h-3 bg-orange-600'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
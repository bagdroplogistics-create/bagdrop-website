import { useEffect, useState, useRef } from 'react';

const statistics = [
  { id: 1, value: 2000, label: "Airport Luggage Delivery", suffix: "+" },
  { id: 2, value: 500, label: "Business Luggage Delivery", suffix: "+" },
  { id: 3, value: 500, label: "Student Relocation Luggage Delivery", suffix: "+" },
  { id: 4, value: 2000, label: "Wedding & Event Luggage Delivery", suffix: "+" }
];

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            5,000+ Bags Successfully Shipped
          </h2>
          <p className="text-xl text-orange-100">(From Door to Destination)</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <CountUpNumber
                  end={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
                <p className="text-lg mt-4 text-orange-50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUpNumber = ({ end, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible]);

  return (
    <div className="text-5xl font-bold">
      {count}{suffix}
    </div>
  );
};

export default StatisticsSection;
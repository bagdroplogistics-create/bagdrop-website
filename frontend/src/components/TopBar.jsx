const TopBar = () => {
  const marqueeItems = [
    "Door-to-Airport and Airport-to-Door facility",
    "Effortless pick-up and drop-off directly from your residence and hotels",
    "Swift delivery or pick-up at Mumbai, Delhi, Goa and Ahmedabad airports",
    "Direct Express Delivery to Goa"
  ];

  return (
    <div className="sticky top-0 z-50 bg-orange-600 text-white py-3 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeItems.map((item, index) => (
            <span key={`first-${index}`} className="mx-8 text-sm font-medium">
              • {item}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {marqueeItems.map((item, index) => (
            <span key={`second-${index}`} className="mx-8 text-sm font-medium">
              • {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;

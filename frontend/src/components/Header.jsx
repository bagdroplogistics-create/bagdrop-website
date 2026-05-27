import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Package } from 'lucide-react';
import { Button } from './ui/button';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { useNavigate, useLocation } from 'react-router-dom';
import TrackingSection from './TrackingSection';

const Header = ({ onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
  const [isMobilePartnerOpen, setIsMobilePartnerOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleTrackingClick = () => {
    setIsTrackingModalOpen(true);
  };

  const handlePartnerMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsPartnerDropdownOpen(true);
  };

  const handlePartnerMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsPartnerDropdownOpen(false);
    }, 300);
  };

  const handleExploreMouseEnter = () => {
  if (dropdownTimeoutRef.current) {
    clearTimeout(dropdownTimeoutRef.current);
   }
   setIsExploreDropdownOpen(true);
  };

const handleExploreMouseLeave = () => {
  dropdownTimeoutRef.current = setTimeout(() => {
    setIsExploreDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://customer-assets.emergentagent.com/job_luggage-service/artifacts/x7t83ynq_Bagdrop-coloro-logo-2.png"
              alt="Bagdrop Logo"
              className="h-20 w-auto md:h-24"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Home
            </button>

            {/* Company Dropdown */}
<div
  className="relative"
  onMouseEnter={handleExploreMouseEnter}
  onMouseLeave={handleExploreMouseLeave}
>
  <button
    className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center gap-1 py-2"
  >
    Explore
    <ChevronDown
      size={16}
      className={`transition-transform ${
        isExploreDropdownOpen ? 'rotate-180' : ''
      }`}
    />
  </button>

  {isExploreDropdownOpen && (
    <div
      className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
      onMouseEnter={handleExploreMouseEnter}
      onMouseLeave={handleExploreMouseLeave}
    >

      {/* About */}
      <button
        onClick={() => {
          scrollToSection('about');
          setIsExploreDropdownOpen(false);
        }}
        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
      >
        About Us
      </button>

      {/* Testimonials */}
      <button
        onClick={() => {
          scrollToSection('testimonials');
          setIsExploreDropdownOpen(false);
        }}
        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
      >
        Testimonials
      </button>

      {/* Careers */}
      <button
        onClick={() => {
          navigate('/careers');
          setIsExploreDropdownOpen(false);
        }}
        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium flex items-center justify-between"
      >
        Careers at Bagdrop

        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
          Hiring
        </span>
      </button>

    </div>
  )}
</div>
         
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              All Locations
            </button>
        
            
            {/* Partner Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handlePartnerMouseEnter}
              onMouseLeave={handlePartnerMouseLeave}
            >
              <button
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center gap-1 py-2"
              >
                Partner With Us
                <ChevronDown size={16} className={`transition-transform ${isPartnerDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPartnerDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={handlePartnerMouseEnter}
                  onMouseLeave={handlePartnerMouseLeave}
                >
                  <button
                    onClick={() => {
                      navigate('/franchise-opportunities');
                      setIsPartnerDropdownOpen(false);
                      if (dropdownTimeoutRef.current) {
                        clearTimeout(dropdownTimeoutRef.current);
                      }
                    }}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                  >
                    Franchise Opportunities
                  </button>
                </div>
              )}
            </div>

             <button
              onClick={() => scrollToSection('track')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Track
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleTrackingClick}
                    variant="outline"
                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-2.5 font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <Package size={18} />
                    Track
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900 text-white max-w-xs p-3">
                  <p className="text-sm">Only customers whose numbers are added in the LR can track their bag/parcel</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}
            <a
                href="https://bag-drop-app2.vercel.app/login" target="_blank" onclick="return gtag_report_conversion('https://bag-drop-app2.vercel.app/login');"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Book Now
              </a>
               <a
                href="https://wa.me/+919624516665" target="_blank" onclick="return gtag_report_conversion('https://wa.me/+919624516665');" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Call Now
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-left"
              >
                Home
              </button> 

              {/* Explore Mobile Dropdown */}
<div>

  {/* Dropdown Button */}
  <button
    onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors"
  >
    <span>Explore</span>

    <ChevronDown
      size={18}
      className={`transition-transform duration-500 ease-in-out ${
        isMobileExploreOpen ? 'rotate-180' : ''
      }`}
    />
  </button>

  {/* Dropdown Content */}
  {isMobileExploreOpen && (
    <div className="mt-3 ml-4 border-l-2 border-orange-500 pl-4 flex flex-col space-y-4">

      <button
        onClick={() => {
          scrollToSection('about');
          setIsMenuOpen(false);
          setIsMobileExploreOpen(false);
        }}
        className="text-gray-700 hover:text-orange-600 text-left"
      >
        About Us
      </button>

      <button
        onClick={() => {
          scrollToSection('testimonials');
          setIsMenuOpen(false);
          setIsMobileExploreOpen(false);
        }}
        className="text-gray-700 hover:text-orange-600 text-left"
      >
        Testimonials
      </button>

      <button
        onClick={() => {
          navigate('/careers');
          setIsMenuOpen(false);
          setIsMobileExploreOpen(false);
        }}
        className="flex items-center gap-2 text-gray-700 hover:text-orange-600 text-left"
      >
        Careers at Bagdrop

        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
          Hiring
        </span>
      </button>

    </div>
  )}

</div>

      
            
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-left"
              >
                All Locations
              </button>
            
              {/* Partner Submenu */}

              {/* Partner Mobile Dropdown */}
<div>

  {/* Dropdown Button */}
  <button
    onClick={() => setIsMobilePartnerOpen(!isMobilePartnerOpen)}
    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors"
  >
    <span>Partner With Us</span>

    <ChevronDown
      size={18}
      className={`transition-transform duration-500 ease-in-out  ${
        isMobilePartnerOpen ? 'rotate-180' : ''
      }`}
    />
  </button>

  {/* Dropdown Content */}
  {isMobilePartnerOpen && (
    <div className="mt-3 ml-4 border-l-2 border-orange-500 pl-4 flex flex-col space-y-4">

      <button
        onClick={() => {
          navigate('/franchise-opportunities');
          setIsMenuOpen(false);
          setIsMobilePartnerOpen(false);
        }}
        className="text-gray-700 hover:text-orange-600 text-left"
      >
        Franchise Opportunities
      </button>

    </div>
  )}

</div>
          {/*    <div className="border-l-2 border-orange-600 pl-4">
                <div className="text-gray-500 text-sm font-semibold mb-2">Partner</div>
                <button
                  onClick={() => {
                    navigate('/franchise-opportunities');
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-left"
                >
                  Franchise Opportunities
                </button>
              </div>*/}

              <button
                onClick={() => scrollToSection('track')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-left"
              >
                Track
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-left"
              >
                Contact
              </button>
              
              {/* <Button
                onClick={() => {
                  handleTrackingClick();
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Package size={18} />
                Track
              </Button> */}

                   <a
                href="https://wa.me/+919624516665" target="_blank" onclick="return gtag_report_conversion('https://wa.me/+919624516665');" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Call Now
              </a>
              
                <a
                href="https://bag-drop-app2.vercel.app/login" target="_blank" onclick="return gtag_report_conversion('https://bag-drop-app2.vercel.app/login');" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Tracking Modal */}
      {/* <TrackingSection 
        isOpen={isTrackingModalOpen} 
        onClose={() => setIsTrackingModalOpen(false)} 
      /> */}
    </header>
  );
};

export default Header;
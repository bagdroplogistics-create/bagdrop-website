import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
// import { Text, TouchableOpacity } from 'react-native';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
 <div>
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_luggage-service/artifacts/x7t83ynq_Bagdrop-coloro-logo-2.png"
              alt="Bagdrop Logo"
              className="h-24 w-auto md:h-28 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Your trusted partner for hassle-free baggage delivery. Travel light, arrive right.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579334791456" target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
             
              <a
                href="https://www.instagram.com/bagdropofficial?igsh=Yjc5MHhnZDc1MTd5" target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
           
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
                 <li>
                <a href="https://bagdrop.co/careers" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Careers at Bagdrop
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Personal Baggage Transport</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Airport Luggage Transfers</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Corporate Travel</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Student Relocation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Wedding & Event Logistics</a></li>
              <li><a href="https://bagdrop.co/franchise-opportunities" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400 text-sm">
                  302, 3rd Floor, Ananta Stallion, Gotri Sevasi Road, Gotri, Vadodara - 391101
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-500 flex-shrink-0" size={20} />
                <a href="tel:+916357115711" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  +91 63 5711 5711 |
                </a>
                  <a href="tel:+916357335733" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  +91 63 5733 5733
                </a>
                 
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange-500 flex-shrink-0" size={20} />
                <a href="mailto:info@bagdrop.co" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  info@bagdrop.co
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bagdrop Logistics Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Terms & Conditions
              </Link>
               <Link to="/refund" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Refund Policy
             </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>


</div>
 
  );
};

export default Footer;
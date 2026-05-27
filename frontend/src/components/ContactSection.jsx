import { useState } from 'react';
import { contactInfo } from '../mock';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';


const socialIcons = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-700 font-semibold text-sm">Contact Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            If you have any query, feel free to contact us.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.locations.map((location) => (
              <div
                key={location.id}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-orange-600 flex-shrink-0" size={20} />
                    <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-orange-600 transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-orange-600 flex-shrink-0" size={20} />
                    <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-orange-600 transition-colors">
                      {location.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
          {/* Skybird Contact Box */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Skybird Logo */}
              <div className="flex justify-center mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_luggage-service/artifacts/yehjgwcl_Sky-Bird.jpg"
                  alt="Skybird Logo"
                  className="h-20 w-auto"
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-4">

                 <div className="flex items-center gap-3 justify-center">
                  <h3 class="text-gray-700 hover:text-orange-600 transition-colors text-lg font-semibold">Exclusive GSA: USA </h3>
                 </div>


                <div className="flex items-center gap-3 justify-center">
                  <Phone className="text-orange-600 flex-shrink-0" size={20} />
                  <a 
                    href="tel:+18887592473" 
                    className="text-gray-700 hover:text-orange-600 transition-colors text-lg font-medium"
                  >
                    +1 888 759 2473
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Mail className="text-orange-600 flex-shrink-0" size={20} />
                  <a 
                    href="mailto:res@skybirdtravel.com" 
                    className="text-gray-700 hover:text-orange-600 transition-colors text-lg font-medium"
                  >
                    res@skybirdtravel.com
                  </a>
                </div>


                  {/* Airport Image in Bottom Space */}
        <div className="mt-16 flex justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_luggage-service/artifacts/787fotdu_ChatGPT%20Image%20Dec%205%2C%202025%2C%2004_29_17%20PM.png"
            alt="Airport with Travel Bag and Box"
            className="max-w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
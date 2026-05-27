import { useState } from 'react';
import { Check, Store, Truck, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FranchiseOpportunities = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    franchiseType: ''
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${backendUrl}/api/franchise-inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. Our team will contact you soon at info@bagdrop.co",
      });
      setFormData({ name: '', email: '', phone: '', city: '', franchiseType: '' });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us at info@bagdrop.co",
        variant: "destructive",
      });
      console.error('Error submitting franchise inquiry:', error);
    }
  };

  const faqs = [
    {
      question: "What is a Bagdrop Franchise Partnership?",
      answer: "Our franchise program allows entrepreneurs to join India's growing baggage delivery network. Partners can operate baggage collection points or manage delivery operations in their local area, earning revenue while providing essential services to travelers."
    },
    {
      question: "Who can become a Bagdrop franchise partner?",
      answer: "We welcome entrepreneurs with basic infrastructure (retail space or delivery center), good communication skills, and a passion for customer service. No prior logistics experience is required as we provide comprehensive training."
    },
    {
      question: "What is the investment required?",
      answer: "Investment varies by franchise type. Collection centers require minimal setup (60-100 sqft space), while delivery centers need larger space (200+ sqft) and delivery personnel. Detailed cost breakdowns are provided during the application process."
    },
    {
      question: "How long does the application process take?",
      answer: "Our team typically reviews applications within 3-5 business days. Once approved, the setup and training process takes 2-3 weeks, depending on your location and franchise type."
    },
    {
      question: "Will training and support be provided?",
      answer: "Yes! We provide comprehensive training covering operations, technology systems, customer service, and best practices. Ongoing support is available through dedicated franchise managers and 24/7 helpdesk."
    },
    {
      question: "How do franchise partners earn revenue?",
      answer: "Collection center partners earn commission on every booking and additional services (packing, insurance). Delivery center partners earn per successful delivery. Payment is processed monthly with full transparency."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Partner with India's Premier Baggage Delivery Network
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-orange-50">
            Join Bagdrop's growing franchise network and build a profitable business in the travel logistics industry
          </p>
          <Button 
            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 font-semibold text-lg px-8 py-6"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Franchise Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Franchise Model
            </h2>
            <p className="text-xl text-gray-600">
              Select the business model that fits your goals and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Collection Center */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
                <div className="flex items-center justify-center mb-4">
                  <Store size={48} />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">Baggage Collection Center</h3>
                <p className="text-center text-orange-50">
                  Operate a branded baggage collection point for travelers
                </p>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="text-green-600" size={24} />
                    Benefits
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Low setup investment with high returns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Earn commission on every baggage booking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Additional revenue from packing and insurance services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Flexible working hours</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Requirements</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <MapPin className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                      <span>60-100 sqft space in accessible location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                      <span>Good customer communication skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Store className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                      <span>Basic retail counter setup</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, franchiseType: 'collection' }));
                    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-6"
                >
                  Apply for Collection Center
                </Button>
              </div>
            </div>

            {/* Delivery Center */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
                <div className="flex items-center justify-center mb-4">
                  <Truck size={48} />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">Delivery Operations Center</h3>
                <p className="text-center text-blue-50">
                  Manage last-mile delivery operations in your area
                </p>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="text-green-600" size={24} />
                    Benefits
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>High-volume business potential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Earn per successful delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Scalable operations with territory expansion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Technology-enabled tracking and management</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Requirements</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span>Minimum 200 sqft space for sorting operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Truck className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span>Delivery personnel (2-5 riders to start)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span>Basic operations management experience</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, franchiseType: 'delivery' }));
                    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6"
                >
                  Apply for Delivery Center
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
            Why Partner with Bagdrop?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Business Model</h3>
              <p className="text-gray-600">
                Join a tested and successful franchise system with established processes and technology
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Growing Market</h3>
              <p className="text-gray-600">
                Tap into India's booming travel industry with increasing demand for baggage services
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Full Support</h3>
              <p className="text-gray-600">
                Comprehensive training, marketing support, and ongoing operational assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`text-orange-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Start Your Franchise Journey
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and our team will get in touch with you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-gray-700 font-medium mb-2 block">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="franchiseType" className="text-gray-700 font-medium mb-2 block">
                  Interested In <span className="text-red-500">*</span>
                </Label>
                <select
                  id="franchiseType"
                  name="franchiseType"
                  value={formData.franchiseType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select franchise type</option>
                  <option value="collection">Baggage Collection Center</option>
                  <option value="delivery">Delivery Operations Center</option>
                  <option value="both">Both Options</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 font-semibold text-lg"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FranchiseOpportunities;

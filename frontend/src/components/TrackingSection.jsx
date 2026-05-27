import { X, Shield, Zap, CheckCircle } from 'lucide-react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Check, Luggage } from 'lucide-react';
import { Button } from './ui/button';


const TrackingSection = () => {
  return (
    // Somewhere on your homepage JSX
<section id="track" className="w-full bg-E9 px-8 md:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left side */}
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Bagdrop Logistics Solutions Pvt. Ltd.
      </h2>
      <div className="h-1 w-20 bg-orange-600 rounded-full mb-6" />

      <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4">
        Book with us on Whatsapp 
      </h3>

      

      <a
        href="https://wa.link/bcwgv8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700
                   text-white text-xl font-semibold px-8 py-4 rounded-lg shadow-md transition"
      >
        <Phone className="text-white-600 flex-shrink-0 mr-2" size={20} />   +91 63 5711 5711
      </a>

      <p className="mt-6 text-xl font-semibold text-gray-800 mb-4">
        Your booking is now just a Whatsapp away
      </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Shield className="text-green-600" size={20} />
                    <span className="font-medium">Secure</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Zap className="text-orange-600" size={20} />
                    <span className="font-medium">Instant</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span className="font-medium">Hassle-free</span>
                  </div>
                </div>

      <div className="mt-6 bg-orange-50 border-l-4 border-orange-700 p-3 rounded">
        <p className="text-sm text-gray-700">
          Only those customers can track their bag/parcel whose numbers are added in the LR.
        </p>
      </div>
    </div>

    {/* Right side – phone in hand image */}
    <div className="flex justify-center">
      <div className="w-full ">
        <img
          src="https://iili.io/qNiAsx2.png"
          alt="Mobile phone tracking"
          className="w-full"
        />
        <div className="absolute inset-0" />
      </div>
    </div>
  </div>
</section>

  );
};

export default TrackingSection;


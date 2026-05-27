import { useState } from 'react';
import { Check, Store, Truck, Phone, Mail, MapPin, ChevronDown, ShieldCheck, Lock, Users, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
     <div className="min-h-screen bg-white">
      <Header />
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-lg opacity-90">
          Your trust matters. We protect your data with complete transparency.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-10">

          {/* Section */}
          <div className="flex gap-4">
            <ShieldCheck className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
              <p className="text-gray-600">
                We collect essential details like your name, phone number, email,
                pickup & delivery address, and travel details to ensure smooth baggage delivery.
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="flex gap-4">
            <Users className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
              <p className="text-gray-600">
                Your data helps us manage bookings, track deliveries, provide support,
                and improve your overall experience.
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="flex gap-4">
            <Lock className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Data Protection & Security</h2>
              <p className="text-gray-600">
                We use secure systems, encryption, and restricted access to protect
                your personal information at all times.
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="flex gap-4">
            <FileText className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
              <p className="text-gray-600">
                We do not sell your data. Information is only shared with trusted
                logistics partners and payment providers for service delivery.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600">
              📧 info@bagdrop.co <br />
              📞 +91 63 5711 5711
            </p>
          </div>
        </div>
      </div>

        <Footer />
    </div>
  
  );
};

export default PrivacyPolicy;
import { useState } from 'react';
import { Check, Store, Truck, Phone, Mail, MapPin, ChevronDown, ShieldCheck, Lock, Users, FileText, AlertCircle, Scale } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
     <div className="min-h-screen bg-white">
      <Header />
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">Terms & Conditions</h1>
        <p className="text-lg opacity-90">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-10">

          {/* Section */}
           <div className="flex gap-4">
            <FileText className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Service Overview</h2>
              <p className="text-gray-600">
                Bagdrop provides baggage pickup, transport and delivery services
                between homes, airports, hotels and Wedding event venues.
              </p>
            </div>
          </div>

          {/* Section */}
           <div className="flex gap-4">
            <ShieldCheck className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
              <p className="text-gray-600">
                Customers must provide accurate booking details and ensure luggage
                is properly packed and compliant with airline and legal regulations.
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="flex gap-4">
            <AlertCircle className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Prohibited Items</h2>
              <p className="text-gray-600">
                Customers must not send hazardous, illegal or restricted items
                including explosives, Alcohol, flammable goods or valuables without declaration.
              </p>
            </div>
          </div>

          {/* Section */}
            <div className="flex gap-4">
            <Scale className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Liability</h2>
              <p className="text-gray-600">
                Bagdrop is not liable for delays due to external factors such as weather,
                airline delays or unforeseen circumstances. Compensation policies apply as per company guidelines.
              </p>
            </div>
          </div>

          {/* footer */}
           <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Agreement</h3>
            <p className="text-gray-600">
              By using our service, you agree to these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>

        <Footer />
    </div>
  
  );
};

export default Terms;
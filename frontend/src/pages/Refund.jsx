import { useState } from 'react';
import { Check, Store, Truck, Phone, Mail, MapPin, ChevronDown, ShieldCheck, Lock, Users, FileText, AlertCircle, Scale, RefreshCcw, Gift, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Refund = () => {
  return (
     <div className="min-h-screen bg-white">
      <Header />
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">Refund & Credit Policy</h1>
        <p className="text-lg opacity-90">
          Flexible credit system designed for your convenience.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-10">

          {/* Section */}
           <div className="flex gap-4">
            <RefreshCcw className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">No Direct Refund Policy</h2>
              <p className="text-gray-600">
                Bagdrop does not offer direct monetary refunds. Instead, we provide
                a flexible credit voucher to ensure you can use your booking value anytime.
              </p>
            </div>
          </div>

          {/* Section */}
           <div className="flex gap-4">
            <Gift className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">6-Month Credit Voucher</h2>
              <p className="text-gray-600">
                In case of cancellation or eligible refund situations, customers will receive
                a credit voucher valid for 6 months from the date of issue.
              </p>
            </div>
          </div>

          {/* Section */}
            <div className="flex gap-4">
            <Clock className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Voucher Extension</h2>
              <p className="text-gray-600">
                If the voucher is not used within 6 months, we will extend it by another
                6 months upon request, ensuring maximum flexibility for our customers.
              </p>
            </div>
          </div>

          {/* Section */}
            <div className="flex gap-4">
            <Users className="text-orange-500" size={28} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Transferable Voucher</h2>
              <p className="text-gray-600">
                If you do not wish to use the voucher yourself, you are free to transfer it
                to your friends, family or relatives. The voucher remains valid for the
                remaining duration.
              </p>
            </div>
          </div>

             {/* Highlight Box */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-orange-600">
              Important Note
            </h3>
            <p className="text-gray-700">
              This policy helps us maintain service quality while providing customers
              with flexible options to utilize their booking value without financial loss.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
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

export default Refund;
import { useState } from 'react';
import { Check, Store, Truck, Phone, Mail, MapPin, ChevronDown, ShieldCheck, Lock, Users, FileText, AlertCircle, Scale, Briefcase, Clock, Send, Headphones, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import careersBg from "../data/img/careers-bg.jpg";

const jobOpenings = [
  {
    title: "Freshers Welcome",
    location: "Vadodara / Multiple Cities",
    type: "Full Time",
    icon: <Users className="text-orange-500" size={26} />,
    description:
      "Kickstart your career with Bagdrop. We welcome energetic freshers eager to learn and grow in the logistics and travel industry.",
  },
  {
    title: "Airport Professionals",
    location: "Multiple Cities",
    type: "Full Time",
    icon: <Briefcase className="text-orange-500" size={26} />,
    description:
      "Join our airport support network and help streamline baggage movement for travelers across India.",
  },
  {
    title: "Logistics Experts",
    location: "Multiple Cities",
    type: "Full Time",
    icon: <Truck className="text-orange-500" size={26} />,
    description:
      "Experienced logistics professionals can help us build India’s smartest baggage delivery ecosystem.",
  },
  {
    title: "Operations Hustlers",
    location: "Vadodara, Gujarat",
    type: "Full Time",
    icon: <Clock className="text-orange-500" size={26} />,
    description:
      "We’re looking for fast-moving operations professionals who thrive in high-energy environments.",
  },
  {
    title: "Problem Solvers",
    location: "Remote / Hybrid",
    type: "Flexible",
    icon: <Headphones className="text-orange-500" size={26} />,
    description:
      "If you love solving customer and operational challenges creatively, Bagdrop is the place for you.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <Header />
{/* HERO SECTION */}
<div
  className="relative text-white min-h-[700px] flex items-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${careersBg})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>

        <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-5">
          Careers at Bagdrop
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Delivering Convenience.
          <br />
          Building Careers.
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Join India’s growing baggage delivery network and help travelers
          move freely without luggage stress.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <a
            href="#openings"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            View Openings
          </a>

          <a
            href="mailto:info@bagdrop.co"
            className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            Send Your Resume
          </a>

        </div>

      </div>

      {/* RIGHT TRUST BOX */}
      <div className="flex justify-start lg:justify-end">

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-sm w-full shadow-2xl">

          <h2 className="text-5xl font-bold text-orange-400">
            5000+
          </h2>

          <p className="text-2xl font-semibold mt-3">
            Baggage Movements
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Trusted by travelers for safe, smooth and reliable baggage delivery across India.
          </p>

        </div>

      </div>

    </div>
  </div>
</div>

      {/* OPEN POSITIONS */}
      <div
        id="openings"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">

            <p className="text-orange-500 uppercase tracking-wider font-semibold mb-3">
              Join Our Journey
            </p>

            <h2 className="text-4xl font-bold mb-4">
              Current Openings
            </h2>

            <p className="text-gray-600 text-lg">
              Explore opportunities to become part of Bagdrop.
            </p>

          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-100"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  {job.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {job.title}
                </h3>

                <div className="space-y-3 mb-5 text-gray-600">

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{job.type}</span>
                  </div>

                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {job.description}
                </p>

                <a
                  href="mailto:info@bagdrop.co"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition"
                >
                  <Send size={18} />
                  Apply Now →
                </a>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="py-20 px-6 bg-white">

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white p-10 md:p-14 text-center shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don’t See a Matching Role?
          </h2>

          <p className="text-lg opacity-90 mb-8">
            We’re always looking for talented people passionate about logistics,
            customer experience, and technology.
          </p>

          <a
            href="mailto:info@bagdrop.co"
            className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition duration-300"
          >
            Send Your Resume
          </a>

        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Careers;
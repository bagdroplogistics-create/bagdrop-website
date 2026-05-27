import { MapPin } from 'lucide-react';



const DestinationsSection = ({ onBookNow }) => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-700 font-semibold text-sm">Airport & Door-to-Door Delivery</span>
          </div>
         
        </div>
    
        {/* Our Locations Section */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* West Sector */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">WEST SECTOR</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Gujarat:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Vadodara</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Ahmedabad</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Nadiad</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Anand</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Surat</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Rajkot</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Maharashtra:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Mumbai</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Pune</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Goa:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Goa(North)</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Goa(South)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* North Sector */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">NORTH SECTOR</h3>
              <div className="space-y-6">
                   <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold text-orange-600 mb-3"><MapPin size={16} className="text-orange-600 flex-shrink-0" /> Delhi(UT)</h4>
                
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Haryana:</h4>
                  <ul className="space-y-2">
                   
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Gurgaon</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Sirsa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Punjab:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Amritsar</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Ludhiana</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Chandigarh</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Zirakpur</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Uttarakhand:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Rishikesh</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Haridwar</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Dehradun</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Rudrapur</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Kathgodam</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Uttar Pradesh:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Agra</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Rampur</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Bareilly</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Lucknow</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Rajasthan:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Jaipur</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Kota</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* South Sector */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">SOUTH SECTOR</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Karnataka:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Bangalore</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Mysore</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Sira</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Davanagere</li>
                  </ul>
                </div>

                    <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Tamil Nadu:</h4>
                  <ul className="space-y-2">
                    
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Chennai</li>

                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Vellore</li>
                
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Salem</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Trichy</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Madurai</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Erode</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Coimbatore</li>
                    </ul>
                </div>

                      <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Andhra Pradesh:</h4>
                  <ul className="space-y-2">
                    
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Tirupati</li>

                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Vijayawada</li>
                
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Guntur</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Eluru</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Rajahmundry</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Vizag (Visakhapatnam)</li>
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Kurnool</li>
                    </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-orange-600 mb-3">Telangana:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-orange-600 flex-shrink-0" />Hyderabad</li>
                  
                  </ul>
                </div>

                 <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold text-orange-600 mb-3"><MapPin size={16} className="text-orange-600 flex-shrink-0" /> Pondicherry (UT)</h4>
        
                </div>

              </div>
            </div>
          </div>

{/*<iframe
  allow="geolocation"
  frameBorder="0"
  style={{ width: "100%", height: "700px" }}
  src="https://www.zeemaps.com/pub?group=6945380"
  title="Bagdrop locations map"
/>*/}
          
        </div>



    </div>
    </section>
  );
};

export default DestinationsSection;
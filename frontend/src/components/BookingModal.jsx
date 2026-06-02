import React, { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupAddress: "",

    dropOffLocation: "",
    dropOffAddress: "",

    numberOfBags: "",

    preferredPickupDate: "",
    deliveryDate: "",

    fullName: "",
    phone: "",
    email: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://bagdrop-website-backend.vercel.app/api/booking-inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            numberOfBags: Number(formData.numberOfBags)
          })
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Booking inquiry submitted successfully.");

        setFormData({
          pickupLocation: "",
          pickupAddress: "",
          dropOffLocation: "",
          dropOffAddress: "",
          numberOfBags: "",
          preferredPickupDate: "",
          deliveryDate: "",
          fullName: "",
          phone: "",
          email: ""
        });

        onClose();
      } else {
        alert(result.detail || "Failed to submit inquiry.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999]">
      <div className="flex h-screen items-center justify-center p-4 overflow-y-auto">

        <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Book BagDrop Service
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="text-2xl font-bold"
            >
              ×
            </button>
          </div>

                      <form onSubmit={handleSubmit}>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Pickup Location"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                />
            
                <input
                  type="text"
                  name="dropOffLocation"
                  placeholder="Drop Location"
                  value={formData.dropOffLocation}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                />
            
                <textarea
                  name="pickupAddress"
                  placeholder="Pickup Address"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 h-24"
                />
            
                <textarea
                  name="dropOffAddress"
                  placeholder="Drop Address"
                  value={formData.dropOffAddress}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 h-24"
                />
            
                <input
                  type="number"
                  name="numberOfBags"
                  placeholder="Number of Bags"
                  value={formData.numberOfBags}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full border rounded-lg p-3"
                />

                                <div className="relative">
                  <span className="text-xs text-gray-500">
                    Preferred Pickup Date
                  </span>
                
                  <input
                    type="date"
                    name="preferredPickupDate"
                    value={formData.preferredPickupDate}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg p-3 mt-1"
                  />
                </div>
            
            
                     <div className="relative">
                  <span className="text-xs text-gray-500">
                   Delivery Date
                  </span> 
                       
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                />
                 </div>
            
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                />
            
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                />
            
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                />
            
              </div>
            
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold mt-5"
              >
                {loading ? "Submitting..." : "Submit Booking Inquiry"}
              </button>
            
            </form>

        </div>

      </div>
    </div>
  );
}

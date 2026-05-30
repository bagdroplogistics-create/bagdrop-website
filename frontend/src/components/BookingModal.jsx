import React, { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupAddress: "",
    dropLocation: "",
    dropAddress: "",
    bags: "",
    pickupDate: "",
    deliveryDate: "",
    fullName: "",
    phone: "",
    email: "",
    flightNumber: "",
    specialInstructions: ""
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
        "YOUR_BACKEND_BOOKING_API",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        alert("Booking inquiry submitted successfully.");

        setFormData({
          pickupLocation: "",
          pickupAddress: "",
          dropLocation: "",
          dropAddress: "",
          bags: "",
          pickupDate: "",
          deliveryDate: "",
          fullName: "",
          phone: "",
          email: "",
          flightNumber: "",
          specialInstructions: ""
        });

        onClose();
      } else {
        alert("Failed to submit inquiry.");
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

        <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">

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

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <h3 className="font-semibold text-lg">
              Pickup Details
            </h3>

            <input
              type="text"
              name="pickupLocation"
              placeholder="Pickup Location"
              value={formData.pickupLocation}
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
              className="w-full border rounded-lg p-3"
            />

            <h3 className="font-semibold text-lg">
              Drop Details
            </h3>

            <input
              type="text"
              name="dropLocation"
              placeholder="Drop Location"
              value={formData.dropLocation}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <textarea
              name="dropAddress"
              placeholder="Drop Address"
              value={formData.dropAddress}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <h3 className="font-semibold text-lg">
              Baggage Information
            </h3>

            <input
              type="number"
              name="bags"
              placeholder="Number of Bags"
              value={formData.bags}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <h3 className="font-semibold text-lg">
              Schedule
            </h3>

            <label className="block text-sm font-medium">
              Preferred Pickup Date
            </label>

            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <label className="block text-sm font-medium">
              Preferred Delivery Date
            </label>

            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <h3 className="font-semibold text-lg">
              Customer Information
            </h3>

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

            <input
              type="text"
              name="flightNumber"
              placeholder="Flight Number (Optional)"
              value={formData.flightNumber}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <textarea
              name="specialInstructions"
              placeholder="Special Instructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg p-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"
            >
              {loading ? "Submitting..." : "Submit Booking Inquiry"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

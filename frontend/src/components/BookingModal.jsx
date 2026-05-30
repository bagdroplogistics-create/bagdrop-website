import React, { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    airport: "",
    pickup: "",
    drop: "",
    bags: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://your-api-endpoint.com/send-booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    if (response.ok) {
      alert("Booking submitted successfully");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg">

        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">
            Book BagDrop
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="airport"
            placeholder="Airport"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="pickup"
            placeholder="Pickup Location"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="drop"
            placeholder="Drop Location"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="bags"
            placeholder="Number of Bags"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded"
          >
            Submit Booking
          </button>

        </form>

      </div>
    </div>
  );
}

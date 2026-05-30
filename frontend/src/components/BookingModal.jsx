import React from "react";

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "500px"
        }}
      >
        <h2>Book BagDrop</h2>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

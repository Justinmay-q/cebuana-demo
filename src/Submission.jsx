import { useState } from "react";

function Submission({ onBack }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      setMessage("Please complete all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          address,
          consent: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessage("Application submitted successfully.");

      setName("");
      setPhone("");
      setAddress("");

    } catch (error) {
      console.error(error);
      setMessage("Could not save the application. Please try again.");
    }
  };

  return (
    <div className="page">
      <div className="card">

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back
        </button>

        <h1>Cebuana Loan</h1>

        <h2>Educational Loan Application</h2>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Phone Number</label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Address</label>

          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            type="submit"
            className="primary-button"
          >
            Submit Application
          </button>

        </form>

        {message && (
          <div className="message">
            {message}
          </div>
        )}

      </div>
    </div>
  );
}

export default Submission;
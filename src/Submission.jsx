import { useState } from "react";
import "./App.css";

function Submission({ onLogin }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      setMessage("Please complete all fields.");
      return;
    }

    if (!agreed) {
      setMessage("Please agree to the processing of your information.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          address,
          consent: agreed,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Database error");
      }

      setMessage("Application submitted successfully!");

      setName("");
      setPhone("");
      setAddress("");
      setAgreed(false);

      if (onLogin) {
        onLogin(data.id);
      }

    } catch (error) {
      console.error(error);
      setMessage(error.message || "Unable to submit application.");
    }
  };

  return (
     <div className="page">
    <div className="submission-container">

      {/* Cebuana Logo */}
      <div className="logo-container">
      <img
      src="/cebuana.png"
       alt="Cebuana"
        className="cebuana-logo"
          />

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Address</label>

            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="agreement">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />

            <span>
              I agree to the processing of my information.
            </span>
          </div>

          <button type="submit" className="submit-button">
            LOGIN
          </button>

        </form>

        {message && (
          <div className="message">
            {message}
          </div>
        )}

      </div>
    </div>
    </div>
  );
}

export default Submission;
import { useState } from "react";

function Submission({ onBack }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !address || !consent) {
      setMessage("Please complete all required fields.");
      return;
    }

    try {

      const response = await fetch(
        "/api/submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            phone,
            address,
            consent
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessage("Please wait the application is initializing");

      setName("");
      setPhone("");
      setAddress("");
      setConsent(false);

    } catch (error) {

      console.error(error);
      setMessage(
        "Could not save the demo submission. Check the server."
      );

    }
  };

  return (
    <div className="page">

      <div className="card">

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>

        <h1>Cebuana Loan</h1>

        {/* <span className="fictional-label">
          Fictional Security Awareness Demo
        </span> */}

        <h2>Educational Loan Application</h2>

        {/* <p className="subtitle">
          Basic information only
        </p> */}

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Phone Number</label>

          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Address</label>

          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label className="checkbox-label">

            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />

            <span>
              I accept this application
            </span>

          </label>

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

        {/* <p className="demo-note">
          No passwords, OTPs, PINs, bank account numbers,
          or financial credentials are collected.
        </p> */}

      </div>

    </div>
  );
}

export default Submission;
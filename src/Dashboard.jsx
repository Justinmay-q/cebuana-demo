function Dashboard({ onApply }) {
  return (
    <div className="page">

      <div className="card dashboard-card">

        <h1>Cebuana Loan</h1>

        {/* <span className="fictional-label">
          Fictional Security Awareness Demo
        </span> */}

        <h2>Welcome to Cebuana Loan</h2>

        <p className="subtitle">
          Educational Loan Application
        </p>

        <div className="loan-box">
          <h3>Educational Loan</h3>

          {/* <p>
           Your information.
          </p> */}

          <div className="loan-item">
            <strong>Purpose</strong>
            <span>Educational expenses</span>
          </div>

          <div className="loan-item">
            <strong>Use</strong>
            <span>School-related expenses</span>
          </div>

          {/* <div className="loan-item">
            <strong>Type</strong>
            <span>Cybersecurity Awareness</span>
          </div> */}
        </div>

        <button
          className="primary-button"
          onClick={onApply}
        >
          Apply for Educational Loan
        </button>

        <p className="demo-note">
          Enter Your password, OTP, or banking information.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;
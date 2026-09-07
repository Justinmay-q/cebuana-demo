function Dashboard({ applicationId, onLogout }) {
  return (
    <div className="page">
      <div className="dashboard-card">

         {/* Cebuana Logo */}
      <div className="logo-container">
      <img
      src="/cebuana.png"
       alt="Cebuana"
        className="cebuana-logo"
          />

        <h1>Welcome to Cebuana Loan</h1>

        <p className="dashboard-subtitle">
          Educational Loan Program
        </p>

        <div className="loan-box">
          <h3>Educational Loan</h3>

          <p>
            This fictional program is intended for
            educational purposes only.
          </p>

          <div className="loan-amount">
            ₱10,000
          </div>

          <p className="loan-purpose">
            Sample educational assistance
          </p>
        </div>

        <div className="dashboard-menu">

          <button
            className="dashboard-button"
            onClick={() =>
              alert(
                "Loan Details\n\nSample Amount: ₱10,000\nPurpose: Education"
              )
            }
          >
            📄 Loan Details
          </button>

          <button
            className="dashboard-button"
            onClick={() =>
              alert(
                "\n\nThis educational loan is intended to provide financial assistance for qualified educational expenses such as tuition, school fees, books, and other learning-related needs."
              )
            }
          >
            📚 Educational Purpose
          </button>

          <button
            className="dashboard-button"
            onClick={() =>
              alert(
                "Application Status\n\nStatus: Submitted\n\nYour fictional application has been submitted."
              )
            }
          >
            📋 Application Status
          </button>

        </div>

        <div className="status-box">
          <span>Application Status: </span>

          <strong>
            Submitted
          </strong>
        </div>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          Logout
        </button>
             </div>
      </div>
    </div>
  );
}

export default Dashboard;
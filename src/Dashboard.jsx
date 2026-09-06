function Dashboard({ onLogout }) {
  return (
    <div className="page">
      <div className="dashboard-card">

        <div className="demo-label">
          FICTIONAL DEMO
        </div>

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
            onClick={() => alert("This is a fictional demo.")}
          >
            📄 Loan Details
          </button>

          <button
            className="dashboard-button"
            onClick={() => alert("This is a fictional demo.")}
          >
            📚 Educational Purpose
          </button>

          <button
            className="dashboard-button"
            onClick={() => alert("This is a fictional demo.")}
          >
            📋 Application Status
          </button>

        </div>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;
import { useState } from "react";
import Submission from "./Submission";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <Submission
        onLogin={() => setLoggedIn(true)}
      />
    );
  }

  return (
    <Dashboard
      onLogout={() => setLoggedIn(false)}
    />
  );
}

export default App;
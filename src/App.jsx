import { useState } from "react";
import Submission from "./Submission";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [applicationId, setApplicationId] = useState(null);

  if (!loggedIn) {
    return (
      <Submission
        onLogin={(id) => {
          setApplicationId(id);
          setLoggedIn(true);
        }}
      />
    );
  }

  return (
    <Dashboard
      applicationId={applicationId}
      onLogout={() => {
        setLoggedIn(false);
        setApplicationId(null);
      }}
    />
  );
}

export default App;
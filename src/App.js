import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { authentication } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import LoginPage from "./pages/LoginPage";
import StudentsPage from "./pages/StudentsPage";
import Sidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(authentication, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <Router>
      <div className="app-container">
        {user && <Sidebar />}
        <Routes>
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/students" />} />
          <Route path="/students" element={user ? <StudentsPage /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

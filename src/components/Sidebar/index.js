import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { authentication } from "../../firebase";

import './index.css'

const Sidebar = ({ onLogout }) => {
  const onClickLogout = () => {
    signOut(authentication);
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
      <Link to="/students">Students</Link>
      <button onClick={onClickLogout}>Logout</button>
    </div>
    </div>
  );
};

export default Sidebar;

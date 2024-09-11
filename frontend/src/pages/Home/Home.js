import React from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirect = (redirectTo) => {
    if (redirectTo === "signup") navigate("/access");
    else if (redirectTo === "login") navigate("/login");
  };

  return (
    <div className="home-page">
      <div className="hero-logo">
        <img src="ayuda_panda_gif.gif" alt="hero" className="hero-logo-gif" />
      </div>
      <div className="home-control">
        <div className="control-buttons">
          <button className="btn btn-signup" onClick={() => redirect("signup")}>
            Sign Up
          </button>
          <button className="btn btn-login" onClick={() => redirect("login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

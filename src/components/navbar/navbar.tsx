import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src="./src/assets/LogoPointMedia.png" alt="Logo" />
        <span className="logo-text">EZ<span>.JOB</span></span>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Introdução
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Quem Somos?
        </NavLink>
        <NavLink to="/vagas-abertas" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Vagas Abertas
        </NavLink>
      </div>

      <div className="navbar-user">
        <NavLink to="/login" className={"nav-login"}>
          Fazer login
        </NavLink>
      </div>
    </nav>
  );
}
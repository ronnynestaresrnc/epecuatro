import React from "react";
import "./nav.css";
import { NavLink } from "reactstrap";

import logoHome from "../assets/logo.png";
import { NavLink as RRNavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
      <div className="container">
        <a className="navbar-brand me-auto " href="#">
          <img src={logoHome} width="150" alt=""></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0  custom-ul">
            <li className="nav-item text-dark ">
              <NavLink
                tag={RRNavLink}
                to="/"
                className="nav-link font-weight-bold text-dark "
              >
                Home
              </NavLink>
            </li>{" "}
            <li className="nav-item text-dark ">
              <NavLink
                tag={RRNavLink}
                to="/"
                className="nav-link font-weight-bold text-dark "
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item text-dark ">
              <NavLink
                tag={RRNavLink}
                to="/service"
                className="nav-link font-weight-bold text-dark "
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Blocks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Telf:(120) 90646154
              </a>
            </li>
          </ul>

          <form className="d-flex  " style={{ marginLeft: "45px" }}>
            <button
              className="btnbtn-outline-succes button custom-btn-nav"
              type="submit"
            >
              BUY NOW
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;

import React from "react";
import "./nav.css";
import {
  Navbar,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Collapse,
  Nav,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "./../assets/logo.png";

import { NavLink as RRNavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-dark bg-light">
        <div className="container d-flex justify-content-between font-weight-bold text-dark  py-3">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" height="56" width="155"></img>
          </a>
          <ul className="navbar-nav  mb-2 mb-lg-0   flex-hijo text-dark ">
            <li className="nav-item text-dark ">
              <NavLink
                tag={RRNavLink}
                to="/"
                className="nav-link font-weight-bold text-dark "
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                tag={RRNavLink}
                to="/crud-read"
                className="nav-link font-weight-bold text-dark "
              >
                Crud Readss
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cursos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item">Cursos</a>
                </li>
                <li>
                  <a className="dropdown-item">Detalles Cursos</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                tag={RRNavLink}
                to="/crud"
                className="nav-link font-weight-bold text-dark "
              >
                Crud
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                tag={RRNavLink}
                to="/detalles-maestro"
                className="nav-link font-weight-bold text-dark "
              >
                Detalles Maestro
              </NavLink>
            </li>

            <li>
              <NavLink
                tag={RRNavLink}
                to="/service-table"
                className="nav-link font-weight-bold text-dark "
              >
                service-card
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                tag={RRNavLink}
                to="/service-card"
                className="nav-link font-weight-bold text-dark "
              >
                service-table
              </NavLink>
            </li>
          </ul>
          <div className="nav-section text-secondary ">
            <i className="bi bi-cart-fill "></i> |
            <i className="bi bi-person-fill "></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;

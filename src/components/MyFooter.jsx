import React from "react";
import logoHome from "../assets/logo.png";
const MyFooter = () => {
  return (
    <>
      <div
        className="row row-cols-5 pt-5 py-5 mt-5 border-top "
        style={{ backgroundColor: "#161616", color: " white !important" }}
      >
        <div className="col-12 pt-4 pb-2 container">
          <div className="container py-3">
            <h3 className="d-inline me-auto text-white">
              Enough Talk , Lets Build <p>Sometgin Together</p>
            </h3>
            <button className="d-blokc btn btn-danger">READ OUT NOW</button>
          </div>
          <br></br>
        </div>
        <div className="col">
          <a className="d-flex align-items-center mb-3 link-dark text-decoration-none"></a>
        </div>

        <div className="col">
          <img src={logoHome} width="150" height="150" alt=""></img>
        </div>

        <div className="col">
          <h5>Seccion</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default MyFooter;

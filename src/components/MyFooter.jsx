import React from "react";

const MyFooter = () => {
  return (
    <footer
      className="row row-cols-5 pt-5 mt-5 border-top "
      style={{ background: "#" + "D1EFB5" }}
    >
      <div className="col">
        <a className="d-flex align-items-center mb-3 link-dark text-decoration-none"></a>
        <p className="text-muted mx-5">©2021</p>
      </div>

      <div className="col"></div>

      <div className="col">
        <h5>Seccion</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a className="nav-link p-0 text-muted">Home</a>
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
            <a className="nav-link p-0 text-muted">Home</a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link p-0 text-muted">Features</a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link p-0 text-muted">Pricing</a>
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
    </footer>
  );
};
export default MyFooter;

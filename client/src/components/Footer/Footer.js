import React from "react";
import RenderFooter from "./RenderFooter";

function Footer() {
  const { info } = RenderFooter();

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2021 Trainee at CYF Inc</p>

        <a className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <i class="bi bi-play-circle"></i>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">FAQs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">About</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;

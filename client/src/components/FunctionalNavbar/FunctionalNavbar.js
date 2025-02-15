import React from "react";
import SearchVideos from "../SearchInput/SearchVideos"
import AddVideo from "../AddVideo/AddVideo"


const FunctionalNavbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  outline-light"
            id="navbarTogglerDemo01"
          >
            <button className="navbar-brand btn disable">
              Video Recommendation
            </button>
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item">
                <AddVideo />
              </div>
            </div>
            <form className="d-flex">
              <SearchVideos search={props.search}/>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FunctionalNavbar;

import React from "react";

const SearchVideos = () => {
  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search videos"
        aria-label="Search"
      />
      <button className="btn btn-outline-light" type="submit">
        Search
      </button>
    </>
  );
};

export default SearchVideos;

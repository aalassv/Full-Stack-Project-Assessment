import React from "react";
import SearchVideos from "./SearchVideos";

const RenderSearchVideos = () => {
  const {handlerClick} = SearchVideos()

  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search Videos"
        aria-label="Search"
        onChange={handlerClick}
      />
      {/* <button className="btn btn-outline-light" type="submit">
        Search
      </button> */}
    </>
  );
};

export default RenderSearchVideos;

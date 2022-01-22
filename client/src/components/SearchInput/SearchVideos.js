import React from "react";
import RenderSearchVideos from "./RenderSearchVideos";

const SearchVideos = (props) => {
  const { onChangeHandler, displayedAtSearch } = RenderSearchVideos();

  return (
    <>
      <div class="input-group ">
        <span class="input-group-text" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-play-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
          </svg>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search Videos"
          aria-label="Input group example"
          aria-describedby="basic-addon1"
          value={props.search("")}
          onChange={onChangeHandler}
        />
      </div>
      {/* <input
        className="form-control me-2"
        type="search"
        placeholder="Search Videos"
        aria-label="Search"
        onChange={onChangeHandler}
      /> */}
      {/* <button className="btn btn-outline-light" type="submit">
        Search
      </button> */}
    </>
  );
};

export default SearchVideos;

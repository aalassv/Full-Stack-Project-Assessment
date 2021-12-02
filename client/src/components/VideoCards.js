import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

// Render a YouTube video player

const VideoCards = () => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((Response) => Response.json())
      .then((data) => setDisplay(data));
  }, [display]);


  return (
    <div className="container-fluid">
      <div className="row">
        {display.map((val) => (
          <div className="col-xs-12 col-sm-6 col-md-4 player-wrapper d-flex align-content-center flex-column  p-0.5 m-0.5">
            <p className="m-0">{val.title}</p>
            <ReactPlayer
              url={val.url}
              controls="true"
              width="100%"
              height="100%"
            />
            <div className=" d-flex align-items-left mt-2">
              <button type="button" className="btn btn-outline-primary me-1">
                <i className="bi-hand-thumbs-up"></i>
              </button>
              <div></div>
              <button type="button" className="btn btn-outline-secondary me-4">
                {val.rating}
              </button>
              <span> </span>
              <button type="button" className="btn btn-outline-danger">
                <i className="bi-hand-thumbs-down"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;

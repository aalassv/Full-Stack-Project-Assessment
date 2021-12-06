import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

//Render a Youtube video
const VideoCards = () => {
  const [display, setDisplay] = useState([]);
  const [afterDeletedVideos, setAfterDeletedVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/videos/")
      .then((Response) => Response.json())
      .then((data) => setDisplay(data));
  }, [display]);


function handlerClick () {
  
}


  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          {display.map((val) => (
            <div className="col-12 col-sm-6 col-xl-4  d-flex align-content-center flex-column  ">
              <h5 className="m-0">{val.title}</h5>
              <ReactPlayer
                url={val.url}
                controls="true"
                width="370px"
                height="210px"
              />
              <div className=" d-flex align-items-left mt-2 mb-3">
                <button type="button" className="btn btn-outline-primary me-1">
                  <i className="bi-hand-thumbs-up"></i>
                </button>
                <div></div>
                <button
                  type="button"
                  className="btn btn-outline-secondary me-4"
                >
                  {val.rating}
                </button>
                <span> </span>
                <button type="button" className="btn btn-outline-danger me-1">
                  <i className="bi-hand-thumbs-down"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger "
                  onClick={handlerClick}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCards;

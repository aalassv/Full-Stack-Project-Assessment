import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

//Render a Youtube video
const VideoCards = () => {
  const [display, setDisplay] = useState([]);
  // const [afterDeletedVideos, setAfterDeletedVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/videos/")
      .then((Response) => Response.json())
      .then((data) => setDisplay(data));
  }, [display]);

<<<<<<< HEAD
  function handlerClick() {
    
  }
=======

  function handlerClick() {

  }

>>>>>>> 4e1970bcae57ea45e8dcaba458160e54bf4a31be

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          {display.map((val) => (
            <div className="col-12 col-sm-6 col-xl-4  d-flex align-content-center flex-column  ">
              <h5 className="">{val.title}</h5>
              <ReactPlayer
                url={val.url}
                controls="true"
                width="320px"
                height="210px"
              />
<<<<<<< HEAD
              <div className=" d-flex align-items-left mt-3 mb-3 ">
                <button
                  type="button"
                  className="btn btn-outline-primary position-relative me-5"
                >
                  <i className="bi-hand-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {val.rating}  
                    <span className="visually-hidden">unread messages</span>
                  </span>
=======
              
              <div className=" d-flex align-items-left mt-3 mb-3 " >

                <button type="button" className="btn btn-outline-primary position-relative me-3">
               
                  <i className="bi-hand-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {val.rating}
                  <span className="visually-hidden">unread messages</span>
                </span>
>>>>>>> 4e1970bcae57ea45e8dcaba458160e54bf4a31be
                </button>
                <button type="button" className="btn btn-outline-danger me-3">
                  <i className="bi-hand-thumbs-down"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary "
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

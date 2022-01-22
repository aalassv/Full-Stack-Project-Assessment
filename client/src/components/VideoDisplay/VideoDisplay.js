import React from "react";
//import ReactPlayer from "react-player/youtube";
import RenderMainContent from "../MainContent/RenderMainContent";
import VideoFrame from "../VideoFrame/VideoFrame";
import Buttons from "../Buttons/Buttons";
//import RenderSearchVideos from "../SearchInput/RenderSearchVideos"
//import SearchVideos from "../SearchInput/RenderSearchVideos.js";

function VideoDisplay(props) {
//const { videos } = RenderMainContent()


  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          {props.videos.map((video) => (
            <div className="col-12 col-sm-6 col-xl-4  d-flex align-content-center flex-column  ">
              <VideoFrame videos ={ video } />
              <Buttons buttons = { video } />
              {/* <div className=" d-flex align-items-left mt-3 mb-3 ">
                <button
                  type="button"
                  className="btn btn-outline-primary position-relative me-3"
                >
                  <i className="bi-hand-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {video.rating}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <button type="button" className="btn btn-outline-danger me-3">
                  <i className="bi-hand-thumbs-down"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary "
                  // onClick={handlerClick}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoDisplay;

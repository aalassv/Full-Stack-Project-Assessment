import React from 'react'
//import MainContent from "../MainContent/RenderMainContent"
import ReactPlayer from 'react-player';

function VideoFrame (props) {

    return (
      <>
        <h5 className="">{props.videos.title}</h5>
        <ReactPlayer
          url={props.videos.url}
          controls="true"
          width="320px"
          height="210px"
        />
      </>
    );
}

export default VideoFrame




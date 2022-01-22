import React from "react";
import RenderMainContent from './RenderMainContent'
import VideoDisplay from "../VideoDisplay/VideoDisplay";
import FunctionalNavbar from "../FunctionalNavbar/FunctionalNavbar";

function MainContent() {
const { videos, search } = RenderMainContent();


  return (
    <>
      <main>
        <FunctionalNavbar display={videos} search={search}/>
        <VideoDisplay videos={videos}/>
        {/* <VideoFrame videos={videos} /> */}
      </main>
    </>
  );
}

export default MainContent;

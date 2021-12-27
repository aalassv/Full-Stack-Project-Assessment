import VideoDisplay from "../VideoDisplay/VideoDisplay";
//import { useState } from "react";

function SearchVideos() {
  const { display } = VideoDisplay();
  //const [displayedAtSearch, setDisplayedAtSearch] = useState([]);
 // console.log(display)
  function handlerClick(event) {
    const searchWord = event.target.value;
    const filterVideoDisplay = display.filter((value) => {
      return value.title.includes(searchWord);
      //console.log(searchWord);
    });
    //setDisplayedAtSearch(filterVideoDisplay);
  }

  return { handlerClick };
}

export default SearchVideos;

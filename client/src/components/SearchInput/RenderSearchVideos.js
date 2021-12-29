import RenderVideoDisplay from "../VideoDisplay/RenderVideoDisplay";
import { useState } from "react";

function RenderSearchVideos() {
  const { display } = RenderVideoDisplay();
  const [displayedAtSearch, setDisplayedAtSearch] = useState([]);
  //setDisplayedAtSearch(display);

  function onChangeHandler(event) {
    const searchWord = event.target.value;
    console.log(searchWord);
    const filterVideoDisplay = display.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    setDisplayedAtSearch(filterVideoDisplay);
    console.log(setDisplayedAtSearch);
  }

  return { onChangeHandler, displayedAtSearch, setDisplayedAtSearch };
}

export default RenderSearchVideos;

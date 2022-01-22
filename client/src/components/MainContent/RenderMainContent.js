import { useState, useEffect } from 'react'
// import SearchVideos from '../SearchInput/SearchVideos';
// import VideoFrame from '../VideoFrame/VideoFrame';
// import VideoDisplay from '../VideoDisplay/VideoDisplay';

function RenderMainContent() {
  const [display, setDisplay] = useState(true);

  const search = (searchVal) => {
    if (searchVal === "") {
      setVideos(videos);
    } else {
      let videoFinds = videos.filter((video) => {
        return video.title.toLowerCase().includes(searchVal.toLowerCase());
      });
      setVideos(videoFinds);
    }
  };

  const [videos, setVideos] = useState([]);
  //const [filteredBookings, setFilterBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Page Uploaded");
    fetch("http://localhost:5000/videos/")
      .then((response) => {
        // if there is error throw this text
        if (!response.ok) {
          throw Error("We could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        // when data is fetched without errors update bookings state
        setVideos(data);
        // when data is fetched without errors update display state to false (Loading won't be displayed)
        setDisplay(false);
        // when data is fetched without errors update error state to null (for sure)
        setError(null);
      })
      .catch((err) => {
        // catch is used to catch thrown message
        console.log("error message: ", err.message);
        // when there is error in fetching, update error state to the message we wrote
        setError(err.message);
        // when there is error in fetching, update display state to false, so stop displaying everything
        setDisplay(false);
      });
  }, []);

return {videos, display, search, error}
// (
//     <div className="App-content">
//       {display && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       {videos && (
//         <div className="container">
//           <Search search={search} />
//           <SearchResults results={bookings} />
//         </div>
//       )}
//     </div>
  
}
export default RenderMainContent;

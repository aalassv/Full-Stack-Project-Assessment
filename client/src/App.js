import "./App.css";
import VideoDisplay from "../src/components/VideoDisplay/VideoDisplay"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <VideoDisplay />
    </div>
  );
}

export default App;

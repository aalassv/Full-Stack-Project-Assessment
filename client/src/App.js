import "./App.css";
import VideoCards from "./components/VideoCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <VideoCards />
    </div>
  );
}

export default App;

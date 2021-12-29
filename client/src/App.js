import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RenderApp from "./RenderApp";

function App() {
const {display} = RenderApp();
console.log(display)

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;

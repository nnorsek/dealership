import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./home/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="homeSection">
        <HomePage />
      </div>
    </div>
  );
}

export default App;

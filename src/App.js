import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather Search</h1>
      <SearchEngine />
      <p>
        <a href="https://github.com/asarmie/weather-app-react">
          Open-source code
        </a>
        , by Andrea Sarmiento
      </p>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';

function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Horizontal stripe */}
      <div
        style={{
          width: "124vw", // 124
          height: "260px",
          backgroundColor: "	#4682B4",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>

      {/* Vertical stripe */}
      <div
        style={{
          width: "300px",
          height: "145vh", // 145
          backgroundColor: "lightblue",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
      {/* Horizontal stripe */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "lightgrey",
          padding: "15px",
          position: "absolute",
          top: 260,
          left: 300, //190
        }}
      ><MovieList /></div>
    </div>
  );
}

export default App;

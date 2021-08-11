import "./assets/style/Home.scss";
import Left from "./components/Left";
import Right from "./components/Right";
function App() {
  return (
    <div className="landing">
      <div className="landing-container">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;

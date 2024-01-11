import "./styles/global.css";
import "./styles/container.css";
import "./styles/card.css";
import "./styles/buttons.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Play Score</h1>
        <img src="" alt="" />
      </div>
      <p>Hidden in the middle of text</p>
      <div className="body">
        <div className="card"></div>
      </div>
    </div>
  );
}

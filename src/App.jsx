import "./styles/global.css";

import { useState } from "react";
import Buttons from "./components/Buttons";

export default function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  return (
    <div className="container">
      <div className="header">
        <h1>Play Score</h1>
      </div>
      <p>Hidden in the middle of text</p>
      <div className="bdy">
        <div className="card">
          <h4>John Cena</h4>
          <Buttons num={score1} changeNum={setScore1} />
        </div>
      </div>
    </div>
  );
}

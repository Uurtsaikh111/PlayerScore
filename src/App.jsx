import "./styles/global.css";
import Icon from "./components/Icon";
import ResetBtn from "./components/ResetBtn";
import PlayerScore from "./components/PlayerScore";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Play Score</h1>
        <Icon />
      </div>
      <p>Hidden in the middle of text</p>
      <PlayerScore />
      <ResetBtn />
    </div>
  );
}

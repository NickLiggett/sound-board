import React from "react";
import "./App.css";
import { sounds } from "./assets/sound-handler";

const SoundButton = ({ sound }) => {
  const playSound = () => {
    const audio = new Audio(sound.file);
    try {
      audio.play();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="sound-button" onClick={playSound}>
      Play Sound {sound.title}
    </button>
  );
};

const renderButtons = sounds.map((soundFile) => {
  return <SoundButton sound={soundFile} />;
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Soundboard App</h1>
        <div className="sound-buttons">{renderButtons}</div>
      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Frog from "./Frog";

function App() {
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  const unlockAudio = () => {
    setAudioUnlocked(true);
  };

  useEffect(() => {
    window.addEventListener("click", unlockAudio, { once: true });
    return () => window.removeEventListener("click", unlockAudio);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Frog audioUnlocked={audioUnlocked} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Frog() {
  const [isCroaking, setIsCroaking] = useState(false);

  const croak = () => {
    const audio = new Audio(process.env.PUBLIC_URL + "/croak.mp3");

    audio.play().catch((error) => {
      console.error("Audio play failed:", error);
    });

    setIsCroaking(true);

    setTimeout(() => {
      setIsCroaking(false);
    }, 250);
  };

  return (
    <div>
      <img
        src={isCroaking ? "croaking_frog.png" : "frog.png"}
        alt="Frog"
        width="200"
        onMouseEnter={croak} // 🟢 Plays croak when hovered
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default Frog;

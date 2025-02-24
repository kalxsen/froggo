import React, { useState, useEffect } from "react";

function Frog() {
  const [isCroaking, setIsCroaking] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dragging) {
        setPosition({ x: event.clientX - 50, y: event.clientY - 50 });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const croak = () => {
    setIsCroaking(true);
    const audio = new Audio(process.env.PUBLIC_URL + "/croak.mp3");
    
    audio.play().catch(() => {
      console.warn("Croak sound failed to play, user needs to interact first.");
    });

    setTimeout(() => {
      setIsCroaking(false);
    }, 250);
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  return (
    <div
      onMouseEnter={croak} // Hover to croak
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "grab",
      }}
    >
      <img
        src={isCroaking ? "croaking_frog.png" : "frog.png"}
        alt="Frog"
        width="200"
        draggable="false" // Prevents ghost image issue
      />
    </div>
  );
}

export default Frog;

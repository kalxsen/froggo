import React, { useState, useEffect } from "react";

function Frog() {
  const [isCroaking, setIsCroaking] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 579, y: 400 }); // ⬅ Set initial position here
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // 🟢 Play croak sound on hover
  const croak = () => {
    if (!isCroaking) {
      const audio = new Audio(process.env.PUBLIC_URL + "/croak.mp3");
      audio.play().catch((err) => console.warn("Autoplay issue:", err));
      setIsCroaking(true);
      setTimeout(() => setIsCroaking(false), 245);
    }
  };

  // 🟢 Start dragging (record offset)
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  // 🟢 Stop dragging when mouse is released anywhere
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  // 🟢 Move frog while dragging
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDragging, offset]);

  return (
    <img
      src={isCroaking ? "croaking_frog.png" : "frog.png"}
      alt="Frog"
      width="100"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        pointerEvents: "auto",
      }}
      onMouseDown={handleMouseDown}
      onMouseEnter={croak}
    />
  );
}

export default Frog;

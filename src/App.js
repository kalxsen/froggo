import React from "react";
import Frog from "./Frog"; // Ensure Frog.js exists in the src folder

const appStyle = {
  backgroundImage: "url('/background.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  return (
    <div style={appStyle}>
      <Frog />
    </div>
  );
}

export default App;

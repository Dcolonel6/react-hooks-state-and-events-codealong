import React, { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [isOn, setIsOn] = useState(false)
  const handleClick = (event) => {
    setIsOn(currentState => !currentState)
  }
  return (
    <div>
      <h3>Toggle</h3>
      <Toggle 
        handleClick={handleClick}
        isOn={isOn} />
    </div>
  );
}

export default App;

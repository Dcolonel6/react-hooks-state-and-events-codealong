import React from "react";

function Toggle({handleClick,isOn}) {  
  const valueColor = isOn ? 'green': 'red'
  return (<button 
    onClick={handleClick}
    style={{background: valueColor}}>
      {isOn ? 'ON': 'OFF'}
    </button>);
}

export default Toggle;

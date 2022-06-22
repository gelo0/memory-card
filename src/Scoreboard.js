import React from "react";

function Scoreboard({currentScore, bestScore}){
  return (
    <div>
      <h2>Current Score: {currentScore}</h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  )
}
export default Scoreboard
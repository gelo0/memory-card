import React, { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import Cardboard from "./Cardboard";
import { flagCodes, shuffleArray } from "./utils";

function App() {
  const FLAGS_AMOUNT = 20


  const [flags, setFlags] = useState([])
  const [cilckedFlags, setClickedFlags] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [resetFlags, setResetFlags] = useState(false)

  useEffect(() => {
    setFlags(shuffleArray(flagCodes()).slice(0, FLAGS_AMOUNT))
  },[resetFlags])
  
  const handleCardClick = (e) => {
    const flagCode = e.target.id
    playRound(flagCode)
    setFlags(shuffleArray(flags))
  }

  const playRound = (flagCode) => {
    if (cilckedFlags.includes(flagCode)) {
      resetGame()
    } else {
      const newScore = currentScore + 1
      if (newScore > bestScore) setBestScore(newScore)
      setCurrentScore(newScore)
      setClickedFlags((prevState) => [...prevState, flagCode])
    }
  }

  const resetGame = () => {
    setClickedFlags([])
    setCurrentScore(0)
    setResetFlags(!resetFlags)
  }

  return (
    <div className="App">
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
      >

      </Scoreboard>
      
      <Cardboard
        flags={flags}
        handleCardClick={handleCardClick}
      >

      </Cardboard>
    </div>
  );
}

export default App;

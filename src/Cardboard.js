import React from "react";
import Card from "./Card";

function Cardboard({ flags, handleCardClick}){
  const flagCards = flags.map((flag) => (
    <Card key={flag.code} flag={flag} handleCardClick={handleCardClick}></Card>
  ))
  
  return (
    <div className="cardboard">
      {flagCards}
    </div>
  )
}

export default Cardboard
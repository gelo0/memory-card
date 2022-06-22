import React from "react";

function Card({ flag, handleCardClick }){
  const flagSrc = `https://countryflagsapi.com/png/${flag.code}`
  return (
    <div onClick={handleCardClick} className='card' id={flag.code}>
      <img src={flagSrc} alt={flag.name} width='150px' id={flag.code}></img>
      <p id={flag.code}>{flag.name}</p>
    </div>
  )
}

export default Card
import React from "react";

const Card = (props) => {
  const { character } = props;
  return(
    <div>
      <div 
        className="card" 
        style={{backgroundImage: `url(${character.image})`}}
      >
      </div>
    </div>
  );
}

export default Card;
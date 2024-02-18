import React, { useState } from 'react';

const FoldingCard = ({ frontContent, backContent, frontIcon }) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(frontIcon)

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleTap}>
      <div className="fold-card">
        <div className="card-front">
          <img src={frontIcon} alt=""/>
          <div>{frontContent}</div>
        </div>
        <div className="card-back">
          <ul>
            {backContent.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoldingCard;
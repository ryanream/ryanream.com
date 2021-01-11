import React from 'react';
import Fade from 'react-reveal/Fade';

const Card = (card) => {
  // set the prop equal to the prop.card, which is sent from Section.js as card
  card = card.card;

  return (
    <Fade right delay={0} duration={1500}>
      <div className="card-div">
        <div id={`card-` + card.id} className="card">
          <h3 className="card-header" id={`card-` + card.id + '-header'}>
            {card.header}
          </h3>
          <hr></hr>
          <div className="card-title">{card.title}</div>
          <div className="card-text">{card.text}</div>
        </div>
      </div>
    </Fade>
  );
};

export default Card;

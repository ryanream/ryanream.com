import React from 'react';
import Fade from 'react-reveal/Fade';
// import Tada from 'react-reveal/Tada';

const CardTest = card => {
  card = card.card;

  return (
    <Fade right delay={0} duration={1500}>
      <div className='card-div'>
        <div id={`card-` + card.id} className='card'>
          <h3 className='card-header' id={`card-` + card.id + '-header'}>
            {card.header}
          </h3>
          <hr></hr>
          <div className='card-title'>{card.title}</div>
          <p className='card-text'>{card.text}</p>
        </div>
      </div>
    </Fade>
  );
};

export default CardTest;
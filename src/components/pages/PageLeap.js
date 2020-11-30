import React, { useState } from 'react';
import Card from '../layout/Card';
import Fade from 'react-reveal/Fade';
import { cards } from '../state/CardData';
import { ReactComponent as Arrow } from '../../assets/icons/east-arrow.svg';

const PageLeap = props => {
  const [cardState, setCardState] = useState(0);
  const card = cards[cardState];

  const incrementState = () => {
    if (cardState + 1 < cards.length) {
      setCardState(cardState + 1);
    } else {
      setCardState(0);
    }
  };
  console.log(props.image);
  return (
    <div id={'page-' + props.image}>
      <div>
        <Card card={card} />
      </div>
      <Fade delay={1100}>
        <div className='btn-container'>
          <button id='card-btn' className='arrow-btn' onClick={incrementState}>
            <Arrow />
          </button>
        </div>
      </Fade>
    </div>
  );
};
export default PageLeap;

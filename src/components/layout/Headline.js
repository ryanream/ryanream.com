import React from 'react';
// import {
//   MobileView,
//   BrowserView,
//   isBrowser,
//   isMobile,
// } from 'react-device-detect';
import FadeIn from 'react-fade-in';
import App from '../../App';

const Headline = props => {
  console.log('props in Headline =');
  console.log(props.props);
  return (
    <div className='headline-container'>
      <FadeIn className='headline1' delay='750' transitionDuration='2000'>
        &nbsp;Own &nbsp;Your
      </FadeIn>
      <FadeIn className='headline2' delay='1800' transitionDuration='2000'>
        &nbsp;Domain
      </FadeIn>
    </div>
  );
};

export default Headline;

import React from 'react';
import FadeIn from 'react-fade-in';

const Headline = () => {
	return (

		<div className='landing'>
    
		<div className='headline-container'>
			<FadeIn className='headline1' delay='750' transitionDuration='2000'>
				&nbsp;Own &nbsp;Your
			</FadeIn>
			<FadeIn className='headline2' delay='1800' transitionDuration='2000'>
				&nbsp;Domain
			</FadeIn>
		</div>
    </div>
	);
};

export default Headline;

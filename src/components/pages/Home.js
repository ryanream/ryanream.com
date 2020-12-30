import React from 'react';
import Landing from './Landing';
import Spacer from '../layout/Spacer';
import Section from './Section';

const Home = () => {
    return (
        <div>
            
          <Landing />
          <Spacer color='orange' />
          <Section image='jump' cardNum='0' />
          <Spacer color='blue' />
          <Section image='california' cardNum='2' />
          <Spacer color='orange' />
        </div>
    )
}

export default Home

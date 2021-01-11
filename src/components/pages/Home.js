import React from 'react';
import Headline from '../layout/Headline';
import Spacer from '../layout/Spacer';
import Section from '../layout/Section';

const Home = () => {
  return (
    <div>
      <Headline />
      <Spacer color="orange" />
      <Section image="jump" cardNum="0" />
      <Spacer color="blue" />
      <Section image="california" cardNum="2" />
      <Spacer color="orange" />
    </div>
  );
};

export default Home;

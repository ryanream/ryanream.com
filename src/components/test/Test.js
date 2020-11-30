import React from 'react';

const Test = props => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} aka {props.heroN}
      </h1>
      {props.children}
    </div>
  );
};

export default Test;

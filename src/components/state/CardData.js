import React from 'react';

const cards = [
  {
    id: '1',
    header: `Hello!`,
    title: `My name is Ryan.`,
    text: (
      <span>
        I'm a full stack web developer, currently spending most of my time with
        React. I have a passion for learning and a dog named Oliver!
        <p></p>
        I'm adding new features here and making changes as I learn. Check back
        often for more updates!
      </span>
    ),
  },
  {
    id: '2',
    header: `Today`,
    title: ` Building my own projects `,
    text: (
      <span>
        This personal website was my first solo project after starting with
        React. The button with each card/button pair cycles through the card's
        state. Each set works independently
        <p></p>
        As I add features {'&'} functionality to this page, I'll include past
        projects from other courses as content. If you'd like to see those now,
        check out my Github in the drop down menu {'(top right)'}.
      </span>
    ),
  },
  {
    id: `3`,
    header: `Education`,
    title: ` CS Degree, 6 years in sales, self-taught web developer `,
    text: (
      <span>
        Since deciding to leave a career in sales, I've learned several new
        languages. After brushing up on HTML and CSS, I dove into JavaScript,
        NodeJS, Express, jQuery, etc...
        <p></p>
        I've worked with MongoDB in several projects, along with Git and often
        deployed web-apps to Heroku. Everything I've learned has been at home,
        on my own time, through determination and trial and error. Looking back,
        I wouldn't do it any other way!
      </span>
    ),
  },
  {
    id: '4',
    header: `ReactJS`,
    title: ` React, Hooks, Redux `,
    text: (
      <span>
        I'm loving React with Hooks. Using some Redux as well, but recently I've
        been more focused on functional components and the simplicity of using
        Hooks to manage state.
      </span>
    ),
  },
  {
    id: '5',
    header: ` Mobile `,
    title: ` Next Steps: Responsiveness, Layout `,
    text: (
      <span>
        Currently optimizing for mobile!
        <p></p>
        I've cleaned up the HTML with a few more flexboxes, scalable text and
        layout consistency. Next, these cards will take on a totally new look!{' '}
        <p />
        Have a suggestion? Email me!
        <p></p>
        <a href="mailto:ryan.a.ream@gmail.com">ryan.a.ream@gmail.com</a>
      </span>
    ),
  },
];

export { cards };

const CardData = () => {};

export default CardData;

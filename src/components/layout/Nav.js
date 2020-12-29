import React, { useState } from 'react';
import FadeIn from 'react-fade-in';

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(menu => true);
  };

  const hideMenu = () => {
    setMenu(menu => !menu);
  };

  return (
    <div
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
      className='nav-container'
      id={menu ? 'hamburger' : null}
    >
      <FadeIn delay='3000' transitionDuration='2000'>
        <div>
          <button id='logo'>Ryan Ream</button>
        </div>
      </FadeIn>
      <div>
        {menu ? (
          <div className='drop-down hamburger'>
            <FadeIn delay='50' transitionDuration='600'>
              <a
                className='drop-link'
                href='https://drive.google.com/file/d/1wzQs1F5xGv0G3JEkMaAIFWNHCFPeKm-K/view'
                target='/'
              >
                Resume
              </a>
              <a
                className='drop-link'
                href='https://github.com/ryanream'
                target='/'
              >
                GitHub
              </a>

              {/* Can I make this a modal? */}
              <a
                className='drop-link'
                href='https://www.linkedin.com/in/ryanream/'
                target='/'
              >
                LinkedIn
              </a>
            </FadeIn>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;

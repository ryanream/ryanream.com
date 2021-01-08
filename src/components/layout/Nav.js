import React, { useState } from 'react';
import {Link} from 'react-router-dom'
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

    <FadeIn delay='2500' >
      <div
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
      className='nav-container'
      id={menu ? 'hamburger' : null}
    >
      <FadeIn delay='3000' transitionDuration='2000'>
        <div>
          <Link to='/'>
          <button id='logo'>Ryan Ream</button>
          </Link>

        </div>
          </FadeIn>
          <div>
            {menu ? (
              <div className='drop-down hamburger'>
                <FadeIn delay='50' transitionDuration='600'>
                  {/* <a
                    className='drop-link'
                    href='/resume'
                    target='/'
                  >
                    Resume
                  </a> */}
                  <Link 
                    className='drop-link'
                    to="/resume">Resume</Link>

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
</FadeIn>

  );
};

export default Nav;

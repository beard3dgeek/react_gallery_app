import React from 'react';
// import PropTypes from 'prop-types';

const Nav = props => {
    return(
        <nav className="main-nav">
        <ul>
          <li><a href='/'>Cats</a></li>
          <li><a href='/'>Dogs</a></li>
          <li><a href='/'>Computers</a></li>
        </ul>
      </nav>
    );
};

// Nav.propType = {
// };
  
export default Nav;
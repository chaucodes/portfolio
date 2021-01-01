import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';

const Nav = ({ isOpen, handleClick }) => {
  return (
    <div className='fixed right-0 mr-5'>
      <HamburgerMenu
        className='cursor-pointer'
        isOpen={isOpen}
        menuClicked={handleClick}
        width={25}
        height={20}
        strokeWidth={3}
        rotate={0}
        color='#A78BFA'
        borderRadius={0}
        animationDuration={0.4}
      />
    </div>
  );
};

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.node.isRequired,
};

export default Nav;

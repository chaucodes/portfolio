import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

const SocialLinkItem = ({ children, link }) => {
  const hover =
    'transition duration-400 ease-in transform hover:-translate-y-1 hover:scale-110';

  return (
    <>
      <Link to={link} className={hover} target='_blank'>
        {children}
      </Link>
    </>
  );
};

SocialLinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
};

export default SocialLinkItem;

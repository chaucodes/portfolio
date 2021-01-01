import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const LinkItem = ({ title, url }) => {
  return (
    <>
      <Link
        className='font-medium uppercase transition-all duration-700 ease-in-out hover:underline text-white text-2xl mb-2 mt-3'
        to={url}
        target='_blank'
      >
        {title}
      </Link>
      <br />
    </>
  );
};

LinkItem.propTypes = {
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
};

export default LinkItem;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const LinkItem = ({ title, url }) => {
  return (
    <>
      <Link
        className='text-white transition duration-400 transform hover:-translate-y-1 hover:scale-100 ease-in border-solid border-2 border-purple-500 p-2 rounded-xl bg-purple-500'
        to={url}
        target='_blank'
      >
        {title}
      </Link>
    </>
  );
};

LinkItem.propTypes = {
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
};

export default LinkItem;

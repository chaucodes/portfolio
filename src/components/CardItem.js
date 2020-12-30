import React from 'react';
import PropTypes from 'prop-types';

import photo from '../images/dog-illustration.svg';

const CardItem = ({ title, description, url, source, alt }) => {
  return (
    // to-do: Add Box Shadow to the cards
    <div className='flex justify-center'>
      <div className='border-solid border-2 border-current rounded-xl rounded-t-none w-9/12 md:w-2/5'>
        <div className='flex justify-center my-10'>
          <img
            src={photo}
            alt={alt}
            className='h-4/5 md:h-3/4 w-3/12 md:w-2/4'
          />
        </div>
        <hr className='border-current' />
        <div className='p-6'>
          <h1 className='text-2xl font-bold mb-2'>{title}</h1>
          <p>{description}</p>
          <div className='text-center my-4 mr-3 inline-block px-4 py-1 rounded-2xl border-solid border-2 border-purple-500'>
            <a href={source}>Source Code</a>
          </div>
          <div className='text-center my-4 inline-block px-4 py-1 rounded-2xl border-solid border-2 border-purple-500'>
            <a href={url}>Live Site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  source: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
};

export default CardItem;

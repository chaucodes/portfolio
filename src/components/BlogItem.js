import React from 'react';
import PropTypes from 'prop-types';

const BlogItem = ({ title, body, eventKey }) => {
  return (
    <div key={eventKey}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

BlogItem.propTypes = {
  title: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  eventKey: PropTypes.node.isRequired,
};

export default BlogItem;

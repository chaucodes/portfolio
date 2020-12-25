import React from 'react';
import LinkItem from '../components/Link';

const PageLinks = () => {
  return (
    <div className='flex justify-center space-x-5 mt-5'>
      <LinkItem url={`/projects`} title='Projects' />
      <LinkItem url={`/blog`} title='Blog' />
      <LinkItem url='https://youtube.com/c/chaucodes' title='Resume' />
    </div>
  );
};

export default PageLinks;

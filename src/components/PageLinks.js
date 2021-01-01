import React from 'react';
import LinkItem from '../components/Link';
import Toggle from './toggle';

const PageLinks = () => {
  return (
    <div className='text-right flex justify-end flex-col py-5 space-x-5 mt-10 bg-purple-400 pl-40 pr-5 pb-20 rounded-2xl'>
      <LinkItem url={`/`} title='Home' />
      <LinkItem url={`/projects`} title='Projects' />
      {/* <LinkItem url={`/blog`} title='Blog' /> */}
      <LinkItem url={'/uses'} title='Uses' />
      <Toggle />
    </div>
  );
};

export default PageLinks;

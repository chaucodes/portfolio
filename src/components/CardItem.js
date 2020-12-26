import React from 'react';

import photo from '../images/dog-illustration.svg';

const CardItem = () => {
  return (
    <div className='flex justify-center'>
      <div className='border-solid border-2 border-current rounded-xl rounded-t-none w-9/12 md:w-2/4'>
        <div className='flex justify-center my-10'>
          <img src={photo} alt='' className='h-4/5 md:h-3/4 w-3/12 md:w-2/4' />
        </div>
        <hr className='border-current' />
        <div className='p-6'>
          <h1 className='text-2xl font-bold mb-2'>Card Item</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            magnam neque eaque voluptatibus, quasi iure maiores iste fuga
            placeat nostrum consectetur officia, dignissimos in. Ab vero ea
            dicta quasi enim.
          </p>
          <div className='text-center my-4 mr-3 inline-block px-4 py-1 rounded-2xl border-solid border-2 border-purple-500'>
            <a href='/'>Source Code</a>
          </div>
          <div className='text-center my-4 inline-block px-4 py-1 rounded-2xl border-solid border-2 border-purple-500'>
            <a href='/'>Live Site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

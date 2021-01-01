import React from 'react';

import PageLinks from './PageLinks';

function Header() {
  return (
    <header className='fixed right-0 mr-5'>
      <PageLinks />
    </header>
  );
}

export default Header;

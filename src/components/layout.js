import PropTypes from 'prop-types';
import React from 'react';

import { ThemeProvider } from '../theme/themeContext';
import Toggle from './toggle';

function Layout({ children }) {
  const background = 'bg-primary text-primary';

  return (
    <ThemeProvider>
      <div className={`${background} flex flex-col h-screen`}>
        <div className='mt-5 mb-10'>
          <Toggle />
        </div>
        <main className='flex flex-col items-center'>{children}</main>
      </div>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

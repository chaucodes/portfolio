import PropTypes from 'prop-types';
import React from 'react';

import { ThemeProvider } from '../theme/themeContext';
import Toggle from './toggle';

function Layout({ children }) {
  const background = 'bg-primary text-primary';

  return (
    <ThemeProvider>
      <div>
        <main
          className={`${background} flex flex-col h-screen items-center flex-wrap`}
        >
          <div className='w-screen mt-3'>
            <Toggle />
          </div>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

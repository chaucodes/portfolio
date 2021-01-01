import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ThemeProvider } from '../theme/themeContext';

import Header from './header';
import Nav from './Nav';

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const background = 'bg-primary text-primary';

  return (
    <ThemeProvider>
      <div className={`${background} flex flex-col h-screen`}>
        <div className='mt-5 mb-10'>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Header />
              </motion.div>
            )}
          </AnimatePresence>
          <Nav
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleClick={handleClick}
          />
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

import PropTypes from 'prop-types';
import React from 'react';

// import Header from './header';

function Layout({ children }) {
  const background = 'bg-primary text-primary';

  return (
    <div>
      {/* <Header /> */}

      <main
        className={`${background} flex flex-col h-screen justify-center items-center flex-wrap`}
      >
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

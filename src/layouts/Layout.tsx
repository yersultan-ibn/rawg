import React from 'react';
import { Cards, Navbar } from '../components';
import { GamesListProvider } from '../contexts/GamesListProvider';

const Layout = () => {
  return (
    <GamesListProvider>
      <div className="main-page">
        <Navbar />
        <Cards />
      </div>
    </GamesListProvider>
  );
};

export default Layout;

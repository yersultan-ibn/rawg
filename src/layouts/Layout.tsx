import React from 'react';
import { Cards, Navbar } from '../components';
import { GamesListProvider } from '../contexts/GamesListContext';
import GamesPage from '../pages/GamesPage/GamesPage';

const Layout = () => {
  return (
    <GamesListProvider>
      <div className="main-page">
        <Navbar />
        <GamesPage />
      </div>
    </GamesListProvider>
  );
};

export default Layout;

import React, { useEffect } from 'react';
import { Cards } from '../../components';
import { useGamesListContext } from '../../contexts/GamesListContext';
import MiniLoader from '../../components/MiniLoader/MiniLoader';

const GamesPage = () => {
  const { setPageSize, loading, miniLoading } = useGamesListContext(); // Используйте useGamesListContext для получения контекста

  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop <= clientHeight) {
      setPageSize();
    }
  });

  return (
    <>
      <Cards />
      {/* <MiniLoader /> */}
      {!loading && <div className="mt-10">{!miniLoading && <MiniLoader />}</div>}
    </>
  );
};

export default GamesPage;

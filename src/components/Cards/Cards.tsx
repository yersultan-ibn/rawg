import React, { useEffect } from 'react';
import Card from './Card/Card';
import { useGamesListContext } from '../../contexts/GamesListContext';
import MiniLoader from '../MiniLoader/MiniLoader';

const Cards = () => {
  const { gamesList } = useGamesListContext();
  return (
    <div className="cards">
      {/* <MiniLoader /> */}
      {gamesList.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;

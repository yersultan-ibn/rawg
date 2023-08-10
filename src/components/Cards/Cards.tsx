import React, { useEffect } from 'react';
import Card from './Card/Card';
import { useGamesListContext } from '../../contexts/GamesListProvider';

const Cards = () => {
  const { gamesList } = useGamesListContext();

  useEffect(() => {}, [gamesList]);

  const cardData = [
    { id: 1, title: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    { id: 4, title: 'Card 4', content: 'Content for Card 4' },
  ];

  return (
    <div className="cards">
      {gamesList.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;

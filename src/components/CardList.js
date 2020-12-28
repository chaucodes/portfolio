import React from 'react';
import CardItem from './CardItem';

import cards from '../data/cards';

const CardList = () => {
  return (
    <div className='flex flex-col space-y-14'>
      {cards.map((card) => (
        <>
          <CardItem
            title={card.title}
            description={card.description}
            source={card.source}
            url={card.url}
          />
        </>
      ))}
    </div>
  );
};

export default CardList;

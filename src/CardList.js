import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    <div>
      {
        props.games.map((user, i) => {
          return (
            <Card
              key={i}
              id={props.games[i].id}
              title={props.games[i].title}
              platform={props.games[i].platform}
              score={props.games[i].score}
              genre={props.games[i].genre}
              editors_choice={props.games[i].editors_choice}
              />
          );
        })
      }
    </div>
  );
}



export default CardList;
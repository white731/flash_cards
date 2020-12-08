import React from 'react';
import Flashcard from './Flashcard';
import Flashcards from './FlashCards';
// import { } from 'semantic-ui-react';

const CardsList = (props) => {

const eachCard = () => 
    props.cardlist.map(card => 
      <Flashcard 
        key={card.id} 
        category = {card.category} 
        question = {card.question} 
        answer = {card.answer} 
        categoryLength = {props.cardlist.length}
      />);

  return (
  <div>
    {eachCard()}
  </div>
  )
};


export default CardsList;
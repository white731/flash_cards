import React from "react";
import { Container, Header } from "semantic-ui-react";
import CardsList from "./CardsList";
import Flashcardsform from "./FlashcardsForm"

class Flashcards extends React.Component {
  state = {
    flashcards: [
      {id: 1, category: "World", question: 'What color is the sky?', answer: 'blue'},
      {id: 2, category: "Christmas", question: 'Does Santa have a beard?', answer: 'yes'},
      {id: 3, category: "Video Games", question: "What is Mario's brother's name?", answer: 'Luigi'}
    ]
  };

  remove = (id) => {
    console.log(id)
    let updatedCards = this.state.flashcards.filter(card => card.id !== id)
    this.setState({flashcards:updatedCards})
  }

  createCard = (newObject) => {
    let newCard = {
      id: Math.random(),
      category: newObject.category,
      question: newObject.question,
      answer: newObject.answer
    }

    let flashcards = [...this.state.flashcards, newCard ];

    this.setState({flashcards: flashcards});


  }

  render() {
    return (
        <Container> 
      <Header as ='h1'>React Flash Cards</Header>
      <Flashcardsform createCard = {this.createCard}></Flashcardsform>
      <CardsList cardlist = {this.state.flashcards} remove = {this.remove} />
        </Container>
    );
  };
}

export default Flashcards;
import React from "react";
import { Container, Header } from "semantic-ui-react";
import CardsList from "./CardsList";

class Flashcards extends React.Component {
  state = {
    flashcards: [
      {id: 1, category: "World", question: 'What color is the sky?', answer: 'blue'},
      {id: 2, category: "Christmas", question: 'Does Santa have a beard?', answer: 'yes'},
      {id: 3, category: "Video Games", question: "What is Mario's brother's name?", answer: 'Luigi'}
    ]
  };

  render() {
    return (
        <Container> 
      <Header as ='h1'>React Flash Cards</Header>
      <CardsList cardlist = {this.state.flashcards}/>
        </Container>
    );
  };

}

export default Flashcards;
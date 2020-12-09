import { Card, Icon, Button } from "semantic-ui-react";
import { useState } from "react";

const Flashcard = (props) => {

const [showAnswer, setAnswerView] = useState(false)

// const showDelete = () => {
//   return (
//   props.category
//   <Button color="black" size="mini" circular="true" floated="right" onClick = {()=> props.remove(props.id)}>❌ card</Button>
// )};

  return (
    <Card>
      <Card.Content 
          header={showAnswer ? props.category : props.category } />
      <Card.Content description={showAnswer ? props.answer : props.question}/>
      <Card.Content extra>
        <Icon name='user' />{props.categoryLength} flashcards  
        
        <Button color="grey" size="mini" circular={true} floated="right" onClick = {()=> props.remove(props.id)}>❌ card</Button>
        <Button color={showAnswer ? "blue": "green"} size="mini" circular={true} floated="right" onClick = {()=>setAnswerView(!showAnswer)}>
          {showAnswer ? "Question": "Answer"}
        </Button>

      </Card.Content>
    </Card>
  );
}


export default Flashcard;


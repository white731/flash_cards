import { Card, Icon, Button } from "semantic-ui-react";

const Flashcard = (props) => {
  return (
  <Card>
    <Card.Content header={props.category} />
    <Card.Content description={props.question} />
    <Card.Content extra>
      <Icon name='user' />{props.categoryLength} flashcards  <Button color="blue" size="mini" circular='true' floated="right">ANSWER</Button>
    </Card.Content>
  </Card>
  );
}


export default Flashcard;
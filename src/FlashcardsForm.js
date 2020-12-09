import { useState} from "react";
import { Button, Form } from "semantic-ui-react";

const Flashcardsform = (props) => {

  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

    const handleSubmit = () => {
        props.createCard({category, question, answer})
    }

  return (
    <Form unstackable onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
    <Form.Group widths={2}>
      <Form.Input
        // onChange={handleChange}
        // value={contact.name}
        size="small"
        name="category"
        label="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        placeholder="name"
      />
      <Form.Input
        // onChange={handleChange}
        // value={contact.phone}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
        size="small"
        value={question}
        name="question"
        label="question"
        placeholder="question"
      />
      <Form.Input
        // onChange={handleChange}
        // value={contact.phone}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
        size="small"
        value={answer}
        name="answer"
        label="answer"
        placeholder="answer"
      />
    </Form.Group>
    <Button style={{ marginTop: "5px" }} style={{ marginBottom: "5px" }} type="submit">
    Add Card</Button>
  </Form>
  )

}


export default Flashcardsform;
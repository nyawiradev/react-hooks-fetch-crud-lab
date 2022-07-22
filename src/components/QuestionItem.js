import React from "react";

function QuestionItem({ question, handleDelete, handleAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function onDelete(){
    handleDelete(id)
  }

  function onAnswerChange(e){
    console.log("value", e.target.value)
    console.log("q", id)
    handleAnswerChange(id, parseInt(e.target.value))

  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={onAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

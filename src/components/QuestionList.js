import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    loadQuestions()
  },[] )

  function loadQuestions() {
    fetch(`http://localhost:4000/questions`)
    .then(res => res.json())
    .then(questions => setQuestions(questions))
  }

// console.log(questions[0])

function handleDelete(id){
  // console.log(id)

  fetch(`http://localhost:4000/questions/${id}`, {
  method: 'DELETE' })
  .then(res => res.json())
  .then((data) => {
    const updatedQ = questions.filter(question => question.id !== id)
    setQuestions(updatedQ)
  })

}

function handleAnswerChange(id, answer){
  fetch(`http://localhost:4000/questions/${id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({"correctIndex": answer}),
  })
  
}



const questionItems = questions.map(question => {
  return <QuestionItem 
    key={question.id}
    question={question}
    handleDelete={handleDelete}
    handleAnswerChange={handleAnswerChange}
    />

})

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;

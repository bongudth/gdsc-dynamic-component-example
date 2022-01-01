import React, { useEffect, useState } from 'react'
import './Form.scss'
import axios from 'axios'
import Question from '../Question/Question'

function Form(props) {
  const [sectionId, setSectionId] = useState(props.sectionId)
  const [sections, setSections] = useState([])
  const [sectionTitle, setSectionTitle] = useState('')
  const [sectionDescription, setSectionDescription] = useState('')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/bittermeatball/7854f3d7950469b0203a068fcaf27908/raw/1de87462c4f8c2fd0bfb9d452b246c92697b2eee/sample.json')
      .then(res => {
        setSections(res.data.sections)
      })
  }, [])

  useEffect(() => {
    setSectionId(props.sectionId)
  }, [props.sectionId])

  useEffect(() => {
    if (sections.length === 0) return

    setSectionTitle(sections[sectionId].title)
    setSectionDescription(sections[sectionId].description)
    setQuestions(sections[sectionId].questions)
    setAnswers([])
  }, [sectionId, sections])

  useEffect(() => {
    if (questions.length === 0) return
    props.setIsComplete(answers.filter(answer => answer === '').length === 0)
  }, [JSON.stringify(answers)])

  useEffect(() => {
    props.setAnswersForm((answersForm) => {
      answersForm[sectionId] = answers
      return [...answersForm]
    })
  }, [props.isComplete])

  return (
    <div className='form-container'>
      <div className='form-section'>
        <div className='form-title'>{sectionTitle}</div>
        <div className='form-description'>{sectionDescription}</div>
        {
          questions.map((question, index) => {
            return <Question
              sectionId={sectionId}
              key={index}
              index={index}
              question={question}
              setAnswers={setAnswers}
            />
          })
        }
      </div>
    </div>
  )
}

export default Form

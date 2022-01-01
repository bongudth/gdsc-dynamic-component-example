import React, { useEffect, useState } from 'react'
import '../Question/Question.scss'

function Question(props) {
  const [question, setQuestion] = useState(props.question)
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    setQuestion(props.question)
    props.setAnswers((propsAnswers) => {
      propsAnswers[props.index] = answer
      return [...propsAnswers]
    })
  }, [props.question, answer])

  useEffect(() => {
    setAnswer('')
  }, [props.sectionId])

  const QuestionContent = () => {
    return (
      <div>
        <div className='question'>{question.question}</div>
        <div className='question-description'>{question.description}</div>
      </div>
    )
  }

  const randomName = () => {
    const name = Math.random().toString(36).substring(2, 15)
    return name
  }

  if (question.type === 'SHORT_TEXT') {
    return (
      <div>
        <QuestionContent />
        <input
          type='text'
          className='question-input'
          placeholder='Nhập chữ'
          required={question.required}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
    )
  }

  if (question.type === 'NUMBER') {
    return (
      <div>
        <QuestionContent />
        <input
          type='number'
          className='question-input'
          placeholder='Nhập số'
          min={question.attrs.min}
          max={question.attrs.max}
          required={question.required}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <div className='question-error'>
          <i className='fas fa-exclamation-circle'></i>
          <div>Trường này chỉ có thể nhập số!</div>
        </div>
      </div>
    )
  }

  if (question.type === 'RADIO') {
    const name = randomName()

    return (
      <div>
        <QuestionContent />
        {question.options.map((option, index) => {
          return (
            <div key={index}>
              <input
                type='radio'
                className='question-radio'
                id={option.value}
                value={option.value}
                name={name}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <label htmlFor={option.value}>{option.text}</label>
            </div>
          )
        })
        }
      </div>
    )
  }

  if (question.type === 'LONG_TEXT') {
    return (
      <div>
        <QuestionContent />
        <textarea
          className='question-textarea'
          placeholder='Nhập chữ dài'
          minLength={question.attrs.minLength}
          maxLength={question.attrs.maxLength}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
    )
  }
}
export default Question

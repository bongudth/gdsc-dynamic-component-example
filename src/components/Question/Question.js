import React, { useEffect, useState } from 'react'
import '../Question/Question.scss'

function Question(props) {
  const [question, setQuestion] = useState(props.question)

  useEffect(() => {
    setQuestion(props.question)
  }, [props.question])

  if (question.type === 'SHORT_TEXT') {
    return (
      <div>
        <div className='question'>{question.question}</div>
        <div className='question-description'>{question.description}</div>
        <input type='text' className='question-input' placeholder='Nhập chữ' required={question.required} />
      </div>
    )
  }

  if (question.type === 'NUMBER') {
    return (
      <div>
        <div className='question'>{question.question}</div>
        <div className='question-description'>{question.description}</div>
        <input type='number' className='question-input' placeholder='Nhập số' min={question.attrs.min} max={question.attrs.max} required={question.required} />
        <div className='question-error'>
          <i className='fas fa-exclamation-circle'></i>
          <div>Trường này chỉ có thể nhập số!</div>
        </div>
      </div>
    )
  }

  if (question.type === 'RADIO') {
    return (
      <div>
        <div className='question'>{question.question}</div>
        <div className='question-description'>{question.description}</div>
        {question.options.map((option, index) => {
          return (
            <div key={index}>
              <input type='radio' id={option.value} value={option.value} name />
              <label htmlFor={option.value}>{option.text}</label>
            </div>
          )
        })
        }
      </div >
    )
  }

  if (question.type === 'LONG_TEXT') {
    return (
      <div>
        <div className='question'>{question.question}</div>
        <div className='question-description'>{question.description}</div>
        <textarea className='question-textarea' placeholder='Nhập chữ dài' minLength={question.attrs.minLength} maxLength={question.attrs.maxLength} />
      </div>
    )
  }
}
export default Question

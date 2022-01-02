import React, { useEffect, useState } from 'react'
import './Information.scss'
import axios from 'axios'

function Information(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [sectionId, setSectionId] = useState(0)
  const [sectionNumber, setSectionNumber] = useState(1)
  const [hasPrevious, setHasPrevious] = useState(false)
  const [hasNext, setHasNext] = useState(false)
  const [isComplete, setIsComplete] = useState(props.isComplete)
  const [completeNumber, setCompleteNumber] = useState(0)

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/bittermeatball/7854f3d7950469b0203a068fcaf27908/raw/1de87462c4f8c2fd0bfb9d452b246c92697b2eee/sample.json')
      .then(res => {
        setTitle(res.data.title)
        setDescription(res.data.description)
        setSectionNumber(res.data.sections.length)
        setHasNext(res.data.sections.length > 1)
      })
  }, [])

  useEffect(() => {
    setHasPrevious(sectionId > 0)
    setHasNext(sectionId < sectionNumber - 1)
    setIsComplete(props.isComplete)
    props.setSectionId(sectionId)
    setCompleteNumber((completeNumber) => {
      props.isComplete ? completeNumber++ : completeNumber--
      return completeNumber
    })
  }, [sectionId, props.isComplete])

  const handlePrevious = () => {
    if (sectionId > 0) {
      setSectionId(sectionId - 1)
    }
  }

  const handleNext = () => {
    if ((sectionId < sectionNumber - 1) && isComplete) {
      setSectionId(sectionId + 1)
    }
  }

  const handleSubmit = () => {
    console.log(props.answersForm)
    props.setIsSubmit(true)
  }

  return (
    <div className='information-wrapper'>
      <div className='information-container'>
        <div className='information-title'>{title}</div>
        <div className='information-description'>{description}</div>
      </div>
      {completeNumber === sectionNumber - 1 ?
        <div className='information-submit'>
          <button className='information-button' onClick={handleSubmit}>Gửi khảo sát</button>
        </div>
        : null}
      <div className='information-action'>
        <button className={`information-button ${hasPrevious ? '' : 'none'}`} onClick={handlePrevious}>Mục trước</button>
        <button className={`information-button ${(hasNext && isComplete) ? '' : 'none'}`} onClick={handleNext}>Mục sau</button>
      </div>
    </div>
  )
}

export default Information

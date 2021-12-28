import React, { useState } from 'react'
import './Information.scss'
import axios from 'axios'

function Information() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  axios.get('https://gist.githubusercontent.com/bittermeatball/7854f3d7950469b0203a068fcaf27908/raw/1de87462c4f8c2fd0bfb9d452b246c92697b2eee/sample.json')
    .then(res => {
      setTitle(res.data.title)
      setDescription(res.data.description)
    })

  return (
    <div className='information-wrapper'>
      <div className='information-container'>
        <div className='information-title'>{title}</div>
        <div className='information-description'>{description}</div>
      </div>
      <div className='information-action'>
        <button className='information-button'>Mục trước</button>
        <button className='information-button'>Mục sau</button>
      </div>
    </div>
  )
}

export default Information

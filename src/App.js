import { useEffect, useState } from 'react'
import './App.scss'
import Information from './components/Information/Information'
import Form from './components/Form/Form'

function App() {
  const [sectionId, setSectionId] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [answersForm, setAnswersForm] = useState([])

  useEffect(() => {
    setIsComplete(false)
  }, [sectionId])

  return (
    <div className='app-container'>
      <Information setSectionId={setSectionId} isComplete={isComplete} answersForm={answersForm} />
      <Form sectionId={sectionId} isComplete={isComplete} setIsComplete={setIsComplete} setAnswersForm={setAnswersForm} />
    </div>
  );
}

export default App

import { useEffect, useState } from 'react'
import './App.scss'
import Information from './components/Information/Information'
import Form from './components/Form/Form'
import Confetti from './components/Confetti/Confetti'

function App() {
  const [sectionId, setSectionId] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [answersForm, setAnswersForm] = useState([])
  const [answersSection, setAnswersSection] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    setIsComplete(false)
    setAnswersSection(answersForm[sectionId])
  }, [sectionId])

  return (
    <div className='app-container'>
      <Information
        setSectionId={setSectionId}
        isComplete={isComplete}
        answersForm={answersForm}
        setIsSubmit={setIsSubmit}
      />
      <Form
        sectionId={sectionId}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        setAnswersForm={setAnswersForm}
        answersSection={answersSection}
        isSubmit={isSubmit}
      />
      <Confetti isShow={isSubmit} />
    </div>
  );
}

export default App

import { useEffect, useState } from 'react'
import './App.scss'
import Information from './components/Information/Information'
import Form from './components/Form/Form'

function App() {
  const [sectionId, setSectionId] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setIsComplete(false)
  }, [sectionId])

  return (
    <div className='app-container'>
      <Information setSectionId={setSectionId} isComplete={isComplete} />
      <Form sectionId={sectionId} setIsComplete={setIsComplete} />
    </div>
  );
}

export default App

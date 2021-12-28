import { useState } from 'react'
import './App.scss'
import Information from './components/Information/Information'
import Form from './components/Form/Form'

function App() {
  const [sectionId, setSectionId] = useState(0)

  return (
    <div className='app-container'>
      <Information setSectionId={setSectionId} />
      <Form sectionId={sectionId} />
    </div>
  );
}

export default App

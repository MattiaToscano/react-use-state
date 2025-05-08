import { useState } from 'react'
import React from 'react'
import ButtonList from './assets/components/ButtonList'  // Verifica che il percorso sia corretto
import languages from './languages'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(null)

  return (
    <div className="container">
      <h1>Learn Web development</h1>
      <ButtonList setActiveLanguage={setActiveLanguage} />
      {activeLanguage && (
        <div className="language-description">
          <h2>{activeLanguage.title}</h2>
          <p>{activeLanguage.description}</p>
        </div>
      )}
    </div>
  )
}

export default App

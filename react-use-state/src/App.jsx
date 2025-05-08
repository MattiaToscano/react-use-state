import { useState } from 'react'
import languages from './languages'
import React from 'react'
import ButtonList from './assets/components/Button'
import DescriptionLanguage from './assets/components/DescriptionLanguage'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(null)

  return (
    <div className="container">
      <h1>Learn Web development</h1>
      <ul>
        <ButtonList />
      </ul>
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

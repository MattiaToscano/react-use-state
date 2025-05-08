import { useState } from 'react'
import languages from './languages'
import React from 'react'
import Button from './assets/components/Button'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(null)

  return (
    <div className="container">
      <h1>Learn Web development</h1>
      <ul>
        {languages.map((language) => (
          <li key={language.id}>
            <button
              className={`btn ${language.title.toLowerCase()}`}
              onClick={() => setActiveLanguage(language)}
            >
              {language.title}
            </button>
          </li>
        ))}
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

import { useState } from 'react'
import languages from './languages'
import React from 'react'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(null)
  console.log(activeLanguage)

  return (
    <>
      <div>
        <h1>Learn Web development</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-item">
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
          </div>
          <p>Ciao ciao</p>
        </div>
      </div>
    </>
  )
}

export default App

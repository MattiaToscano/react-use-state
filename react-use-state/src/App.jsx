import { useState } from 'react'
import languages from './languages'

function App() {
  return (
    <>
      <div>
        <h1>Learn Web development</h1>
      </div>
      <div className="container">
        <ul>
          {languages.map((language) => (
            <li key={language.id}>
              <button>{language.title}</button>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App

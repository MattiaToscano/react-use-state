import { useState } from 'react'
import languages from './languages'

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null)

}
return (
  <>
    <div>
      <h1>Learn Web development</h1>
    </div>
    <div className="container">
      <ul>
        {languages.map((language) => (
          <li key={language.id}>
            <button className="btn">{language.title}</button>
          </li>
        ))}
      </ul>
    </div>

  </>
)
}

export default App

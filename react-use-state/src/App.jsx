import { useState } from 'react'
import React from 'react'
import ButtonList from './assets/components/ButtonList'

import DescriptionLanguage from './assets/components/DescriptionLanguage'

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(null)

  return (
    <div className="container">
      <h1>Learn Web development</h1>
      <ButtonList setActiveLanguage={setActiveLanguage} />
      <DescriptionLanguage setActiveLanguage={activeLanguage} />
    </div>
  )
}

export default App

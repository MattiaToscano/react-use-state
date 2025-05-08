import React from 'react'
import { useState } from 'react'
import languages from '../../languages'

const Button = () => {
    const [activeLanguage, setActiveLanguage] = useState(null)

    return (
        <div>
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
    )
}

export default Button
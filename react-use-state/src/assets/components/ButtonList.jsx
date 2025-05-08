import React from 'react'
import languages from '../../languages'

const ButtonList = ({ setActiveLanguage }) => {
    return (
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
    )
}

export default ButtonList
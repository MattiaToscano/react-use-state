import React from 'react'
import languages from '../../languages'

const DescriptionLanguage = ({ setActiveLanguage }) => {

    return (
        <div>
            {activeLanguage && (
                <div className="language-description">
                    <h2>{activeLanguage.title}</h2>
                    <p>{activeLanguage.description}</p>
                </div>
            )}
        </div>
    )
}

export default DescriptionLanguage
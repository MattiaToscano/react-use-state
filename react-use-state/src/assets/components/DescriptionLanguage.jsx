import React from 'react'


const DescriptionLanguage = ({ activeLanguage }) => {

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
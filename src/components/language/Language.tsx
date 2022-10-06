import React from 'react'
import Title from '../title/Title'

const Language = () => {
  return (
    <div className="section-languages">
        <Title title="LANGUES" />
        <div className="language-item">
            <div className="language">Français</div>
            <div className="level">Courant</div>
        </div>
        <div className="language-item">
            <div className="language">Anglais</div>
            <div className="level">Intermédiaire</div>
        </div>
        <div className="language-item">
            <div className="language">Arabe</div>
            <div className="level">Langue maternelle</div>
        </div>
    </div>
  )
}

export default Language
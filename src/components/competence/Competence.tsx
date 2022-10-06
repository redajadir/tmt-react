import React from 'react'
import { competencesData } from '../../mockup'
import Title from '../title/Title'

const Competence = () => {
    return (
        <div className="skills-tags">
            <Title title="COMPÉTENCES" />
            {competencesData.map((competence) => {
                return <span key={competence}>{competence}</span>
            })}
        </div>
    )
}

export default Competence
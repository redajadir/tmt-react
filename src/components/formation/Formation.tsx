import React from 'react'
import { useSelector } from 'react-redux'
import { formation, formationInfo } from '../../features/formationSlice'
import { RootState } from '../../store'
import Title from '../title/Title'

const Formation = () => {

    const formations = useSelector((state: RootState) => state.formation)

    return (

        <div className="section-work">
            <Title title="FORMATION" />
            {
                formations.map((formation: formation) => {
                    return (
                        <div key={formation.formationTitle} className="work-item">
                            <h3 className="experience-title">{formation.formationTitle}</h3>
                            <h4 className="experience-company">{formation.formationCompany}</h4>
                            
                                {
                                    formation.formationInfos.map((formationInfo: formationInfo) => {
                                        return (
                                            <div key={formationInfo.date} className="exp-infos">
                                                <div className="exp-date">{formationInfo.date}</div>
                                                <div className="exp-location">{formationInfo.location}</div>
                                            </div>
                                        )

                                    })
                                }
                            
                        </div>

                    )
                })
            }

        </div>

    )
}

export default Formation
import React from 'react'
import { useSelector } from 'react-redux'
import { experience, experienceInfo, expTask } from '../../features/experienceSlice'
import { RootState } from '../../store'
import Title from '../title/Title'

const Experience = () => {

    const experiences = useSelector((state: RootState) => state.experience)

    return (
        <div className="section-work">
            <Title title="EXPÉRIENCE PROFESSIONNELLE" />
            {
                experiences.map((experience: experience) => {
                    return (
                        <div key={experience.experienceTitle} className="work-item">
                            <h3 className="experience-title">{experience.experienceTitle}</h3>
                            <h4 className="experience-company">{experience.experienceCompany}</h4>

                            {
                                experience.experienceInfos.map((experienceInfo: experienceInfo) => {
                                    return (
                                        <div key={experienceInfo.date} className="exp-infos">
                                            <div className="exp-date">{experienceInfo.date}</div>
                                            <div className="exp-location">{experienceInfo.location}</div>
                                        </div>
                                    )

                                })
                            }

                            <div className="exp-tasks">
                                {
                                    experience.expTasks.map((expTask: expTask) => {
                                        return (
                                            <p key={expTask.id}>{expTask.taskName}</p>
                                        )

                                    })
                                }

                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Experience
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Avatar from './avatar/Avatar'

const Header = () => {


    const { fullName, jobTitle, description } = useSelector((state: RootState) => state.information)

    return (
        <section className="cv-header">
            <div className="wrapper">
                <Avatar />
                <div className="cv-section-intro">
                    <h1 className="intro-name">{fullName}</h1>
                    <h2 className="intro-title" > {jobTitle}</h2 >
                    <div className="intro-summary" > {description}</div >
                </div >
            </div >
        </section >
    )
}

export default Header
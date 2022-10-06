import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Contact = () => {

    const { contactInofs } = useSelector((state: RootState) => state.information)

    return (

        <section className="cv-contact">
            <div className="wrapper">
                {
                    contactInofs.map((contact) => {
                        return (<div key={contact.value} className="contact-item">
                            <i className={contact.icon}></i>
                            <span>{contact.value}</span>
                        </div>)

                    })
                }
            </div>
        </section>

    )
}

export default Contact
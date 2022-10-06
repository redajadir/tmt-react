import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="cv-body">
            <div className="wrapper">
                {
                    children
                }
            </div>
        </section>
    )
}

export default Wrapper
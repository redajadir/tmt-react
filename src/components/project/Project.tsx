import React from 'react'
import Title from '../title/Title'

const Project = () => {
  return (
    <div className='section-projects'>
        <Title title="PROJETS PERSONNELS"/>
        <h4 className="project-title">Application E-commerce</h4>
        <div className='project-description'>
            <p>- Création d'une application de gestion (produits / commandes / panier ...)</p>
            <p>- ReactJS / NodeJS</p>
        </div>
        <h4 className="project-title">Application de suivi COVID-19</h4>
        <div className='project-description'>
            <p>- Création d'une application de suivi / statistiques COVID-19</p>
            <p>- ReactJS / React Hooks / chartJS</p>
        </div>
    </div>
  )
}

export default Project
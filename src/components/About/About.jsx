// src/components/About.js
import React from 'react';
import bannerImg from '../Images/about-banner.png'; // Import de l'image de la bannière.
import Dropdown from '../Dropdown/Dropdown.jsx';
import './About.scss';

const About = () => {

  return (
    <div>
      <div className="banner-container">
        <div className="overlay"></div>
        <img className="banner-image" src={bannerImg} alt="Bannière" />
      </div>
      <div className="about-container">
        <section className="about">
          <Dropdown buttonLabel="Fiabilité" dropdownText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
          <Dropdown buttonLabel="Respect" dropdownText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
          <Dropdown buttonLabel="Service" dropdownText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
          <Dropdown buttonLabel="Sécurité" dropdownText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </section>
      </div>
    </div>
  );
};

export default About;
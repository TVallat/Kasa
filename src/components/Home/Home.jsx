// src/components/Home.js
import React from 'react';
import './Home.scss';  // Import du fichier CSS
import { Link } from 'react-router-dom';
import bannerImg from '../Images/home-banner.png'; // Import de l'image de la bannière.
import { logements } from '../../logementsList.js';

function writeLogements(logementList) {
  return logementList.map(logement => (
      <Link key={logement.id} to={`/logements/${logement.id}`} className="card">
          <article className="card-content">
              <div className="card-background"></div>
                <img src={logement.cover} alt={logement.title} />
              <div className="text-container">
                <h2 className="card-text">{logement.title}</h2>
              </div>
          </article>
      </Link>
  ));
}

const Home = () => {
  const logementList = logements;
  return (
    <div>
      <div className="banner-container">
        <div className="overlay"></div>
        <img className="banner-image" src={bannerImg} alt="Bannière" />
        <p className="banner-text">Chez vous, partout et ailleurs</p>
      </div>
      <section className="logements">
        <div className="gallery">
            {writeLogements(logementList)}
        </div>
      </section>
    </div>
  )
}

export default Home;
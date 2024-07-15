// src/components/Logements.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Logement.scss';
import { logements } from '../../logementsList.js';
import Dropdown from '../Dropdown/Dropdown.jsx';
import greyStar from '../Images/grey-star.png';
import redStar from '../Images/red-star.png';



const drawStars = (note) => {
  let stars = [];
  if (note >= 0 && note <= 5) {
    for (let i = 0; i < note; i++) {
      stars.push(<img src={redStar} alt="Etoile" key={i} />);
    }
    for (let i = note; i < 5; i++) {
      stars.push(<img src={greyStar} alt="Etoile vide" key={i} />);
    }
  }
  return stars;
}

const equipmentList = (equipements) => {
  return equipements.map((equipement, index) => (
    <p key={index}>
      {equipement}
      <br />
    </p>
  ))
}

const hideArrows = (photos) => {
  if (photos && photos.length > 1) {
    return '';
  } else {
    return 'hide';
  }
}

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(logement => logement.id.toString() === id);
  const [isLoading, setIsLoading] = useState(!logement);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!logement) {
      navigate('/error');
    } else {
      setIsLoading(false);
    }
  }, [id, logement, navigate]);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  let nom = logement.host.name;
  let noms = nom.split(" ");

  const pictures = logement.pictures;

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : pictures.length - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex < pictures.length - 1) ? currentIndex + 1 : 0);
  };

  return (
    <article>
      <div className="carousel">
        <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {pictures.map((picture, index) => (
            <div className="carousel-slide" key={index}>
              <img src={picture} alt={`Photo de l'appartement ${index + 1}`} loading='lazy' />
            </div>
          ))}
        </div>
        <button className={`prev-btn ${hideArrows(pictures)}`} onClick={handlePrevClick}>❮</button>
        <button className={`next-btn ${hideArrows(pictures)}`} onClick={handleNextClick}>❯</button>
      </div>
      <div className="infos">
        <div className="logement-infos">
          <h2>
            {logement.title}
          </h2>
          <p>
            {logement.location}
          </p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span className='tag' key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="user-infos">
          <div className="user">
            <p>
              {noms.map((nom, index) => (
                <span key={index}>
                  {nom}
                  <br />
                </span>
              ))}
            </p>
            <img src={logement.host.picture}></img>
          </div>
          <div className="rating">
            {drawStars(parseInt(logement.rating))}
          </div>
        </div>
      </div>
      <div className='additional-infos'>
        <Dropdown className="dropdown" buttonLabel="Description" dropdownText={logement.description} />
        <Dropdown className="dropdown" buttonLabel="Équipements" dropdownText={equipmentList(logement.equipments)} />
      </div>
    </article>
  );
};

export default Logements;
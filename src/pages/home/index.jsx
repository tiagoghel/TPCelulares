import React, { useState, useEffect } from 'react';
import './home.css';
import FravegaUni from '../../assets/FravegaUni.jpg';
import FravegaPalmas from '../../assets/FravegaPalmas.png';
import FravegaPaseo from '../../assets/FravegaPaseo.jpg';
import FravegaAbasto from '../../assets/FravegaAbasto.jpg';
import { celulares } from '../../data/data.js';

const Home = () => {
  const [randomPhones, setRandomPhones] = useState([]);

  useEffect(() => {
    // Function to get 6 unique random phones
    const getRandomPhones = () => {
      const phonesCopy = [...celulares];
      const selected = [];
      for (let i = 0; i < 6; i++) {
        if (phonesCopy.length === 0) break;
        const randomIndex = Math.floor(Math.random() * phonesCopy.length);
        selected.push(phonesCopy.splice(randomIndex, 1)[0]);
      }
      return selected;
    };
    setRandomPhones(getRandomPhones());
  }, []);

  return (
    <>
      <h1> Bienvenidos!!!!!!!!!!!</h1>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={FravegaUni} className="d-block w-100" alt="FravegaUni" />
          </div>

          <div className="carousel-item">
            <img src={FravegaPalmas} className="d-block w-100" alt="FravegaPalmas" />
          </div>

          <div className="carousel-item">
            <img src={FravegaPaseo} className="d-block w-100" alt="FravegaPaseo" />
          </div>

          <div className="carousel-item">
            <img src={FravegaAbasto} className="d-block w-100" alt="FravegaAbasto" />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2>Celulares Destacados</h2>
      <div className="phone-cards-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {randomPhones.map((phone) => (
          <div key={phone.id} className="phone-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', width: 'calc(33% - 1rem)' }}>
            <img src={phone.fotos[0]} alt={phone.nombre} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3>{phone.nombre}</h3>
            <p>{phone.descripcion}</p>
            <p><strong>Precio:</strong> ${phone.precio}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

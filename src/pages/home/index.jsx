import React, { useState, useEffect } from 'react';
import '../../styles/pageContainer.css';
import './home.css';
import { celulares } from '../../data/data.js';

const Home = () => {
  const [randomPhones, setRandomPhones] = useState([]);

  useEffect(() => {

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
    <div className="page-container">
      <h1> Bienvenidos!!!!!!!!!!!</h1>

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
    </div>
  );
};

export default Home;

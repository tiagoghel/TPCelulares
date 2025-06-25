import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../../data/data';
import '../../styles/pageContainer.css';
import './productos.css';

const Productos = () => {
  const { idMarca } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMarca, setSelectedMarca] = useState(idMarca ? parseInt(idMarca) : '');

  // Filter celulares by marcaId if idMarca param is present or selectedMarca
  const celularesFiltrados = celulares.filter(celular => {
    const matchesMarca = selectedMarca ? celular.marcaId === selectedMarca : true;
    const matchesSearch = celular.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMarca && matchesSearch;
  });

  // Get marca name if filtering
  const marcaNombre = selectedMarca
    ? marcas.find(marca => marca.id === selectedMarca)?.nombre
    : null;

  const handleMarcaChange = (e) => {
    const value = e.target.value;
    setSelectedMarca(value === '' ? '' : parseInt(value));
  };

  return (
    <div className="page-container">
      <div className="productos-container">
        <h1>{marcaNombre ? `Celulares de ${marcaNombre}` : 'Todos los Celulares'}</h1>
        <div className="filtros">
          <input
            type="text"
            placeholder="Buscar celular..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={selectedMarca} onChange={handleMarcaChange}>
            <option value="">Todas las marcas</option>
            {marcas.map(marca => (
              <option key={marca.id} value={marca.id}>{marca.nombre}</option>
            ))}
          </select>
        </div>
        <div className="productos-list">
          {celularesFiltrados.map(celular => (
            <div key={celular.id} className="producto-card">
              <Link to={`/producto/${celular.id}`}>
                <img src={celular.fotos[0]} alt={celular.nombre} />
                <h2>{celular.nombre}</h2>
                <p>{celular.descripcion}</p>
                <p className="precio">${celular.precio}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;

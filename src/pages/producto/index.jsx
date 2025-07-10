import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../../data/data';
import './producto.css';

const Producto = () => {
  const { idCelular } = useParams();
  const celularId = parseInt(idCelular);
  const celular = celulares.find(c => c.id === celularId);

  if (!celular) {
    return (
      <div className="producto-container">
        <h2>Producto no encontrado</h2>
        <Link to="/productos">Volver a productos</Link>
      </div>
    );
  }

  const marca = marcas.find(m => m.id === celular.marcaId);

  return (
    <div className="producto-container">
      <div className="producto-card-detalle">
        <h1>{celular.nombre}</h1>
        <h3>Marca: {marca ? marca.nombre : 'Desconocida'}</h3>
        <div className="producto-fotos">
          {celular.fotos.map((foto, index) => (
            <img key={index} src={foto} alt={`${celular.nombre} foto ${index + 1}`} />
          ))}
        </div>
        <p>{celular.descripcion}</p>
        <p className="precio">Precio: ${celular.precio}</p>
        <Link to="/productos">Volver a productos</Link>
      </div>
    </div>
  );
};

export default Producto;

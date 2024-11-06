// src/components/TarjetaMascota.jsx
import React from 'react';

const TarjetaMascota = ({ nombre, ubicacion, imagen }) => {
  return (
    <div style={tarjetaEstilo}>
      <img src={imagen} alt={nombre} style={imagenEstilo} />
      <div style={infoEstilo}>
        <h2 style={nombreEstilo}>{nombre}</h2>
        <p style={ubicacionEstilo}>{ubicacion}</p>
      </div>
    </div>
  );
};

// Estilos en línea para la tarjeta
const tarjetaEstilo = {
  width: '150px',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  backgroundColor: '#ffffff',
};

const imagenEstilo = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
};

const infoEstilo = {
  padding: '10px',
  backgroundColor: '#ff6f61',
  color: 'white',
};

const nombreEstilo = {
  fontSize: '1.2em',
  margin: '0',
};

const ubicacionEstilo = {
  fontSize: '0.9em',
  margin: '5px 0 0',
};

export default TarjetaMascota;

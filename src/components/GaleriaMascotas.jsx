// src/components/GaleriaMascotas.jsx
import React from 'react';
import TarjetaMascota from './TarjetaMascota';

const mascotas = [
  { nombre: 'Blacky', ubicacion: 'Panamá Oeste', imagen: 'perro.jpg' },
  { nombre: 'Mina', ubicacion: 'Panamá Oeste', imagen: 'ruta-a-la-imagen-2' },
  { nombre: 'Sasha', ubicacion: 'Panamá Oeste', imagen: 'ruta-a-la-imagen-3' },
  { nombre: 'Mailo', ubicacion: 'Panamá Oeste', imagen: 'ruta-a-la-imagen-4' },
  { nombre: 'Felix', ubicacion: 'Panamá Oeste', imagen: 'ruta-a-la-imagen-5' },
  { nombre: 'Manguito', ubicacion: 'Panamá Oeste', imagen: 'ruta-a-la-imagen-6' },
  { nombre: 'Toby', ubicacion: 'Panamá Oeste', imagen: 'ruta-a-la-imagen-7' },
  { nombre: 'Dany', ubicacion: 'Panamá Oeste', imagen: 'ruta-a-la-imagen-8' },
];

const GaleriaMascotas = () => {
  return (
    <div style={galeriaEstilo}>
      {mascotas.map((mascota, index) => (
        <TarjetaMascota key={index} {...mascota} />
      ))}
    </div>
  );
};

// Estilos en línea para la galería
const galeriaEstilo = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '20px',
  padding: '20px',
};

export default GaleriaMascotas;

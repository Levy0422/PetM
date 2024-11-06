// src/pages/Adopta.jsx
import React from 'react';
import GaleriaMascotas from '../components/GaleriaMascotas';

const Adopta = () => {
  return (
    <div>
      <h1>Adopta una Mascota</h1>
      <GaleriaMascotas /> {/* La galería se muestra en la página de Adopta */}
    </div>
  );
};

export default Adopta;

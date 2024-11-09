import React from 'react';
import GaleriaMascotas from '../components/GaleriaMascotas';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Adopta = () => {
  return (
    <div>
      <Header /> {/* Header de la página */}
      <h1>Adopta una Mascota</h1>
      <GaleriaMascotas /> {/* La galería se muestra en la página de Adopta */}
      <Footer /> {/* Footer de la página */}
    </div>
  );
};

export default Adopta;


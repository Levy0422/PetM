import React from 'react';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import animalImage from '/imagenperoogato.png';
import borderImage from '/BORDE.png';
import dogImage from '/dogImage.png'; // Reemplaza con la ruta correcta de la imagen del perro

const Home = () => {
  return (
    <div className="home-page">
      <Header /> {/* Header de la página */}
      
      <div className="home-container">
        {/* Información de adopción */}
        <div className="adopt-info">
          <h1>Adopta Patitas</h1>
          <p>porque cada maullido y ladrido cuenta una historia de amor</p>
          <button>Conócelos</button>
        </div>

        {/* Contenedor de la imagen principal con borde */}
        <div className="image-container">
          <img src={animalImage} alt="Dog and Cat" className="animal-image" />
          <img src={borderImage} alt="Decorative Border" className="border-image" />
        </div>

        {/* Sección de estadísticas de adopción */}
        <div className="adopt-stats">
          <div className="stat-item">
            <h2>+1,200</h2>
            <p>Peluditos rescatados</p>
          </div>
          <div className="stat-item">
            <h2>900</h2>
            <p>Perritos y gatitos han encontrado un hogar</p>
          </div>
          <div className="stat-item">
            <h2>85%</h2>
            <p>De nuestros rescatados han sido adoptados</p>
          </div>
        </div>

        {/* Sección de historias */}
        <div className="stories-section">
          <div className="story">
            <img src="/nala.png" alt="Nala" className="story-image" />
            <h3>Historia de Nala</h3>
            <p>Nala ha llenado mi vida de alegría y ternura. Adoptarla fue una de las mejores decisiones que he tomado</p>
          </div>
          <div className="story">
            <img src="/rufo.png" alt="Rufo" className="story-image" />
            <h3>Historia de Rufo</h3>
            <p>Rufo ha llenado mi vida de alegría y ternura. Adoptarlo fue una de las mejores decisiones que he tomado</p>
          </div>
          <div className="story">
            <img src="/lola.png" alt="Lola" className="story-image" />
            <h3>Historia de Lola</h3>
            <p>Lola ha llenado mi vida de alegría y ternura. Adoptarla fue una de las mejores decisiones que he tomado</p>
          </div>
        </div>

        {/* Sección: Proceso de adopción */}
        <div className="adoption-process-section">
          <div className="adoption-image">
            <img src="/adoption-image.png" alt="Proceso de Adopción" />
          </div>
          <div className="adoption-content">
            <h2>¿Cómo funciona el proceso de adopción?</h2>
            <p>
              En la sección de adoptar, podrás ver las mascotas que están en busca de un hogar. 
              Puedes seleccionar la mascota que desees y obtener más información sobre ella.
            </p>
          </div>
        </div>

        {/* Nueva sección: Beneficios de adoptar */}
        <div className="adoption-benefits-section">
          <div className="adoption-benefits-content">
            <h2>¿Por qué es importante que adoptes y sus beneficios?</h2>
            <p>
              Adoptar es un acto de amor y responsabilidad que transforma vidas.
              Al abrir tu hogar a una mascota, le ofreces una segunda oportunidad
              llena de cariño después de haber enfrentado el abandono. Adoptar
              no solo cambia su vida, sino también la tuya.
            </p>
            <div className="benefits-list">
              <div className="benefit-item">🐾 Salvas vidas</div>
              <div className="benefit-item">🐾 Bríndales un hogar</div>
              <div className="benefit-item">🐾 Ayudas a reducir la sobrepoblación</div>
              <div className="benefit-item">🐾 Mejoras tu bienestar emocional</div>
            </div>
          </div>
          <div className="adoption-benefits-image">
            <img src={dogImage} alt="Beneficios de adopción" />
          </div>
        </div>
      </div>

      <Footer /> {/* Footer de la página */}
    </div>
  );
};

export default Home;

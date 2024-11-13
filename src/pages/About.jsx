// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';
import dogImageTop from '/imagenperoogato.png'; // Ruta de la imagen del perro en la parte superior
import familyImage from '/imagenperoogato.png'; // Ruta de la imagen de la familia con perros

const About = () => {
  return (
    <div>
      <Header /> {/* Agrega el Header */}
      <main className="about-page">
        {/* Contenido anterior */}
        <div className="about-background">
          <h1>PetMatch</h1>
          <p>
            "Porque cada ladrido y maullido merece ser escuchado, nos unimos para darles un hogar donde el amor nunca falte."
          </p>
        </div>

        <section className="about-section">
          <div className="about-image">
            <img src="/imagenperoogato.png" alt="Imagen de un gato" />
          </div>
          <div className="about-text">
            <h2>Sobre Nosotros</h2>
            <p>
              No somos una organización, somos intermediarios entre fundaciones y personas que buscan adoptar peluditos.
              Nos mueve el sueño de ver a cada perro y gato encontrar un lugar donde se sientan queridos y seguros, 
              donde puedan dar y recibir amor sin límites. Sabemos que detrás de cada mirada tierna y cada ladrido hay 
              un amigo fiel esperando ser descubierto.
            </p>
          </div>
        </section>

        {/* Nueva sección */}
        <section className="connection-section">
          <div className="connection-text">
            <h2>Una Conexión que Cambia Vidas en Panamá</h2>
            <p>
              Sabemos que en Panamá, los refugios están repletos y muchos perritos y gatitos esperan encontrar un hogar.
              La falta de visibilidad y adopciones dificulta su futuro. <span className="highlight">PetMatch</span> facilita
              el proceso, conectando a estos animales con familias dispuestas a darles el amor que necesitan.
            </p>
          </div>
          {dogImageTop && (
            <div className="connection-image">
              <img src={dogImageTop} alt="Perro esperando adopción" />
            </div>
          )}
        </section>

        <section className="connection-section-bottom">
          {familyImage && (
            <div className="connection-image-large">
              <img src={familyImage} alt="Familia con perros adoptados" />
            </div>
          )}
          <div className="connection-text-bottom">
            <h2>Una Conexión que Cambia Vidas en Panamá</h2>
            <p>
              En <span className="highlight">PetMatch</span>, sabemos que no todos pueden adoptar, pero todos pueden ayudar.
              Por eso, ofrecemos diversas maneras de apoyar a las fundaciones, a través de donaciones, recursos y voluntariado.
              Cada pequeño gesto contribuye a que más animales encuentren un hogar amoroso y hace posible que las fundaciones 
              continúen su noble labor.
            </p>
          </div>
        </section>
      </main>
      <Footer /> {/* Agrega el Footer */}
    </div>
  );
};

export default About;

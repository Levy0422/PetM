import React from "react";
import './Footer.css'; // Asegúrate de que este archivo exista para los estilos

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Sección del logo y el ícono de Instagram alineados a la izquierda */}
        <div className="logo-section">
          <img src="/pet.svg" alt="PetMatch Logo" className="footer-logo" />
          <p className="footer-text">PetMatch</p>
          <img src="insta.svg" alt="Instagram Logo" className="footer-icon" />
        </div>

        {/* Sección de los enlaces alineados horizontalmente */}
        <div className="links-section">
          <a href="/sobre-nosotros">Sobre Nosotros</a>
          <a href="/adopta">Adopta</a>
          <a href="/publicar">Publicar Mascota</a>
          <a href="/terminos-legales">Términos Legales</a>
        </div>
      </div>
      
      {/* Sección inferior con los derechos reservados */}
      <div className="footer-bottom">
        <p>PetMatch © todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

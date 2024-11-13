import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div>
      {/* Barra superior blanca con el logo y el icono de iniciar sesión */}
      <div className="logo-bar">
        <div className="logo">
          <img src="/pet.svg" alt="PetMatch Logo" />
          <h1>PetMatch</h1>
        </div>
        <div className="login-icon">
          {/* Enlace al login */}
          <Link to="/login">
            <img src="login-icon.svg" alt="Iniciar Sesión" />
          </Link>
        </div>
      </div>

      {/* Barra inferior naranja con los botones */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/adopta">Adopta</Link></li>
          <li><Link to="/publicar">Publicar Mascota</Link></li>

          {/* Botón "Apoyar" con menú desplegable */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setDropdownVisible(true)} 
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <Link to="#">Apoyar</Link>
            
            {isDropdownVisible && (
              <ul className="dropdown-menu">
                <li><Link to="/donaciones" className="dropdown-button">Donaciones</Link></li>
                <li><Link to="/voluntariado" className="dropdown-button">Voluntariado</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

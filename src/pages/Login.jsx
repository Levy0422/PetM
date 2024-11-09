import React from 'react';
import LoginAnimation from '../components/LoginAnimation'; // Importa el componente de animación

const Login = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', position: 'relative' }}>
      <LoginAnimation /> {/* Animación de fondo */}
      
      <div style={{
        width: '300px',
        padding: '20px',
        marginTop: '-40vh',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1
      }}>
        <h2>Iniciar Sesión</h2>
        
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ddd'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ddd'
              }}
            />
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#e8501b',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

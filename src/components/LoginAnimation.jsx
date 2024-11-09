import React, { useEffect } from 'react';
import paper from 'paper';

const LoginAnimation = () => {
  useEffect(() => {
    // Configuración del canvas para Paper.js
    const canvas = document.getElementById("canvas");
    paper.setup(canvas);

    const shapeGroup = new paper.Group();
    let positionArray = [];

    // Definición de los límites del canvas y posiciones iniciales de las formas
    const getCanvasBounds = () => {
      const canvasWidth = paper.view.size.width;
      const canvasHeight = paper.view.size.height;
      const canvasMiddleX = canvasWidth / 2;
      const canvasMiddleY = canvasHeight / 2;

      positionArray = [
        { x: (canvasMiddleX / 2) + 100, y: 100 },
        { x: 200, y: canvasMiddleY },
        { x: (canvasMiddleX - 50) + (canvasMiddleX / 2), y: 150 },
        { x: 0, y: canvasMiddleY + 100 },
        { x: canvasWidth - 130, y: canvasHeight - 75 },
        { x: canvasMiddleX + 80, y: canvasHeight - 50 },
        { x: canvasWidth + 60, y: canvasMiddleY - 50 },
        { x: canvasMiddleX + 100, y: canvasMiddleY + 100 }
      ];
    };

    // Inicialización de las formas en el canvas
    const initializeShapes = () => {
      getCanvasBounds();
      const shapePathData = [
        'M231,352l445-156L600,0L452,54L331,3L0,48L231,352', 
        'M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z', 
        'M0,65l16,138l96,107l270-2L470,0L337,4L0,65z',
        'M333,0L0,94l64,219L29,437l570-151l-196-42L333,0',
        'M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z',
        'M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352',
        'M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100',
        'M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350 '
      ];

      shapePathData.forEach((data, i) => {
        const path = new paper.Path({
          strokeColor: 'rgba(255, 255, 255, 0.5)',
          strokeWidth: 2,
          parent: shapeGroup,
          pathData: data,
        });
        path.scale(2);
        path.position = positionArray[i];
      });
    };

    // Animación de rotación para las formas en cada cuadro
    paper.view.onFrame = (event) => {
      if (event.count % 4 === 0) {
        shapeGroup.children.forEach((child, i) => {
          if (i % 2 === 0) {
            child.rotate(-0.1);
          } else {
            child.rotate(0.1);
          }
        });
      }
    };

    // Llamada para inicializar las formas
    initializeShapes();

    // Limpieza al desmontar el componente
    return () => {
      paper.view.off('frame');
      paper.project.clear();
    };
  }, []);

  return <canvas id="canvas" resize="true" style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />;
};

export default LoginAnimation;

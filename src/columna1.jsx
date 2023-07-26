import React from 'react';
import otraFoto from './assets/otra_foto.png';

export const Columna1 = () => {
  return (
    <div className ="relative">
    <div style={{ marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ border: '5px solid #ffffff', borderRadius: '10px', padding: '5px' }}>
          <img
            src={otraFoto}
            alt="Imagen 2"
            className="w-48 h-auto rounded-lg"
          />
        </div>
      </div>
      </div>
      <h1 className="text-3xl md:text-xl lg:text-5xl font-bold mb-2 md:mb-5 text-white text-center">Hola 🚀 Soy Matias Muñoz</h1>
      <div className='p-4'>
        <p className="text-lg md:text-xl text-white dark:text-black">
        Desarrollador FrontEnd enfocado en aprender y mejorar constantemente. Mi objetivo es alcanzar mis metas académicas y profesionales, y tengo una gran pasión por el desarrollo web y sus posibilidades. 💻
        </p>
      </div>
    </div>
  );
};
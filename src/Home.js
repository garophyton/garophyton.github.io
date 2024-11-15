import React from 'react';
import './styles.css';
import Menu from './componentes/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <Menu/>
      <div className="contenido-home">
        <img src="/imagenes/imgNews.jpeg" className='News' alt="news"/>
        <img src="/imagenes/imgprincipal.jpeg" className='imgPrincipal' alt="imagenprincipal"/>
        <img src="/imagenes/imgMasVendidas.jpeg" className='MV' alt="mas vendidas"/>
      </div>
    </>
  )
}

export default Home

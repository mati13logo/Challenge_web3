import React from 'react'
import logo from '../../assets/react.svg'
import './navbar.css';

const Navbar = ({ isConnected, onConnect, onDisconnect }) => {

  return (
    <div>
      {!isConnected && (
        <div className='container-nav'>
          <img src={logo} alt='image' />
          <button onClick={onConnect}> Conectar</button>
        </div>
      )
      }
      {isConnected && (
        <div className='container-nav'>
          <img src={logo} alt='image' />
          <button onClick={onDisconnect}> Desconectar</button>
        </div>
      )
      }
    </div>
  )
}

export default Navbar
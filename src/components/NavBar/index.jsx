import React from 'react'
import CartWidget from '../CartWidget'
const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">DP Repuestos</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Ubicación</a>
          </li>
        </ul>
        <div style={{width: '50px', position: 'absolute', right: '50px', top: '5px'}}>
            <CartWidget/>
        </div>
       </div>
    </div>
  </nav>
    </>
  )
}

export default NavBar
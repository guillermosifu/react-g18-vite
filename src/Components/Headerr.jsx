import React from 'react'
import{Link} from 'react-router-dom'
import'../App.css'

const Headerr = () => {

  
  return (
    <header className='header'>
    <nav className="header  navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand"to="/">LOGO</Link>        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/pokemon">POKEMON</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/banderas">PAISES</Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="/git">GITSEARCH</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/imagen">PIXABAY</Link>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Headerr
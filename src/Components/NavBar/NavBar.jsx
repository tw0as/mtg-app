import React from 'react'
import { DropDown } from '../DropDown/DropDown'
import { SearchBar } from '../SearchBar/SearchBar'
export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
         <a className="navbar-brand" href="#">HIDE ON BUSH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon" />
         </button>
         <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Novedades
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
              </li>
              <DropDown />
              <li className="nav-item">
                <a className="nav-link" href="#">Quiénes somos</a>
              </li>
            </ul>
          </div>
        </div>
        <SearchBar />
      </nav>
    </div>
  )
}

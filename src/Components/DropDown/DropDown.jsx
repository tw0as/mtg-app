import React from 'react'

export const DropDown = () => {
  return (
    <>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Editoriales</a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">IVREA</a>
                <a className="dropdown-item" href="#">OVNI PRESS</a>
                <a className="dropdown-item" href="#">PANINI</a>
            </div>
        </li>
    </>
  )
}

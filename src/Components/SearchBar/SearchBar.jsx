import React from 'react'

export const SearchBar = () => {
  return (
    <>
        <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    </>
  )
}

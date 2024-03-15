import React from 'react'

const Search = (props) => {

    

  return (
          <form className="d-flex my-4" role="search">
                <input className="form-control me-2" type="search" placeholder="City" aria-label="Search" onChange={props.text}/>
                <button className="btn btn-primary" onClick={props.search}>Search</button>
            </form>
    
  )
}

export default Search

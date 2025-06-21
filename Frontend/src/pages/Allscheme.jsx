import React, { useRef } from 'react'
import { Navigation } from '../components/Navigation'
import { Button } from 'bootstrap'
import { MainScheme } from '../components/MainScheme';

export const Allscheme = () => {
//   const get = useRef(null);
//   const getsearch = ()=>{
//     if(get.current.value!==""){
//       console.log("not null");
//     }
      
//   }

  return (
    <>

      {/* Search-scheme */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="d-flex justify-content-center">
              <input className="form-control search-field me-2" type="search" placeholder="Search Your Scheme" aria-label="Search" id="search-input" />
              <button className="btn btn-outline-success search-button" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </div>

      {/* { get<MainScheme /> : <Allscheme />} */}
      <MainScheme/>

    </>
  )
}

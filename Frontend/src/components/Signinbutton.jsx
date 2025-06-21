import React from 'react'
import { NavLink } from 'react-router-dom'
export const Signinbutton = () => {
  return (
    <>
      <NavLink to={'/signin'} className={'btn btn-dark text-white border border-light nav-item nav-link me-2 ms-auto ps-3 pe-3 pt-1 pb-1 mb-1 mt-1'} role='button' id='btn1'>Sign-In</NavLink>
    </>
  )
}

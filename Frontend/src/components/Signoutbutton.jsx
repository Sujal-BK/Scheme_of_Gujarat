import { NavLink, useNavigate } from 'react-router-dom'
export const Signoutbutton = (props) => {
  useNavigate("dd");
  function clearcookie() {
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    props.setvalid(false)
  }
  return (
    <>
      <NavLink to={'/'} className={'btn btn-dark text-white border border-light nav-item nav-link me-2 ms-auto ps-3 pe-3 pt-1 pb-1 mb-1 mt-1'} style={{'backgroundColor':'black'}} onClick={clearcookie}> Sign-Out
      </NavLink>
    </>
  )
}

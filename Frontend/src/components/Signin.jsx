import React, { useRef} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Home } from '../pages/Home'
export const Signin = () => {
  const getmessage = useRef(false);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const istrue = async () => {
    if (email.current.value == "" || password.current.value == "") {
      getmessage.current.innerHTML = '<span style="color: red">Please fill required places !</span>';
      return
    }
    const res = await fetch("http://localhost:5500/api/v1/auth/sign-in", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email.current.value,
        "password": password.current.value
      })
    });
    const data = await res.json();
    if (data.success) {
      const token = data.data.token;
      const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `auth=${token}; expires=${expires} `;
      alert("Login successfully")
      navigate("/")
    } else {
      getmessage.current.innerHTML = '<span style="color: red">' + data.error + " !" + '</span>';

    }
  }


  return (
    <>
      {/* <!--Main-container--> */}
      <div className="container mt-4 text-center">

        {/* <!--Navigator--> */}
        <NavLink className={''} to={"/"} style={{ "textDecoration": "none" }}>
          <h3>Home</h3></NavLink>

        <div className="main mt-4 text-center ms-auto me-auto">

          {/* <!--Login-with-description--> */}
          <h1 className="pt-3 pb-3 heading">Sign-In</h1>
          <p className='information'>The faster you fill up,
            the faster you get your scheme</p>

          <form action="" method="">

            {/* <!--Enter-Email--> */}
            <input type="text" required placeholder="Enter your email *" className="user mt-2 mb-4 w-75" ref={email}
            />
            <br />
            {/* <!--Enter-password--> */}
            <input type="password" required placeholder="Enter your Password *" className="password mb-4 w-75" ref={password}
            />
            <br />

            {/* <!--Remember-me--> */}
            <span className="me-1 ms-1">
              <label style={{ 'cursor': 'pointer' }}>
                <input type="checkbox" className="mb-3 me-1" style={{ 'cursor': 'pointer' }} />
                Remember me</label>
            </span>
            {/* <!--Forgot-password--> */}

            <a href="#" className="ms-1 text-decoration-none">Forgot Password ?</a>
            <br />

            <span ref={getmessage}></span>
            <br />
            {/* <!--Sing-in--> */}
            <NavLink className={'btn btn-dark mt-2 mb-2 w-75'} style={{ "backgroundColor": "black" }} onClick={istrue}>
              Submit
            </NavLink>
            <br />

            <br />


            <div className="mt-1">
              Don't have account ?
              <NavLink to={'/signup'} className={'text-decoration-none ms-5'}
              >Sign-Up</NavLink>

            </div>
          </form>

        </div>
      </div>
    </>
  )
}

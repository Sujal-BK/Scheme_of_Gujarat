import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
export const Signup = () => {

  const errormessage = useRef()
  const nameid = useRef();
  const emailid = useRef();
  const passid1 = useRef();
  const passid2 = useRef();
  const navigate = useNavigate();

  const isTrue = async () => {

    const validemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if ((nameid.current.value || emailid.current.value || passid1.current.value || passid2.current.value) == "") {
      errormessage.current.innerHTML = "<span style='color:red'>Please fill required field !</span>"
    } else if (!validemail.test(emailid.current.value) || !validpass.test(passid1.current.value)) {
      errormessage.current.innerHTML = "<span style='color:red'>Please enter valid email or password !</span>"
    } else if (passid1.current.value != passid2.current.value) {
      errormessage.current.innerHTML = "<span style='color:red'>Password can't match </span>"
    }
    else {
      const res = await fetch("http://localhost:5500/api/v1/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": nameid.current.value,
          "email": emailid.current.value,
          "password": passid1.current.value
        })
      });
      const data = await res.json();
      if (data.success) {
        errormessage.current.innerHTML = "";
        const token = data.data.token;
        const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `auth=${token}; expires=${expires} secure; httponly`;
        alert("Signup successfully")
        navigate("/")
      } else {
        errormessage.current.innerHTML = '<span style="color: red">' + data.error + " !" + '</span>';
        nameid.current.value = ""
        emailid.current.value = ""
        passid1.current.value = ""
        passid2.current.value = ""
      }
    }
  }

  return (
    <>
      {/* <!--Main-container--> */}
      <div className="container mt-4 text-center">

        {/* <!--Navigator--> */}
        <NavLink to={"/"} style={{ "textDecoration": "none" }}> <h3>Home</h3></NavLink>

        <div className="main mt-4 text-center ms-auto me-auto">

          {/* <!--Signup-with-description--> */}
          <h1 className="pt-3 pb-3 heading">Sign-Up</h1>

          <form action="" method="post">

            {/* <!-- Input Name --> */}
            <input type="text" required placeholder="Name *" className="fname w-75  mb-4" ref={nameid} />
            <br />

            {/* <!-- Input Email --> */}
            <input type="email" required placeholder="Email *" className="password w-75 mb-4" ref={emailid} /><br />

            {/* <!-- Enter Password --> */}
            <input type="password" required placeholder="Set your Password *" className="password mb-4 w-75"
              ref={passid1} />
            <br />

            {/* <!-- Renter  Password --> */}
            <input type="password" required placeholder="Re-enter your Password *" className="password mb-2 w-75"
              ref={passid2} /> <br />

            {/* <!-- Alert message to user in case if entered & re-entered password are not same --> */}
            <span ref={errormessage}>
            </span> <br />
            <h6 className={'w-75 m-auto'} style={{ 'color': "green" }}>
              Password follow,
              at least 8 characters, 1 uppercase, 1 lowercase, and 1 number,1 special character
            </h6>
            {/* <!/--Sing-in--> */}
            <NavLink className={'btn btn-dark mt-2 mb-3 w-75'} style={{ "backgroundColor": "black" }} onClick={isTrue}>
              Submit
            </NavLink>
            <br />

            <div className="mt-2">
              Don't have account ?
              <NavLink to={'/signin'} className={'text-decoration-none ms-5'}
              >Sign-Ip</NavLink>

            </div>

          </form>

        </div>


      </div>
    </>
  )
}

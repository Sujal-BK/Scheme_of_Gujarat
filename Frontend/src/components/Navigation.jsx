import React, { useEffect, useState } from 'react'
import scheme from '../assets/gujarat.png'
import { Signinbutton } from '../components/Signinbutton.jsx'
import { Signoutbutton } from '../components/Signoutbutton.jsx'
import { Signupbutton } from "../components/Signupbutton.jsx"
export const Navigation = () => {
    // State to check wheather a cookie is valid user or not
    const [isvalid, setvalid] = useState(false);

    useEffect(() => {
        async function getres() {
            const check = document.cookie.split("=")[1]
            const res = await fetch("http://localhost:5500/api/v1/auth/token-check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "gettoken": check
                })
            })
            const data = await res.json();
            if(data.success){
                setvalid(true);
            }
        }
        getres()
    }, [isvalid])
    return (
        <>
            {/* Main navigation bar */}
            <nav className="navbar navbar-expand-md  back navbar-dark shadow-lg mt-3 sticky-top p-0">

                <div className="container" style={{ 'boxShadow': 'rgb(145, 133, 133)' }}>
                    <a href="#" className="navbar-brand">
                        <img src={scheme} alt="" width={'50px'} className='rounded ms-2' />
                        <span className="ms-2">Scheme Of Gujarat</span>
                    </a>
                    {/* Navigation toggler */}
                    <a className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#show">
                        <span><i className="bi bi-three-dots-vertical text-white" style={{ 'cursor': 'pointer' }}></i></span>
                    </a>
                    {/*Navigation toggler */}
                    <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="show" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <span className="text-light">Scheme Of Gujarat</span>
                            </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item ms-2">
                                    <a href="" className="nav-link">More-Info</a>
                                </li>
                                <li className="nav-item ms-2">
                                    <a href="" className="nav-link">Join-Us</a>
                                </li>
                            </ul>

                            {
                                isvalid ? <>
                                    <Signoutbutton setvalid={setvalid} />
                                </> : <>
                                    <Signinbutton /><Signupbutton />
                                </>

                            }

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

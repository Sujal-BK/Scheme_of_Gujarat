import { NavLink } from 'react-router-dom'
import scheme from '../assets/gujarat.png'
import right from '../assets/right.png'
import doctor from '../assets/doctor.jpg'
import farmer from '../assets/farmer.jpg'
import oldlady from '../assets/oldlady.jpg'
import student from '../assets/student.jpg'
import worker from '../assets/worker.jpg'
import whelechair from '../assets/whelechair.jpg'
import di from "../assets/di.webp"
import digilocker from "../assets/digilocker.webp"
import dataGov from "../assets/dataGov.webp"
import igod from "../assets/igod.webp"
import indiaGov from "../assets/indiaGov.webp"
import myGov from "../assets/myGov.webp"
import { useEffect, useRef} from 'react'
import Typed from 'typed.js'
import { Navigation } from '../components/Navigation.jsx'
import { Allscheme } from './Allscheme.jsx'
export const Home = () => {

  //  Access the context of a textRef an provide Typed.js functionality
  const textRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Education-scheme..", "Agriculture-scheme..", "Health-scheme..", "Disability-citizens scheme..", "Senior-citizen scheme..", "Special-art scheme.."],
      typeSpeed: 100,
      backSpeed: 10,
      loop: true,
    })
    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <>
      {/* <!--Scheme-Typed text--> */}
      <div className="container">
        <div className="row">
          <div className="text-center head mt-3">
            <h3 ref={textRef} style={{ 'display': 'inline-block', 'color': 'red' }}></h3>
          </div>
        </div>

        <div className="text-center mt-2">
          <NavLink target='_blank'  to={'/allscheme'} style={{"backgroundColor":"black"}} className="btn btn-dark shadow-lg pt-2 pb-2 ps-3 pe-3" type='button'>
            <span className="size-scheme">Your Scheme <img src={right} className="right"
              width="40px" /></span>
          </NavLink>
        </div>
      </div>



      {/* <!--Card-of-scheme--> */}
      <div className="container text-center  d-flex mt-2">
        <div className="row">

          {/* <!--Education-card--> */}
          <div className=" col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100">
              <img className="card-img-top" src={student} />
              <div className="card-body special ">
                <h2 className="card-title">Education</h2>
                <hr />
                <p className="card-tex">
                  Aims to Provide financial aid to students, Universalize elementary education, Enhance employability
                  through skill training, Promote girls' education.</p>
                <a className="btn btn-dark" href="\Scheme of gujarat\html\education.html">More
                  Info
                  <span className="bi bi-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>


          {/* <!--Farmer-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100  ">
              <img className="card-img-top" src={farmer} />
              <div className="card-body special">
                <h2 className="card-title">Agriculture</h2>
                <hr />
                <p className="card-tex ">
                  Aims to Provide financial support, Simplify loan processes,
                  Protect against crop failure, Improve soil fertility, Insure crops.
                </p>
                <a className="btn btn-dark" href="\Scheme of gujarat\html\agriculture.html">More
                  Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

          {/* <!--Doctor-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100 mb-2">
              <img className="card-img-top" src={doctor} />
              <div className="card-body special">
                <h2 className="card-title">Health</h2>
                <hr />
                <p className="card-tex">
                  Aims to Expand health insurance, Improve healthcare infrastructure,
                  Ensure affordable healthcare, Promote sanitation. </p>
                <a className="btn btn-dark" href="\Scheme of gujarat\html\health.html">More
                  Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

          {/* <!--Disabled-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100 mb-2">
              <img className="card-img-top" src={whelechair} />
              <div className="card-body special">
                <h2 className="card-title">Disability-citizens</h2>
                <hr />
                <p className="card-tex">
                  Aims to Provide financial aid, Streamline benefits,
                  Empower disabled individuals, Offer rehabilitation service, Support education.
                </p>
                <a className="btn btn-dark" href="#">More Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

          {/* <!--Sinior-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100  mb-2">
              <img className="card-img-top" src={oldlady} />
              <div className="card-body special">
                <h2 className="card-title">Senior-citizen</h2>
                <hr />
                <p className="card-tex">
                  Aims to Provide financial aid, Streamline benefits,
                  Empower disabled individuals, Offer rehabilitation service, Support education.
                </p>
                <a className="btn btn-dark" href="#">More Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

          {/* <!--Worker-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100  mb-2">
              <img className="card-img-top" src={worker} />
              <div className="card-body special">
                <h2 className="card-title">Special-art</h2>
                <hr />
                <p className="card-tex">
                  Aims to Provide financial aid, Streamline benefits,
                  Empower disabled individuals, Offer rehabilitation service, Support education.
                </p>
                <a className="btn btn-dark" href="#">More Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer section with developer details */}

      <div className="container-fluid mt-4 foot">

        <div className="card text-center bg-dark text-light">
          <div className="card-body">
            <div className="card-title">
              <div className="card-img-top">
                <img src={scheme} width="100px" className="rounded" /><span className="text-s">Scheme Of
                  Gujarat</span>
              </div>
              <div className="card-title mt-3">
                <h1>Maintained By</h1>
              </div>
              <div className="card-text mt-3">
                <p>
                 Sujal Kachhadiya<br />
                 Arpil Khunt <br />
                 Tirth Galani<br />
                 Deep jasoliya <br />
                </p>

              </div>
            </div>

            <hr />
            <div className="card-title">
              <h1>Useful Links</h1>
              <img src={di} />
              <img src={digilocker} />
              <img src={dataGov} />
              <img src={igod} />
              <img src={indiaGov} />
              <img src={myGov} />
            </div>

            <hr />
            <div className="card-title">
              <h1>Other-Links</h1>
            </div>
            <div className="card-text">
              <a href="#" className="btn btn-primary mb-2 mt-2 me-2" role="button">More-Info</a>
              <a href="#" className="btn btn-primary mb-2 mt-2 me-2" role="button">Documentation</a>
              <a href="#" className="btn btn-primary mb-2 mt-2 me-2" role="button">Terms & Conditions</a>
            </div>

            <hr />
            <span className="card-foter">Last Updated On : 26/3/2024 | Version : 1.2.0</span>
          </div>
        </div>
      </div>

    </>
  )
}

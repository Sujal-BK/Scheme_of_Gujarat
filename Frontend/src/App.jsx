import {  Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Allscheme } from "./pages/Allscheme"
import { Signin} from "./components/Signin.jsx"
import { Signup } from "./components/Signup.jsx"
import { Navigation } from "./components/Navigation.jsx"

function App() {
    
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allscheme" element={<Allscheme />} />
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
         
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Admin from "./pages/Admin/Admin"
import Login from "./pages/Login/Login"

export const Layout = () => {
  /*una ruta se compone de una dirección y unos params, por ejemplo en profile le estamos pasando un username, 
  -un param se declara poniendo : y detrás el nombre del param - */

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

// import { useNavigate } from "react-router-dom"
import {NavLink } from "react-router-dom"
import "./Navbar.css"
// import { useDispatch, useSelector } from "react-redux"
// import { clearAuthToken } from "../../redux/authSlice"
import { useEffect, useState } from "react"

const Navbar = () => {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const token = useSelector((state) => state.auth.token)
  // const decode = useSelector((state) => state.auth.decode)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    }
    window.addEventListener("resize", handleResize)
    // limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // const handleLogout = () => {
  //   dispatch(clearAuthToken())
  //   navigate("/login", { replace: true })
  // }

  // const handleAdmin = () => {
  //   navigate("/admin", { replace: true })
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid nav-container">

          <NavLink to="/" className="navbar-brand">
          <div className="navbar-brand">
            Ana Pacheco García{" "}
          </div>
          </NavLink>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-end" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <div className="nav-link active" aria-current="page" >
                  Sobre mi
                </div>

              </li>
              <li className="nav-item">

                <div className="nav-link">
                  Mis proyectos
                </div>

              </li>
              <li className="nav-item">

                <div className="nav-link">
                  Contacto
                </div>

              </li>




            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

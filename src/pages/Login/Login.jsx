import { useEffect, useState } from "react"
import InputCustom from "../../components/InputCustom/InputCustom"
import "./Login.css"
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom"
import { useNavigate } from "react-router-dom"
import AlertCustom from "../../components/AlertCustom/AlertCustom"
import { useDispatch } from "react-redux"
import { setAuthToken } from "../../redux/authSlice"
import { CheckForm, checkAllEmpty, validator } from "../../utils/utils"
import Spinner from "../../components/Spinner/Spinner"
import { LoginUser } from "../../services/authServices"
import { decodeToken } from "react-jwt"

const Login = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [stateMessage, setStateMessage] = useState({
    message: "",
    className: "",
  })
  const [alert, setAlert] = useState(false)
  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
  })

  useEffect(() => {
    const isErrorClean = checkAllEmpty(userError)
    const isUserComplete = CheckForm(user)
    if (isErrorClean && isUserComplete) {
      setIsFormComplete(true)
    } else {
      setIsFormComplete(false)
    }
  }, [user, userError])

  const handleChange = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
    const error = validator(target.value, target.name)
    setUserError((prevState) => ({
      ...prevState,
      [target.name + "Error"]: error,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userLogged = await LoginUser(user)
      if (userLogged.success) {
        /* dispatch setea setAuthToken(la funcion del slicer) 
        con el token y el username que viene desde el back*/
        const decode = decodeToken(userLogged.token)
        dispatch(
          setAuthToken({
            token: userLogged.token,
            decode: decode,
          })
        )
        setAlert(true)
        setStateMessage({
          message: userLogged.message,
          className: "success",
        })

        setTimeout(() => {
          setAlert(false)
          navigate(`/user/${decode.username}`)
        }, 1200)
      }
    } catch (error) {
      setLoading(false)
      setAlert(true)
      setStateMessage({
        message: `${error}`,
        className: "danger",
      })
      setTimeout(() => {
        setAlert(false)
        navigate(`/login`)
      }, 1200)
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <>
      <div className="centered-container p-1">
        {loading ? (
          <Spinner />
        ) : alert ? (
          <div className="d-flex justify-content-center mt-3">
            <AlertCustom
              className={stateMessage.className}
              message={stateMessage.message}
            />
          </div>
        ) : (
          <div className="card container p-3">
            <div className="col-12">
              <h2 className="text-center"> Login </h2>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <InputCustom
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                    handleChange={handleChange}
                    placeholder={"Introduce tu email"}
                  />
                  <div className="error">{userError.emailError}</div>{" "}
                </div>
                <div className="input-container">
                  <InputCustom
                    label={"Contraseña"}
                    type={"password"}
                    name={"password"}
                    handleChange={handleChange}
                    placeholder={"Introduce tu contraseña"}
                  />
                  <div className="error">{userError.passwordError}</div>{" "}
                </div>
                {alert && (
                  <div className="center-flex mt-3">
                    <AlertCustom
                      className={stateMessage.className}
                      message={stateMessage.message}
                    />
                  </div>
                )}
                <input
                  className="hidden"
                  type="submit"
                  value="Iniciar sesión"
                />
              </form>
              <ButtonCustom
                text={"Login"}
                handleSubmit={handleSubmit}
                isFormComplete={isFormComplete}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Login


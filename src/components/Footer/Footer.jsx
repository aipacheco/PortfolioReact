import { useSelector } from "react-redux"
import "./Footer.css"

const Footer = () => {
  const token = useSelector((state) => state.auth.token)
  const decode = useSelector((state) => state.auth.decode)

  return (
    <>
     
    </>
  )
}

export default Footer

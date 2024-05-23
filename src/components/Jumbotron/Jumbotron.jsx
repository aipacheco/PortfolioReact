/* eslint-disable react/prop-types */
import "./Jumbotron.css"
const Jumbotron = ({ image, title, className }) => {
  return (
    <>
      <div className={`container-fluid jumbotron`}>
        <div className="card card-jumbotron text-bg-dark">
          <img src={image} className={`card-img  ${className}`} />
          <div className="card-img-overlay">
            <h1 className="card-title jumbo-title">{title}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jumbotron

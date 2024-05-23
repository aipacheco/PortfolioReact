/* eslint-disable react/prop-types */
import "./WorkCard.css"
const WorkCard = ({ title, text, location, from, to }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <hr />
          <div className="d-flex align-items-center">
            <span className="material-symbols-outlined location">
              location_on
            </span>
            <h6 className="card-subtitle text-muted">{location}</h6>
          </div>
          <p className="card-text">{text}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              {" "}
              {from} - {to}
            </small>
          </p>
        </div>
      </div>
    </>
  )
}

export default WorkCard

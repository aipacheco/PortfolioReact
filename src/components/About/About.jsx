import "./About.css"
const About = () => {
  return (
    <div className="container p-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="center">
              <img
                src="https://res.cloudinary.com/dptbxi3iu/image/upload/v1716374082/portfolio/2022-08-25_18.41.08_tgpbiq.jpg"
                className="img-fluid img-profile"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="center h-100">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import { useEffect, useState } from "react"
import About from "../../components/About/About"
import Jumbotron from "../../components/Jumbotron/Jumbotron"
import WorkCard from "../../components/WorkCard/WorkCard"
import Projects from "../../components/Projects/Projects"
import { GetStudies } from "../../services/studiesService"
import { GetWorks } from "../../services/workServices"

const Home = () => {
  const [studies, setStudies] = useState([])
  const [works, setWorks] = useState([])

  const fetchData = async () => {
    //loading
    try {
      const allStudies = await GetStudies()
      setStudies(allStudies.data)
      const allWorks = await GetWorks()
      setWorks(allWorks.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")
      const windowHeight = window.innerHeight
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          element.style.visibility = "visible"
          element.style.opacity = "1"
          element.classList.add("kenburns-top-left")
        } else {
          element.style.visibility = "hidden"
          element.style.opacity = "0"
          element.classList.remove("kenburns-top-left")
        }
      })
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <div id="About"></div>
      <Jumbotron
        image="https://res.cloudinary.com/dptbxi3iu/image/upload/v1716372759/portfolio/laptop-820274_1920_cz4rtp.jpg"
        title={"Sobre mí"}
        className="kenburns-top-left animate-on-scroll"
      />
      <About />
      <div className="container ">
        <h3 className="p-1">
          {" "}
          <strong>Formación FullStack</strong>{" "}
        </h3>
        {studies.length > 0 &&
          studies.map((study) => (
            <div key={study._id}>
              <WorkCard
                key={study._id}
                title={study.title}
                text={study.description}
                location={study.location}
                from={study.from}
                to={study.to}
              />
            </div>
          ))}
      </div>
      <div className="container mb-3">
        <h3 className="p-1">
          <strong>Experiencia laboral</strong>
        </h3>
        {works.length > 0 &&
          works.map((work) => (
            <div key={work._id}>
              <WorkCard
                key={work._id}
                title={work.title}
                text={work.description}
                location={work.location}
                from={work.from}
                to={work.to}
              />
            </div>
          ))}
      </div>
      <div id="Projects"></div>
      <Jumbotron
        image="https://res.cloudinary.com/dptbxi3iu/image/upload/v1716375458/portfolio/technology-1283624_1920_mrivsq.jpg"
        title={"Proyectos"}
        className="kenburns-top-left animate-on-scroll"
      />
      <div className="container mt-3">
        <Projects />
      </div>
      <div id="Contact"></div>
    </div>
  )
}

export default Home

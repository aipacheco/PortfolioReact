import { useEffect } from "react"
import About from "../../components/About/About"
import Jumbotron from "../../components/Jumbotron/Jumbotron"
import WorkCard from "../../components/WorkCard/WorkCard"

const Home = () => {
  
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
        <h3 className="p-1">Formación FullStack</h3>
        <WorkCard
          title={"Full Stack Developer"}
          text={
            "Formación intensiva de 12 semanas en tecnologías y metodologías ágiles, tales como JavaScript, TypeScript, ReactJS, Redux, NodeJS, Express, PHP, Laravel, calidad del software, Git y maquetación web."
          }
          location={"GeeksHubs Academy"}
          from={"01/2024"}
          to={"05/2024"}
        />
        <WorkCard
          title={"Full Stack Developer"}
          text={
            "Formación online de 18 semanas part-time en tecnologías tales como JavaScript, ReactJS, Bootstrap, Python, Flask, Git y maquetación web."
          }
          location={"4Geeks Academy"}
          from={"01/2023"}
          to={"06/2023"}
        />
      </div>
      <div className="container mb-3">
        <h3 className="p-1">Experiencia laboral</h3>
        <WorkCard
          title={"Operador de central de alarmas"}
          text={
            "Responsable de la supervisión y administración de sistemas de alarmas. Asunción de responsabilidades como líder técnico interino durante los períodos de vacaciones, incluyendo la supervisión del personal técnico, coordinación de tareas y resolución de problemas de mayor complejidad. Aplicación de habilidades técnicas avanzadas para mejorar la eficacia del sistema y del equipo de trabajo."
          }
          location={"Alert System"}
          from={"09/2018"}
          to={"03/2023"}
        />
        <WorkCard
          title={"Operador de central de alarmas"}
          text={
            "Gestión y supervisión de sistemas de alarmas. Identificación, diagnóstico y resolución eficiente de problemas técnicos complejos, asegurando la máxima operatividad y funcionalidad de los sistemas."
          }
          location={"Feix Electronics"}
          from={"06/2013"}
          to={"09/2018"}
        />
        <WorkCard
          title={"Operador de central de alarmas"}
          text={
            "Supervisión y administración de sistemas de alarmas en un entorno altamente exigente y de gran volumen de abonados. Identificación y resolución rápida de problemas técnicos, asegurando la continua operatividad de los sistemas. Comunicación con las partes interesadas, incluyendo servicios de emergencia."
          }
          location={"Redsa"}
          from={"12/2011"}
          to={"04/2013"}
        />
      </div>

      <div id="Projects"></div>
      <Jumbotron
        image="https://res.cloudinary.com/dptbxi3iu/image/upload/v1716375458/portfolio/technology-1283624_1920_mrivsq.jpg"
        title={"Proyectos"}
        className="kenburns-top-left animate-on-scroll"
      />
      <div id="Contact"></div>
    </div>
  )
}

export default Home

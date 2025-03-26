"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Mail, Github, Linkedin, User, BookOpen, Briefcase, Code, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showCursor, setShowCursor] = useState(true)

  const projects = [
    {
      title: " Reconocimiento Facial de Emociones",
      description: "Prueba de detección de emociones basada en la salida de parámetros de CLMTRACKR, es una librería JavaScript para ajustar modelos faciales a rostros en vídeos o imágenes. Actualmente se trata de una implementación de modelos locales restringidos ajustados por un desplazamiento medio de referencia regularizado, ajusta un modelo facial a un rostro en una imagen o vídeo a partir de una inicialización aproximada que costa de 70 puntos llamadas clasificadores, una vez iniciando el video, se capturan estos clasificadores en un Array vacío inicialmente.",
      technologies: ["HTML", "CSS", "JavaScript", "CLMTRACKR","Node.js", "3D.js"],
      link: "https://reconocimiento-facial-de-emociones.netlify.app/",
    },
    // {
    //   title: "Proyecto 2",
    //   description: "Descripción breve del proyecto 2. Tecnologías utilizadas y resultados obtenidos.",
    //   technologies: ["React", "Express", "MongoDB"],
    // },
    // {
    //   title: "Proyecto 3",
    //   description: "Descripción breve del proyecto 3. Tecnologías utilizadas y resultados obtenidos.",
    //   technologies: ["React", "Node.js", "MongoDB"],
    // },
    // {
    //   title: "Proyecto 4",
    //   description: "Descripción breve del proyecto 4. Tecnologías utilizadas y resultados obtenidos.",
    //   technologies: ["React", "Node.js", "MongoDB"],
    // },
  ]
  

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Pixel art background overlay */}
      <div className="fixed inset-0 bg-[url('/BACK.jpeg?height=32&width=32')] bg-repeat opacity-10 pointer-events-none" />

      {/* Game UI container */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with health bar */}
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full mr-4 border-2 border-white"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
                <div className="h-full bg-green-500 w-1/4"></div>
              </div>
              <div className="text-xs mt-1"> LEVEL 24</div>
            </div>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-green-400 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            HOLA, SOY ANTONIO
            {showCursor && <span className="text-green-400">_</span>}
          </motion.h1>

          <motion.p
            className="text-green-200 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            PRESS START TO EXPLORE
          </motion.p>
        </header>

        {/* Navigation */}
        <nav className="mb-8 border-2 border-green-500 p-4 bg-black bg-opacity-80 rounded-lg">
          <ul className="flex flex-wrap gap-2">
            {[
              { id: "home", label: "HOME", icon: <Home size={16} /> },
              { id: "about", label: "SOBRE MÍ", icon: <User size={16} /> },
              { id: "projects", label: "PROYECTOS", icon: <Code size={16} /> },
              { id: "education", label: "EDUCACIÓN", icon: <BookOpen size={16} /> },
              { id: "experience", label: "EXPERIENCIA", icon: <Briefcase size={16} /> },
              { id: "contact", label: "CONTACTO", icon: <Mail size={16} /> },
            ].map((item) => (
              <li key={item.id}>
                <Button
                  variant={activeSection === item.id ? "default" : "outline"}
                  className={`flex items-center gap-2 ${
                    activeSection === item.id
                      ? "bg-green-600 hover:bg-green-700 text-black"
                      : "border-green-500 text-green-400 hover:bg-green-900"
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.icon}
                  {item.label}
                  {activeSection === item.id && <ChevronRight size={16} />}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content sections */}
        <div className="border-2 border-green-500 p-6 bg-black bg-opacity-80 rounded-lg min-h-[400px]">
          {activeSection === "home" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl text-green-400 mb-4">BIENVENIDO A MI MUNDO</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="mb-4 text-green-200">
                  Colaboro en el desarrollo de experiencias inmersivas utilizando el motor gráfico Unity, enfocándome en tecnologías de realidad virtual, en las que he participado en proyectos como recorridos interactivos. Además, he incursionado en el desarrollo web, donde he adquirido conocimientos básicos en HTML, CSS y JavaScript..
                  </p>
                  <p className="mb-4 text-green-200">
                    Usa el menú de navegación para moverte entre las diferentes secciones.
                  </p>
                  <div className="mt-6">
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-black"
                      onClick={() => setActiveSection("about")}
                    >
                      COMENZAR AVENTURA <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-green-900 rounded-lg border-2 border-green-500 flex items-center justify-center">
                  <div className="text-center">
                  <img 
                  src="https://socialmedia.antonioloya.website/image/PERFIL.jpeg" 
                  alt="Avatar" 
                  className="w-64 h-64 mx-auto rounded-full border-2 border-white object-cover"
                />
                    <p className="text-green-300">AVATAR</p>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "about" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl text-green-400 mb-4">SOBRE MÍ</h2>
              <div className="space-y-4 text-green-200">
                <p>
                  ¡Hola! Soy Antonio De Jesús Loya Castillo, tengo cerca de 1 año de experiencia como desarrollador en la creación de experiencias inmersivas, Realidad Virtual (VR) y Realidad Aumentada (AR). Además, tengo la capacidad de utilizar el motor gráfico Unity. Tengo conocimientos en programación que abarcan C#, C++ y Java, además, estoy incursionado en el mundo del desarrollo web donde he adquirido conocimientos básicos en HTML, CSS, JavaScript y React. He estado explorando frameworks como Astro y Node.js, aunque mi experiencia hasta ahora ha sido breve. Estoy ansioso por profundizar en su uso para crear aplicaciones web más dinámicas y eficientes.

Actualmente, colaboro en el Laboratorio de Desarrollo de Aplicaciones de la División Académica de Ciencias y Tecnologías de la Información de la Universidad Juárez Autónoma de Tabasco. Esta experiencia me permite aplicar mis conocimientos y adquirir nuevas competencias en el campo tecnológico.

Me considero una persona curiosa y siempre en constante aprendizaje, buscando nuevas maneras de combinar tecnología y creatividad para resolver problemas y mejorar la experiencia de los usuarios.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-green-500 p-4 rounded-lg">
                    <h3 className="text-xl text-green-400 mb-2">HABILIDADES</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">►</span> Desarrollo Frontend
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">►</span> Desarrollo Backend
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">►</span> Diseño UI/UX
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">►</span> Gestión de Proyectos
                      </li>
                    </ul>
                  </div>
                  <div className="border border-green-500 p-4 rounded-lg">
                    <h3 className="text-xl text-green-400 mb-2">INTERESES</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">►</span> Videojuegos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">►</span> Tecnologías Emergentes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">►</span> Desarrollo Sostenible
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">►</span> Aprendizaje Continuo
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
                    {activeSection === "projects" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <h2 className="text-3xl text-green-400 mb-4">PROYECTOS</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                          <div key={index} className="border border-green-500 p-4 rounded-lg hover:bg-green-900 transition-colors cursor-pointer">
                            <div className="h-40 bg-green-800 rounded mb-4 flex items-center justify-center">
                              <Code size={48} className="text-green-300" />
                            </div>
                            <h3 className="text-xl text-green-400 mb-2">{project.title}</h3>
                            <p className="text-green-200 mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-green-800 text-green-200 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                    {/* Botón "Ver Más" al lado de las tecnologías */}
                    <div className="mt-4 text-right">
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-black"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        VER MÁS
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {activeSection === "education" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl text-green-400 mb-4">EDUCACIÓN</h2>
              <div className="space-y-6">
                {[
                  {
                    degree: "Ingeniería en Sistemas Computacionales",
                    institution: "Universidad Juárez Autónoma de Tabasco",
                    period: " 2019 - 2024",
                    description: "Durante mi formación en Ingeniería en Sistemas Computacionales, desarrollé habilidades en programación, diseño y optimización de sistemas. Destaco mi participación en proyectos de desarrollo de software utilizando lenguajes como Java y C# así como en la implementación de aplicaciones web y móviles. También adquirí experiencia en metodologías ágiles como Scrum. Participé en proyectos que tienen un alto impacto social en conjunto de tecnologías como la Realidad Aumentada (RA) y la Realidad Virtual (VR).",
                  },
                  {
                    degree: "Honores: Medalla HOMO TECHNOLOGICUS",
                    institution: "Universidad Juárez Autónoma de Tabasco",
                    period: "2024",
                    description: " Por la participación en proyectos universitarios que trascienden.",
                  },
                  // {
                  //   degree: "Certificación en Desarrollo Frontend",
                  //   institution: "Academia Web",
                  //   period: "2019",
                  //   description: "Especialización en React, Angular y Vue.js.",
                  // },
                ].map((edu, index) => (
                  <div key={index} className="border border-green-500 p-4 rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-green-500"></div>
                    <div className="ml-4">
                      <h3 className="text-xl text-green-400 mb-1">{edu.degree}</h3>
                      <p className="text-green-300 mb-2">{edu.institution}</p>
                      <p className="text-green-200 text-sm mb-3">{edu.period}</p>
                      <p className="text-green-200">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "experience" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl text-green-400 mb-4">EXPERIENCIA</h2>
              <div className="space-y-6">
                {[
                  {
                    position: "Prestador de servicio social.",
                    company: "Universidad Juárez Autónoma de Tabasco.",
                    period: "Agosto 2023 ",
                    description:
                      "Colaboré durante 6 meses junto con la División Académica de Ciencias y Tecnologías de la Información de la Universidad Juárez Autónoma de Tabasco en el desarrollo de experiencias inmersivas, haciendo un recorrido virtual, utilizando Unity como motor gráfico con el lenguaje C# y Blender para el modelado 3D. Durante este periodo se utilizaron técnicas de optimización como Occlusion Culling, LOD (Level of Detail), Billboard entre otras.",
                      link: "https://casa-cacao.ujat.mx/" // Link específico
                  },
                  {
                    position: "Web de reconocimiento facial",
                    company: " Escuela Normal de Educación Especial",
                    period: "Septiembre 2023",
                    description:
                      "Colaboré en conjunto con profesores y alumnos en la realización de una App Web para el Reconocimiento Facial y así poder medir los niveles de atención de los estudiantes con el principal objetivo de brindar soluciones ante esta problemática.",
                      link: "https://reconocimiento-facial-de-emociones.netlify.app/" // Link específico
                  },
                  {
                    position: " Servicio social-colaborador en proyecto de Realidad Aumetnada (RA)",
                    company: " Universidad Juárez Autónoma de Tabasco",
                    period: "Noviembre 2023",
                    description: " Tuve la experiencia de participar en el nuevo Laboratorio de Desarrollo de Apps (X DEV LAB) de la División Académica de Ciencias y Tecnologías de la Información. Colaboré en la creación de una App de Realidad Aumentada (RA) utilizando Unity como entorno de desarrollo en conjunto de Vuforia Engine.",
                    link: "https://laguna-ilusiones.ujat.mx/app-ra2.html" // Link específico
                  },
                 
                  {
                    position: " Prácticas profesionales-recorrido virtual",
                    company: " Universidad Juárez Autónoma de Tabasco",
                    period: " Abril 2024",
                    description: " Colaboré en la creación de un zoológico virtual para una red itinerante para la conservación sustentable de organismos acuáticos de Tabasco, utilizando Unity como motor gráfico, utilizando el lenguaje de programación C# y Blender para crear modelos 3d.",
                    link: "https://pescarte.ujat.mx/virtual/" // Link específico
                  },
                  {
                    position: "Prácticas profesionales",
                    company: " Universidad Juárez Autónoma de Tabasco",
                    period: "Agosto 2024",
                    description: "Colaboré en la creación de modelos 3D de plantas que se encuentran en el parque la pólvora del estado de Tabasco utilizando Blender, además de trabajar en conjunto para la realización de una página web que busca resaltar la importancia de cohabitar y reconectar con la naturaleza y la sociedad en el estado de Tabasco.",
                    link: "" // Link específico
                  },
                  {
                    position: " Trabajo de apoyo",
                    company: " Universidad Juárez Autónoma de Tabasco",
                    period: " Actualidad...",
                    description: "Colaboro en futuros proyectos junto con el Laboratorio de Desarrollo de Apps (X DEV LAB) de la División Académica de Ciencias y Tecnologías de la Información.",
                    link: "" // Link específico
                  },
                ].map((exp, index) => (
                  <div key={index} className="border border-green-500 p-4 rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-green-600"></div>
                    <div className="ml-4">
                      <h3 className="text-xl text-green-400 mb-1">{exp.position}</h3>
                      <p className="text-green-300 mb-2">{exp.company}</p>
                      <p className="text-green-200 text-sm mb-3">{exp.period}</p>
                      <p className="text-green-200">{exp.description}</p>
                      {/* Condicionalmente mostramos el botón si hay un enlace */}
                      {exp.link && (
                        <div className="mt-4 text-right">
                          <Button
                            className="bg-green-600 hover:bg-green-700 text-black"
                            onClick={() => window.open(exp.link, "_blank")}
                          >
                            VER MÁS
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
         {activeSection === "contact" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl text-green-400 mb-4">CONTACTO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <p className="text-green-200 mb-4">
                  ¿Interesado en trabajar juntos? ¡Contáctame a través de cualquiera de estos canales!
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:antonioloya1228@hotmail.com"
                    className="flex items-center gap-3 text-green-300 hover:text-green-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span>Correo</span> {/* Aquí se muestra el texto genérico */}
                  </Link>

                  <Link
                    href="https://github.com/AntonioLoya"
                    className="flex items-center gap-3 text-green-300 hover:text-green-100 transition-colors"
                    target="_blank" // Esto abre el enlace en una nueva pestaña
                  >
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center">
                      <Github size={20} />
                    </div>
                    <span>Ir a GitHub</span> {/* Texto genérico para GitHub */}
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/antonio-de-jes%C3%BAs-loya-castillo-8802182a3/"
                    className="flex items-center gap-3 text-green-300 hover:text-green-100 transition-colors"
                    target="_blank" // Esto abre el enlace en una nueva pestaña
                  >
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center">
                      <Linkedin size={20} />
                    </div>
                    <span>Ir a LinkedIn</span> {/* Texto genérico para LinkedIn */}
                  </Link>

                  {/* Agregar enlace para descargar CV */}
                  <a
                    href="/CV_antonio_loya.pdf"
                    download
                    className="inline-block py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Descargar CV
                  </a>
                </div>
              </div>

                {/* <div className="border border-green-500 p-4 rounded-lg bg-green-900 bg-opacity-30">
                  <h3 className="text-xl text-green-400 mb-4">ENVIAR MENSAJE</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-green-300 mb-2">Nombre</label>
                      <input
                        type="text"
                        className="w-full bg-black border border-green-500 rounded p-2 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-green-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-black border border-green-500 rounded p-2 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-green-300 mb-2">Mensaje</label>
                      <textarea className="w-full bg-black border border-green-500 rounded p-2 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 h-32"></textarea>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-black">ENVIAR MENSAJE</Button>
                  </div>
                </div> */}
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer with game stats */}
        <footer className="mt-8 text-green-400 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-green-500 pt-4">
          <div className="mb-4 md:mb-0">XP: 9999 | NIVEL: 24</div>
          <div>© 2025 Antonio de Jesús Loya Castillo | TODOS LOS DERECHOS RESERVADOS</div>
        </div>
      </footer>
      </div>
    </div>
  )
}


"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  User,
  BookOpen,
  Briefcase,
  Code,
  Home,
  ExternalLink,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { Typewriter } from "react-simple-typewriter"
import PixelCursor from "@/components/pixel-cursor"
import LoadingScreen from "@/components/loading-screen"
import SoundToggle from "@/components/sound-toggle"
import { useIsMobile } from "@/hooks/use-is-mobile"
// Importar el nuevo hook
import { useSoundEffects } from "@/hooks/use-sound-effects"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showCursor, setShowCursor] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const isMobile = useIsMobile()
  const { toast } = useToast()
  const { playClickSound, playHoverSound } = useSoundEffects(soundEnabled)

  const projects = [
    {
      title: "Reconocimiento Facial de Emociones",
      description:
        "Prueba de detección de emociones basada en la salida de parámetros de CLMTRACKR, es una librería JavaScript para ajustar modelos faciales a rostros en vídeos o imágenes. Actualmente se trata de una implementación de modelos locales restringidos ajustados por un desplazamiento medio de referencia regularizado, ajusta un modelo facial a un rostro en una imagen o vídeo a partir de una inicialización aproximada que costa de 70 puntos llamadas clasificadores, una vez iniciando el video, se capturan estos clasificadores en un Array vacío inicialmente.",
      technologies: ["HTML", "CSS", "JavaScript", "CLMTRACKR", "Node.js", "3D.js"],
      image: "/fa.png",
      link: "https://reconocimiento-facial-de-emociones.netlify.app/",
    },
    {
      title: "Recorrido Virtual Casa Cacao",
      description:
        "Desarrollo de experiencia inmersiva utilizando Unity como motor gráfico con el lenguaje C# y Blender para el modelado 3D. Durante este proyecto se utilizaron técnicas de optimización como Occlusion Culling, LOD (Level of Detail), Billboard entre otras para crear un recorrido virtual interactivo.",
      technologies: ["Unity", "C#", "Blender", "3D Modeling", "VR"],
      image: "/rv.jpeg",
      link: "https://casa-cacao.ujat.mx/",
    },
    {
      title: "App de Realidad Aumentada",
      description:
        "Aplicación de Realidad Aumentada (RA) desarrollada en el Laboratorio de Desarrollo de Apps (X DEV LAB) de la UJAT. Utiliza Unity como entorno de desarrollo en conjunto con Vuforia Engine para crear experiencias interactivas aumentadas.",
      technologies: ["Unity", "Vuforia", "C#", "AR", "Mobile Development"],
      image: "/ra.jpeg",
      link: "https://laguna-ilusiones.ujat.mx/app-ra2.html",
    },
    {
      title: "Zoológico Virtual",
      description:
        "Recorrido virtual de un zoológico para una red itinerante para la conservación sustentable de organismos acuáticos de Tabasco. Desarrollado con Unity como motor gráfico, utilizando el lenguaje de programación C# y Blender para crear modelos 3D detallados de los animales y el entorno.",
      technologies: ["Unity", "C#", "Blender", "3D Modeling", "Virtual Tour"],
      image: "/zoo.png",
      link: "https://pescarte.ujat.mx/virtual/",
    },
  ]

  const experiences = [
    {
      position: "Prestador de servicio social",
      company: "Universidad Juárez Autónoma de Tabasco",
      period: "Agosto 2023",
      description:
        "Colaboré durante 6 meses junto con la División Académica de Ciencias y Tecnologías de la Información de la Universidad Juárez Autónoma de Tabasco en el desarrollo de experiencias inmersivas, haciendo un recorrido virtual, utilizando Unity como motor gráfico con el lenguaje C# y Blender para el modelado 3D. Durante este periodo se utilizaron técnicas de optimización como Occlusion Culling, LOD (Level of Detail), Billboard entre otras.",
      link: "https://casa-cacao.ujat.mx/",
    },
    {
      position: "Web de reconocimiento facial",
      company: "Escuela Normal de Educación Especial",
      period: "Septiembre 2023",
      description:
        "Colaboré en conjunto con profesores y alumnos en la realización de una App Web para el Reconocimiento Facial y así poder medir los niveles de atención de los estudiantes con el principal objetivo de brindar soluciones ante esta problemática.",
      link: "https://reconocimiento-facial-de-emociones.netlify.app/",
    },
    {
      position: "Servicio social-colaborador en proyecto de Realidad Aumentada (RA)",
      company: "Universidad Juárez Autónoma de Tabasco",
      period: "Noviembre 2023",
      description:
        "Tuve la experiencia de participar en el nuevo Laboratorio de Desarrollo de Apps (X DEV LAB) de la División Académica de Ciencias y Tecnologías de la Información. Colaboré en la creación de una App de Realidad Aumentada (RA) utilizando Unity como entorno de desarrollo en conjunto de Vuforia Engine.",
      link: "https://laguna-ilusiones.ujat.mx/app-ra2.html",
    },
    {
      position: "Prácticas profesionales-recorrido virtual",
      company: "Universidad Juárez Autónoma de Tabasco",
      period: "Abril 2024",
      description:
        "Colaboré en la creación de un zoológico virtual para una red itinerante para la conservación sustentable de organismos acuáticos de Tabasco, utilizando Unity como motor gráfico, utilizando el lenguaje de programación C# y Blender para crear modelos 3d.",
      link: "https://pescarte.ujat.mx/virtual/",
    },
    {
      position: "Prácticas profesionales",
      company: "Universidad Juárez Autónoma de Tabasco",
      period: "Agosto 2024",
      description:
        "Colaboré en la creación de modelos 3D de plantas que se encuentran en el parque la pólvora del estado de Tabasco utilizando Blender, además de trabajar en conjunto para la realización de una página web que busca resaltar la importancia de cohabitar y reconectar con la naturaleza y la sociedad en el estado de Tabasco.",
      link: "",
    },
    {
      position: "Trabajo de apoyo",
      company: "Universidad Juárez Autónoma de Tabasco",
      period: "Actualidad...",
      description:
        "Colaboro en futuros proyectos junto con el Laboratorio de Desarrollo de Apps (X DEV LAB) de la División Académica de Ciencias y Tecnologías de la Información.",
      link: "",
    },
  ]

  const education = [
    {
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Juárez Autónoma de Tabasco",
      period: "2019 - 2024",
      description:
        "Durante mi formación en Ingeniería en Sistemas Computacionales, desarrollé habilidades en programación, diseño y optimización de sistemas. Destaco mi participación en proyectos de desarrollo de software utilizando lenguajes como Java y C# así como en la implementación de aplicaciones web y móviles. También adquirí experiencia en metodologías ágiles como Scrum. Participé en proyectos que tienen un alto impacto social en conjunto de tecnologías como la Realidad Aumentada (RA) y la Realidad Virtual (VR).",
    },
    {
      degree: "Honores: Medalla HOMO TECHNOLOGICUS",
      institution: "Universidad Juárez Autónoma de Tabasco",
      period: "2024",
      description: "Por la participación en proyectos universitarios que trascienden.",
    },
  ]

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleNavClick = (section: string) => {
    playClickSound()
    setActiveSection(section)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    playClickSound()
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarme. Te responderé lo antes posible.",
      variant: "default",
    })
  }

  // if (isLoading) {
  //   return <LoadingScreen level={24} />
  // }

  return (
    <div className="min-h-screen bg-black text-white font-pixel overflow-hidden relative">
      {!isMobile && <PixelCursor />}

      {/* Pixel art background overlay */}
      <div className="fixed inset-0 bg-[url('/descargar.gif')] bg-repeat opacity-10 pointer-events-none" />

      {/* Scanlines effect */}
      <div className="fixed inset-0 bg-scanlines opacity-10 pointer-events-none z-10"></div>

      {/* Game UI container */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with health bar and sound toggle */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center flex-1">
              <motion.div
                className="w-12 h-12 bg-green-500 rounded-full mr-4 border-2 border-white overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="https://socialmedia.antonioloya.website/image/PERFIL.jpeg"
                  alt="Antonio Loya"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex-1">
                <div className="h-5 bg-gray-800 rounded-full overflow-hidden border border-gray-600 pixel-corners">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-600 to-green-400"
                    initial={{ width: 0 }}
                    animate={{ width: "24%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-green-400 font-bold">DEVELOPER LVL 24</span>
                  <span className="text-green-400">XP: 2400/10000</span>
                </div>
              </div>
            </div>
            <SoundToggle enabled={soundEnabled} setEnabled={setSoundEnabled} />
          </div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold text-green-400 mb-2 tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typewriter
              words={["HOLA, SOY ANTONIO"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </motion.h1>

          <motion.p
            className="text-green-200 mb-4 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            PRESS START TO EXPLORE
          </motion.p>
        </header>

        {/* Navigation */}
        <nav className="mb-8 border-2 border-green-500 p-4 bg-black bg-opacity-80 rounded-lg pixel-corners">
          <ul className="flex flex-wrap gap-2">
            {[
              { id: "home", label: "HOME", icon: <Home size={16} /> },
              { id: "about", label: "SOBRE MÍ", icon: <User size={16} /> },
              { id: "projects", label: "PROYECTOS", icon: <Code size={16} /> },
              { id: "skills", label: "HABILIDADES", icon: <BookOpen size={16} /> },
              { id: "education", label: "EDUCACIÓN", icon: <BookOpen size={16} /> },
              { id: "experience", label: "EXPERIENCIA", icon: <Briefcase size={16} /> },
              { id: "contact", label: "CONTACTO", icon: <Mail size={16} /> },
            ].map((item) => (
              <li key={item.id}>
                <Button
                  variant={activeSection === item.id ? "default" : "outline"}
                  className={`flex items-center gap-2 transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-green-600 hover:bg-green-700 text-black font-bold"
                      : "border-green-500 text-green-400 hover:bg-green-900"
                  }`}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={playHoverSound}
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
        <div className="border-2 border-green-500 p-6 bg-black bg-opacity-80 rounded-lg min-h-[500px] pixel-corners">
          <AnimatePresence mode="wait">
            {activeSection === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-3xl text-green-400 mb-4 glitch-text" data-text="BIENVENIDO A MI MUNDO">
                  BIENVENIDO A MI MUNDO
                </h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <p className="mb-4 text-green-200 leading-relaxed">
                      Colaboro en el desarrollo de experiencias inmersivas utilizando el motor gráfico Unity,
                      enfocándome en tecnologías de realidad virtual, en las que he participado en proyectos como
                      recorridos interactivos. Además, he incursionado en el desarrollo web, donde he adquirido
                      conocimientos básicos en HTML, CSS y JavaScript.
                    </p>
                    <p className="mb-4 text-green-200 leading-relaxed">
                      Usa el menú de navegación para moverte entre las diferentes secciones y descubrir más sobre mi
                      trabajo y experiencia.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-black font-bold"
                        onClick={() => handleNavClick("about")}
                        onMouseEnter={playHoverSound}
                      >
                        COMENZAR AVENTURA <ChevronRight size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-500 text-green-400 hover:bg-green-900"
                        onClick={() => {
                          playClickSound()
                          window.open("/CV_antonio_loya.pdf", "_blank")
                        }}
                        onMouseEnter={playHoverSound}
                      >
                        DESCARGAR CV <Download size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                  <motion.div
                    className="w-full md:w-1/3 aspect-square bg-green-900/30 rounded-lg border-2 border-green-500 flex items-center justify-center overflow-hidden pixel-corners"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-center p-4">
                      <div className="w-32 h-32 mx-auto bg-green-500 rounded-full mb-4 border-2 border-white overflow-hidden">
                        <img
                          src="https://socialmedia.antonioloya.website/image/PERFIL.jpeg"
                          alt="Antonio Loya"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl text-green-300 mb-2">ANTONIO LOYA</h3>
                      <p className="text-green-400 font-bold">DESARROLLADOR VR/AR</p>
                      <div className="flex justify-center gap-4 mt-4">
                        <motion.a
                          href="https://github.com/AntonioLoya"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          className="text-green-300 hover:text-white"
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          href="https://www.linkedin.com/in/antonio-de-jes%C3%BAs-loya-castillo-8802182a3/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          className="text-green-300 hover:text-white"
                        >
                          <Linkedin size={20} />
                        </motion.a>
                        <motion.a
                          href="mailto:antonioloya1228@hotmail.com"
                          whileHover={{ y: -3 }}
                          className="text-green-300 hover:text-white"
                        >
                          <Mail size={20} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeSection === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl text-green-400 mb-4 glitch-text" data-text="SOBRE MÍ">
                  SOBRE MÍ
                </h2>
                <div className="space-y-6 text-green-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <motion.div
                        className="bg-green-900/30 border-2 border-green-500 rounded-lg p-4 h-full pixel-corners"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src="https://socialmedia.antonioloya.website/image/PERFIL.jpeg"
                          alt="Antonio Loya"
                          className="w-full h-auto rounded-lg mb-4 pixel-corners"
                        />
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-green-300">Nombre:</span>
                            <span>Antonio De Jesús Loya Castillo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-300">Ubicación:</span>
                            <span>Tabasco, México</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-300">Experiencia:</span>
                            <span>1+ año</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-300">Disponible:</span>
                            <span className="text-green-400">Sí</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="leading-relaxed mb-4">
                        ¡Hola! Soy Antonio De Jesús Loya Castillo, tengo cerca de 1 año de experiencia como
                        desarrollador en la creación de experiencias inmersivas, Realidad Virtual (VR) y Realidad
                        Aumentada (AR). Además, tengo la capacidad de utilizar el motor gráfico Unity.
                      </p>
                      <p className="leading-relaxed mb-4">
                        Tengo conocimientos en programación que abarcan C#, C++ y Java, además, estoy incursionado en el
                        mundo del desarrollo web donde he adquirido conocimientos básicos en HTML, CSS, JavaScript y
                        React. He estado explorando frameworks como Astro y Node.js, aunque mi experiencia hasta ahora
                        ha sido breve. Estoy ansioso por profundizar en su uso para crear aplicaciones web más dinámicas
                        y eficientes.
                      </p>
                      <p className="leading-relaxed mb-4">
                        Actualmente, colaboro en el Laboratorio de Desarrollo de Aplicaciones de la División Académica
                        de Ciencias y Tecnologías de la Información de la Universidad Juárez Autónoma de Tabasco. Esta
                        experiencia me permite aplicar mis conocimientos y adquirir nuevas competencias en el campo
                        tecnológico.
                      </p>
                      <p className="leading-relaxed">
                        Me considero una persona curiosa y siempre en constante aprendizaje, buscando nuevas maneras de
                        combinar tecnología y creatividad para resolver problemas y mejorar la experiencia de los
                        usuarios.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <motion.div
                          className="border border-green-500 p-4 rounded-lg pixel-corners"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h3 className="text-xl text-green-400 mb-2">HABILIDADES</h3>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">►</span> Desarrollo de VR/AR
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">►</span> Unity y C#
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">►</span> Modelado 3D con Blender
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">►</span> Desarrollo Web Básico
                            </li>
                          </ul>
                        </motion.div>
                        <motion.div
                          className="border border-green-500 p-4 rounded-lg pixel-corners"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h3 className="text-xl text-green-400 mb-2">INTERESES</h3>
                          <ul className="space-y-1">
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
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl text-green-400 mb-4 glitch-text" data-text="PROYECTOS">
                  PROYECTOS
                </h2>
                <p className="text-green-200 mb-6">
                  Una selección de mis proyectos más destacados en VR/AR y desarrollo web.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="border-2 border-green-500 rounded-lg overflow-hidden hover:border-green-400 transition-colors pixel-corners"
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-xl text-white font-bold">{project.title}</h3>
                        </div>
                      </div>
                      <div className="p-4 bg-green-900/20">
                        <div className="h-32 overflow-y-auto mb-4 text-green-200 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-900">
                          <p>{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-green-800 text-green-200 rounded-md text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <Button
                            className="bg-green-600 hover:bg-green-700 text-black"
                            onClick={() => {
                              playClickSound()
                              window.open(project.link, "_blank")
                            }}
                            onMouseEnter={playHoverSound}
                          >
                            VER MÁS <ExternalLink size={14} className="ml-1" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl text-green-400 mb-4 glitch-text" data-text="HABILIDADES">
                  HABILIDADES
                </h2>
                <p className="text-green-200 mb-6">
                  Mis habilidades técnicas y profesionales, desarrolladas a lo largo de mi formación y experiencia.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl text-green-300 mb-4 border-b border-green-500 pb-2">Desarrollo VR/AR</h3>

                    {[
                      { name: "Unity", level: 70 },
                      { name: "C#", level: 60 },
                      { name: "Modelado 3D", level: 50 },
                      { name: "Vuforia", level: 30 },
                      { name: "Optimización 3D", level: 60 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-green-200">{skill.name}</span>
                          <span className="text-green-400">{skill.level}/100</span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={skill.level}
                            className="h-2 bg-green-900"
                            indicatorClassName="bg-gradient-to-r from-green-500 to-green-300"
                          />
                          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            {Array.from({ length: 10 }).map((_, i) => (
                              <div
                                key={i}
                                className="absolute top-0 bottom-0 w-px bg-black opacity-30"
                                style={{ left: `${(i + 1) * 10}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl text-green-300 mb-4 border-b border-green-500 pb-2">Desarrollo Web</h3>

                    {[
                      { name: "HTML/CSS", level: 70 },
                      { name: "JavaScript", level: 60 },
                      { name: "React", level: 50 },
                      { name: "Node.js", level: 30 },
                      { name: "Astro", level: 20 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-green-200">{skill.name}</span>
                          <span className="text-green-400">{skill.level}/100</span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={skill.level}
                            className="h-2 bg-green-900"
                            indicatorClassName="bg-gradient-to-r from-green-500 to-green-300"
                          />
                          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            {Array.from({ length: 10 }).map((_, i) => (
                              <div
                                key={i}
                                className="absolute top-0 bottom-0 w-px bg-black opacity-30"
                                style={{ left: `${(i + 1) * 10}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl text-green-300 mb-4 border-b border-green-500 pb-2">
                    Lenguajes de Programación
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[
                      { name: "C#", level: 60 },
                      { name: "Java", level: 60 },
                      { name: "C++", level: 60 },
                      { name: "JavaScript", level: 60 },
                      { name: "Python", level: 20 },
                      { name: "TypeScript", level: 30 },
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        className="border border-green-500 rounded-lg p-4 pixel-corners"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                      >
                        <div className="text-center text-green-300 mb-2">{skill.name}</div>
                        <Progress
                          value={skill.level}
                          className="h-2 bg-green-900"
                          indicatorClassName="bg-gradient-to-r from-green-500 to-green-300"
                        />
                        <div className="text-right text-xs text-green-400 mt-1">{skill.level}%</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl text-green-300 mb-4 border-b border-green-500 pb-2">Herramientas</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {["Unity", "Blender", "Visual Studio", "VS Code", "Git", "GitHub", "Vuforia", "MongoDB"].map(
                      (tool, index) => (
                        <motion.div
                          key={index}
                          className="border border-green-500 rounded-lg p-3 text-center text-green-200 pixel-corners"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                        >
                          {tool}
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl text-green-400 mb-4 glitch-text" data-text="EDUCACIÓN">
                  EDUCACIÓN
                </h2>
                <div className="space-y-8 relative">
                  {/* Timeline line */}
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-green-500"></div>

                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-10"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1.5 w-7 h-7 bg-green-600 border-2 border-green-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                      </div>

                      <div className="border-2 border-green-500 rounded-lg p-4 bg-black bg-opacity-50 pixel-corners">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h3 className="text-xl text-green-400 font-bold">{edu.degree}</h3>
                          <span className="text-green-300 text-sm">{edu.period}</span>
                        </div>
                        <p className="text-green-200 font-semibold mb-3">{edu.institution}</p>
                        <p className="text-green-100">{edu.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl text-green-400 mb-4 glitch-text" data-text="EXPERIENCIA">
                  EXPERIENCIA
                </h2>
                <div className="space-y-8 relative">
                  {/* Timeline line */}
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-green-500"></div>

                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-10"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1.5 w-7 h-7 bg-green-600 border-2 border-green-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                      </div>

                      <div className="border-2 border-green-500 rounded-lg p-4 bg-black bg-opacity-50 pixel-corners">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h3 className="text-xl text-green-400 font-bold">{exp.position}</h3>
                          <span className="text-green-300 text-sm">{exp.period}</span>
                        </div>
                        <p className="text-green-200 font-semibold mb-3">{exp.company}</p>
                        <p className="text-green-100 mb-4">{exp.description}</p>

                        {exp.link && (
                          <div className="text-right">
                            <Button
                              className="bg-green-600 hover:bg-green-700 text-black"
                              onClick={() => {
                                playClickSound()
                                window.open(exp.link, "_blank")
                              }}
                              onMouseEnter={playHoverSound}
                            >
                              VER PROYECTO <ExternalLink size={14} className="ml-1" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl text-green-400 mb-4 glitch-text" data-text="CONTACTO">
                  CONTACTO
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <p className="text-green-200 mb-4 leading-relaxed">
                      ¿Interesado en trabajar juntos o tienes alguna pregunta? ¡Contáctame a través de cualquiera de
                      estos canales!
                    </p>

                    <div className="space-y-6">
                      <motion.a
                        href="mailto:antonioloya1228@hotmail.com"
                        className="flex items-center gap-4 text-green-300 hover:text-green-100 transition-colors p-4 border border-green-500 rounded-lg pixel-corners"
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                      >
                        <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center">
                          <Mail size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold">Email</h3>
                          <span>antonioloya1228@hotmail.com</span>
                        </div>
                      </motion.a>

                      <motion.a
                        href="https://github.com/AntonioLoya"
                        className="flex items-center gap-4 text-green-300 hover:text-green-100 transition-colors p-4 border border-green-500 rounded-lg pixel-corners"
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center">
                          <Github size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold">GitHub</h3>
                          <span>github.com/AntonioLoya</span>
                        </div>
                      </motion.a>

                      <motion.a
                        href="https://www.linkedin.com/in/antonio-de-jes%C3%BAs-loya-castillo-8802182a3/"
                        className="flex items-center gap-4 text-green-300 hover:text-green-100 transition-colors p-4 border border-green-500 rounded-lg pixel-corners"
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center">
                          <Linkedin size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold">LinkedIn</h3>
                          <span>Antonio De Jesús Loya Castillo</span>
                        </div>
                      </motion.a>
                    </div>

                    <motion.div
                      className="p-4 border border-green-500 rounded-lg bg-green-900/20 pixel-corners"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-xl text-green-400 mb-2">Disponibilidad</h3>
                      <p className="text-green-200">
                        Actualmente estoy <span className="text-green-400 font-bold">disponible</span> para proyectos
                        freelance y oportunidades a tiempo completo.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-sm">Online - Respuesta en 24h</span>
                      </div>
                    </motion.div>

                    <motion.a
                      href="/CV_antonio_loya.pdf"
                      download
                      className="flex items-center justify-center gap-2 py-3 px-6 bg-green-600 text-black font-bold rounded-lg hover:bg-green-700 transition-colors pixel-corners"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={20} />
                      DESCARGAR CV
                    </motion.a>
                  </div>

                  {/* <motion.div
                    className="border-2 border-green-500 p-6 rounded-lg bg-green-900/20 pixel-corners"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl text-green-400 mb-4">ENVIAR MENSAJE</h3>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label className="block text-green-300 mb-2">Nombre</label>
                        <input
                          type="text"
                          className="w-full bg-black border-2 border-green-500 rounded-lg p-3 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 pixel-corners"
                          placeholder="Tu nombre"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-green-300 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full bg-black border-2 border-green-500 rounded-lg p-3 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 pixel-corners"
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-green-300 mb-2">Asunto</label>
                        <input
                          type="text"
                          className="w-full bg-black border-2 border-green-500 rounded-lg p-3 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 pixel-corners"
                          placeholder="Asunto del mensaje"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-green-300 mb-2">Mensaje</label>
                        <textarea
                          className="w-full bg-black border-2 border-green-500 rounded-lg p-3 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 h-32 pixel-corners"
                          placeholder="Tu mensaje aquí..."
                          required
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-3 rounded-lg transition-colors pixel-corners"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onMouseEnter={playHoverSound}
                      >
                        ENVIAR MENSAJE
                      </motion.button>
                    </form>
                  </motion.div> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer with game stats */}
        <footer className="mt-8 text-green-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-green-500 pt-4 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="mr-2">XP:</span>
                <div className="w-20 h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[24%]"></div>
                </div>
                <span className="ml-2">2400/10000</span>
              </div>
              <div>NIVEL: 24</div>
            </div>
            <div>© 2025 ANTONIO DE JESÚS LOYA CASTILLO | TODOS LOS DERECHOS RESERVADOS</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

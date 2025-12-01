import { useState } from 'react'
import './App.css'
import { NavBarFixed } from './components/NavBarFixed.jsx'
import { Testimonio } from './components/Testimonio.jsx'
import { Titulo } from './components/Titulo.jsx'
import AboutPage from './components/AboutPage.jsx'
import CTestimonio from './models/CTestimonio.jsx'
import { Footer } from './components/Footer.jsx'
import { Producs } from './components/Productos.jsx'

const testimonios = [
  new CTestimonio(
    'Nicolás',
    'Sandoval',
    'AnimeFlv',
    'Analista Programador',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id possimus cupiditate nostrum ab nobis praesentium blanditiis nihil, quam dolorum obcaecati voluptates in quae ea molestias fugiat aut at! Quos ut tempora nostrum deleniti possimus alias laudantium! Ab, deserunt commodi? Perferendis id molestias ut quidem inventore voluptatum quisquam, beatae nesciunt!',
    '/src/imgs/pexels-olly-839011.jpg'
  ),
  new CTestimonio(
    'Nicolás',
    'Sandoval',
    'AnimeFlv',
    'Analista Programador',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id possimus cupiditate nostrum ab nobis praesentium blanditiis nihil, quam dolorum obcaecati voluptates in quae ea molestias fugiat aut at! Quos ut tempora nostrum deleniti possimus alias laudantium! Ab, deserunt commodi? Perferendis id molestias ut quidem inventore voluptatum quisquam, beatae nesciunt!',
    '/src/imgs/pexels-elletakesphotos-1680172.jpg'
  ),
]

const verTestimonios = () => {
  return (
    <section className="container p-2">
      <Titulo />
      <div className="row mb-2">
        {testimonios.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            apellido={testimonio.apellido}
            empresa={testimonio.empresa}
            cargo={testimonio.cargo}
            testimonio={testimonio.testimonio}
            img={testimonio.img}
          />
        ))}
      </div>
    </section>
  )
}

// Función de callback para cambiar la página

function App() {
  // 1. Estado para manejar la página actual
  const [currentPage, setCurrentPage] = useState('home')
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return verTestimonios()
      case 'about':
        return <AboutPage />
      case 'products':
        return <Producs />
      default:
        return verTestimonios() // Por defecto, renderiza la página de inicio
    }
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
    // Opcional: Desplazar al inicio de la página para una mejor UX
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div>
      <NavBarFixed onNavigate={handleNavigate} />
      <main className="container p-2">{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default App
